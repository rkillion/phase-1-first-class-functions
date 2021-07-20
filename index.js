function receivesAFunction(callback) {
    callback();
}

function returnsANamedFunction() {
    return function iHaveAName() {};
}

function returnsAnAnonymousFunction() {
    return function () {};
}

