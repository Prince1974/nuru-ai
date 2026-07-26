import {
 Conversation,
 ChatMessage
} from "./types";


export class ConversationManager {


 private conversation:Conversation;


 constructor(agentId:string){

  this.conversation = {

    id:crypto.randomUUID(),

    agentId,

    messages:[]

  };

 }



 addMessage(
  role:"user"|"assistant",
  content:string
 ){


 const message:ChatMessage={

    id:crypto.randomUUID(),

    role,

    content,

    createdAt:new Date()

 };


 this.conversation.messages.push(message);


 return message;

 }



 getConversation(){

    return this.conversation;

 }


}
