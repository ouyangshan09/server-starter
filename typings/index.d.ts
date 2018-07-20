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
}