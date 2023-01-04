"use strict";
/*interface MultiplyValues {
    value1: number;
    value2: number;
  }
  
  const validacion = (args: Array<string>): MultiplyValues => {
    if (args.length < 4) throw new Error('Not enough arguments');
    if (args.length > 4) throw new Error('Too many arguments');
  
    if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
      return {
        value1: Number(args[2]),
        value2: Number(args[3])
      }
    } else {
      throw new Error('Provided values were not numbers!');
    }
  }
  */
Object.defineProperty(exports, "__esModule", { value: true });
const multiplicator = (a, b, printText) => {
    //let resp : MultiplyValues= validacion(a, b);
    console.log(printText, a * b);
    return (a * b);
};
exports.default = multiplicator;
/*
try {
  const { value1, value2 } = parseArguments(process.argv);
  multiplicator(value1, value2, `Multiplied ${value1} and ${value2}, the result is:`);
} catch (e) {
  console.log('Error, something bad happened, message: ', e.message);
}
*/ 
