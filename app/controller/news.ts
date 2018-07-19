import { Controller } from 'egg';

class NewsController extends Controller {
    public async list () {
        const ctx = this.ctx;
        const page = ctx.query.page || 1;
        const newList = await ctx.service.news.list(page);
        await ctx.render('list.tpl', newList);
    }
}

export default NewsController;
