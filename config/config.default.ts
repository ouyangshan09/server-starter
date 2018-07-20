/**
 * 默认配置
*/
import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export type DefaultConfig = PowerPartial<EggAppConfig & BizConfig>;

export interface News {
    pageSize: number;
    serverUrl: string;
}

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

export interface BizConfig {
    sourceUrl: string;
    news: News,
    robot?: {
        ua: Array<RegExp>;
    }
    mysql: MySQL;
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

    config.mysql = {
        client: {
            host: 'localhost',
            port: '3306',
            user: 'root',
            password: '123456',
            database: 'demo'
        },
        app: true,
        agent: false
    }

    return config;
}
