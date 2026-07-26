import { Controller, Get, Post, Body } from '@nestjs/common';
import { AgentsService } from './agents.service';


@Controller('agents')
export class AgentsController {


constructor(
 private readonly agentsService: AgentsService
){}



@Get()
getAgents(){

 return this.agentsService.getAgents();

}



@Post('chat')
chat(
 @Body()
 body:{
  agentId:string;
  message:string;
 }
){

 return this.agentsService.chat(
  body.agentId,
  body.message
 );

}


}
