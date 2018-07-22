import { Application, Context } from 'egg';
import { Config } from '../../config/config.default';


export default function demoMiddleware (options: Config['robot'], app: Application) {
    return async (ctx: Context, next: () => Promise<any>) => {
        app.logger.warn('demo Middleware1:', options);
        await next();
    }
}
