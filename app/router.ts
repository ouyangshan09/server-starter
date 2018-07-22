/**
 * 路由配置
 * @author Ouyang
*/

import { Application } from 'egg';


export default (app: Application) => {
    const { router, controller } = app;
    
    router.get('/', controller.home.index)
    router.get('/news', controller.news.list)
    router.get('/sql/insert', controller.sql.insert);
    router.get('/sql/get', controller.sql.get);
    router.get('/sql/update', controller.sql.update);
    router.get('/sql/delete', controller.sql.delete);
    router.get('/sql/count', controller.sql.count);
}
