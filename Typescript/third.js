var Employee = /** @class */ (function () {
    function Employee(name, age, employeeId) {
        this.name = name;
        this.age = age;
        this.employeeId = employeeId;
    }
    Employee.prototype.getEmployeeDetails = function () {
        return "Employee ".concat(this.name, ", Age: ").concat(this.age, ", ID: ").concat(this.employeeId);
    };
    return Employee;
}());
var employee = new Employee("John Doe", 30, 101);
console.log(employee.getEmployeeDetails());
