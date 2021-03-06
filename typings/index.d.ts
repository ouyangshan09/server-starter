/**
 * 自定义拓展类型
 * @author Ouyang
*/
import { IHelper, Context, Application } from 'egg';
import '@oys/egg-sequelize';

declare module 'egg' {
    interface IHelper {
        ctx: Context,
        application: Application
    }

    // extend Application
    interface Application {
        mysql: any;
    }

    // extend Context 
    interface Context {
        //
    }

    // extend EggAppConfig
    interface EggAppConfig {
        //
    }
}

interface MySQL {
    get: (id: string) => MySQLClient;
}

interface MySQLClient {
    /** 缩放返回都必须是可执行 yield method */ 
    query: <T>(sql: string, values: object) => T;
    queryOne: <T>(sql: string, values: object) => T;
    select: <T>(table: string, options?: object) => T;
    get: <T>(table: string, where?: object, options?: object) => T;
    insert: (table: string, row: object, options?: object) => InsertResult;
    update: (table: string, row: object, options?: object) => InsertResult;
    delete: (table: string, where: object) => InsertResult;
    count: (table: string, where: object) => number;
    commit: () => any;
    rollback: () => any;
}

interface Transactions {
    /** 缩放返回都必须是可执行 yield method */
    beginTransaction: () => MySQLClient;
    beginTransactionScope: <T>(scope: MySQLClient, ctx?: any) => T;
}

interface InsertResult {
    fieldCount: number;
    affectedRows: number;
    insertId: number | string;
    serverStatus: number;
    warningCount: number;
    message: string;
    protocol41: true,
    changedRows: number;
}