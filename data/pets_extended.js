// 扩展宠物数据库，包含更多宠物类型和稀有度
const petDatabaseExtended = {
    // 普通宠物（Tier 1）
    wolf: {
        name: '狼',
        description: '忠诚的伙伴，平衡的属性',
        rarity: 'common',
        tier: 1,
        baseStats: {
            hp: 50,
            attack: 8,
            defense: 4,
            speed: 12
        },
        skills: ['bite'],
        catchRate: 80,
        appearanceRate: 30
    },
    fox: {
        name: '狐狸',
        description: '灵活的猎手，速度较快',
        rarity: 'common',
        tier: 1,
        baseStats: {
            hp: 45,
            attack: 7,
            defense: 3,
            speed: 15
        },
        skills: ['quick_attack'],
        catchRate: 85,
        appearanceRate: 25
    },
    rabbit: {
        name: '兔子',
        description: '温顺的生物，擅长逃跑',
        rarity: 'common',
        tier: 1,
        baseStats: {
            hp: 40,
            attack: 5,
            defense: 2,
            speed: 18
        },
        skills: ['run'],
        catchRate: 90,
        appearanceRate: 20
    },

    // 稀有宠物（Tier 2）
    bear: {
        name: '熊',
        description: '强壮的战士，高生命值和防御力',
        rarity: 'rare',
        tier: 2,
        baseStats: {
            hp: 80,
            attack: 12,
            defense: 8,
            speed: 6
        },
        skills: ['maul', 'roar'],
        catchRate: 60,
        appearanceRate: 15
    },
    eagle: {
        name: '鹰',
        description: '天空的霸主，远程攻击',
        rarity: 'rare',
        tier: 2,
        baseStats: {
            hp: 45,
            attack: 10,
            defense: 3,
            speed: 16
        },
        skills: ['dive_attack', 'screech'],
        catchRate: 55,
        appearanceRate: 12
    },
    panther: {
        name: '黑豹',
        description: '暗夜猎手，高暴击率',
        rarity: 'rare',
        tier: 2,
        baseStats: {
            hp: 55,
            attack: 14,
            defense: 5,
            speed: 14
        },
        skills: ['pounce', 'stealth'],
        catchRate: 50,
        appearanceRate: 10
    },

    // 史诗宠物（Tier 3）
    dragonling: {
        name: '幼龙',
        description: '龙的后代，强大的魔法能力',
        rarity: 'epic',
        tier: 3,
        baseStats: {
            hp: 70,
            attack: 15,
            defense: 7,
            speed: 10
        },
        skills: ['fire_breath', 'dragon_scale'],
        catchRate: 30,
        appearanceRate: 5
    },
    phoenix: {
        name: '凤凰',
        description: '火焰的化身，重生能力',
        rarity: 'epic',
        tier: 3,
        baseStats: {
            hp: 60,
            attack: 18,
            defense: 4,
            speed: 12
        },
        skills: ['fire_blast', 'rebirth'],
        catchRate: 25,
        appearanceRate: 4
    },
    unicorn: {
        name: '独角兽',
        description: '纯洁的象征，治疗能力',
        rarity: 'epic',
        tier: 3,
        baseStats: {
            hp: 65,
            attack: 12,
            defense: 9,
            speed: 11
        },
        skills: ['heal', 'holy_charge'],
        catchRate: 20,
        appearanceRate: 3
    },

    // 传说宠物（Tier 4）
    griffin: {
        name: '狮鹫',
        description: '狮与鹰的结合，空中霸主',
        rarity: 'legendary',
        tier: 4,
        baseStats: {
            hp: 90,
            attack: 20,
            defense: 10,
            speed: 15
        },
        skills: ['sky_slash', 'griffin_rage'],
        catchRate: 10,
        appearanceRate: 2
    },
    kraken: {
        name: '海妖',
        description: '深海巨兽，控制水流',
        rarity: 'legendary',
        tier: 4,
        baseStats: {
            hp: 100,
            attack: 16,
            defense: 12,
            speed: 8
        },
        skills: ['water_blast', 'tentacle_grab'],
        catchRate: 8,
        appearanceRate: 1.5
    },

    // 神话宠物（Tier 5）
    ancient_dragon: {
        name: '远古龙',
        description: '传说中的存在，毁灭性的力量',
        rarity: 'mythic',
        tier: 5,
        baseStats: {
            hp: 150,
            attack: 25,
            defense: 15,
            speed: 12
        },
        skills: ['ancient_fire', 'dragon_rage', 'flight'],
        catchRate: 3,
        appearanceRate: 0.5
    },
    celestial_guardian: {
        name: '天体守卫',
        description: '来自天界的守护者',
        rarity: 'mythic',
        tier: 5,
        baseStats: {
            hp: 120,
            attack: 22,
            defense: 20,
            speed: 10
        },
        skills: ['celestial_light', 'holy_shield', 'judgment'],
        catchRate: 2,
        appearanceRate: 0.3
    }
};

// 宠物技能数据库
const petSkills = {
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
                message: `${pet.name}使用了撕咬，对${target.name}造成了${damage}点伤害！`,
                damage: damage,
                target: target
            };
        }
    },
    quick_attack: {
        name: '快速攻击',
        description: '快速攻击敌人，有30%几率造成双倍伤害',
        type: 'active',
        cooldown: 1,
        effect: (pet, target) => {
            let damage = Math.floor(pet.attack * 0.9);
            if (Math.random() < 0.3) {
                damage *= 2;
                return {
                    success: true,
                    message: `${pet.name}使用了快速攻击，暴击！对${target.name}造成了${damage}点伤害！`,
                    damage: damage,
                    target: target
                };
            }
            target.hp -= damage;
            return {
                success: true,
                message: `${pet.name}使用了快速攻击，对${target.name}造成了${damage}点伤害！`,
                damage: damage,
                target: target
            };
        }
    },
    maul: {
        name: '重击',
        description: '猛烈攻击敌人，造成130%攻击力的伤害',
        type: 'active',
        cooldown: 3,
        effect: (pet, target) => {
            const damage = Math.floor(pet.attack * 1.3);
            target.hp -= damage;
            return {
                success: true,
                message: `${pet.name}使用了重击，对${target.name}造成了${damage}点伤害！`,
                damage: damage,
                target: target
            };
        }
    },
    fire_breath: {
        name: '火焰呼吸',
        description: '喷射火焰，造成120%攻击力的伤害，并灼烧敌人',
        type: 'active',
        cooldown: 3,
        effect: (pet, target) => {
            const damage = Math.floor(pet.attack * 1.2);
            target.hp -= damage;
            
            target.buffs = target.buffs || [];
            target.buffs.push({
                name: '灼烧',
                effect: { dot: 5 },
                duration: 3
            });
            
            return {
                success: true,
                message: `${pet.name}使用了火焰呼吸，对${target.name}造成了${damage}点伤害，并使其灼烧！`,
                damage: damage,
                target: target
            };
        }
    }
};