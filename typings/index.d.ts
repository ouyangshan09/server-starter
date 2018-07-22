/**
 * 自定义拓展类型
 * @author Ouyang
*/
import { IHelper, Context, Application } from 'egg';

declare module 'egg' {
    interface IHelper {
        ctx: Context,
        application: Application
    }

    interface Application {
        mysql: MySQL & MySQLClient
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
    insert: <T>(table: string, row: object, options?: object) => T;
    update: <T>(table: string, row: object, options?: object) => T;
    delete: <T>(table: string, where: object) => T;
    count: (table: string, where: object) => number;
    commit: () => any;
    rollback: () => any;
}

interface Transactions {
    /** 缩放返回都必须是可执行 yield method */
    beginTransaction: () => MySQLClient;
    beginTransactionScope: <T>(scope: MySQLClient, ctx?: any) => T;
}