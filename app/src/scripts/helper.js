export function isFunction(val) {
    return (typeof val === 'function');
}

export function isObject(val) {
    if (val === null) { return false; }
    return ((isFunction(val)) || (typeof val === 'object'));
}
