import { Controller } from 'egg';

class NewsController extends Controller {
    public async list () {
        const dataList = {
            list: [
                { id: 1, title: 'this is news 1', url: '/news/1' },
                { id: 2, title: 'this is news 2', url: '/news/2' }
            ]
        }
        await this.ctx.render('list.tpl', dataList);
    }
}

export default NewsController;
