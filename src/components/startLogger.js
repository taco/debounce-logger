import { starts } from './data';

export const startLogger = key => {
    starts[key] = Date.now();
};
