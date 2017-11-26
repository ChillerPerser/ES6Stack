
// not default exported
import { aNumber, ExtClassTest } from './test.js';
import { MyImportedClass } from './myImportedClass.js';
import { isFunction, isObject } from './helper.js';

// ENV is NODE_ENV
if (ENV === 'production') {
    console.log('production');
} else {
    console.log('not production');
}

class MyIndexClass extends ExtClassTest {

    constructor(name = 'default') {
        super();
        this.name = name;
    }

    extendName(ext) {
        if (ext) this.name += ` - ${ext}`;
    }

    getName() {
        return this.name;
    }
}

let myClass = new MyIndexClass(`Test ${aNumber}`);
myClass.extendName(ENV);

if (isFunction(myClass.getName) && isObject(myClass.getName)) {

    if (ENV === 'production') {
        alert(myClass.getName() + ' - extend:' + myClass.extendme);
    } else {
        console.log(myClass.getName() + ' - extend:' + myClass.extendme);
    }
}

let myClassImport = new MyImportedClass();
console.log(myClassImport.getTest());
