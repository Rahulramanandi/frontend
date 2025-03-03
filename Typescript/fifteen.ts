function ValidateEmail(target: any, propertyKey: string) {
    let value: string;

    const getter = () => value;
    const setter = (newValue: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(newValue)) {
            throw new Error(`Invalid email format: ${newValue}`);
        }
        value = newValue;
    };

    Object.defineProperty(target, propertyKey, {
        get: getter,
        set: setter,
        enumerable: true,
        configurable: true
    });
}

class User {
    @ValidateEmail
    email: string;

    constructor(email: string) {
        this.email = email;
    }
}

try {
    const user1 = new User("valid.email@example.com");
    console.log("User created:", user1.email);

    const user2 = new User("invalid-email");
} catch (error) {
    console.error(error.message);
}
