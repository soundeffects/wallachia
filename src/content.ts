export const omens = [];


export interface Dialogue {
  message: string;
  choices?: Choice[];
  leads_to?: string;
}

export interface Choice {
  reaction: string;
  leads_to: string;
}

export const dialogues: Map<string, Dialogue> = new Map([
  ["The Inheritance", {
    message: "You pull open iron gates and climb the \
      last step. Here you are. The air is a heavy gray \
      this evening, and your new mansion looms in front of \
      you; rich with age and darkness. This is to be the \
      seat for a new stage in your life. In time, these \
      walls will listen to your thoughts, shelter your \
      feelings, and bear your history. All of this, in \
      time.",
    choices: [
      {
        reaction: "For now we'll do some spring cleaning.",
        leads_to: "A Simple Discovery"
      },
      {
        reaction: "I want to explore the grounds.",
        leads_to: "Some Visitors"
      }
    ]
  }],
  ["A Simple Discovery", {
    message: "",
    choices: [
      
    ]
  }],
  ["Some Visitors", {
    message: "",
    choices: [
      
    ]
  }]
]
