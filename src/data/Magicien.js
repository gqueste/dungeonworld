export const Magicien = {
  id: 'magicien',
  label: 'Le magicien',
  description: `Le monde de Dungeon World a ses lois. Pas celles des hommes ou d’un quelconque tyran. De plus grandes, de meilleures lois. Si vous lâchez quelque chose, ça tombe. Rien ne se crée, rien ne se perd. Les morts ne se relèvent pas, pour sûr. Oh... ce qu’on peut bien se raconter pour se rassurer dans l’obscurité. Vous avez bûché dur sur vos bouquins. Les expériences vous ont rendu presque fou, les invocations manquées ont mis en danger jusqu’à votre âme. Pour quoi ? Le Pouvoir. Quoi d’autre ? Pas le pouvoir d’un roi ou d’une nation, mais celui de faire bouillir le sang d’un homme, d’invoquer le tonnerre du ciel, le grondement de la terre en colère, celui de faire fi des lois auxquelles tous tiennent tant. Laissez-les vous regarder de travers, vous appeler, « sorcier » ou « diabolique ». Lequel d’entre eux peut lancer des boules de feu d’un regard ? Ouais... À qui le dites-vous...`,
  races: [
    {
      id: `elfe`,
      label: `Elfe`,
      names : [
        {
          id: `galadiir`,
          label: `Galadiir`
        },
        {
          id: `fenfaril`,
          label: `Fenfaril`
        },
        {
          id: `lilliastre`,
          label: `Lilliastre`
        },
        {
          id: `phirosalle`,
          label: `Phirosalle`
        },
        {
          id: `enkirash`,
          label: `Enkirash`
        },
        {
          id: `halwyr`,
          label: `Halwyr`
        }
      ],
      startingActions: [
        {
          id: `elfe`,
          title: `Elfe`,
          description: `La magie est pour vous aussi naturelle que la respiration. Vous préparez Détecter la Magie comme si c’était un sort mineur.`
        }
      ]
    },
    {
      id: `humain`,
      label: `Humain`,
      names : [
        {
          id: `avon`,
          label: `Avon`
        },
        {
          id: `morgan`,
          label: `Morgan`
        },
        {
          id: `rath`,
          label: `Rath`
        },
        {
          id: `ysolde`,
          label: `Ysolde`
        },
        {
          id: `ovide`,
          label: `Ovide`
        },
        {
          id: `vitus`,
          label: `Vitus`
        },
        {
          id: `aldara`,
          label: `Aldara`
        },
        {
          id: `xeno`,
          label: `Xeno`
        },
        {
          id: `uri`,
          label: `Uri`
        }
      ],
      startingActions: [
        {
          id: `humain`,
          title: `Humain`,
          description: `Choisissez un sort de Clerc. Vous pouvez lancer ce sort comme s’il s’agissait d’un sort de Magicien.`
        }
      ]
    }
  ],
  looks: [
    [
      {
        id: 'yeuxhagards',
        label: 'Yeux hagards'
      },
      {
        id: 'yeuxpercants',
        label: 'Yeux perçants'
      },
      {
        id: 'regardfou',
        label: 'Regard fou'
      }
    ],
    [
      {
        id: 'coiffureappretee',
        label: 'Coiffure apprêtée'
      },
      {
        id: 'cheveuxpetard',
        label: 'Cheveux en pétard'
      },
      {
        id: 'chapeaupointu',
        label: 'Chapeau pointu'
      }
    ],
    [
      {
        id: 'vetementsuses',
        label: 'Vêtements usés'
      },
      {
        id: 'vetementselegants',
        label: 'Vêtements élégants'
      },
      {
        id: 'vetementsetranges',
        label: 'Vêtements étranges'
      }
    ],
    [
      {
        id: 'bienenchair',
        label: 'Bien en chair'
      },
      {
        id: 'allureeffrayante',
        label: 'Allure effrayante'
      },
      {
        id: 'maigre',
        label: 'Maigre'
      }
    ]
  ],
  baseHP : 4,
  damage: 4,
  startingActions : [
    {
      id: `grimoire`,
      title: `Grimoire`,
      description: `Vous avez maîtrisé plusieurs sorts et les avez inscrits dans votre grimoire. Vous commencez avec 3 sorts de niveau 1 et les sorts mineurs. Dès que vous montez d’un niveau, vous ajoutez un nouveau sort de votre niveau ou moins à votre grimoire. Votre grimoire pèse 1 poids.`
    },
    {
      id: `preparerdessorts`,
      title: `Préparer des sorts`,
      description: `Quand vous consacrez un moment ininterrompu (environ 1 heure) à l'apprentissage tranquille de votre grimoire : <ul><li>vous perdez tous les sorts que vous aviez préparés,</li><li>vous préparez de nouveaux sorts choisis dans votre grimoire dont le niveau total ne peut pas dépasser votre propre niveau+1,</li><li>vous préparez aussi tous vos sorts mineurs qui ne comptent jamais dans la limite de niveau de sorts.</li></ul>`
    },
    {
      id: `lancersort`,
      title: `Lancer un sort`,
      description: `Quand vous lancez un sort que vous avez préparé, lancez 2d6+INT. Sur 10+ vous lancez le sort avec succès et vous ne l’oubliez pas. Sur 7-9, le sort est lancé mais choisissez une option : <ul><li>Vous attirez une attention malvenue ou vous vous exposez (le MJ vous décrira comment).</li><li>Ce sort perturbe le tissu de la réalité : vous avez -1 continu pour lancer un sort jusqu’à ce que vous prépariez vos sorts de nouveau.</li><li>Une fois lancé, le sort est oublié. Vous ne pouvez plus le lancer tant que vous n’avez pas préparé vos sorts à nouveau.</li></ul>`
    },
    {
      id: `defensemagique`,
      title: `Défense magique`,
      description: `Vous pouvez cesser immédiatement un sort continu et utiliser l’énergie de la dissipation pour détourner une attaque. Le sort s’achève et vous soustrayez son niveau des dégâts qui vous sont infligés.`
    },
    {
      id: `rituel`,
      title: `Rituel`,
      description: `Quand vous créez un effet magique à partir d’un lieu de pouvoir, indiquez au MJ votre objectif. Les effets du rituel sont toujours possibles mais le MJ posera une à quatre des conditions suivantes :<ul><li>Ça va prendre des jours/semaines/mois.</li><li>D’abord, il te faudra________</li><li>Tu auras besoin de l’aide de________</li><li>Cela va coûter beaucoup d’argent.</li><li>Tu parviens à un effet moindre, peu fiable et limité.</li><li>Tes alliés et toi-même encourez un risque venant de________</li><li>Tu vas devoir désenchanter ________pour le faire.</li></ul>`
    }
  ],
  alignments: [
    {
      id: `bon`,
      title: `Bon`,
      description: `Utiliser la magie pour aider quelqu’un.`
    },
    {
      id: `neutre`,
      title: `Neutre`,
      description: `Percer le secret d’un mystère magique.`
    },
    {
      id: `mauvais`,
      title: `Mauvais`,
      description: `Utiliser la magie pour inspirer la terreur et la peur.`
    }
  ],
  maxWeight: 9,
  equipments: [
    {
      label: `Votre grimoire de sorts (1 poids)`
    },
    {
      label: `Des rations (5 utilisations, 1 poids).`
    },
    {
      choices: [
        {
          label: `Armure de cuir (1 armure, 1 poids)`
        },
        {
          label: `Sac de bouquins (5 utilisations, 2 poids) et 3 potions de soins`
        }
      ]
    },
    {
      choices: [
        {
          label: `Dague (contact, 1 poids)`
        },
        {
          label: `Bâton (proche, 2 mains, 1 poids)`
        }
      ]
    },
    {
      choices: [
        {
          label: `3 antidotes (0 poids)`
        },
        {
          label: `Potion de soins (0 poids)`
        }
      ]
    }
  ],
  bonds: [
    {
      label: `___ va jouer un grand rôle dans les évènements à venir ; je l’ai prévu !`
    },
    {
      label: `___ me cache un secret important.`
    },
    {
      label: `___ manque cruellement de connaissances sur ce monde ; je vais lui apprendre tout ce que je pourrai.`
    }
  ]
}