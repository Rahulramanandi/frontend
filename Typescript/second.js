var age = 25;
var isActive = true;
function getUserInfo(age, isActive) {
    return "User is ".concat(age, " years old and is ").concat(isActive ? "active" : "inactive", ".");
}
console.log(getUserInfo(age, isActive));
