var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
function getColorName(color) {
    return Color[color];
}
console.log(getColorName(Color.Red)); // Output: "Red"
console.log(getColorName(Color.Green)); // Output: "Green"
console.log(getColorName(Color.Blue)); // Output: "Blue"
