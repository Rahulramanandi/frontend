function LogInstance(constructor: Function) {
    console.log(`Class ${constructor.name} was instantiated.`);
}

@LogInstance
class User {
    constructor(public name: string, public age: number) {
        console.log(`User ${this.name} created.`);
    }
}

const user1 = new User("Alice", 30);
const user2 = new User("Bob", 25);
