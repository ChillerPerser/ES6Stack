import test from 'ava';
import { isFunction, isObject } from './../app/src/scripts/helper.js';

test('helper: isFunction - object', t => {
    t.truthy(isFunction(function() {}));
});

test('helper: isFunction - string', t => {
    t.falsy(isFunction('npm'));
});

test('helper: isObject - string', t => {
    t.falsy(isObject('npm'));
});

test('helper: isObject - object', t => {
    t.truthy(isObject({}));
});
