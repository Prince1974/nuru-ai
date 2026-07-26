import { Injectable } from '@nestjs/common';
import { agents, AgentEngine } from '@nuru/ai-core';


@Injectable()
export class AgentsService {


  getAgents(){

    return agents;

  }



  chat(agentId:string, message:string){


    const agent = agents.find(
      (item)=> item.id === agentId
    );


    if(!agent){

      return {
        error:"Agent introuvable"
      };

    }



    const engine = new AgentEngine(agent);


    return engine.run(message);


  }


}
