const idPromise = x => new Promise(resolve => resolve(x));

idPromise(1).then(it => {
    document.writeln(it);
    return it;
}).then(it => document.writeln(it));