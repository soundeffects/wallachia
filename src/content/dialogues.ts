export interface Dialogue {
  message: string[];
  choices: Choice[];
}

export interface Choice {
  reaction: string;
  leads_to: string;
}


export const dialogues: Map<string, Dialogue> = new Map([
  ["Shivering Alone", {
    message: [
      `Tonight, the moon casts a cold blue, blown by
      wind over both the treetops and the roof of the
      monastery. Behind this monastery, behind a hill,
      stands iron gates. On one side of the gate stands a
      woman, clutching hood around wary eyes and cloak on
      shivering body. Though a century has passed, she knows
      this monastery well.`,

      `On the other side of the gate approach two
      silhouettes, one hobbled, one rigid. Held high by the
      rigid figure is a lantern, forcing the woman across
      the gates to reel. Sent crackling and low from the
      hobbled figure is a voice, challenging the woman to
      answer. “What business might a traveler have, on a
      night such as this?” And for a moment, all one can
      hear is the rustling leaves.`,
    ],
    choices: [
      {
        reaction: `I’m Antanasia. I came, as my letter
          warned.`,
        leads_to: "A Place To Stay"
      }
    ]
  }],
  ["A Place To Stay", {
    message: [
      `A wave from the hobbled figure brings the lantern
      down, revealing the countenance of the two. The
      hobbled figure becomes an old man, with disheveled
      hair, stern brow, and ghostly skin. He has the garb of
      a monk. The rigid figure becomes a servant woman,
      dressed in servant clothing. She has brown skin,
      well-kept hair, and remains expressionless as she
      reaches for gate. While the monk swivels around,
      retreating to the monastery, the servant waits by an
      open gateway.`
    ],
    choices: [
      {
        reaction: `I need to hide my features. I will keep
          my hood tight.`,
        leads_to: "Carefully Retreating"
      },
      {
        reaction: `I do not fear. I will drop my hood, and
          they shall see.`,
        leads_to: "Boastfully Returning"
      }
    ]
  }]
]);
