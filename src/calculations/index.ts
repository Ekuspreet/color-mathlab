type Color = {
    red: number;
    green: number;
    blue: number;
}
export function ColorCalculator(inputs: Color[], selectedFunction: any) {
    inputs = JSON.parse(JSON.stringify(inputs));
    inputs.length = selectedFunction.numberOfInputs;
    inputs = Array.from(inputs)
console.log( Array.isArray(inputs))
    let output: Color = { red: 0, green: 0, blue: 0 };
    output.red = selectedFunction.executor(...[...inputs.map(input => input.red)]);
    output.green = selectedFunction.executor(...[...inputs.map(input => input.green)]);
    output.blue = selectedFunction.executor(...[...inputs.map(input => input.blue)]);
    output.red = parseInt(output.red.toFixed(0))% 256;
    output.green = parseInt(output.green.toFixed(0))% 256;
    output.blue = parseInt(output.blue.toFixed(0)) % 256;
    return output;
}