/**
 * Helper(辅助功能)拓展
*/
import { IHelper } from 'egg';

export default {
    demo(this: IHelper, payload: any) {
        console.log('helper demo extend1:', payload);
        // console.log('helper demo extend2:', this.demo);
        return 'helper demo extend';
    }
}
