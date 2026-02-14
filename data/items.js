// 物品数据库
const itemDatabase = {
    weapons: [
        // 战士武器
        { id: 'wooden_sword', name: '木剑', attack: 5, description: '一把简单的木剑，提供5点攻击力', type: 'sword', class: 'warrior' },
        { id: 'iron_sword', name: '铁剑', attack: 10, description: '一把坚固的铁剑，提供10点攻击力', type: 'sword', class: 'warrior' },
        { id: 'steel_sword', name: '钢剑', attack: 15, description: '一把锋利的钢剑，提供15点攻击力', type: 'sword', class: 'warrior' },
        { id: 'magic_sword', name: '魔法剑', attack: 20, magic: 5, description: '一把附魔的魔法剑，提供20点攻击力和5点魔法强度', type: 'sword', class: 'warrior' },
        { id: 'great_sword', name: '巨剑', attack: 25, defense: -3, description: '一把巨大的剑，提供25点攻击力，但降低3点防御力', type: 'sword', class: 'warrior' },
        
        // 法师武器
        { id: 'magic_wand', name: '魔法杖', magic: 10, description: '一根简单的魔法杖，提供10点魔法强度', type: 'wand', class: 'mage' },
        { id: 'enchanted_staff', name: '附魔法杖', magic: 15, description: '一根强大的附魔法杖，提供15点魔法强度', type: 'staff', class: 'mage' },
        { id: 'arcane_orb', name: '奥术宝珠', magic: 20, description: '蕴含奥术能量的宝珠，提供20点魔法强度', type: 'orb', class: 'mage' },
        { id: 'elemental_staff', name: '元素法杖', magic: 25, description: '掌控元素力量的法杖，提供25点魔法强度', type: 'staff', class: 'mage' },
        
        // 盗贼武器
        { id: 'dagger', name: '匕首', attack: 8, speed: 3, description: '一把锋利的匕首，提供8点攻击力和3点速度', type: 'dagger', class: 'rogue' },
        { id: 'shortsword', name: '短剑', attack: 12, speed: 2, description: '一把平衡的短剑，提供12点攻击力和2点速度', type: 'dagger', class: 'rogue' },
        { id: 'poison_dagger', name: '毒刃', attack: 10, poison: 5, description: '淬毒的匕首，提供10点攻击力和5点毒素伤害', type: 'dagger', class: 'rogue' },
        
        // 召唤师武器
        { id: 'summoning_staff', name: '召唤法杖', magic: 12, petBoost: 10, description: '增强召唤能力的法杖，提供12点魔法强度和10%宠物属性加成', type: 'staff', class: 'summoner' },
        { id: 'demon_contract', name: '恶魔契约', magic: 15, petBoost: 15, description: '与恶魔签订的契约，提供15点魔法强度和15%宠物属性加成', type: 'contract', class: 'summoner' },
        { id: 'nature_staff', name: '自然法杖', magic: 18, petBoost: 20, description: '蕴含自然力量的法杖，提供18点魔法强度和20%宠物属性加成', type: 'staff', class: 'summoner' }
    ],
    armors: [
        // 通用护甲
        { id: 'leather_armor', name: '皮甲', defense: 3, speed: 1, description: '简单的皮甲，提供3点防御力和1点速度', type: 'light', class: 'all' },
        { id: 'chain_armor', name: '锁子甲', defense: 7, speed: -1, description: '金属链甲，提供7点防御力，但降低1点速度', type: 'medium', class: 'all' },
        { id: 'plate_armor', name: '板甲', defense: 12, speed: -3, description: '厚重的板甲，提供12点防御力，但降低3点速度', type: 'heavy', class: 'warrior' },
        
        // 法师护甲
        { id: 'magic_robe', name: '魔法长袍', defense: 2, magic: 8, description: '轻盈的魔法长袍，提供2点防御力和8点魔法强度', type: 'robe', class: 'mage' },
        { id: 'enchanted_cloak', name: '附魔斗篷', defense: 4, magic: 12, description: '附魔的斗篷，提供4点防御力和12点魔法强度', type: 'cloak', class: 'mage' },
        
        // 盗贼护甲
        { id: 'shadow_armor', name: '暗影护甲', defense: 5, speed: 3, evasion: 10, description: '暗影编织的护甲，提供5点防御力、3点速度和10%闪避率', type: 'light', class: 'rogue' },
        { id: 'assassin_vest', name: '刺客背心', defense: 4, speed: 5, description: '轻便的刺客背心，提供4点防御力和5点速度', type: 'light', class: 'rogue' },
        
        // 召唤师护甲
        { id: 'summoner_robe', name: '召唤师长袍', defense: 3, magic: 10, petBoost: 5, description: '召唤师专用长袍，提供3点防御力、10点魔法强度和5%宠物属性加成', type: 'robe', class: 'summoner' },
        { id: 'beastmaster_armor', name: '驯兽师护甲', defense: 6, petBoost: 10, description: '驯兽师的护甲，提供6点防御力和10%宠物属性加成', type: 'medium', class: 'summoner' }
    ],
    accessories: [
        { id: 'strength_amulet', name: '力量护符', attack: 5, description: '增强力量的护符，提供5点攻击力' },
        { id: 'vitality_ring', name: '生命戒指', hp: 20, description: '增加生命值的戒指，提供20点最大生命值' },
        { id: 'magic_amulet', name: '魔法护符', magic: 8, description: '增强魔法的护符，提供8点魔法强度' },
        { id: 'speed_boots', name: '疾行靴', speed: 5, description: '增加速度的靴子，提供5点速度' },
        { id: 'pet_amulet', name: '宠物护符', petBoost: 15, description: '增强宠物能力的护符，提供15%宠物属性加成', class: 'summoner' }
    ],
    legs: [
        { id: 'leather_pants', name: '皮裤', defense: 2, speed: 1, description: '基础的皮制护腿，提供2点防御力和1点速度', type: 'light', class: 'all' },
        { id: 'chain_leggings', name: '锁子护腿', defense: 4, magicDefense: 1, description: '金属环编织的护腿，提供4点防御力和1点魔法防御', type: 'medium', class: 'all' },
        { id: 'plate_leggings', name: '板甲护腿', defense: 7, speed: -1, description: '重型金属护腿，提供7点防御力，但降低1点速度', type: 'heavy', class: 'warrior' },
        { id: 'magic_pants', name: '魔法护腿', defense: 3, magic: 5, description: '附魔的护腿，提供3点防御力和5点魔法强度', type: 'light', class: 'mage' },
        { id: 'shadow_leggings', name: '暗影护腿', defense: 3, speed: 2, evasion: 5, description: '暗影编织的护腿，提供3点防御力、2点速度和5%闪避率', type: 'light', class: 'rogue' }
    ],
    boots: [
        { id: 'leather_boots', name: '皮靴', defense: 1, speed: 2, description: '基础的皮制靴子，提供1点防御力和2点速度', type: 'light', class: 'all' },
        { id: 'chain_boots', name: '锁子靴', defense: 3, speed: 1, description: '带有金属防护的靴子，提供3点防御力和1点速度', type: 'medium', class: 'all' },
        { id: 'plate_boots', name: '板甲靴', defense: 5, speed: -1, description: '重型金属靴子，提供5点防御力，但降低1点速度', type: 'heavy', class: 'warrior' },
        { id: 'magic_boots', name: '魔法靴', defense: 2, magic: 3, speed: 1, description: '附魔的靴子，提供2点防御力、3点魔法强度和1点速度', type: 'light', class: 'mage' },
        { id: 'speed_boots_pro', name: '疾风靴', defense: 1, speed: 4, description: '风之精灵祝福的靴子，提供1点防御力和4点速度', type: 'light', class: 'rogue' }
    ],
    consumables: [
        { id: 'pokeball', name: '精灵球', type: 'pokeball', tier: 1, catchRate: 30, price: 100, description: '基础的精灵球，捕获成功率30%' },
        { id: 'great_ball', name: '超级球', type: 'pokeball', tier: 2, catchRate: 50, price: 300, description: '高级精灵球，捕获成功率50%' },
        { id: 'ultra_ball', name: '究极球', type: 'pokeball', tier: 3, catchRate: 70, price: 600, description: '究极精灵球，捕获成功率70%' },
        { id: 'master_ball', name: '大师球', type: 'pokeball', tier: 4, catchRate: 95, price: 1500, description: '传说中的精灵球，捕获成功率95%' },
        { id: 'mythic_ball', name: '神话球', type: 'pokeball', tier: 5, catchRate: 100, price: 5000, description: '神话级精灵球，必定捕获' }
    ],
    potions: {
        health_potion: {
            name: '治疗药水',
            description: '恢复50点生命值',
            healAmount: 50,
            type: 'consumable'
        },
        mana_potion: {
            name: '魔法药水',
            description: '恢复30点魔法值',
            manaAmount: 30,
            type: 'consumable'
        },
        strength_potion: {
            name: '力量药水',
            description: '暂时提高20%攻击力，持续3回合',
            effect: { attack: 0.2 },
            duration: 3,
            type: 'consumable'
        },
        pet_boost_potion: {
            name: '宠物强化药水',
            description: '暂时提高宠物30%属性，持续3回合',
            petBoost: 0.3,
            duration: 3,
            type: 'consumable',
            class: 'summoner'
        }
    },
    scrolls: {
        fireball_scroll: {
            name: '火球术卷轴',
            description: '释放一个强大的火球，对敌人造成50点伤害',
            damage: 50,
            type: 'scroll',
            oneUse: true
        },
        teleport_scroll: {
            name: '传送卷轴',
            description: '随机传送到地图上的另一个位置',
            type: 'scroll',
            oneUse: true
        },
        summon_scroll: {
            name: '临时召唤卷轴',
            description: '召唤一个临时的助手帮助战斗3回合',
            summon: 'temp_helper',
            duration: 3,
            type: 'scroll',
            oneUse: true
        }
    }
};

// 导出物品数据库
if (typeof module !== 'undefined') {
    module.exports = { itemDatabase };
}