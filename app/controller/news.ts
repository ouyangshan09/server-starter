import { Controller } from 'egg';

class NewsController extends Controller {
    public async list () {
        this.ctx.helper.demo({name: 'helper ouyangshan09'});
        this.ctx.request.demo({name: 'reqeust ouyangshan09'});
        this.ctx.response.demo({name: 'response ouyangshan09'});
        this.app.foo({name: 'ouyangshan09'});
        this.ctx.demo;
        const ctx = this.ctx;
        const page = ctx.query.page || 1;
        const newList = await ctx.service.news.list(page);
        await ctx.render('list.tpl', newList);
    }
}

export default NewsController;
