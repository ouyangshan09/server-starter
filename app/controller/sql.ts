/**
 * Egg-MySQL插件Api测试
 * @author Ouyang
*/

import { Controller } from 'egg';

class SQLController extends Controller {
    public async insert () {
        const res = await this.ctx.service.sql.insert();
        console.log('insert sql:', res);
        this.ctx.body = 'insert sql';
    }

    public async get () {
        const res = await this.ctx.service.sql.get();
        console.log('get sql:', res);
        this.ctx.body = 'get sql';
    }

    public async update () {
        const res = await this.ctx.service.sql.update();
        console.log('update sql:', res);
        this.ctx.body = 'update sql';
    }

    public async delete () {
        const res = await this.ctx.service.sql.delete();
        console.log('delete sql:', res);
        this.ctx.body = 'delete sql';
    }

    public async count () {
        const res = await this.ctx.service.sql.count();
        console.log('count sql:', res);
        this.ctx.body = 'count sql';
    }
}

export default SQLController;
