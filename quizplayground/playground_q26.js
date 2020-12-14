const Scheduler = () => {
    let inProcess = false;
    const tasks = [];

    function process() {
        if (inProcess) {
            return;
        }
        if (tasks.length === 0) {
            return;
        } // guard clause
        inProcess = true;
        const task = tasks.pop();

        new Promise((resolve, reject) => {
            task(resolve);
        }).then(() => {
            inProcess = false;
            process();
        });
    }

    function add(task) {
        tasks.unshift(task);
        process();
    }

    return {
        add: add,
        addOk: task => add(ok => {
            task();
            ok();
        }) // convenience
    }
};

// let state = 3;
//  const scheduler = Scheduler();
//  scheduler.add(ok => {
//      setTimeout(_ => {
//          state = state -2;
//          ok();
//      }, 100)
//  })
// scheduler.add(ok => {
//     console.log(state);
//     ok();
// })
// console.log('x');

// let state = [0];
// const scheduler = Scheduler();
// scheduler.add(ok => {
//     setTimeout(_ => {
//         state.push(1);
//         ok();
//     }, 100)
// })
// scheduler.add(ok => {
//     state.push(2);
//     ok();
// })
// document.writeln(state);

// let state = 3;
// const scheduler = Scheduler();
// scheduler.add(ok => {
//     setTimeout(_ => {
//         state = state - 2;
//         ok();
//     }, 100)
// })
// scheduler.add(ok => {
//     state = state - 1;
//     ok();
// });
// scheduler.add(ok => {
//     document.writeln(state);
// });

let state = [0];
const scheduler = Scheduler();
scheduler.add(ok => {
    setTimeout(_ => {
        state.push(1);
        ok();
    }, 100)
});
scheduler.add(ok => {
    state.push(2);
    ok();
});
scheduler.add(ok => {
        document.writeln(state);
        ok();
    }
);

// let state = [0];
// const scheduler = Scheduler();
// scheduler.add(ok => {
//     setTimeout(_ => {
//         state.push(1);
//         ok();
//     }, 100)
// })
// scheduler.add(ok => {
//     state.push(2);
//     ok();
// })
// document.writeln(state);