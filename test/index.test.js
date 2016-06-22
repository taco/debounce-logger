import expect from 'expect';
import {
    configLogger,
    startLogger,
    stopLogger
} from './../src';

describe('Debounce logger', () => {

    it('should have a defined exports', () => {
        expect(
            configLogger
        ).toBeA('function');
        expect(
            startLogger
        ).toBeA('function');
        expect(
            stopLogger
        ).toBeA('function');
    });

});
