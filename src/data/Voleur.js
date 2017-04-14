export const Voleur = {
  id: 'voleur',
  label: `Le Voleur`,
  description: `Tu les écoutes autour du feu de camp, se vantant de je ne sais quel combat ou de la bonne fortune qui veille sur votre groupe. Toi, tu comptes ton or et tu souris dans ton coin - ça, c’est le pied !<br>Tu es le seul à connaître le secret de Dungeon World : le pognon, le fric, l’oseille !<br>C’est sûr, ils t’ont fait la gueule à chaque fois que tu t’es tiré en douce, mais sans toi, lequel n’aurait pas été découpé par une lame volante ou empoisonné à mort par un vieux piège à aiguilles ? Alors, laisse-les brailler. Quand t’en auras fini avec tout ça, tu pourras trinquer à la gloire de ces héros morts. Dans ton château et blindé de thune. Crapule !`,
  races: [
    {
      id: `halfelin`,
      label: `Halfelin`,
      names : [
        {
          id: `felix`,
          label: `Félix`
        },
        {
          id: `lapie`,
          label: `La Pie`
        },
        {
          id: `souris`,
          label: `Souris`
        },
        {
          id: `sketch`,
          label: `Sketch`
        },
        {
          id: `trixie`,
          label: `Trixie`
        },
        {
          id: `robin`,
          label: `Robin`
        },
        {
          id: `omar`,
          label: `Omar`
        },
        {
          id: `brynn`,
          label: `Brynn`
        },
        {
          id: `cafard`,
          label: `Cafard`
        }
      ],
      startingActions: [
        {
          id: `halfelin`,
          title: `Halfelin`,
          description: `Quand vous attaquez avec une arme à distance, vous infligez +2 dégâts.`
        }
      ]
    },
    {
      id: `humain`,
      label: `Humain`,
      names : [
        {
          id: `Piaf`,
          label: `Piaf`
        },
        {
          id: `Pilon`,
          label: `Pilon`
        },
        {
          id: `Jack`,
          label: `Jack`
        },
        {
          id: `Marlow`,
          label: `Marlow`
        },
        {
          id: `L’Esquive`,
          label: `L’Esquive`
        },
        {
          id: `Rat`,
          label: `Rat`
        },
        {
          id: `Vérole`,
          label: `Vérole`
        },
        {
          id: `Humble`,
          label: `Humble`
        },
        {
          id: `Farley`,
          label: `Farley`
        }
      ],
      startingActions: [
        {
          id: `humain`,
          title: `Humain`,
          description: `Vous êtes un professionnel. Vous avez +1 quand vous étalez votre science ou que vous discernez la réalité à propos d’activités criminelles`
        }
      ]
    }
  ],
  looks: [
    [
      {
        id: 'regardmobile',
        label: 'Regard mobile'
      },
      {
        id: 'regardassassin',
        label: 'Regard assassin'
      }
    ],
    [
      {
        id: 'encapuchonne',
        label: 'Encapuchonné'
      },
      {
        id: 'cheveuxpetard',
        label: 'Cheveux en pétard'
      },
      {
        id: 'cheveuxbrosse',
        label: 'Cheveux en brosse'
      }
    ],
    [
      {
        id: 'habitssombres',
        label: 'Habits sombres'
      },
      {
        id: 'vetementschics',
        label: `Vêtements chics`
      },
      {
        id: 'vetementsordinaires',
        label: `Vêtements ordinaires`
      }
    ],
    [
      {
        id: 'corpssvelte',
        label: 'Corps svelte'
      },
      {
        id: 'corpsnoueux',
        label: `Corps noueux`
      },
      {
        id: 'mou',
        label: `mou`
      }
    ]
  ],
  baseHP : 6,
  damage: 8,
  startingActions : [
    {
      id: `expertisedespieges`,
      title: `Expertise des pièges`,
      description: `Quand vous prenez le temps d’étudier une zone dangereuse, lancez 2d6+DEX. Sur 10+ prenez 3, sur 7-9 prenez 1. Dépensez 1 pour poser une des questions suivantes pendant que vous vous déplacez dans cette zone :<ul><li>Y a-t-il un piège ici et si oui, comment se déclenche-t-il ?</li><li>Que fait ce piège quand il se déclenche ?</li><li>Qu’y a-t-il d’autre caché ici ?</li></ul>`
    },
    {
      id: `ficellesdumetier`,
      title: `Ficelles du métier`,
      description: `Quand vous crochetez une serrure, faites les poches de quelqu’un ou désactivez un piège, lancez 2d6+DEX. Sur 10+ vous y parvenez sans problème. Sur 7-9, vous y parvenez mais le MJ vous laisse choisir deux options parmi suspicion, danger ou coût.`
    },
    {
      id: `attaquesournoise`,
      title: `Attaque sournoise`,
      description: `Quand vous attaquez un ennemi sans défense ou par surprise avec une arme de mêlée, vous pouvez choisir d’infliger vos dégâts ou de lancer lancez 2d6+DEX. Sur 10+ choisissez 2 options. Sur 7-9 choisissez-en 1 :<ul><li>Vous évitez le corps à corps avec votre adversaire.</li><li>Vous infligez vos dégâts +1d6.</li><li>Vous obtenez un avantage de +1 à suivre pour un allié ou vous-même si vous en profitez.</li><li>Vous réduisez son armure de 1 jusqu’à ce qu’il la répare.</li></ul>`
    },
    {
      id: `moralesouple`,
      title: `Morale souple`,
      description: `Quand quelqu’un essaie de déterminer votre alignement, vous pouvez répondre par l’alignement qui vous chante.`
    },
    {
      id: `empoisonneur`,
      title: `Empoisonneur`,
      description: `Vous maîtrisez l’usage d’un poison. Choisissez un poison dans la liste suivante : ce poison n’est désormais plus dangereux pour vous. Vous commencez le jeu avec 3 doses de ce poison. Si vous avez le temps et les composants, vous pouvez distiller librement 3 nouvelles doses de ce poison. Notez que certains poisons sont appliqués, ce qui requiert de les administrer précautionneusement à la cible ou dans une nourriture ou boisson qu’elle absorbera. D’autres poisons nécessiteront simplement de toucher la victime, ce qui peut notamment se faire en enduisant une lame.`,
      choices: [
        {
          id: `tagit`,
          title: `Huile de Tagit (appliquer)`,
          description: `la cible s’endort d’un sommeil léger.`
        },
        {
          id: `sanglante`,
          title: `Herbe sanglante (toucher)`,
          description: `la cible, tant qu’elle n’est pas soignée, soustrait 1d4 des dégâts qu’elle inflige.`
        },
        {
          id: `racine`,
          title: `Racine d’or (appliquer)`,
          description: `la cible considère la prochaine créature qu’elle voit comme un allié fiable, jusqu’à preuve du contraire`
        },
        {
          id: `larmes`,
          title: `Larmes de serpent (toucher)`,
          description: `quiconque inflige des dégâts à la cible tire deux dés au lieu d’un et prend le meilleur résultat.`
        }
      ]
    }
  ],
  alignments: [
    {
      id: `chaotique`,
      title: `Chaotique`,
      description: `Se jeter dans la gueule du loup sans réfléchir.`
    },
    {
      id: `neutre`,
      title: `Neutre`,
      description: `Eviter d’être découvert ou infiltrer un endroit.`
    },
    {
      id: `mauvais`,
      title: `Mauvais`,
      description: `Faire porter le chapeau ou la poisse à un autre.`
    }
  ],
  maxWeight: 9,
  equipments: [
    {
      label: `Armure de cuir (1 armure, 1 poids)`
    },
    {
      label: `Des rations (5 utilisations, 1 poids)`
    },
    {
      label: `3 doses du poison choisi`
    },
    {
      label: `10 Po`
    },
    {
      choices: [
        {
          label: `Dague (contact, 1 poids), épée courte (proche, 1 poids)`
        },
        {
          label: `Rapière (proche, précis, 1 poids)`
        }
      ]
    },
    {
      choices: [
        {
          label: `3 dagues de lancer (lancer, courte, 0 poids)`
        },
        {
          label: `Arc rudimentaire (courte, 2 poids), flèches (3 munitions, 1 poids)`
        }
      ]
    },
    {
      choices: [
        {
          label: `Sac d’aventurier (1 poids)`
        },
        {
          label: `Potion de soin`
        }
      ]
    }
  ],
  bonds: [
    {
      label: `J’ai volé quelque chose à ___.`
    },
    {
      label: `___ couvre mes arrières.`
    },
    {
      label: `___ connaît des détails compromettants sur moi.`
    },
    {
      label: `Moi et ___ sommes tous les deux sur un « coup ».`
    },
  ]
}
