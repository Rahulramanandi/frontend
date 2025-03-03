function printDetails(value: string | number): void {
    console.log(`Type: ${typeof value}, Value: ${value}`);
}

printDetails("Hello, TypeScript!");
printDetails(42);
