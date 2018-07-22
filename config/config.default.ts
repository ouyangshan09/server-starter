/**
 * 默认配置
*/
import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export type DefaultConfig = PowerPartial<EggAppConfig & Config>;

export interface MySQLClient {
    host: string;
    port: string;
    user: string;
    password: string;
    database: string;
}

// MySQL结构
export interface MySQL {
    client?: MySQLClient,
    clients?: Array<MySQLClient>
    default?: MySQLClient,
    app?: boolean;
    agent?: boolean;
}

export interface Config {
    sourceUrl: string;
    robot?: {
        ua: Array<RegExp>;
    }
}

export default (appInfo: EggAppInfo) => {
    const config = {} as PowerPartial<EggAppConfig> & Config;

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

    config.sequelize = {
        dialect: 'mysql',
        database: 'demo',
        host: '127.0.0.1',
        port: 3306,
        username: 'root',
        password: '123456'
    }

    return config;
}
