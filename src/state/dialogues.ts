import { 
  Choice,
  dialogues
} from '../content/dialogues';


let currentDialogueName = "The Inheritance";


export function getCurrentMessage(): string {
  const dialogue = dialogues.get(currentDialogueName);
  if (!dialogue)
    throw "Somehow, the game state has progressed to an invalid dialogue!";
  
  return dialogue.message;
}


export function getCurrentChoices(): Choice[] {
  const dialogue = dialogues.get(currentDialogueName);
  if (!dialogue)
    throw "Somehow, the game state has progressed to an invalid dialogue!";
  
  return dialogue.choices;
}

export function leadToDialogue(choice: Choice): void {
  if (!dialogues.has(choice.leads_to))
    throw "Can't lead to an invalid dialogue option!";

  currentDialogueName = choice.leads_to;
}
