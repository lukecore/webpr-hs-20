const Observable = value => {
    const listeners = [];
    return {
        onChange: callback => listeners.push(callback),
        getValue: () => value,
        setValue: val => {
            if (value === val) return;
            value = val;
            listeners.forEach(callback => callback(val));
        }
    }
};

const color = Observable('white');
let updateCount = 0;
const updateListener = val => updateCount++;
color.setValue('black');

document.writeln(updateCount === 1);