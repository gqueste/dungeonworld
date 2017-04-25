export const Guerrier = {
  id: 'guerrier',
  label: 'Le guerrier',
  description: `C’est un boulot ingrat de se jeter, bille en tête, au cœur du danger et de ne devoir sa vie qu’à son armure et à son habileté. Ils ne chanteront pas vos louanges pour ce coup de couteau dans les côtes, pris à leur place dans cette taverne de Fricbourg. Pas de chœurs angéliques, non plus, pour les avoir tirés, encore hurlants, des Puits de la Folie.<br>Qu’importe ! Vous faites ça pour le courage et la gloire. Pour la clameur et la fureur des batailles.<br>Vous êtes une bête de fer. Tout en vous est acier. Tandis qu’autour du feu de camp, vos compagnons de route se plaignent de leurs blessures, vous arborez vos cicatrices avec fierté.<br>Vous êtes le mur contre lequel le danger vient s’anéantir.<br>Au final, vous serez le dernier debout.`,
  races: [
    {
      id: `guerrier_nain`,
      label: `Nain`,
      names : [
        {
          id: `guerrier_ozruk`,
          label: `Ozruk`
        },
        {
          id: `guerrier_surtur`,
          label: `Surtur`
        },
        {
          id: `guerrier_brunhilda`,
          label: `Brunhilda`
        },
        {
          id: `guerrier_annika`,
          label: `Annika`
        },
        {
          id: `guerrier_janos`,
          label: `Janos`
        },
        {
          id: `guerrier_greta`,
          label: `Greta`
        },
        {
          id: `guerrier_dim`,
          label: `Dim`
        },
        {
          id: `guerrier_rundrig`,
          label: `Rundrig`
        },
        {
          id: `guerrier_jarl`,
          label: `Jarl`
        },
        {
          id: `guerrier_xotoq`,
          label: `Xotoq`
        }
      ],
      startingActions: [
        {
          id: `guerrier_nain`,
          title: `Nain`,
          description: `Quand vous trinquez avec quelqu’un, vous négociez avec CON au lieu de CHA.`
        }
      ]
    },
    {
      id: `guerrier_elfe`,
      label: `Elfe`,
      names : [
        {
          id: `guerrier_elohiir`,
          label: `Elohiir`
        },
        {
          id: `guerrier_saraseth`,
          label: `Saraseth`
        },
        {
          id: `guerrier_hasrith`,
          label: `Hasrith`
        },
        {
          id: `guerrier_shevaral`,
          label: `Shevaral`
        },
        {
          id: `guerrier_cadeus`,
          label: `Cadeus`
        },
        {
          id: `guerrier_eldar`,
          label: `Eldar`
        },
        {
          id: `guerrier_kithracet`,
          label: `Kithracet`
        },
        {
          id: `guerrier_thelian`,
          label: `Thelian`
        }
      ],
      startingActions: [
        {
          id: `guerrier_elfe`,
          title: `Elfe`,
          description: `Choisissez une arme. Traitez toutes les armes de ce type comme si elles avaient le marqueur précis.`
        }
      ]
    },
    {
      id: `guerrier_halfelin`,
      label: `Halfelin`,
      names : [
        {
          id: `guerrier_finnegan`,
          label: `Finnegan`
        },
        {
          id: `guerrier_olive`,
          label: `Olive`
        },
        {
          id: `guerrier_randolph`,
          label: `Randolph`
        },
        {
          id: `guerrier_bartelby`,
          label: `Bartelby`
        },
        {
          id: `guerrier_aubrey`,
          label: `Aubrey`
        },
        {
          id: `guerrier_balDungeon`,
          label: `BalDungeon`
        },
        {
          id: `guerrier_worldin`,
          label: `Worldin`
        },
        {
          id: `guerrier_becca`,
          label: `Becca`
        }
      ],
      startingActions: [
        {
          id: `guerrier_halfelin`,
          title: `Halfelin`,
          description: `Quand vous défiez le danger en profitant de votre petite taille, vous recevez +1 à votre jet.`
        }
      ]
    },
    {
      id: `guerrier_humain`,
      label: `Humain`,
      names : [
        {
          id: `guerrier_hawke`,
          label: `Hawke`
        },
        {
          id: `guerrier_rudiger`,
          label: `Rudiger`
        },
        {
          id: `guerrier_gregor`,
          label: `Gregor`
        },
        {
          id: `guerrier_brianne`,
          label: `Brianne`
        },
        {
          id: `guerrier_walton`,
          label: `Walton`
        },
        {
          id: `guerrier_castor`,
          label: `Castor`
        },
        {
          id: `guerrier_shanna`,
          label: `Shanna`
        },
        {
          id: `guerrier_ajax`,
          label: `Ajax`
        },
        {
          id: `guerrier_hob`,
          label: `Hob`
        }
      ],
      startingActions: [
        {
          id: `guerrier_humain`,
          title: `Humain`,
          description: `Une fois par combat vous pouvez relancer un jet de dégâts, le vôtre ou celui de quelqu’un d’autre.`
        }
      ]
    }
  ],
  looks: [
    [
      {
        id: 'guerrier_regarddur',
        label: 'Regard dur'
      },
      {
        id: 'guerrier_regardmort',
        label: 'Regard mort'
      },
      {
        id: 'guerrier_yeuximpatients',
        label: 'Yeux impatients'
      }
    ],
    [
      {
        id: 'guerrier_echevele',
        label: 'Echevelé'
      },
      {
        id: 'guerrier_tondu',
        label: 'Tondu'
      },
      {
        id: 'guerrier_casquecabosse',
        label: 'Casque cabossé'
      }
    ],
    [
      {
        id: 'guerrier_peaucalleuse',
        label: 'Peau calleuse'
      },
      {
        id: 'guerrier_peaubronzee',
        label: 'Peau bronzée'
      },
      {
        id: 'guerrier_cicatrices',
        label: 'Cicatrices'
      }
    ],
    [
      {
        id: 'guerrier_costaud',
        label: 'Costaud'
      },
      {
        id: 'guerrier_corpssouple',
        label: 'Corps souple'
      },
      {
        id: 'guerrier_corpsravage',
        label: 'Corps ravagé'
      }
    ]
  ],
  baseHP : 10,
  damage: 10,
  startingActions : [
    {
      id: `guerrier_forcerportesetherses`,
      title: `Forcer portes et herses`,
      description: `Quand vous utilisez la force brute pour détruire un obstacle inanimé, lancez 2d6+FOR. Sur 10+ choisissez 3, sur 7-9, choisissez 2.<ul><li>Ça ne prend pas longtemps.</li><li>Rien de valeur n’est endommagé.</li><li>Cela ne fait pas un bruit énorme.</li><li>Vous pouvez réparer ça sans trop d’effort.</li></ul>`
    },
    {
      id: `guerrier_cuirasse`,
      title: `Cuirassé`,
      description: `Ignorez l’encombrement des armures que vous portez.`
    },
    {
      id: `guerrier_armefetiche`,
      title: `Arme fétiche`,
      description: `C’est votre arme. Beaucoup lui ressemblent, mais celle-là, c’est la vôtre. Votre arme est votre meilleure amie. Votre vie en dépend. Vous en êtes maître au même titre que votre vie. Sans vous, elle est inutile et réciproquement. Vous devez la brandir pour de bon Choisissez une arme - elles pèsent toutes 2 poids : <ul><li>Épée</li><li>Hache</li><li>Marteau</li><li>Fléau</li><li>Épieu</li><li>Poings</li></ul>Choisissez une portée qui corresponde le mieux :<ul><li>Contact</li><li>Proche</li><li>Allonge</li></ul>Choisissez deux améliorations :<ul><li>Crochets et pointes. +1 dégâts, mais +1 poids.</li><li>Acérée. +2 perforant.</li><li>Parfaitement équilibrée. Ajouter précis.</li><li>Dentelée. +1 dégâts.</li><li>Brille en présence d’un type de créature de votre choix.</li><li>Énorme. Ajouter dévastateur et puissant.</li><li>Tous usages. Choisissez une portée supplémentaire.</li><li>Excellente facture. -1 Poids</li></ul>Choisissez une apparence :<ul><li>Ancienne</li><li>Immaculée</li><li>Ouvragée</li><li>Sinistre</li><li>Tachée de sang</li></ul>Votre arme fétiche est spéciale. Ce n’est pas un objet ordinaire. A moins que vous n’entrepreniez quelque chose qui lui fasse courir un risque, elle ne vous quittera jamais de façon permanente même si parfois il vous faudra vous décarcasser pour la retrouver.`
    }
  ],
  alignments: [
    {
      id: `guerrier_bon`,
      title: `Bon`,
      description: `Défendre les plus faibles que soi.`
    },
    {
      id: `guerrier_neutre`,
      title: `Neutre`,
      description: `Vaincre un adversaire de valeur.`
    },
    {
      id: `guerrier_chaotique`,
      title: `Chaotique`,
      description: `Tuer un adversaire sans défense.`
    }
  ],
  maxWeight: 12,
  equipments: [
    {
      id: 'guerrier_fetiche',
      label: `Votre arme fétiche`
    },
    {
      id: 'guerrier_rations',
      label: `Des rations (5 utilisations, 1 poids).`
    },
    {
      choices: [
        {
          id: 'guerrier_cotte',
          label: `Cotte de mailles (1 armure, 1 poids) ainsi qu’un sac d’aventurier (1 poids)`
        },
        {
          id: 'guerrier_armure',
          label: `Armure d’écailles (2 armure, 3 poids)`
        }
      ]
    },
    {
      choices: [
        {
          id: 'guerrier_bouclier1',
          label: `Bouclier (+1 armure, 2 poids)`
        },
        {
          id: 'guerrier_potions1',
          label: `2 potions de soins (0 poids)`
        },
        {
          id: 'guerrier_antidote1',
          label: `Antidote, rations (1 poids), herbes et cataplasmes (1 poids)`
        },
        {
          id: 'guerrier_po1',
          label: `22 Po`
        }
      ]
    },
    {
      choices: [
        {
          id: 'guerrier_bouclier2',
          label: `Bouclier (+1 armure, 2 poids)`
        },
        {
          id: 'guerrier_potions2',
          label: `2 potions de soins (0 poids)`
        },
        {
          id: 'guerrier_antidote2',
          label: `Antidote, rations (1 poids), herbes et cataplasmes (1 poids)`
        },
        {
          id: 'guerrier_po2',
          label: `22 Po`
        }
      ]
    }
  ],
  bonds: [
    {
      label: `___ me doit la vie qu’il l’admette ou pas.`
    },
    {
      label: `J’ai juré de protéger ___.`
    },
    {
      label: `Je me fais du souci sur la capacité de ___ à survivre dans un donjon.`
    },
    {
      label: `___ est un mollasson, mais je vais en faire un dur à cuire, comme moi.`
    }
  ]
}
