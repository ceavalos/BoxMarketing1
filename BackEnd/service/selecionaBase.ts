import * as dotenv from 'dotenv' 
dotenv.config()

declare var process : {
    env: {
      NODE_ENV: string
      DATABASE_URLDESA: string;
      DATABASE_URLTEST: string;
      DATABASE_URLPROD: string;
    }
  }

const base = ()  =>{

    switch (process.env.NODE_ENV){
        case "desarrollo" :
         return process.env.DATABASE_URLDESA ;
         break
        case "test":
            return process.env.DATABASE_URLTEST ;
            break
        case "produccion":
            return process.env.DATABASE_URLPROD ;
            break    
        default :
            return "error"    ;
           break
    }
    
}

export default base;

