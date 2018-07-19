/**
 * 默认配置
*/
import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export type DefaultConfig = PowerPartial<EggAppConfig & BizConfig>;

export interface News {
    pageSize: number;
    serverUrl: string;
}

export interface BizConfig {
    sourceUrl: string;
    news: News,
    robot?: {
        ua: Array<RegExp>;
    }
}

export default (appInfo: EggAppInfo) => {
    const config = {} as PowerPartial<EggAppConfig> & BizConfig;

    config.keys = appInfo.name + 'ouyangshan09';

    config.middleware = [
        'robot'
    ];

    config.view = {
        defaultViewEngine: 'nunjucks',
        mapping: {
            '.tpl': 'nunjucks'
        }
    }

    config.news = {
        pageSize: 5,
        serverUrl: 'https://hacker-news.firebaseio.com/v0'
    }

    config.robot = {
        ua: [
            /Baiduspider/i
        ]
    }

    return config;
}
