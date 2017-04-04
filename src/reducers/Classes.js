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
    id: 'barde',
    label: 'Barde',
    description: `Les poèmes disent que la vie d'aventurier est une route pavée de gloire, de fortune et de combats. Les histoires racontées dans toutes les tavernes de campagne doivent bien avoir un fond de vérité, n'est ce pas ? Les chansons qui inspirent les humbles comme les têtes couronnées, qui calment les bêtes sauvages ou rendent les hommes furieux doivent bien venir de quelque part. Voici le barde. Vous. La voix enjôleuse et la répartie facile.<br>Vous. Chanteur et conteur hors pair.<br>N’importe quel ménestrel peut réciter une fable, seul un vrai barde peut la vivre. Enfilez vos bottes, noble orateur. Aiguisez cette dague discrète et relevez le défi. Quelqu’un doit se trouver là, coude à coude avec les gros bras, les voyous et la graine de héros. Qui, mieux que vous, pour relater vos exploits ? Personne`,
    races: [
      {
        id: `elfe`,
        label: `Elfe`,
        names : [
          {
            id: `astrafel`,
            label: `Astrafel`
          },
          {
            id: `daelwyn`,
            label: `Daelwyn`
          },
          {
            id: `feliana`,
            label: `Feliana`
          },
          {
            id: `damarra`,
            label: `Damarra`
          },
          {
            id: `sistranalle`,
            label: `Sistranalle`
          },
          {
            id: `pendrell`,
            label: `Pendrell`
          },
          {
            id: `melliandre`,
            label: `Melliandre`
          },
          {
            id: `dagoliir`,
            label: `Dagoliir`
          }
        ],
        startingActions: [
          {
            id: `elfe`,
            title: `Elfe`,
            description: `Lorsque vous arrivez à un endroit important (à vous de décider), vous pouvez demander au MJ de vous raconter un fait de l’histoire de ce lieu.`
          }
        ]
      },
      {
        id: `humain`,
        label: `Humain`,
        names : [
          {
            id: `baldric`,
            label: `Baldric`
          },
          {
            id: `leena`,
            label: `Leena`
          },
          {
            id: `dunwick`,
            label: `Dunwick`
          },
          {
            id: `willem`,
            label: `Willem`
          },
          {
            id: `edungeonworldyn`,
            label: `EDungeon Worldyn`
          },
          {
            id: `florian`,
            label: `Florian`
          },
          {
            id: `angélique`,
            label: `Angélique`
          },
          {
            id: `quorra`,
            label: `Quorra`
          },
          {
            id: `charlotte`,
            label: `Charlotte`
          },
          {
            id: `lili`,
            label: `Lili`
          },
          {
            id: `raymonde`,
            label: `Raymonde`
          },
          {
            id: `cassandra`,
            label: `Cassandra`
          }
        ],
        startingActions: [
          {
            id: `humain`,
            title: `Humain`,
            description: `Quand vous arrivez pour la première fois dans un lieu civilisé, quelqu’un qui respecte les lois de l’hospitalité envers les ménestrels vous hébergera.`
          }
        ]
      }
    ],
    looks: [
      [
        {
          id: 'oeilcomplice',
          label: 'Œil complice'
        },
        {
          id: 'regardardent',
          label: 'Regard ardent'
        },
        {
          id: 'regardjoyeux',
          label: 'Regard joyeux'
        },
      ],
      [
        {
          id: 'coiffuresophistiquee',
          label: 'Coiffure sophistiquée'
        },
        {
          id: 'echevele',
          label: 'Echevelé'
        },
        {
          id: 'casquettealamode',
          label: 'Casquette à la mode'
        },
      ],
      [
        {
          id: 'parure',
          label: 'Parure'
        },
        {
          id: 'vetementsdevoyages',
          label: 'Vêtements de voyages'
        },
        {
          id: 'fripes',
          label: 'Fripes'
        },
      ],
      [
        {
          id: 'enforme',
          label: 'En forme'
        },
        {
          id: 'biennourri',
          label: 'Bien nourri'
        },
        {
          id: 'mince',
          label: 'Mince'
        },
      ]
    ],
    baseHP: 6,
    damage: 6,
    startingActions: [
      {
        id: `artsarcaniques`,
        title: `Arts arcaniques`,
        description: `Quand la magie de votre spectacle se matérialise, choisissez un allié et un effet :<ul><li>Soignez 1d8 dégâts.</li><li>Ajoutez 1d4 aux prochains dégâts qu’il inflige.</li><li>Son esprit est libéré d’un enchantement.</li><li>La prochaine fois qu’on l’aide, il reçoit +2 au lieu de +1.</li><ul>Puis, lancez 2d6+CHA. Sur 10+, l’allié bénéficie de l’effet choisi. Sur 7-9, votre magie fonctionne mais vous attirez une attention malvenue ou votre sort se propage à d’autres cibles (au choix du MJ) et les affecte également.`
      },
      {
        id: `unhavredanslatempete`,
        title: `Un havre dans la tempête`,
        description: `Lorsque vous revenez dans un lieu civilisé que vous avez déjà visité, indiquez au MJ à quand remonte votre dernier passage. Il vous dira en quoi ce lieu a changé depuis.`
      },
      {
        id: `legendesdesbardes`,
        title: `Légendes des bardes`,
        description: `Choisissez un domaine de connaissance. Lorsque vous découvrez ou rencontrez pour la première fois un objet, un lieu ou une créature importants de votre domaine de connaissance, vous pouvez poser une question à son sujet au MJ. Le MJ répondra sincèrement. Il peut alors vous demander dans quel récit, quelle chanson ou légende, vous avez trouvé cette information.`,
        choices : [
          {
            id: `sortsmagie`,
            title: `Sorts & magie`
          },
          {
            id: `mortsetmortsvivants`,
            title: `Morts et morts-vivants`
          },
          {
            id: `grandsevenementsdumondeconnu`,
            title: `Grands évènements du monde connu`
          },
          {
            id: `bestiairedescreaturesinhabituelles`,
            title: `Bestiaire des créatures inhabituelles`
          },
          {
            id: `spheresplanaires`,
            title: `Sphères planaires`
          },
          {
            id: `legendesdesherosdupasse`,
            title: `Légendes des héros du passé`
          },
          {
            id: `lesdieuxetleursserviteurs`,
            title: `Les dieux et leurs serviteurs`
          }
        ]
      },
      {
        id: `charmantetsincere`,
        title: `Charmant et sincère`,
        description: `Quand vous discutez franchement avec quelqu’un, vous pouvez poser une question de la liste ci-dessous à son joueur (MJ compris). Il doit répondre sincèrement et peut à son tour vous poser une question de la liste, à laquelle vous devez répondre sincèrement.<ul><li>Qui sers-tu ?</li><li>Que souhaiterais-tu que je fasse ?</li><li>Comment pourrais-je t’amener à (faire)_______ ?</li><li>Que ressens-tu vraiment en ce moment ?</li><li>Que désires-tu le plus ?</li></ul>`
      }
    ],
    alinements: [
      {
        id: `bon`,
        title: `Bon`,
        description: `Exercer son art pour aider autrui.`
      },
      {
        id: `neutre`,
        title: `Neutre`,
        description: `Désamorcer une situation tendue ou éviter un conflit.`
      },
      {
        id: `chaotique`,
        title: `Chaotique`,
        description: `Pousser autrui à une action décisive et irréfléchie.`
      }
    ],
    maxWeight: 9,
    equipments: [
      {
        label: `Des rations (5 utilisations, 1 poids)`
      },
      {
        choices: [
          {
            label: `Mandoline de votre père, réparée`
          },
          {
            label: `Splendide luth, cadeau d’une noble personne`
          },
          {
            label: `Flûte de votre première sérénade`
          },
          {
            label: `Cor, volé`
          },
          {
            label: `Violon, jamais servi`
          },
          {
            label: `Livret de chants écrit dans une langue oubliée`
          }
        ]
      },
      {
        choices: [
          {
            label: `Armure de cuir (1 armure, 1 poids)`
          },
          {
            label: `Habits tape-à-l’œil (0 poids)`
          }
        ]
      },
      {
        choices: [
          {
            label: `Rapière de duelliste (proche, précis, 2 poids)`
          },
          {
            label: `Epée courte (proche, 1 poids), arc rudimentaire (courte, 2 poids), flèches (3 munitions, 1 poids)`
          }
        ]
      },
      {
        choices: [
          {
            label: `Sac d’aventurier (1 poids)`
          },
          {
            label: `Bandages (0 poids)`
          },
          {
            label: `Herbe de Halfelin (0 poids)`
          },
          {
            label: `3 Po`
          }
        ]
      }
    ],
    bonds: [
      {
        label: `Ce n’est pas ma première aventure avec ___.`
      },
      {
        label: `J’ai chanté des histoires sur ___ bien avant de le connaître.`
      },
      {
        label: `___ est souvent l’objet de mes plaisanteries.`
      },
      {
        label: `J’écris une ballade sur les aventures de ___.`
      },
      {
        label: `___ m’a confié un secret.`
      },
      {
        label: `___ n’a pas confiance en moi et à juste titre.`
      }
    ]
  }
];
