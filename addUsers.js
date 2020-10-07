//* Create the friend class
class Friend {
    constructor(name, desc) {
        this.name = name;
        this.desc = desc;
    }
}

const friend1 = new Friend("Jesper", "An Awesome Guy");
const friend2 = new Friend("Ella", "More Awesome than Jesper");


let arr = [];

arr.push(friend1, friend2);