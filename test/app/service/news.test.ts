import assert from 'assert';
import { Context } from 'egg';
import EggMock from 'egg-mock';

describe(`test/app/service/news.test.ts`, () => {
    let ctx: Context;

    before(() => {
        ctx = EggMock.app().mockContext();
    });

    it(`list()`, async () => {
        const list = await ctx.service.news.list();
        assert(list.list.length === 2);
    })
})
