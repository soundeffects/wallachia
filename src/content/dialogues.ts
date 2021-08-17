export interface Dialogue {
  message: string;
  choices: Choice[];
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
      time. As for the present, trying the front doors \
      reveals that they are locked.",
    choices: [
      {
        reaction: "Well then, let's explore the grounds.",
        leads_to: "The Groundkeeper"
      }
    ]
  }],
  ["The Groundkeeper", {
    message: "Your feet tear at the growths of the \
      cobblestone path. You stumble upon a small shack on \
      your grounds, and it takes you a moment to realize \
      that the lit lantern is not hanging from it's door, \
      but is carried by a man who has been watching you.",
    choices: [
      {
        reaction: "Who goes there?",
        leads_to: "test"
      },
      {
        reaction: "I'll wait, and observe him in turn.",
        leads_to: "test"
      }
    ]
  }]
]);
