// 敌人数据库
const enemyDatabase = [
    {
        type: 'slime',
        name: '史莱姆',
        hp: 20,
        attack: 5,
        defense: 2,
        exp: 10,
        gold: 5,
        size: 'small'
    },
    {
        type: 'goblin',
        name: '哥布林',
        hp: 35,
        attack: 8,
        defense: 3,
        exp: 15,
        gold: 8,
        size: 'small'
    },
    {
        type: 'skeleton',
        name: '骷髅',
        hp: 45,
        attack: 10,
        defense: 5,
        exp: 20,
        gold: 10,
        size: 'medium'
    },
    {
        type: 'orc',
        name: '兽人',
        hp: 60,
        attack: 12,
        defense: 8,
        exp: 25,
        gold: 15,
        size: 'medium'
    },
    {
        type: 'troll',
        name: '巨魔',
        hp: 80,
        attack: 15,
        defense: 10,
        exp: 35,
        gold: 20,
        size: 'large'
    },
    {
        type: 'dragon',
        name: '龙',
        hp: 120,
        attack: 20,
        defense: 15,
        exp: 50,
        gold: 30,
        size: 'large'
    }
];

// 导出敌人数据库
if (typeof module !== 'undefined') {
    module.exports = { enemyDatabase };
}