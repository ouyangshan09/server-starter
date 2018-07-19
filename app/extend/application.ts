/**
 * Application 拓展
*/
export default {
    foo (param: any) {
        console.log(`application extend.foo method param:`, param);
        return 'demo + foo method';
    }
}
