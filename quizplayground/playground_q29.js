const Observable = value => {
    const listeners = [];
    return {
        onChange: callback => listeners.push(callback),
        getValue: () => value,
        setValue: val => {
            if (value === val) return;
            value = val;
            listeners.forEach(listener => listener(val));
        }
    }
};

// const color = Observable('white');
// color.value = 'black';
//
// document.writeln(color.getValue() === 'black');

// const color = Observable('white');
// let updateCount = 0;
// const updateListener = val => updateCount++;
// color.setValue('black');
//
// document.writeln(updateCount === 1);

// const color = Observable('white');
// color.setValue('black');
//
// document.writeln(color.getValue() === 'black');

const color = Observable('white');

document.writeln(color.getValue() === 'white');