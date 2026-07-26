import { Agent } from "../agents/types";


export class AgentEngine {

  private agent: Agent;


  constructor(agent: Agent) {
    this.agent = agent;
  }


  async run(message:string){

    return {
      agent:this.agent.name,
      message,
      response:
      `Je suis ${this.agent.name}. Je vais traiter votre demande : "${message}"`
    };

  }

}
