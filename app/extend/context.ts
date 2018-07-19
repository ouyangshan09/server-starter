/**
 * Context(上下文)拓展
*/
import { Context } from 'egg';
const DEMO: any = Symbol('Context#DEMO');

export default {
    get demo (this: Context) {
        if (!this[DEMO]) {
            this[DEMO] = 'get header';
        }
        console.log('Context extend method demo:', this[DEMO]);
        return this[DEMO];
    }
}
