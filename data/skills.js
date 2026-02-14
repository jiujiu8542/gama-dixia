// 技能数据库
const skillDatabase = {
    // 角色技能
    characterSkills: {
        // 战士技能
        heavy_attack: {
            name: '重击',
            description: '对敌人造成150%攻击力的伤害，攻击距离1格',
            type: 'active',
            cooldown: 3,
            cost: 0,
            range: 1,
            targetType: 'enemy',
            effect: (user, target) => {
                const damage = Math.floor(user.attack * 1.5);
                target.hp -= damage;
                return {
                    success: true,
                    message: `${user.name}使用了重击，对${target.name}造成了${damage}点伤害！`,
                    damage: damage
                };
            }
        },
        defensive_stance: {
            name: '防御姿态',
            description: '提高50%防御力，持续3回合',
            type: 'active',
            cooldown: 5,
            cost: 0,
            targetType: 'self',
            effect: (user) => {
                user.buffs = user.buffs || [];
                user.buffs.push({
                    name: '防御姿态',
                    effect: { defense: user.defense * 0.5 },
                    duration: 3
                });
                return {
                    success: true,
                    message: `${user.name}进入了防御姿态，防御力提高50%！`
                };
            }
        },
        
        // 法师技能
        fireball: {
            name: '火球术',
            description: '向目标位置投掷火球，造成120%魔法攻击力的伤害，攻击距离3格',
            type: 'active',
            cooldown: 2,
            cost: 10,
            range: 3,
            targetType: 'position',
            effect: (user, targetPos, gameState) => {
                const damage = Math.floor(user.magic * 1.2);
                
                // 检查目标位置是否有敌人
                const targetEnemy = gameState.enemies.find(enemy => 
                    enemy.x === targetPos.x && enemy.y === targetPos.y
                );
                
                if (targetEnemy) {
                    targetEnemy.hp -= damage;
                    return {
                        success: true,
                        message: `${user.name}释放了火球术，对${targetEnemy.name}造成了${damage}点伤害！`,
                        damage: damage,
                        target: targetEnemy
                    };
                } else {
                    return {
                        success: true,
                        message: `${user.name}释放了火球术，但没有击中敌人！`,
                        damage: 0
                    };
                }
            }
        },
        ice_shard: {
            name: '冰刺',
            description: '向目标敌人发射冰刺，造成80%魔法攻击力的伤害，并降低其速度，攻击距离2格',
            type: 'active',
            cooldown: 3,
            cost: 8,
            range: 2,
            targetType: 'enemy',
            effect: (user, target) => {
                const damage = Math.floor(user.magic * 0.8);
                target.hp -= damage;
                
                target.buffs = target.buffs || [];
                target.buffs.push({
                    name: '冰冻',
                    effect: { speed: -3 },
                    duration: 2
                });
                
                return {
                    success: true,
                    message: `${user.name}释放了冰刺，对${target.name}造成了${damage}点伤害，并降低了其速度！`,
                    damage: damage
                };
            }
        },
        
        // 盗贼技能
        backstab: {
            name: '背刺',
            description: '对敌人造成200%攻击力的伤害，但命中率降低，攻击距离1格',
            type: 'active',
            cooldown: 4,
            cost: 0,
            range: 1,
            targetType: 'enemy',
            effect: (user, target) => {
                if (Math.random() > 0.2) { // 80%命中率
                    const damage = Math.floor(user.attack * 2);
                    target.hp -= damage;
                    return {
                        success: true,
                        message: `${user.name}使用了背刺，对${target.name}造成了${damage}点伤害！`,
                        damage: damage
                    };
                } else {
                    return {
                        success: false,
                        message: `${user.name}的背刺没有命中！`
                    };
                }
            }
        },
        evasion: {
            name: '闪避',
            description: '提高50%闪避率，持续2回合',
            type: 'active',
            cooldown: 4,
            cost: 0,
            targetType: 'self',
            effect: (user) => {
                user.buffs = user.buffs || [];
                user.buffs.push({
                    name: '闪避',
                    effect: { evasion: 0.5 },
                    duration: 2
                });
                return {
                    success: true,
                    message: `${user.name}进入了闪避姿态，闪避率提高50%！`
                };
            }
        },
        
        // 弓箭手技能
        bow_shot: {
            name: '射箭',
            description: '向目标敌人射出一箭，造成130%攻击力的伤害，攻击距离4格',
            type: 'active',
            cooldown: 2,
            cost: 0,
            range: 4,
            targetType: 'enemy',
            effect: (user, target) => {
                const damage = Math.floor(user.attack * 1.3);
                target.hp -= damage;
                return {
                    success: true,
                    message: `${user.name}射出一箭，对${target.name}造成了${damage}点伤害！`,
                    damage: damage,
                    target: target
                };
            }
        },
        aimed_shot: {
            name: '瞄准射击',
            description: '蓄力瞄准后射出一箭，造成180%攻击力的伤害，但有10%几率miss，攻击距离5格',
            type: 'active',
            cooldown: 4,
            cost: 0,
            range: 5,
            targetType: 'enemy',
            effect: (user, target) => {
                if (Math.random() > 0.1) { // 90%命中率
                    const damage = Math.floor(user.attack * 1.8);
                    target.hp -= damage;
                    return {
                        success: true,
                        message: `${user.name}瞄准后射出一箭，对${target.name}造成了${damage}点伤害！`,
                        damage: damage,
                        target: target
                    };
                } else {
                    return {
                        success: false,
                        message: `${user.name}的瞄准射击没有命中！`
                    };
                }
            }
        },
        
        // 召唤师技能
        summon_pet: {
            name: '召唤宠物',
            description: '召唤或强化你的宠物，宠物属性跟随主人',
            type: 'active',
            cooldown: 0,
            cost: 15,
            targetType: 'self',
            effect: (user, gameState) => {
                if (!user.pet) {
                    // 召唤新宠物
                    const petData = petDatabase[user.startingPet || 'wolf'];
                    user.pet = {
                        ...petData,
                        level: user.level,
                        hp: petData.stats.hp,
                        maxHp: petData.stats.hp,
                        attack: petData.stats.attack,
                        defense: petData.stats.defense,
                        speed: petData.stats.speed,
                        baseStats: { ...petData.stats }, // 保存基础属性用于计算
                        owner: user
                    };
                    
                    // 计算宠物属性跟随主人
                    updatePetStats(user.pet, user);
                    
                    return {
                        success: true,
                        message: `${user.name}召唤了${user.pet.name}！`
                    };
                } else {
                    // 强化现有宠物
                    const healAmount = Math.floor(user.pet.maxHp * 0.3);
                    user.pet.hp = Math.min(user.pet.hp + healAmount, user.pet.maxHp);
                    
                    user.pet.buffs = user.pet.buffs || [];
                    user.pet.buffs.push({
                        name: '强化',
                        effect: { attack: user.pet.attack * 0.2 },
                        duration: 3
                    });
                    
                    return {
                        success: true,
                        message: `${user.name}强化了${user.pet.name}，恢复了${healAmount}点生命值，并提高了攻击力！`
                    };
                }
            }
        },
        empower_pet: {
            name: '宠物赋能',
            description: '提高宠物30%的攻击力和速度，持续3回合',
            type: 'active',
            cooldown: 5,
            cost: 12,
            targetType: 'pet',
            effect: (user) => {
                if (!user.pet) {
                    return {
                        success: false,
                        message: `你还没有召唤宠物！`
                    };
                }
                
                user.pet.buffs = user.pet.buffs || [];
                user.pet.buffs.push({
                    name: '赋能',
                    effect: { 
                        attack: user.pet.attack * 0.3,
                        speed: 3
                    },
                    duration: 3
                });
                
                return {
                    success: true,
                    message: `${user.name}为${user.pet.name}赋能，攻击力和速度提高30%！`
                };
            }
        }
    },
    },
    
    // 宠物技能
    petSkills: {
        bite: {
            name: '撕咬',
            description: '对敌人造成110%攻击力的伤害',
            type: 'active',
            cooldown: 2,
            effect: (pet, target) => {
                const damage = Math.floor(pet.attack * 1.1);
                target.hp -= damage;
                return {
                    success: true,
                    message: `${pet.name}撕咬了${target.name}，造成了${damage}点伤害！`,
                    damage: damage
                };
            }
        },
        howl: {
            name: '嚎叫',
            description: '提高主人10%的攻击力，持续2回合',
            type: 'active',
            cooldown: 4,
            effect: (pet) => {
                const owner = pet.owner;
                owner.buffs = owner.buffs || [];
                owner.buffs.push({
                    name: '狼嚎',
                    effect: { attack: owner.attack * 0.1 },
                    duration: 2
                });
                
                return {
                    success: true,
                    message: `${pet.name}发出了嚎叫，提高了${owner.name}10%的攻击力！`
                };
            }
        },
        
        swipe: {
            name: '挥击',
            description: '对敌人造成120%攻击力的伤害',
            type: 'active',
            cooldown: 3,
            effect: (pet, target) => {
                const damage = Math.floor(pet.attack * 1.2);
                target.hp -= damage;
                return {
                    success: true,
                    message: `${pet.name}挥击了${target.name}，造成了${damage}点伤害！`,
                    damage: damage
                };
            }
        },
        roar: {
            name: '怒吼',
            description: '震慑敌人，降低其攻击力10%，持续2回合',
            type: 'active',
            cooldown: 4,
            effect: (pet, target) => {
                target.buffs = target.buffs || [];
                target.buffs.push({
                    name: '震慑',
                    effect: { attack: -target.attack * 0.1 },
                    duration: 2
                });
                
                return {
                    success: true,
                    message: `${pet.name}发出了怒吼，降低了${target.name}10%的攻击力！`
                };
            }
        },
        
        dive_attack: {
            name: '俯冲攻击',
            description: '从空中俯冲攻击敌人，造成130%攻击力的伤害',
            type: 'active',
            cooldown: 3,
            effect: (pet, target) => {
                const damage = Math.floor(pet.attack * 1.3);
                target.hp -= damage;
                return {
                    success: true,
                    message: `${pet.name}俯冲攻击了${target.name}，造成了${damage}点伤害！`,
                    damage: damage
                };
            }
        },
        scout: {
            name: '侦查',
            description: '提高主人15%的闪避率，持续2回合',
            type: 'active',
            cooldown: 4,
            effect: (pet) => {
                const owner = pet.owner;
                owner.buffs = owner.buffs || [];
                owner.buffs.push({
                    name: '侦查',
                    effect: { evasion: 0.15 },
                    duration: 2
                });
                
                return {
                    success: true,
                    message: `${pet.name}进行了侦查，提高了${owner.name}15%的闪避率！`
                };
            }
        },
        
        fire_breath: {
            name: '火焰吐息',
            description: '向敌人喷射火焰，造成140%攻击力的伤害',
            type: 'active',
            cooldown: 3,
            effect: (pet, target) => {
                const damage = Math.floor(pet.attack * 1.4);
                target.hp -= damage;
                return {
                    success: true,
                    message: `${pet.name}喷射了火焰，对${target.name}造成了${damage}点伤害！`,
                    damage: damage
                };
            }
        },
        dragon_scale: {
            name: '龙鳞',
            description: '提高30%的防御力，持续2回合',
            type: 'active',
            cooldown: 4,
            effect: (pet) => {
                pet.buffs = pet.buffs || [];
                pet.buffs.push({
                    name: '龙鳞',
                    effect: { defense: pet.defense * 0.3 },
                    duration: 2
                });
                
                return {
                    success: true,
                    message: `${pet.name}激活了龙鳞，防御力提高30%！`
                };
            }
        }
    }
};

// 导出技能数据库
if (typeof module !== 'undefined') {
    module.exports = { skillDatabase };
}