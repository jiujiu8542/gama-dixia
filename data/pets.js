// 宠物数据库
const petDatabase = [
    {
        id: 'wolf',
        name: '狼',
        description: '忠诚的狼伙伴，擅长快速攻击',
        stats: {
            hp: 50,
            attack: 8,
            defense: 4,
            speed: 12
        },
        skills: ['bite', 'howl'],
        growth: {
            hpPerLevel: 10,
            attackPerLevel: 2,
            defensePerLevel: 1
        }
    },
    {
        id: 'bear',
        name: '熊',
        description: '强壮的熊伙伴，擅长防御和重击',
        stats: {
            hp: 80,
            attack: 10,
            defense: 8,
            speed: 6
        },
        skills: ['swipe', 'roar'],
        growth: {
            hpPerLevel: 15,
            attackPerLevel: 3,
            defensePerLevel: 2
        }
    },
    {
        id: 'eagle',
        name: '鹰',
        description: '敏捷的飞禽伙伴，擅长远程攻击',
        stats: {
            hp: 40,
            attack: 7,
            defense: 3,
            speed: 15
        },
        skills: ['dive_attack', 'scout'],
        growth: {
            hpPerLevel: 8,
            attackPerLevel: 2,
            defensePerLevel: 1
        }
    },
    {
        id: 'dragon',
        name: '幼龙',
        description: '强大的龙族伙伴，擅长元素攻击',
        stats: {
            hp: 70,
            attack: 12,
            defense: 6,
            speed: 10
        },
        skills: ['fire_breath', 'dragon_scale'],
        growth: {
            hpPerLevel: 12,
            attackPerLevel: 3,
            defensePerLevel: 2
        }
    }
];

// 导出宠物数据库
if (typeof module !== 'undefined') {
    module.exports = { petDatabase };
}