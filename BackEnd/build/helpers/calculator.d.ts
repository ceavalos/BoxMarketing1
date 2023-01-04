type Operation = 'multiply' | 'add' | 'divide';
type Result = number;
declare const calculator: (a: number, b: number, op: Operation) => Result;
