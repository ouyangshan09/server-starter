/**
 * Egg-MySQL Plugin 测试Demo
 * @author Ouyang
*/

import { Service } from 'egg';

class SQLService extends Service {
    public async insert() {
        return await this.app.mysql.insert('user', {name: 'lc', nick: 'zdm'});
    }

    public async get() {
        return await this.app.mysql.get('user', {name: 'lc'});
    }

    public async update() {
        return await this.app.mysql.update(
            'user',
            {name: 'oys', nick: 'oy09'},
            {
                where: {id: 2}
            }
        )
    }

    public async delete() {
        return await this.app.mysql.delete('user', {
            id: 3
        })
    }

    public async count() {
        return await this.app.mysql.count('user', {
            name: 'ouyang1'
        })
    }
}

export default SQLService;
