class Users {
    constructor(name, nickName, age, password) {
        this.name = name;
        this.nickName = nickName;
        this.age = age;
        this.password = password;
    }
};

let user1 = new Users("Jesper", "JesperNator", 20, 123);



export { user1 }