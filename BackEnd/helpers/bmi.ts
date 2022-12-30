
 const masacorporal = (peso: number, altura: number): string => {
    console.log("dentro de masa corporal")
    const resp = `{
            weight: ${peso},
            height: ${altura},
            bmi: "Normal (healthy weight)"
             } `;
    console.log(resp);
    return resp;
  };

export default masacorporal;

