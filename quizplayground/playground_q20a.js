const Observable = value => {
    const listeners = [];
    return {
        onChange: callback => {
            listeners.push(callback);
            callback(value, value);
        },
        getValue: () => value,
        setValue: newValue => {
            if (value === newValue) return;
            const oldValue = value;
            value = newValue;
            listeners.forEach(callback => callback(value, oldValue));
        }
    }
};
let sum = 0;
const trackable = Observable(0);

trackable.onChange(x => sum += x);

const x_ = 4;
const y_ = 2;
const z_ = 3;
trackable.setValue(x_); // values x_, y_, z_ are given. Do not override.
trackable.setValue(y_);
trackable.setValue(z_);
document.writeln(trackable.getValue() === z_ && sum === x_ + y_ + z_);