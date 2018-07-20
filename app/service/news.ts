import { Service } from 'egg';

class NewsService extends Service {
    public async list (page: number = 1) {
        const { serverUrl, pageSize } = this.config.news;
        this.ctx.logger.info('this.mysql:', this.app);
        const dataList = {
            list: [
                { id: 1, title: 'this is news 1', url: '/news/1' },
                { id: 2, title: 'this is news 2', url: '/news/2' }
            ]
        }
        return dataList;
    }
}

export default NewsService;
