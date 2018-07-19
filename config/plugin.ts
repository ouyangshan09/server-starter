/**
 * 插件配置
*/
import { EggPlugin } from'egg';

const plugin: EggPlugin = {
    nunjucks: {
        enable: true,
        package: 'egg-view-nunjucks'
    }
};

export default plugin;
