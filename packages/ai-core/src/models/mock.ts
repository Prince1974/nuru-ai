import {
 BaseAIProvider
} from "./provider";


export class MockAIProvider 
extends BaseAIProvider {


name="nuru-test-model";


async generate(messages:any[]){

return {

content:
"Réponse générée par Nuru AI Engine 🚀",

model:this.name

};

}


}
