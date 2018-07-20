/**
 * Request(请求)拓展
 * @author Ouynag
*/
import { Request } from 'egg';

export default {
    demo (this: Request, payload: any) {
        console.log('reqeust demo extend:', payload);
        return 'reqeust demo extend';
    }
}

