import {AIProvider} from "./types";


export abstract class BaseAIProvider 
implements AIProvider {


 abstract name:string;


 abstract generate(
  messages:any[]
 ):Promise<any>;


}
