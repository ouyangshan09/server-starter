import assert from 'assert';
import EggMock from 'egg-mock';

describe('test/app/controller/home.test.ts', () => {
    const App = EggMock.app({
        typescript: true,
        cache: false
    });
    before(() => {
        // 第一次测试用例执行前
    });

    beforeEach(() => {
        // 每个测试用例执行前
    })

    it('should GET / ', async () => {
        const result = await App.httpRequest().get('/').expect(200);
        assert(result.text === 'Hell world ouyang');
    })
})
