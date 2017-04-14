export const Guerrier = {
  id: 'guerrier',
  label: 'Le guerrier',
  description: `C’est un boulot ingrat de se jeter, bille en tête, au cœur du danger et de ne devoir sa vie qu’à son armure et à son habileté. Ils ne chanteront pas vos louanges pour ce coup de couteau dans les côtes, pris à leur place dans cette taverne de Fricbourg. Pas de chœurs angéliques, non plus, pour les avoir tirés, encore hurlants, des Puits de la Folie.<br>Qu’importe ! Vous faites ça pour le courage et la gloire. Pour la clameur et la fureur des batailles.<br>Vous êtes une bête de fer. Tout en vous est acier. Tandis qu’autour du feu de camp, vos compagnons de route se plaignent de leurs blessures, vous arborez vos cicatrices avec fierté.<br>Vous êtes le mur contre lequel le danger vient s’anéantir.<br>Au final, vous serez le dernier debout.`,
  races: [
    {
      id: `nain`,
      label: `Nain`,
      names : [
        {
          id: `ozruk`,
          label: `Ozruk`
        },
        {
          id: `surtur`,
          label: `Surtur`
        },
        {
          id: `brunhilda`,
          label: `Brunhilda`
        },
        {
          id: `annika`,
          label: `Annika`
        },
        {
          id: `janos`,
          label: `Janos`
        },
        {
          id: `greta`,
          label: `Greta`
        },
        {
          id: `dim`,
          label: `Dim`
        },
        {
          id: `rundrig`,
          label: `Rundrig`
        },
        {
          id: `jarl`,
          label: `Jarl`
        },
        {
          id: `xotoq`,
          label: `Xotoq`
        }
      ],
      startingActions: [
        {
          id: `nain`,
          title: `Nain`,
          description: `Quand vous trinquez avec quelqu’un, vous négociez avec CON au lieu de CHA.`
        }
      ]
    },
    {
      id: `elfe`,
      label: `Elfe`,
      names : [
        {
          id: `elohiir`,
          label: `Elohiir`
        },
        {
          id: `saraseth`,
          label: `Saraseth`
        },
        {
          id: `hasrith`,
          label: `Hasrith`
        },
        {
          id: `shevaral`,
          label: `Shevaral`
        },
        {
          id: `cadeus`,
          label: `Cadeus`
        },
        {
          id: `eldar`,
          label: `Eldar`
        },
        {
          id: `kithracet`,
          label: `Kithracet`
        },
        {
          id: `thelian`,
          label: `Thelian`
        }
      ],
      startingActions: [
        {
          id: `elfe`,
          title: `Elfe`,
          description: `Choisissez une arme. Traitez toutes les armes de ce type comme si elles avaient le marqueur précis.`
        }
      ]
    },
    {
      id: `halfelin`,
      label: `Halfelin`,
      names : [
        {
          id: `Finnegan`,
          label: `Finnegan`
        },
        {
          id: `Olive`,
          label: `Olive`
        },
        {
          id: `Randolph`,
          label: `Randolph`
        },
        {
          id: `Bartelby`,
          label: `Bartelby`
        },
        {
          id: `Aubrey`,
          label: `Aubrey`
        },
        {
          id: `BalDungeon`,
          label: `BalDungeon`
        },
        {
          id: `Worldin`,
          label: `Worldin`
        },
        {
          id: `Becca`,
          label: `Becca`
        }
      ],
      startingActions: [
        {
          id: `halfelin`,
          title: `Halfelin`,
          description: `Quand vous défiez le danger en profitant de votre petite taille, vous recevez +1 à votre jet.`
        }
      ]
    },
    {
      id: `humain`,
      label: `Humain`,
      names : [
        {
          id: `hawke`,
          label: `Hawke`
        },
        {
          id: `rudiger`,
          label: `Rudiger`
        },
        {
          id: `gregor`,
          label: `Gregor`
        },
        {
          id: `brianne`,
          label: `Brianne`
        },
        {
          id: `walton`,
          label: `Walton`
        },
        {
          id: `castor`,
          label: `Castor`
        },
        {
          id: `shanna`,
          label: `Shanna`
        },
        {
          id: `ajax`,
          label: `Ajax`
        },
        {
          id: `hob`,
          label: `Hob`
        }
      ],
      startingActions: [
        {
          id: `humain`,
          title: `Humain`,
          description: `Une fois par combat vous pouvez relancer un jet de dégâts, le vôtre ou celui de quelqu’un d’autre.`
        }
      ]
    }
  ],
  looks: [
    [
      {
        id: 'regarddur',
        label: 'Regard dur'
      },
      {
        id: 'regardmort',
        label: 'Regard mort'
      },
      {
        id: 'yeuximpatients',
        label: 'Yeux impatients'
      }
    ],
    [
      {
        id: 'echevele',
        label: 'Echevelé'
      },
      {
        id: 'tondu',
        label: 'Tondu'
      },
      {
        id: 'casquecabosse',
        label: 'Casque cabossé'
      }
    ],
    [
      {
        id: 'peaucalleuse',
        label: 'Peau calleuse'
      },
      {
        id: 'peaubronzee',
        label: 'Peau bronzée'
      },
      {
        id: 'cicatrices',
        label: 'Cicatrices'
      }
    ],
    [
      {
        id: 'costaud',
        label: 'Costaud'
      },
      {
        id: 'corpssouple',
        label: 'Corps souple'
      },
      {
        id: 'corpsravage',
        label: 'Corps ravagé'
      }
    ]
  ],
  baseHP : 10,
  damage: 10,
  startingActions : [
    {
      id: `forcerportesetherses`,
      title: `Forcer portes et herses`,
      description: `Quand vous utilisez la force brute pour détruire un obstacle inanimé, lancez 2d6+FOR. Sur 10+ choisissez 3, sur 7-9, choisissez 2.<ul><li>Ça ne prend pas longtemps.</li><li>Rien de valeur n’est endommagé.</li><li>Cela ne fait pas un bruit énorme.</li><li>Vous pouvez réparer ça sans trop d’effort.</li></ul>`
    },
    {
      id: `cuirasse`,
      title: `Cuirassé`,
      description: `Ignorez l’encombrement des armures que vous portez.`
    },
    {
      id: `armefetiche`,
      title: `Arme fétiche`,
      description: `C’est votre arme. Beaucoup lui ressemblent, mais celle-là, c’est la vôtre. Votre arme est votre meilleure amie. Votre vie en dépend. Vous en êtes maître au même titre que votre vie. Sans vous, elle est inutile et réciproquement. Vous devez la brandir pour de bon Choisissez une arme - elles pèsent toutes 2 poids : Épée Hache Marteau Fléau Épieu Poings Choisissez une portée qui corresponde le mieux : Contact Proche Allonge Choisissez deux améliorations : Crochets et pointes. +1 dégâts, mais +1 poids. Acérée. +2 perforant. Parfaitement équilibrée. Ajouter précis. Dentelée. +1 dégâts. Brille en présence d’un type de créature de votre choix. Énorme. Ajouter dévastateur et puissant. Tous usages. Choisissez une portée supplémentaire. Excellente facture. -1 Poids Choisissez une apparence : Ancienne Immaculée Ouvragée Sinistre Tachée de sang Votre arme fétiche est spéciale. Ce n’est pas un objet ordinaire. A moins que vous n’entrepreniez quelque chose qui lui fasse courir un risque, elle ne vous quittera jamais de façon permanente même si parfois il vous faudra vous décarcasser pour la retrouver.`
    }
  ],
  alignments: [
    {
      id: `bon`,
      title: `Bon`,
      description: `Défendre les plus faibles que soi.`
    },
    {
      id: `neutre`,
      title: `Neutre`,
      description: `Vaincre un adversaire de valeur.`
    },
    {
      id: `chaotique`,
      title: `Chaotique`,
      description: `Tuer un adversaire sans défense.`
    }
  ],
  maxWeight: 12,
  equipments: [
    {
      label: `Votre arme fétiche`
    },
    {
      label: `Des rations (5 utilisations, 1 poids).`
    },
    {
      choices: [
        {
          label: `Cotte de mailles (1 armure, 1 poids) ainsi qu’un sac d’aventurier (1 poids)`
        },
        {
          label: `Armure d’écailles (2 armure, 3 poids)`
        }
      ]
    },
    {
      choices: [
        {
          label: `Bouclier (+1 armure, 2 poids)`
        },
        {
          label: `2 potions de soins (0 poids)`
        },
        {
          label: `Antidote, rations (1 poids), herbes et cataplasmes (1 poids)`
        },
        {
          label: `22 Po`
        }
      ]
    },
    {
      choices: [
        {
          label: `Bouclier (+1 armure, 2 poids)`
        },
        {
          label: `2 potions de soins (0 poids)`
        },
        {
          label: `Antidote, rations (1 poids), herbes et cataplasmes (1 poids)`
        },
        {
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
