import { config, deltas, starts, timeouts } from './data';

export const stopLogger = key => {
    const { delay, output } = config;

    if (!Array.isArray(deltas[key])) {
        deltas[key] = [];
    }

    deltas[key].push(Date.now() - starts[key]);

    clearTimeout(timeouts[key]);

    timeouts[key] = setTimeout(() => {
        const total = deltas.reduce((p, v) => p + v, 0);

        console.log(output({ key, total })); // eslint-disable-line
    }, delay);
};
