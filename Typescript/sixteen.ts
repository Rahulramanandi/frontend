function parseJson(jsonString: string): any | null {
    try {
        return JSON.parse(jsonString);
    } catch (error) {
        console.error("Invalid JSON:", error.message);
        return null;
    }
}

console.log(parseJson('{"name": "Alice", "age": 25}'));
console.log(parseJson("Invalid JSON"));
