export interface AIMessage {

 role:"user" | "assistant" | "system";

 content:string;

}


export interface AIResponse {

 content:string;

 model:string;

}


export interface AIProvider {

 name:string;

 generate(
  messages:AIMessage[]
 ):Promise<AIResponse>;
}
