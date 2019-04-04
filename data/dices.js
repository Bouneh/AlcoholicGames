const Dices = [
  {
    "name": "one_one",
    "image": require('../assets/dices/one_one.png'),
    "gage": {
      "name": "Double 1",
      "description": "Choisis quelqu'un pour boire 1 gorgée."
    }
  },
  {
    "name": "one_two",
    "image": require('../assets/dices/one_two.png'),
    "gage": {
      "name": "Défi",
      "description": "Choisis quelqu'un pour jouer. la personne aura 2 lancers pour faire 1 et 2 ou 5 et 6. Elle peut garder un des dès du premier lancer."
    }
  },
  {
    "name": "one_three",
    "image": require('../assets/dices/one_three.png'),
    "gage": {
      "name": "Freeman",
      "description": "Nomme un freeman s'il n'y en a pas, sinon il boit 1 gorgée. Si tu es freeman, nomme quelqu'un d'autre à ta place (sauf celui qui t'a nommé)."
    },
    "freeman": true
  },
  {
    "name": "one_four",
    "image": require('../assets/dices/one_four.png'),
    "gage": {
      "name": "Rien",
      "description": "Le repos du guerrier."
    }
  },
  {
    "name": "one_five",
    "image": require('../assets/dices/one_five.png'),
    "gage": {
      "name": "Passe",
      "description": "Le suivant passe son tour."
    }
  },
  {
    "name": "one_six",
    "image": require('../assets/dices/one_six.png'),
    "gage": {
      "name": "Changement de sens",
      "description": "Le sens de jeu change. C'est donc au précédent joueur de rejour."
    }
  },
  {
    "name": "two_one",
    "image": require('../assets/dices/two_one.png'),
    "gage": {
      "name": "Défi",
      "description": "Choisis quelqu'un pour jouer. la personne aura 2 lancers pour faire 1 et 2 ou 5 et 6. Elle peut garder un des dès du premier lancer."
    }
  },
  {
    "name": "two_two",
    "image": require('../assets/dices/two_two.png'),
    "gage": {
      "name": "Double 2",
      "description": "Choisis quelqu'un pour boire 2 gorgées."
    }
  },
  {
    "name": "two_three",
    "image": require('../assets/dices/two_three.png'),
    "gage": {
      "name": "Freeman",
      "description": "Nomme un freeman s'il n'y en a pas, sinon il boit 1 gorgée. Si tu es freeman, nomme quelqu'un d'autre à ta place (sauf celui qui t'a nommé)."
    },
    "freeman": true
  },
  {
    "name": "two_four",
    "image": require('../assets/dices/two_four.png'),
    "gage": {
      "name": "Passe",
      "description": "Le suivant passe son tour."
    }
  },
  {
    "name": "two_five",
    "image": require('../assets/dices/two_five.png'),
    "gage": {
      "name": "Changement de sens",
      "description": "Le sens de jeu change. C'est donc au précédent joueur de rejour."
    }
  },
  {
    "name": "two_six",
    "image": require('../assets/dices/two_six.png'),
    "gage": {
      "name": "Rien",
      "description": "Le repos du guerrier."
    }
  },
  {
    "name": "three_one",
    "image": require('../assets/dices/three_one.png'),
    "gage": {
      "name": "Freeman",
      "description": "Nomme un freeman s'il n'y en a pas, sinon il boit 1 gorgée. Si tu es freeman, nomme quelqu'un d'autre à ta place (sauf celui qui t'a nommé)."
    },
    "freeman": true
  },
  {
    "name": "three_two",
    "image": require('../assets/dices/three_two.png'),
    "gage": {
      "name": "Freeman",
      "description": "Nomme un freeman s'il n'y en a pas, sinon il boit 1 gorgée. Si tu es freeman, nomme quelqu'un d'autre à ta place (sauf celui qui t'a nommé)."
    },
    "freeman": true
  },
  {
    "name": "three_three",
    "image": require('../assets/dices/three_three.png'),
    "gage": {
      "name": "Double 3",
      "description": "Choisis quelqu'un pour boire 3 gorgées."
    }
  },
  {
    "name": "three_four",
    "image": require('../assets/dices/three_four.png'),
    "gage": {
      "name": "Changement de sens",
      "description": "Le sens de jeu change. C'est donc au précédent joueur de rejour."
    }
  },
  {
    "name": "three_five",
    "image": require('../assets/dices/three_five.png'),
    "gage": {
      "name": "Freeman",
      "description": "Nomme un freeman s'il n'y en a pas, sinon il boit 1 gorgée. Si tu es freeman, nomme quelqu'un d'autre à ta place (sauf celui qui t'a nommé)."
    },
    "freeman": true
  },
  {
    "name": "three_six",
    "image": require('../assets/dices/three_six.png'),
    "gage": {
      "name": "Freeman",
      "description": "Nomme un freeman s'il n'y en a pas, sinon il boit 1 gorgée. Si tu es freeman, nomme quelqu'un d'autre à ta place (sauf celui qui t'a nommé)."
    },
    "freeman": true
  },
  {
    "name": "four_one",
    "image": require('../assets/dices/four_one.png'),
    "gage": {
      "name": "Rien",
      "description": "Le repos du guerrier."
    }
  },
  {
    "name": "four_two",
    "image": require('../assets/dices/four_two.png'),
    "gage": {
      "name": "Passe",
      "description": "Le suivant passe son tour."
    }
  },
  {
    "name": "four_three",
    "image": require('../assets/dices/four_three.png'),
    "gage": {
      "name": "Changement de sens",
      "description": "Le sens de jeu change. C'est donc au précédent joueur de rejour."
    }
  },
  {
    "name": "four_four",
    "image": require('../assets/dices/four_four.png'),
    "gage": {
      "name": "Double 4",
      "description": "Choisis quelqu'un pour boire 4 gorgées."
    }
  },
  {
    "name": "four_five",
    "image": require('../assets/dices/four_five.png'),
    "gage": {
      "name": "Rien",
      "description": "Le repos du guerrier."
    }
  },
  {
    "name": "four_six",
    "image": require('../assets/dices/four_six.png'),
    "gage": {
      "name": "Tour bonus",
      "description": "Chaque joueur lance les dès, le plus petit score finit son verre."
    }
  },
  {
    "name": "five_one",
    "image": require('../assets/dices/five_one.png'),
    "gage": {
      "name": "Passe",
      "description": "Le suivant passe son tour."
    }
  },
  {
    "name": "five_two",
    "image": require('../assets/dices/five_two.png'),
    "gage": {
      "name": "Changement de sens",
      "description": "Le sens de jeu change. C'est donc au précédent joueur de rejour."
    }
  },
  {
    "name": "five_three",
    "image": require('../assets/dices/five_three.png'),
    "gage": {
      "name": "Freeman",
      "description": "Nomme un freeman s'il n'y en a pas, sinon il boit 1 gorgée. Si tu es freeman, nomme quelqu'un d'autre à ta place (sauf celui qui t'a nommé)."
    },
    "freeman": true
  },
  {
    "name": "five_four",
    "image": require('../assets/dices/five_four.png'),
    "gage": {
      "name": "Rien",
      "description": "Le repos du guerrier."
    }
  },
  {
    "name": "five_five",
    "image": require('../assets/dices/five_five.png'),
    "gage": {
      "name": "Double 5",
      "description": "Choisis quelqu'un pour boire 5 gorgées."
    }
  },
  {
    "name": "five_six",
    "image": require('../assets/dices/five_six.png'),
    "gage": {
      "name": "Défi",
      "description": "Choisis quelqu'un pour jouer. la personne aura 2 lancers pour faire 1 et 2 ou 5 et 6. Elle peut garder un des dès du premier lancer."
    }
  },
  {
    "name": "six_one",
    "image": require('../assets/dices/six_one.png'),
    "gage": {
      "name": "Changement de sens",
      "description": "Le sens de jeu change. C'est donc au précédent joueur de rejour."
    }
  },
  {
    "name": "six_two",
    "image": require('../assets/dices/six_two.png'),
    "gage": {
      "name": "Rien",
      "description": "Le repos du guerrier."
    }
  },
  {
    "name": "six_three",
    "image": require('../assets/dices/six_three.png'),
    "gage": {
      "name": "Freeman",
      "description": "Nomme un freeman s'il n'y en a pas, sinon il boit 1 gorgée. Si tu es freeman, nomme quelqu'un d'autre à ta place (sauf celui qui t'a nommé)."
    },
    "freeman": true
  },
  {
    "name": "six_four",
    "image": require('../assets/dices/six_four.png'),
    "gage": {
      "name": "Tour bonus",
      "description": "Chaque joueur lance les dès, le plus petit score finit son verre."
    }
  },
  {
    "name": "six_five",
    "image": require('../assets/dices/six_five.png'),
    "gage": {
      "name": "Défi",
      "description": "Choisis quelqu'un pour jouer. la personne aura 2 lancers pour faire 1 et 2 ou 5 et 6. Elle peut garder un des dès du premier lancer."
    }
  },
  {
    "name": "six_six",
    "image": require('../assets/dices/six_six.png'),
    "gage": {
      "name": "Double 6",
      "description": "Choisis quelqu'un pour boire 6 gorgées."
    }
  }
];

export default Dices;