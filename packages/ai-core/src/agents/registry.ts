import { AIAgent } from "./types";


export const agents: AIAgent[] = [

{
 id:"assistant",
 slug:"assistant",
 name:"Nuru Assistant",
 description:"Assistant IA général pour répondre aux questions et accompagner les utilisateurs.",
 category:"General AI",
 icon:"Bot",
 color:"green",
 model:"nuru-general",
 capabilities:[
  "Conversation",
  "Recherche",
  "Aide quotidienne"
 ]
},


{
 id:"developer",
 slug:"developer",
 name:"Nuru Developer",
 description:"Agent spécialisé en programmation, architecture et développement logiciel.",
 category:"Development",
 icon:"Code2",
 color:"blue",
 model:"nuru-code",
 capabilities:[
  "Programmation",
  "Debug",
  "Architecture"
 ]
},


{
 id:"teacher",
 slug:"teacher",
 name:"Nuru Teacher",
 description:"Professeur IA pour apprendre plus rapidement.",
 category:"Education",
 icon:"GraduationCap",
 color:"purple",
 model:"nuru-education",
 capabilities:[
  "Cours",
  "Explications",
  "Exercices"
 ]
},


{
 id:"business",
 slug:"business",
 name:"Nuru Business",
 description:"Conseiller IA pour entrepreneurs et entreprises.",
 category:"Business",
 icon:"BriefcaseBusiness",
 color:"orange",
 model:"nuru-business",
 capabilities:[
  "Stratégie",
  "Marketing",
  "Analyse"
 ]
},


{
 id:"legal",
 slug:"legal",
 name:"Nuru Legal",
 description:"Assistant juridique africain.",
 category:"Legal",
 icon:"Scale",
 color:"red",
 model:"nuru-legal",
 capabilities:[
  "Droit africain",
  "Documents juridiques",
  "Analyse"
 ]
}

];
