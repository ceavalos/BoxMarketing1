"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const masacorporal = (peso, altura) => {
    console.log("dentro de masa corporal");
    const resp = `{
            weight: ${peso},
            height: ${altura},
            bmi: "Normal (healthy weight)"
             } `;
    console.log(resp);
    return resp;
};
exports.default = masacorporal;
