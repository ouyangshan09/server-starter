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
    query: (sql: string, values: object) => any;
    insert: (sql: string, rows: object, options?: object) => any;
    select: (sql: string, options?: object) => any;
    update: (sql: string, row: object, options?: object) => any;
    delete: (sql: string, where: object) => any;
    // get a row
    get: (table: string, where: object, options: object) => any;
    count: (sql: string, where: object) => number
    // // ==== 事务
    // beginTransaction: () => MySQLClient;
    // // yield method
    // rollback: () => any;
    // commit: () => void;
}