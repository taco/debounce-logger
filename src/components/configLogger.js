import { config } from './data';

export const configLogger = cfg => (
    Object.keys(cfg).forEach(k => {
        if (typeof cfg[k] !== 'undefined') {
            config[k] = cfg[k];
        }
    })
);
