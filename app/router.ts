/**
 * 路由配置
 * @author Ouyang
*/

import { Application } from 'egg';


export default (app: Application) => {
    const { router, controller } = app;

    router.get('/', controller.home.index)
}
