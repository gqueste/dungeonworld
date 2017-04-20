export const Immolateur = {
  id: 'immolateur',
  label: `L'immolateur`,
  description: `Tes compagnons te craignent à juste titre. Le guerrier peut bien passer à la torche un terrier de gobelins, le magicien en appeler aux élémentaires et le chaman aux esprits du feu mais ils ne t’arrivent pas à la cheville. Et pour cause : tu es le feu. Le feu qui embrasse les esprits et conduit à la révolte, le feu qui consume les cœurs de passion, le feu auquel tu sacrifies biens et victimes pour acquérir plus de puissance.<br>Tes compagnons te craignent, mais ils savent aussi qu’il vaut mieux t’avoir comme allié que comme ennemi.`,
  races: [
    {
      id: `immolateur_humain`,
      label: `Humain`,
      names : [
        {
          id: `immolateur_salomon`,
          label: `Salomon`
        },
        {
          id: `immolateur_timothy`,
          label: `Timothy`
        },
        {
          id: `immolateur_kalil`,
          label: `Kalil`
        },
        {
          id: `immolateur_omen`,
          label: `Omen`
        },
        {
          id: `immolateur_yohn`,
          label: `Yohn`
        },
        {
          id: `immolateur_hiko`,
          label: `Hiko`
        },
        {
          id: `immolateur_agasha`,
          label: `Agasha`
        },
        {
          id: `immolateur_elizabeth`,
          label: `Elizabeth`
        },
        {
          id: `immolateur_harald`,
          label: `Harald`
        },
        {
          id: `immolateur_fatia`,
          label: `Fatia`
        },
        {
          id: `immolateur_khalwa`,
          label: `Khalwa`
        },
        {
          id: `immolateur_adur`,
          label: `Adur`
        },
        {
          id: `immolateur_ignis`,
          label: `Ignis`
        },
        {
          id: `immolateur_yajna`,
          label: `Yajna`
        },
        {
          id: `immolateur_umlilo`,
          label: `Umlilo`
        }
      ],
      startingActions: [
        {
          id: `immolateur_humain`,
          title: `Humain`,
          description: `Lorsque vous montez un camp à proximité d’un grand brasier, regagnez tous vos PV.`
        }
      ]
    },
    {
      id: `immolateur_salamandre`,
      label: `Salamandre`,
      names : [
        {
          id: `immolateur_soufrecoeur`,
          label: `Soufrecœur`
        },
        {
          id: `immolateur_marcheflammes`,
          label: `Marcheflammes`
        },
        {
          id: `immolateur_ambrefouet`,
          label: `Ambrefouet`
        },
        {
          id: `immolateur_griffecendree`,
          label: `Griffecendrée`
        },
        {
          id: `immolateur_cendredemon`,
          label: `Cendredémon`
        },
        {
          id: `immolateur_suifamer`,
          label: `Suifamer`
        },
        {
          id: `immolateur_flambecolline`,
          label: `Flambecolline`
        },
        {
          id: `immolateur_brulecaille`,
          label: `Brûlécaille`
        },
        {
          id: `immolateur_mechechandelle`,
          label: `Mèchechandelle`
        },
        {
          id: `immolateur_crocharbon`,
          label: `Crocharbon`
        }
      ],
      startingActions: [
        {
          id: `immolateur_salamandre`,
          title: `Salamandre`,
          description: `La chaleur et le feu non-magiques ne peuvent vous nuire.`
        }
      ]
    }
  ],
  looks: [
    [
      {
        id: 'immolateur_regarddebraise',
        label: 'Regard de braise'
      },
      {
        id: 'immolateur_yeuxchaleureux',
        label: 'Yeux chaleureux'
      },
      {
        id: 'immolateur_regardbrulant',
        label: 'Regard brûlant'
      }
    ],
    [
      {
        id: 'immolateur_marquesetranges',
        label: 'Marques étranges'
      },
      {
        id: 'immolateur_cicatricesrituelles',
        label: 'Cicatrices rituelles'
      },
      {
        id: 'immolateur_peauimmaculee',
        label: 'Peau immaculée'
      }
    ],
    [
      {
        id: 'immolateur_allureautoritaire',
        label: 'Allure autoritaire'
      },
      {
        id: 'immolateur_conduitefrenetique',
        label: 'Conduite frénétique'
      },
      {
        id: 'immolateur_rageapeinevoilee',
        label: 'Rage à peine voilée'
      }
    ],
    [
      {
        id: 'immolateur_voixcrepitante',
        label: 'Voix crépitante'
      },
      {
        id: 'immolateur_voixmurmurante',
        label: 'Voix murmurante'
      },
      {
        id: 'immolateur_voixrugissante',
        label: 'Voix rugissante'
      }
    ]
  ],
  baseHP : 4,
  damage: 8,
  startingActions : [
    {
      id: `immolateur_tissonardent`,
      title: `Tisson ardent`,
      description: `Lorsque vous invoquez une arme de feu, lancez 2d6+CON. Sur 10+ choisissez deux des marqueurs suivants. Sur 7-9 choisissez-en un. Vous pouvez remplacer votre FOR ou votre DEX par INT pour vos attaques avec cette arme. L’arme démarre toujours avec les marqueurs enflammé, toucher, dangereux et 3 utilisations. Chaque attaque avec cette arme dépense une utilisation.<ul><li>Contact</li><li>Lancé, Courte</li><li>+1 dégâts</li><li>Retirez le marqueur dangereux</li></ul>`
    },
    {
      id: `immolateur_combattrelefeuparlefeu`,
      title: `Combattre le feu par le feu`,
      description: `Lorsque vous encaissez des dégâts (malgré l’armure) et que leur nombre est impair, votre feu intérieur vous vient en aide. Lancez 1d4 et utilisez le résultat pour augmenter le nombre d’utilisations de votre tison ardent s’il est actif, ou l’ajouter à votre prochain jet d’invocation de tison ardent ou encore réduire les dégâts de ce montant.`
    },
    {
      id: `immolateur_lamarquedezuko`,
      title: `La marque de Zuko`,
      description: `Lorsque vous pliez une flamme à votre volonté, lancez 2d6+SAG. Sur 10+ elle agit selon vos ordres et adopte la forme et le mouvement que vous souhaitez tant qu’elle a assez de combustible à brûler. Sur 7-9 l’effet ne dure qu’un moment.`
    },
    {
      id: `immolateur_allumeeeeerlefeu`,
      title: `Allumeeeeer le feu !`,
      description: `Quand vous fixez intensément le regard d’une personne, vous pouvez demander à son joueur (MJ compris) ce qui attise les flammes de son désir. Il vous répondra sincèrement, même si le personnage ne le sait pas ou le garde pour lui habituellement.`
    },
    {
      id: `immolateur_faitmain`,
      title: `Fait main`,
      description: `Vous pouvez utiliser vos mains à la place des outils et du feu pour créer des objets métalliques. Les matériaux bruts peuvent être changés en armes, armures, bijoux métalliques... Vous pouvez défaire ces objets, mais il faudra défier le danger si vous souhaitez que ce soit instantané ou sûr.`
    }
  ],
  alignments: [
    {
      id: `immolateur_mauvais`,
      title: `Mauvais`,
      description: `Sacrifier une victime non consentante aux flammes.`
    },
    {
      id: `immolateur_chaotique`,
      title: `Chaotique`,
      description: `Répandre une nouvelle idée dangereuse`
    },
    {
      id: `immolateur_neutre`,
      title: `Neutre`,
      description: `Sacrifiez volontairement quelque chose en échange d’un service rendu.`
    }
  ],
  maxWeight: 9,
  equipments: [
    {
      label: `Vous ne portez pas d’arme et n’avez pas besoin d’armure, si ce n’est votre flamme intérieure.`
    },
    {
      label: `Un symbole de vos sacrifices passés`
    },
    {
      label: `Un sac d’aventurier (5 utilisations, 1 poids)`
    },
    {
      label: `Une potion de soins (0 poids)`
    },
    {
      choices: [
        {
          label: `Rations (5 utilisations, 1 poids)`
        },
        {
          label: `Potion de soins (0 poids)`
        },
        {
          label: `10 Po`
        }
      ]
    }
  ],
  bonds: [
    {
      label: `___ a senti le contact infernal du feu et connait dorénavant ma puissance.`
    },
    {
      label: `Je vais enseigner à ___ la vraie signification du sacrifice.`
    },
    {
      label: `Je brûle quelque chose pour ___ mais lui dois toujours son dû.`
    }
  ]
}
