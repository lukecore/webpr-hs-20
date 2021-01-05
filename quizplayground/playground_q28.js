function handle(callback){
    const result = [];
    callback(result);
    return result;
}
document.writeln(handle(it => it.push(1)).length ===1);