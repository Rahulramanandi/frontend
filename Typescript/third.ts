interface Person {
    name: string;
    age: number;
}

class Employee implements Person {
    name: string;
    age: number;
    employeeId: number;

    constructor(name: string, age: number, employeeId: number) {
        this.name = name;
        this.age = age;
        this.employeeId = employeeId;
    }

    getEmployeeDetails(): string {
        return `Employee ${this.name}, Age: ${this.age}, ID: ${this.employeeId}`;
    }
}

let employee = new Employee("John Doe", 30, 101);
console.log(employee.getEmployeeDetails());
