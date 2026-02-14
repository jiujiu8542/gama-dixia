// 游戏配置
const config = {
    mapWidth: 10,
    mapHeight: 10,
    tileSize: 40,
    maxLevels: 10,
    enemySpawnRate: 0.15,
    itemSpawnRate: 0.1,
    playerSpeed: 100, // 移动延迟(ms)
    enemySpeed: 300, // 敌人移动延迟(ms)
    expMultiplier: 1.5, // 每级所需经验倍数
    levelUpBonus: {
        hp: 20,
        attack: 3,
        defense: 2
    }
};

// 导出配置
if (typeof module !== 'undefined') {
    module.exports = { config };
}