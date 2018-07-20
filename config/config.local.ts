import { DefaultConfig } from './config.default';

export default () => {
    const config: DefaultConfig = {};
    config.logger = {
        level: 'INFO',
        consoleLevel: 'DEBUG'
    }
    return config;
}
