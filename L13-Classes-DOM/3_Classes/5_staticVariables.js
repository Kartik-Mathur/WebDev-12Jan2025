class Person {
    static cnt = 0; // They belong to the class, not object
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    print() {
        console.log(this.name, this.age);
    }
}

let p = new Person("abc", 10);
let p1 = new Person("abc1", 101);

console.log(Person.prototype)
console.log(p)
console.log(Person.cnt);