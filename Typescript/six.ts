enum Color {
    Red,
    Green,
    Blue
}

function getColorName(color: Color): string {
    return Color[color];
}

console.log(getColorName(Color.Red));  
console.log(getColorName(Color.Green)); 
console.log(getColorName(Color.Blue));  
