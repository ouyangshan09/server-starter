import { Service } from 'egg';

export default class Hello extends Service {
    public async sayHi (name: string) {
        return `hi, ${name}`;
    }
}
