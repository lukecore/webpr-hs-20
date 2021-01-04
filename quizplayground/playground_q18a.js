const failSafe = a => b => c => {
    try {
        return b(c);
    } catch (e) {
        return a;
    }
};

const doError    = x => { throw new Error() };
const errorCount = failSafe (1) (doError);

document.writeln(failSafe (false) (x=>x) (true) && failSafe (true) (doError) (null) && errorCount(null) === 1);