const DataFlowVariable = howto => {
    let value = undefined;
    return () => undefined === value
        ? value = howto()
        : value;
};

// const x = DataFlowVariable(() => y() * 2);
// const y = DataFlowVariable(() => 1);
//
// document.writeln(x());

// const x = DataFlowVariable(() => y() * 2);
// let y = DataFlowVariable(() => 1);
//     y = DataFlowVariable(() => 2);
//
// document.writeln(x());

// const x = DataFlowVariable(() => y() * 2);
// let y = DataFlowVariable(() => 1);
//
// x();
// y = DataFlowVariable(() => 2);
//
// document.writeln(x());

// const x = DataFlowVariable(() => y() * 2);
// let y = DataFlowVariable(() => 1);
//     y = DataFlowVariable(() => 2);
//
// document.writeln(x());

