export const Barde = {
  id: 'barde',
  label: 'Le barde',
  description: `Les poèmes disent que la vie d'aventurier est une route pavée de gloire, de fortune et de combats. Les histoires racontées dans toutes les tavernes de campagne doivent bien avoir un fond de vérité, n'est ce pas ? Les chansons qui inspirent les humbles comme les têtes couronnées, qui calment les bêtes sauvages ou rendent les hommes furieux doivent bien venir de quelque part. Voici le barde. Vous. La voix enjôleuse et la répartie facile.<br>Vous. Chanteur et conteur hors pair.<br>N’importe quel ménestrel peut réciter une fable, seul un vrai barde peut la vivre. Enfilez vos bottes, noble orateur. Aiguisez cette dague discrète et relevez le défi. Quelqu’un doit se trouver là, coude à coude avec les gros bras, les voyous et la graine de héros. Qui, mieux que vous, pour relater vos exploits ? Personne`,
  races: [
    {
      id: `barde_elfe`,
      label: `Elfe`,
      names : [
        {
          id: `barde_astrafel`,
          label: `Astrafel`
        },
        {
          id: `barde_daelwyn`,
          label: `Daelwyn`
        },
        {
          id: `barde_feliana`,
          label: `Feliana`
        },
        {
          id: `barde_damarra`,
          label: `Damarra`
        },
        {
          id: `barde_sistranalle`,
          label: `Sistranalle`
        },
        {
          id: `barde_pendrell`,
          label: `Pendrell`
        },
        {
          id: `barde_melliandre`,
          label: `Melliandre`
        },
        {
          id: `barde_dagoliir`,
          label: `Dagoliir`
        }
      ],
      startingActions: [
        {
          id: `barde_elfe`,
          title: `Elfe`,
          description: `Lorsque vous arrivez à un endroit important (à vous de décider), vous pouvez demander au MJ de vous raconter un fait de l’histoire de ce lieu.`
        }
      ]
    },
    {
      id: `barde_humain`,
      label: `Humain`,
      names : [
        {
          id: `barde_baldric`,
          label: `Baldric`
        },
        {
          id: `barde_leena`,
          label: `Leena`
        },
        {
          id: `barde_dunwick`,
          label: `Dunwick`
        },
        {
          id: `barde_willem`,
          label: `Willem`
        },
        {
          id: `barde_edungeonworldyn`,
          label: `EDungeon Worldyn`
        },
        {
          id: `barde_florian`,
          label: `Florian`
        },
        {
          id: `barde_angélique`,
          label: `Angélique`
        },
        {
          id: `barde_quorra`,
          label: `Quorra`
        },
        {
          id: `barde_charlotte`,
          label: `Charlotte`
        },
        {
          id: `barde_lili`,
          label: `Lili`
        },
        {
          id: `barde_raymonde`,
          label: `Raymonde`
        },
        {
          id: `barde_cassandra`,
          label: `Cassandra`
        }
      ],
      startingActions: [
        {
          id: `barde_humain`,
          title: `Humain`,
          description: `Quand vous arrivez pour la première fois dans un lieu civilisé, quelqu’un qui respecte les lois de l’hospitalité envers les ménestrels vous hébergera.`
        }
      ]
    }
  ],
  looks: [
    [
      {
        id: 'barde_oeilcomplice',
        label: 'Œil complice'
      },
      {
        id: 'barde_regardardent',
        label: 'Regard ardent'
      },
      {
        id: 'barde_regardjoyeux',
        label: 'Regard joyeux'
      },
    ],
    [
      {
        id: 'barde_coiffuresophistiquee',
        label: 'Coiffure sophistiquée'
      },
      {
        id: 'barde_echevele',
        label: 'Echevelé'
      },
      {
        id: 'barde_casquettealamode',
        label: 'Casquette à la mode'
      },
    ],
    [
      {
        id: 'barde_parure',
        label: 'Parure'
      },
      {
        id: 'barde_vetementsdevoyages',
        label: 'Vêtements de voyages'
      },
      {
        id: 'barde_fripes',
        label: 'Fripes'
      },
    ],
    [
      {
        id: 'barde_enforme',
        label: 'En forme'
      },
      {
        id: 'barde_biennourri',
        label: 'Bien nourri'
      },
      {
        id: 'barde_mince',
        label: 'Mince'
      },
    ]
  ],
  baseHP: 6,
  damage: 6,
  startingActions: [
    {
      id: `barde_artsarcaniques`,
      title: `Arts arcaniques`,
      description: `Quand la magie de votre spectacle se matérialise, choisissez un allié et un effet :<ul><li>Soignez 1d8 dégâts.</li><li>Ajoutez 1d4 aux prochains dégâts qu’il inflige.</li><li>Son esprit est libéré d’un enchantement.</li><li>La prochaine fois qu’on l’aide, il reçoit +2 au lieu de +1.</li></ul>Puis, lancez 2d6+CHA. Sur 10+, l’allié bénéficie de l’effet choisi. Sur 7-9, votre magie fonctionne mais vous attirez une attention malvenue ou votre sort se propage à d’autres cibles (au choix du MJ) et les affecte également.`
    },
    {
      id: `barde_unhavredanslatempete`,
      title: `Un havre dans la tempête`,
      description: `Lorsque vous revenez dans un lieu civilisé que vous avez déjà visité, indiquez au MJ à quand remonte votre dernier passage. Il vous dira en quoi ce lieu a changé depuis.`
    },
    {
      id: `barde_legendesdesbardes`,
      title: `Légendes des bardes`,
      description: `Choisissez un domaine de connaissance. Lorsque vous découvrez ou rencontrez pour la première fois un objet, un lieu ou une créature importants de votre domaine de connaissance, vous pouvez poser une question à son sujet au MJ. Le MJ répondra sincèrement. Il peut alors vous demander dans quel récit, quelle chanson ou légende, vous avez trouvé cette information.`,
      choices : [
        {
          id: `barde_sortsmagie`,
          description: `Sorts & magie`
        },
        {
          id: `barde_mortsetmortsvivants`,
          description: `Morts et morts-vivants`
        },
        {
          id: `barde_grandsevenementsdumondeconnu`,
          description: `Grands évènements du monde connu`
        },
        {
          id: `barde_bestiairedescreaturesinhabituelles`,
          description: `Bestiaire des créatures inhabituelles`
        },
        {
          id: `barde_spheresplanaires`,
          description: `Sphères planaires`
        },
        {
          id: `barde_legendesdesherosdupasse`,
          description: `Légendes des héros du passé`
        },
        {
          id: `barde_lesdieuxetleursserviteurs`,
          description: `Les dieux et leurs serviteurs`
        }
      ]
    },
    {
      id: `barde_charmantetsincere`,
      title: `Charmant et sincère`,
      description: `Quand vous discutez franchement avec quelqu’un, vous pouvez poser une question de la liste ci-dessous à son joueur (MJ compris). Il doit répondre sincèrement et peut à son tour vous poser une question de la liste, à laquelle vous devez répondre sincèrement.<ul><li>Qui sers-tu ?</li><li>Que souhaiterais-tu que je fasse ?</li><li>Comment pourrais-je t’amener à (faire)_______ ?</li><li>Que ressens-tu vraiment en ce moment ?</li><li>Que désires-tu le plus ?</li></ul>`
    }
  ],
  alignments: [
    {
      id: `barde_bon`,
      title: `Bon`,
      description: `Exercer son art pour aider autrui.`
    },
    {
      id: `barde_neutre`,
      title: `Neutre`,
      description: `Désamorcer une situation tendue ou éviter un conflit.`
    },
    {
      id: `barde_chaotique`,
      title: `Chaotique`,
      description: `Pousser autrui à une action décisive et irréfléchie.`
    }
  ],
  maxWeight: 9,
  equipments: [
    {
      id: 'barde_rations',
      label: `Des rations (5 utilisations, 1 poids)`
    },
    {
      choices: [
        {
          id: 'barde_mandoline',
          label: `Mandoline de votre père, réparée`
        },
        {
          id: 'barde_luth',
          label: `Splendide luth, cadeau d’une noble personne`
        },
        {
          id: 'barde_flute',
          label: `Flûte de votre première sérénade`
        },
        {
          id: 'barde_cor',
          label: `Cor, volé`
        },
        {
          id: 'barde_violon',
          label: `Violon, jamais servi`
        },
        {
          id: 'barde_chants',
          label: `Livret de chants écrit dans une langue oubliée`
        }
      ]
    },
    {
      choices: [
        {
          id: 'barde_armure',
          label: `Armure de cuir (1 armure, 1 poids)`
        },
        {
          id: 'barde_habits',
          label: `Habits tape-à-l’œil (0 poids)`
        }
      ]
    },
    {
      choices: [
        {
          id: 'barde_rapiere',
          label: `Rapière de duelliste (proche, précis, 2 poids)`
        },
        {
          id: 'barde_epee',
          label: `Epée courte (proche, 1 poids), arc rudimentaire (courte, 2 poids), flèches (3 munitions, 1 poids)`
        }
      ]
    },
    {
      choices: [
        {
          id: 'barde_sac',
          label: `Sac d’aventurier (1 poids)`
        },
        {
          id: 'barde_bandages',
          label: `Bandages (0 poids)`
        },
        {
          id: 'barde_herbe',
          label: `Herbe de Halfelin (0 poids)`
        },
        {
          id: 'barde_po',
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
