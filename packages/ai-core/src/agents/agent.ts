import { Agent } from "./types";
import { AgentEngine } from "../engine/AgentEngine";


export function createAgent(agent:Agent){

  return new AgentEngine(agent);

}
