const door = {open: false};
const open = door => {
    let result = "open";
    door.open && (result = "already open");
    door.open = true;
    return result;
    // if (door.open) {
    //     return "already open";
    // }
    // door.open = true;
    // return "open";
};
document.writeln("Door is ");
document.writeln(open(door) || "closed");

// document.writeln("Door is ");
// document.writeln(open(door) ? open(door) : "closed");