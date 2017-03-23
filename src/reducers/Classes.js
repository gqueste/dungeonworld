export const defaultClasses = [
  {
    id: 'barbare',
    label: 'Le barbare',
    description: `Ceux qui t'accompagnent se disent civilisés mais ils ont inventé la servilité, l'hypocrisie et leurs cités ne sont que puanteur et maladie. Tu vas leur montrer ce que sont la liberté, la franchise de l'acier et la pureté des grands espaces.<br>Ils peuvent se contenter d'une gorgée de vin ou d'un ou deux exclaves à leur service, mais il t'en faut plus ! Ton appétit est sans fin, perpétuellement inassouvi.<br>Il te faut l'immense steppe, un rapide coursier, un faucon à ton poing et le vent dans les cheveux. Il te faut les richesses et les terres, la fortune et la gloire, écraser tes ennemis, les voir mourir devant toi et entendre les lamentations de leurs femmes.<br>Ils peuvent te combattre à cinq contre un, tenter de t'empoisonner comme des lâches qu'ils sont, passer dans ton dos pour y planter leur dague, tu les méprises. Car tout ce qui ne tue pas te rend plus fort !`,
    names: [
      {
        id: 'gorm',
        label: 'Gorm'
      },
      {
        id: 'siyi',
        label: 'Si-Yi'
      },
      {
        id: 'priscilla',
        label: 'Priscilla'
      },
      {
        id: 'sen',
        label: 'Sen'
      },
      {
        id: 'xia',
        label: 'Xia'
      },
      {
        id: 'anneira',
        label: 'Anneira'
      },
      {
        id: 'haepha',
        label: 'Haepha'
      },
      {
        id: 'lur',
        label: 'Lur'
      },
      {
        id: 'shar',
        label: 'Shar'
      },
      {
        id: 'korrin',
        label: 'Korrin'
      },
      {
        id: 'nkosi',
        label: 'Nkosi'
      },
      {
        id: 'fafnir',
        label: 'Fafnir'
      },
      {
        id: 'qua',
        label: 'Qua'
      },
      {
        id: 'sacer',
        label: 'Sacer'
      },
      {
        id: 'vercingeto',
        label: "Vercin'geto"
      },
      {
        id: 'barbozar',
        label: 'Barbozar'
      },
      {
        id: 'clovis',
        label: 'Clovis'
      },
      {
        id: 'frael',
        label: 'Frael'
      },
      {
        id: 'thraraxes',
        label: 'Thra-raxes'
      },
      {
        id: 'sillius',
        label: 'Sillius'
      },
      {
        id: 'shasheena',
        label: 'Sha-Sheena'
      },
      {
        id: 'khamisi',
        label: 'Khamisi'
      }
    ],
    races: [
      {
        id: 'human',
        label: 'Humain'
      },
      {
        id: 'elfe',
        label: 'Elfe'
      },
      {
        id: 'nain',
        label: 'Nain'
      },
      {
        id: 'halfelin',
        label: 'Halfelin'
      }
    ],
    // TODO : Titres pour le barbare
    titles: [
      {
        id: 'glorieux',
        label: 'Le Glorieux'
      },
      {
        id: 'affame',
        label: "L'Affamé"
      },
      {
        id: 'irascible',
        label: "L'Irascible"
      },
      {
        id: 'invaincu',
        label: "L'Invaincu"
      },
      {
        id: 'vorace',
        label: 'Le Vorace'
      },
      {
        id: 'broyeur',
        label: "Le Broyeur d'Ennemis"
      },
      {
        id: 'briseurdos',
        label: "Le Briseur d'Os"
      },
      {
        id: 'joyeux',
        label: 'Le Joyeux'
      },
      {
        id: 'melancolique',
        label: 'Le Mélancolique'
      },
      {
        id: 'toutpuissant',
        label: 'Le Tout-Puissant'
      },
      {
        id: 'geant',
        label: 'Le Géant'
      },
      {
        id: 'triomphant',
        label: 'Le Triomphant'
      }
    ],
    looks: [
      [
        {
          id: 'tourmente',
          label: 'Regard tourmenté'
        },
        {
          id: 'hagards',
          label: 'Yeux hagards'
        },
        {
          id: 'feroce',
          label: 'Regard féroce'
        },
        {
          id: 'voiles',
          label: 'Yeux voilés'
        }
      ],
      [
        {
          id: 'biscotos',
          label: 'Gros biscotos'
        },
        {
          id: 'longues',
          label: 'Longues jambes'
        },
        {
          id: 'squelettique',
          label: 'Squelettique'
        },
        {
          id: 'souple',
          label: 'Souple'
        }
      ],
      [
        {
          id: 'tatouages',
          label: 'Tatouages étranges'
        },
        {
          id: 'bijoux',
          label: 'Bijoux insolites'
        },
        {
          id: 'parure',
          label: 'Pas la moindre parure'
        }
      ],
      [
        {
          id: 'fripes',
          label: 'Fripes'
        },
        {
          id: 'soieries',
          label: 'Soieries'
        },
        {
          id: 'pillard',
          label: 'Allure de pillard'
        },
        {
          id: 'inadaptee',
          label: 'Tenue inadaptée au climat'
        }
      ]
    ],
    baseHP : 8,
    //TODO
    damage: 10,
    //TODO
    startingActions : [
      {
        id: `etranger`,
        title: `Etranger`,
        description: `Vous pouvez être elfe, nain, halfelin ou humain, mais vous et les vôtres n'êtres pas d'ici. Au début de chaque session, le MJ vous demandera quelque chose à propos de votre terre natale, pourquoi vous l'avez quittée ou ce que vous avez laissé derrière vous. Si vous répondez, marquez 1 PX.`
      },
      {
        choices : [
          {
            id: 'acier',
            title: `Bardé d'acier`,
            description: `Ignorez le marqueur encombrant de l'armure que vous portez.`
          },
          {
            id: 'poil',
            title: 'A poil et indemne',
            description: `Tant que vous transportez moins que votre poids maximum et que vous ne portez ni armure ni bouclier, gagnez +1 armure`
          },
        ]
      },
      {
        id: `hercule`,
        title: `Appétits herculéens`,
        description: `Les autres peuvent se contenter d'un vin ou d'un ou deux esclaves à leur service, mais il vous en faut plus !<br>Choisissez deux ambissions ci-dessous. Lorsque vous poursuivez une de vos ambitions, si vous deviez lancer deux d6 pour une action, lancez un d6 et un d8 à la place. Si le résultat du d6 est supérieur à celui du d8, le MJ peut introduire une complication ou un danger provoqué par votre avidité.`,
        //TODO
        choices: [
          {
            id: `destruction`,
            label: `Destruction pure`
          },
          {
            id: `pouvoir`,
            label: `Pouvoir sur autrui`
          },
          {
            id: `plaisirs`,
            label: `Plaisirs terrestres`
          },
          {
            id: `conquete`,
            label: `Conquête`
          },
          {
            id: `richesse`,
            label: `Richesses et possessions`
          },
          {
            id: `gloire`,
            label: `Gloire et renommée`
          }
        ]
      },
      {
        id: `main`,
        title: `Garder la main`,
        description: `Vous avez +1 continu sur votre dernier soupir. Lorsque vous rendez votre dernier soupir, sur un 7-9 faites une offre à la Mort en échange de votre vie. Si la Mort accepte, elle vous rend la vie, sinon vous trépassez.`
      },
      {
        id: `costaud`,
        title: `Costaud`,
        description: `Lorsque vous portez une arme, celle-ci gagne les marqueurs puissant et dévastateur`
      },
      {
        id: `attend`,
        title: `Qu'est ce que t'attends ?`,
        description: `Quand vous hurlez un défi à vos ennemis, lancez 2d6+CON.<br>Sur 10+, ils vous considèrent comme la menace la plus importante à affronter et ignorent vos compagnons. Gagnez +2 dégâts continu contre eux.<br>Sur 7-9, seuls quelques-uns (les plus faibles ou les plus téméraires) succombent à vos provocations.`
      }
    ],
    //TODO
    alinements: [
      {
        id: `chaotique`,
        title: `Chaotique`,
        description: `Se soustraire à une coutume du monde civilisé.`
      },
      {
        id: `neutre`,
        title: `Neutre`,
        description: `Enseigner les coutumes de votre peuple à quelqu'un.`
      }
    ],
    //TODO
    maxWeight: 9,
    //TODO
    equipments: [
      {
        label: `Des rations (5 utilisations, 1 poids)`
      },
      {
        label: `Une dague (contact, 1 poids)`
      },
      {
        label: `Un souvenir de vos voyages de votre terre natale`
      },
      {
        choices: [
          {
            label: `Hache (proche, 1 poids)`
          },
          {
            label: `Epée à deux mains (proche, +1 dégât, 2 poids)`
          },
        ]
      },
      {
        choices: [
          {
            label: `Sac d'aventurier (1 poids) et des rations (5 utilisations, 1 poids)`
          },
          {
            label: `Cotte de mailles (1 armure, 1 poids)`
          }
        ]
      }
    ],
    bonds: [
      {
        label: `___ est faible et stupide, mais il m'amuse`
      },
      {
        label: `Le comportement de ___ est bizarre et déroutant`
      },
      {
        label: `___ se fourre toujours dasn les ennuis, je dois le protéger de lui-même`
      },
      {
        label: `___ partage ma faim de gloire; la terre tremblera sur notre passage !`
      },
    ]
  },
  {
    id: 'clerc',
    label: 'Clerc',
    description: 'description du clerc',
    names: [
      {
        id: 'professeurxavier',
        label: 'Professeur Xavier'
      },
      {
        id: 'ironman',
        label: 'Iron Man'
      }
    ],
    looks: [
      [
        {
          id: 'beautiful',
          label: 'Beau'
        },
        {
          id: 'notbeautiful',
          label: 'Moche'
        },
        {
          id: 'meh',
          label: 'Pas terrible'
        },
      ],
      [
        {
          id: 'mad',
          label: 'Fou'
        },
        {
          id: 'bearded',
          label: 'Barbu'
        },
        {
          id: 'notbearded',
          label: 'Pas barbu'
        },
      ]
    ],
    baseHP: 5
  }
];
