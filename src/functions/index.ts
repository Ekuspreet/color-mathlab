export interface MathFunction {
    id: number;
    name: string;
    description: string;
    numberOfInputs: number;
    executor: (...args: number[]) => number;
}

export const functions: MathFunction[] = [
    {
        id: 1,
        name: 'Add',
        description: 'f(a, b) = a + b',
        numberOfInputs: 2,
        executor: (a, b) => a + b,
    },
    {
        id: 2,
        name: 'Subtract',
        description: 'f(a, b) = a - b',
        numberOfInputs: 2,
        executor: (a, b) => a - b,
    },
    {
        id: 3,
        name: 'Multiply',
        description: 'f(a, b) = a \\times b',
        numberOfInputs: 2,
        executor: (a, b) => a * b,
    },
    {
        id: 4,
        name: 'Exponent',
        description: 'f(a, b) = a^{b}',
        numberOfInputs: 2,
        executor: (a, b) => Math.pow(a, b),
    },
    {
        id: 5,
        name: 'Log',
        description: 'f(a, b) = \\log_{b}(a)',
        numberOfInputs: 2,
        executor: (a, b) => Math.log(a) / Math.log(b),
    },
    {
        id: 6,
        name: 'Sqrt',
        description: 'f(a) = \\sqrt{a}',
        numberOfInputs: 1,
        executor: (a) => Math.sqrt(a),
    },
    {
        id: 7,
        name: 'Sin',
        description: 'f(a) = \\sin(a)',
        numberOfInputs: 1,
        executor: (a) => Math.sin(a),
    },
    {
        id: 8,
        name: 'Cos',
        description: 'f(a) = \\cos(a)',
        numberOfInputs: 1,
        executor: (a) => Math.cos(a),
    },
    {
        id: 9,
        name: 'Tan',
        description: 'f(a) = \\tan(a)',
        numberOfInputs: 1,
        executor: (a) => Math.tan(a),
    },
    {
        id: 10,
        name: 'Abs',
        description: 'f(a) = |a|',
        numberOfInputs: 1,
        executor: (a) => Math.abs(a),
    },
];
