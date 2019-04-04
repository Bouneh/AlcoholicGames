const Cards = [
  {
    "name": "pique_as",
    "image": require('../assets/cards/pique_as.png'),
    "gage": {
      "name": "Chute d'eau !",
      "description": "Tous les joueurs commencent à boire et ne doivent pas s'arrêter de boire jusqu'à ce que le joueur qui a pioché l'as arrête."
    }
  },
  {
    "name": "pique_2",
    "image": require('../assets/cards/pique_2.png'),
    "gage": {
      "name": "2 gorgées",
      "description": "Choisis quelqu'un pour boire 2 gorgées."
    }
  },
  {
    "name": "pique_3",
    "image": require('../assets/cards/pique_3.png'),
    "gage": {
      "name": "3 gorgées",
      "description": "Choisis quelqu'un pour boire 3 gorgées."
    }
  },
  {
    "name": "pique_4",
    "image": require('../assets/cards/pique_4.png'),
    "gage": {
      "name": "4 gorgées",
      "description": "Choisis quelqu'un pour boire 4 gorgées."
    }
  },
  {
    "name": "pique_5",
    "image": require('../assets/cards/pique_5.png'),
    "gage": {
      "name": "5 gorgées",
      "description": "Choisis quelqu'un pour boire 5 gorgées."
    }
  },
  {
    "name": "pique_6",
    "image": require('../assets/cards/pique_6.png'),
    "gage": {
      "name": "Maître des questions",
      "description": "Si un joueur répond à une question posée par le détenteur du 6, alors ce joueur doit boire. Il n'y a qu'un seul maître des questions, ce statut change à chaque nouveau 6." }, "questionsMaster": true},
  {
    "name": "pique_7",
    "image": require('../assets/cards/pique_7.png'),
    "gage": {
      "name": "Marques",
      "description": "Le joueur commence en citant une marque et les autres joueurs doivent suivre avec une marque de la même catégorie. Celui qui n'est plus capable d'en trouver boit. Par exemple, J1 dit Fiat, J2 lance Peugeot, J3 annonce Ferrari, etc."
    }
  },
  {
    "name": "pique_8",
    "image": require('../assets/cards/pique_8.png'),
    "gage": {
      "name": "Distribue 5 gorgées",
      "description": "Si un joueur regarde dans les yeux le détenteur du 8, alors ce joueur doit boire. Il n'y a qu'un seul maître des regards, ce statut change à chaque nouveau 8." }, "looksMaster": true},
  {
    "name": "pique_9",
    "image": require('../assets/cards/pique_9.png'),
    "gage": {
      "name": "Rimes",
      "description": "Le joueur commence avec n'importe quel mot et tous les autres doivent, à tour de rôle, donner un mot qui rime. Celui qui n'en trouve plus doit boire."
    }
  },
  {
    "name": "pique_10",
    "image": require('../assets/cards/pique_10.png'),
    "gage": {
      "name": "Nouvelle règle",
      "description": "Invente une règle qui sera appliquée au cours du jeu. Elle ne doit pas être nominative (c'est-à-dire ne visant personne en particulier)." }, "newRule": true},
  {
    "name": "pique_valet",
    "image": require('../assets/cards/pique_valet.png'),
    "gage": {
      "name": "Les hommes boivent",
      "description": "Tous les hommes prennent une gorgée."
    }
  },
  {
    "name": "pique_dame",
    "image": require('../assets/cards/pique_dame.png'),
    "gage": {
      "name": "Les dames boivent",
      "description": "Toutes les femmes prennent une gorgée."
    }
  },
  {
    "name": "pique_roi",
    "image": require('../assets/cards/pique_roi.png'),
    "gage": {
      "name": "Ajout dans le verre",
      "description": "Ajoute du brevage dans le verre commun, le joueur qui pioche le dernier roi doit boire le verre du milieu en entier."
    }
  },
  {
    "name": "coeur_as",
    "image": require('../assets/cards/coeur_as.png'),
    "gage": {
      "name": "Chute d'eau !",
      "description": "Tous les joueurs commencent à boire et ne doivent pas s'arrêter de boire jusqu'à ce que le joueur qui a pioché l'as arrête."
    }
  },
  {
    "name": "coeur_2",
    "image": require('../assets/cards/coeur_2.png'),
    "gage": {
      "name": "2 gorgées",
      "description": "Choisis quelqu'un pour boire 2 gorgées."
    }
  },
  {
    "name": "coeur_3",
    "image": require('../assets/cards/coeur_3.png'),
    "gage": {
      "name": "3 gorgées",
      "description": "Choisis quelqu'un pour boire 3 gorgées."
    }
  },
  {
    "name": "coeur_4",
    "image": require('../assets/cards/coeur_4.png'),
    "gage": {
      "name": "4 gorgées",
      "description": "Choisis quelqu'un pour boire 4 gorgées."
    }
  },
  {
    "name": "coeur_5",
    "image": require('../assets/cards/coeur_5.png'),
    "gage": {
      "name": "5 gorgées",
      "description": "Choisis quelqu'un pour boire 5 gorgées."
    }
  },
  {
    "name": "coeur_6",
    "image": require('../assets/cards/coeur_6.png'),
    "gage": {
      "name": "Maître des questions",
      "description": "Si un joueur répond à une question posée par le détenteur du 6, alors ce joueur doit boire. Il n'y a qu'un seul maître des questions, ce statut change à chaque nouveau 6." }, "questionsMaster": true},
  {
    "name": "coeur_7",
    "image": require('../assets/cards/coeur_7.png'),
    "gage": {
      "name": "Marques",
      "description": "Le joueur commence en citant une marque et les autres joueurs doivent suivre avec une marque de la même catégorie. Celui qui n'est plus capable d'en trouver boit. Par exemple, J1 dit Fiat, J2 lance Peugeot, J3 annonce Ferrari, etc."
    }
  },
  {
    "name": "coeur_8",
    "image": require('../assets/cards/coeur_8.png'),
    "gage": {
      "name": "Distribue 5 gorgées",
      "description": "Si un joueur regarde dans les yeux le détenteur du 8, alors ce joueur doit boire. Il n'y a qu'un seul maître des regards, ce statut change à chaque nouveau 8." }, "looksMaster": true},
  {
    "name": "coeur_9",
    "image": require('../assets/cards/coeur_9.png'),
    "gage": {
      "name": "Rimes",
      "description": "Le joueur commence avec n'importe quel mot et tous les autres doivent, à tour de rôle, donner un mot qui rime. Celui qui n'en trouve plus doit boire."
    }
  },
  {
    "name": "coeur_10",
    "image": require('../assets/cards/coeur_10.png'),
    "gage": {
      "name": "Nouvelle règle",
      "description": "Invente une règle qui sera appliquée au cours du jeu. Elle ne doit pas être nominative (c'est-à-dire ne visant personne en particulier)." }, "newRule": true},
  {
    "name": "coeur_valet",
    "image": require('../assets/cards/coeur_valet.png'),
    "gage": {
      "name": "Les hommes boivent",
      "description": "Tous les hommes prennent une gorgée."
    }
  },
  {
    "name": "coeur_dame",
    "image": require('../assets/cards/coeur_dame.png'),
    "gage": {
      "name": "Les dames boivent",
      "description": "Toutes les femmes prennent une gorgée."
    }
  },
  {
    "name": "coeur_roi",
    "image": require('../assets/cards/coeur_roi.png'),
    "gage": {
      "name": "Ajout dans le verre",
      "description": "Ajoute du brevage dans le verre commun, le joueur qui pioche le dernier roi doit boire le verre du milieu en entier."
    }
  },
  {
    "name": "carreau_as",
    "image": require('../assets/cards/carreau_as.png'),
    "gage": {
      "name": "Chute d'eau !",
      "description": "Tous les joueurs commencent à boire et ne doivent pas s'arrêter de boire jusqu'à ce que le joueur qui a pioché l'as arrête."
    }
  },
  {
    "name": "carreau_2",
    "image": require('../assets/cards/carreau_2.png'),
    "gage": {
      "name": "2 gorgées",
      "description": "Choisis quelqu'un pour boire 2 gorgées."
    }
  },
  {
    "name": "carreau_3",
    "image": require('../assets/cards/carreau_3.png'),
    "gage": {
      "name": "3 gorgées",
      "description": "Choisis quelqu'un pour boire 3 gorgées."
    }
  },
  {
    "name": "carreau_4",
    "image": require('../assets/cards/carreau_4.png'),
    "gage": {
      "name": "4 gorgées",
      "description": "Choisis quelqu'un pour boire 4 gorgées."
    }
  },
  {
    "name": "carreau_5",
    "image": require('../assets/cards/carreau_5.png'),
    "gage": {
      "name": "5 gorgées",
      "description": "Choisis quelqu'un pour boire 5 gorgées."
    }
  },
  {
    "name": "carreau_6",
    "image": require('../assets/cards/carreau_6.png'),
    "gage": {
      "name": "Maître des questions",
      "description": "Si un joueur répond à une question posée par le détenteur du 6, alors ce joueur doit boire. Il n'y a qu'un seul maître des questions, ce statut change à chaque nouveau 6." }, "questionsMaster": true},
  {
    "name": "carreau_7",
    "image": require('../assets/cards/carreau_7.png'),
    "gage": {
      "name": "Marques",
      "description": "Le joueur commence en citant une marque et les autres joueurs doivent suivre avec une marque de la même catégorie. Celui qui n'est plus capable d'en trouver boit. Par exemple, J1 dit Fiat, J2 lance Peugeot, J3 annonce Ferrari, etc."
    }
  },
  {
    "name": "carreau_8",
    "image": require('../assets/cards/carreau_8.png'),
    "gage": {
      "name": "Distribue 5 gorgées",
      "description": "Si un joueur regarde dans les yeux le détenteur du 8, alors ce joueur doit boire. Il n'y a qu'un seul maître des regards, ce statut change à chaque nouveau 8." }, "looksMaster": true},
  {
    "name": "carreau_9",
    "image": require('../assets/cards/carreau_9.png'),
    "gage": {
      "name": "Rimes",
      "description": "Le joueur commence avec n'importe quel mot et tous les autres doivent, à tour de rôle, donner un mot qui rime. Celui qui n'en trouve plus doit boire."
    }
  },
  {
    "name": "carreau_10",
    "image": require('../assets/cards/carreau_10.png'),
    "gage": {
      "name": "Nouvelle règle",
      "description": "Invente une règle qui sera appliquée au cours du jeu. Elle ne doit pas être nominative (c'est-à-dire ne visant personne en particulier)." }, "newRule": true},
  {
    "name": "carreau_valet",
    "image": require('../assets/cards/carreau_valet.png'),
    "gage": {
      "name": "Les hommes boivent",
      "description": "Tous les hommes prennent une gorgée."
    }
  },
  {
    "name": "carreau_dame",
    "image": require('../assets/cards/carreau_dame.png'),
    "gage": {
      "name": "Les dames boivent",
      "description": "Toutes les femmes prennent une gorgée."
    }
  },
  {
    "name": "carreau_roi",
    "image": require('../assets/cards/carreau_roi.png'),
    "gage": {
      "name": "Ajout dans le verre",
      "description": "Ajoute du brevage dans le verre commun, le joueur qui pioche le dernier roi doit boire le verre du milieu en entier."
    }
  },
  {
    "name": "trefle_as",
    "image": require('../assets/cards/trefle_as.png'),
    "gage": {
      "name": "Chute d'eau !",
      "description": "Tous les joueurs commencent à boire et ne doivent pas s'arrêter de boire jusqu'à ce que le joueur qui a pioché l'as arrête."
    }
  },
  {
    "name": "trefle_2",
    "image": require('../assets/cards/trefle_2.png'),
    "gage": {
      "name": "2 gorgées",
      "description": "Choisis quelqu'un pour boire 2 gorgées."
    }
  },
  {
    "name": "trefle_3",
    "image": require('../assets/cards/trefle_3.png'),
    "gage": {
      "name": "3 gorgées",
      "description": "Choisis quelqu'un pour boire 3 gorgées."
    }
  },
  {
    "name": "trefle_4",
    "image": require('../assets/cards/trefle_4.png'),
    "gage": {
      "name": "4 gorgées",
      "description": "Choisis quelqu'un pour boire 4 gorgées."
    }
  },
  {
    "name": "trefle_5",
    "image": require('../assets/cards/trefle_5.png'),
    "gage": {
      "name": "5 gorgées",
      "description": "Choisis quelqu'un pour boire 5 gorgées."
    }
  },
  {
    "name": "trefle_6",
    "image": require('../assets/cards/trefle_6.png'),
    "gage": {
      "name": "Maître des questions",
      "description": "Si un joueur répond à une question posée par le détenteur du 6, alors ce joueur doit boire. Il n'y a qu'un seul maître des questions, ce statut change à chaque nouveau 6." }, "questionsMaster": true},
  {
    "name": "trefle_7",
    "image": require('../assets/cards/trefle_7.png'),
    "gage": {
      "name": "Marques",
      "description": "Le joueur commence en citant une marque et les autres joueurs doivent suivre avec une marque de la même catégorie. Celui qui n'est plus capable d'en trouver boit. Par exemple, J1 dit Fiat, J2 lance Peugeot, J3 annonce Ferrari, etc."
    }
  },
  {
    "name": "trefle_8",
    "image": require('../assets/cards/trefle_8.png'),
    "gage": {
      "name": "Distribue 5 gorgées",
      "description": "Si un joueur regarde dans les yeux le détenteur du 8, alors ce joueur doit boire. Il n'y a qu'un seul maître des regards, ce statut change à chaque nouveau 8." }, "looksMaster": true},
  {
    "name": "trefle_9",
    "image": require('../assets/cards/trefle_9.png'),
    "gage": {
      "name": "Rimes",
      "description": "Le joueur commence avec n'importe quel mot et tous les autres doivent, à tour de rôle, donner un mot qui rime. Celui qui n'en trouve plus doit boire."
    }
  },
  {
    "name": "trefle_10",
    "image": require('../assets/cards/trefle_10.png'),
    "gage": {
      "name": "Nouvelle règle",
      "description": "Invente une règle qui sera appliquée au cours du jeu. Elle ne doit pas être nominative (c'est-à-dire ne visant personne en particulier)." }, "newRule": true},
  {
    "name": "trefle_valet",
    "image": require('../assets/cards/trefle_valet.png'),
    "gage": {
      "name": "Les hommes boivent",
      "description": "Tous les hommes prennent une gorgée."
    }
  },
  {
    "name": "trefle_dame",
    "image": require('../assets/cards/trefle_dame.png'),
    "gage": {
      "name": "Les dames boivent",
      "description": "Toutes les femmes prennent une gorgée."
    }
  },
  {
    "name": "trefle_roi",
    "image": require('../assets/cards/trefle_roi.png'),
    "gage": {
      "name": "Ajout dans le verre",
      "description": "Ajoute du brevage dans le verre commun, le joueur qui pioche le dernier roi doit boire le verre du milieu en entier."
    }
  }
];

export default Cards;