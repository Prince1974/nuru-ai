import { AIAgent } from "./types";

export const agents: AIAgent[] = [

{
 id:"assistant",
 name:"Nuru Assistant",
 description:"Assistant IA général pour répondre aux questions.",
 category:"General AI",
 capabilities:[
  "Conversation",
  "Recherche",
  "Aide quotidienne"
 ]
},

{
 id:"developer",
 name:"Nuru Developer",
 description:"Agent spécialisé en programmation et architecture logicielle.",
 category:"Development",
 capabilities:[
  "Code",
  "Debug",
  "Architecture"
 ]
},

{
 id:"teacher",
 name:"Nuru Teacher",
 description:"Professeur IA pour apprendre plus rapidement.",
 category:"Education",
 capabilities:[
  "Cours",
  "Explications",
  "Exercices"
 ]
},

{
 id:"business",
 name:"Nuru Business",
 description:"Conseiller IA pour entrepreneurs et entreprises.",
 category:"Business",
 capabilities:[
  "Stratégie",
  "Marketing",
  "Analyse"
 ]
},

{
 id:"legal",
 name:"Nuru Legal",
 description:"Assistant juridique africain.",
 category:"Legal",
 capabilities:[
  "Droit africain",
  "Documents juridiques",
  "Conseils"
 ]
}

];
