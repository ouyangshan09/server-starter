/**
 * Response(响应)拓展
 * @author Ouyang
*/
import { Response } from 'egg';

export default {
    demo (this: Response, payload: any) {
        console.log('response demo extend:', payload);
        return 'response demo extend';
    }
}
