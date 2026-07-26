import { AIAgent } from "../agents/types";

export class AgentEngine {

  private agent: AIAgent;

  constructor(agent: AIAgent) {
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
