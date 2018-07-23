/**
 * 插件配置
*/
import { EggPlugin } from'egg';

const plugin: EggPlugin = {
    nunjucks: {
        enable: true,
        package: 'egg-view-nunjucks'
    },
    sequelize: {
        enable: true,
        package: '@oys/egg-sequelize'
    }
};

export default plugin;
