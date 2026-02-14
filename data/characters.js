// 角色数据库
const characterDatabase = [
    {
        id: 'warrior',
        name: '战士',
        description: '强壮的战士，擅长近战和防御',
        baseStats: {
            hp: 120,
            attack: 15,
            defense: 10,
            magic: 5,
            speed: 8
        },
        startingItems: ['wooden_sword', 'leather_armor'],
        skills: ['heavy_attack', 'defensive_stance']
    },
    {
        id: 'mage',
        name: '法师',
        description: '强大的施法者，擅长远程攻击和控制',
        baseStats: {
            hp: 80,
            attack: 5,
            defense: 5,
            magic: 20,
            speed: 10
        },
        startingItems: ['magic_wand', 'magic_robe'],
        skills: ['fireball', 'ice_shard']
    },
    {
        id: 'rogue',
        name: '盗贼',
        description: '灵活的刺客，擅长闪避和暴击',
        baseStats: {
            hp: 90,
            attack: 12,
            defense: 7,
            magic: 8,
            speed: 15
        },
        startingItems: ['dagger', 'leather_armor'],
        skills: ['backstab', 'evasion']
    },
    {
        id: 'archer',
        name: '弓箭手',
        description: '精准的射手，擅长远程物理攻击',
        baseStats: {
            hp: 85,
            attack: 14,
            defense: 6,
            magic: 5,
            speed: 12
        },
        startingItems: ['bow', 'leather_armor'],
        skills: ['bow_shot', 'aimed_shot']
    },
    {
        id: 'summoner',
        name: '召唤师',
        description: '能够召唤宠物协助战斗的法师',
        baseStats: {
            hp: 85,
            attack: 7,
            defense: 6,
            magic: 18,
            speed: 9
        },
        startingItems: ['summoning_staff', 'magic_robe'],
        skills: ['summon_pet', 'empower_pet'],
        startingPet: 'wolf'
    }
];

// 导出角色数据库
if (typeof module !== 'undefined') {
    module.exports = { characterDatabase };
}