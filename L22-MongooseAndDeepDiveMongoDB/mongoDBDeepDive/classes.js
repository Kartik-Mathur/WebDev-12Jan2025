class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    print() {
        console.log(this.name, this.age)
    }
}

let p = new Person("Reet",20);
p.print();