export const Barbare = {
  id: 'barbare',
  label: 'Le barbare',
  description: `Ceux qui t'accompagnent se disent civilisés mais ils ont inventé la servilité, l'hypocrisie et leurs cités ne sont que puanteur et maladie. Tu vas leur montrer ce que sont la liberté, la franchise de l'acier et la pureté des grands espaces.<br>Ils peuvent se contenter d'une gorgée de vin ou d'un ou deux exclaves à leur service, mais il t'en faut plus ! Ton appétit est sans fin, perpétuellement inassouvi.<br>Il te faut l'immense steppe, un rapide coursier, un faucon à ton poing et le vent dans les cheveux. Il te faut les richesses et les terres, la fortune et la gloire, écraser tes ennemis, les voir mourir devant toi et entendre les lamentations de leurs femmes.<br>Ils peuvent te combattre à cinq contre un, tenter de t'empoisonner comme des lâches qu'ils sont, passer dans ton dos pour y planter leur dague, tu les méprises. Car tout ce qui ne tue pas te rend plus fort !`,
  names: [
    {
      id: 'barbare_gorm',
      label: 'Gorm'
    },
    {
      id: 'barbare_siyi',
      label: 'Si-Yi'
    },
    {
      id: 'barbare_priscilla',
      label: 'Priscilla'
    },
    {
      id: 'barbare_sen',
      label: 'Sen'
    },
    {
      id: 'barbare_xia',
      label: 'Xia'
    },
    {
      id: 'barbare_anneira',
      label: 'Anneira'
    },
    {
      id: 'barbare_haepha',
      label: 'Haepha'
    },
    {
      id: 'barbare_lur',
      label: 'Lur'
    },
    {
      id: 'barbare_shar',
      label: 'Shar'
    },
    {
      id: 'barbare_korrin',
      label: 'Korrin'
    },
    {
      id: 'barbare_nkosi',
      label: 'Nkosi'
    },
    {
      id: 'barbare_fafnir',
      label: 'Fafnir'
    },
    {
      id: 'barbare_qua',
      label: 'Qua'
    },
    {
      id: 'barbare_sacer',
      label: 'Sacer'
    },
    {
      id: 'barbare_vercingeto',
      label: "Vercin'geto"
    },
    {
      id: 'barbare_barbozar',
      label: 'Barbozar'
    },
    {
      id: 'barbare_clovis',
      label: 'Clovis'
    },
    {
      id: 'barbare_frael',
      label: 'Frael'
    },
    {
      id: 'barbare_thraraxes',
      label: 'Thra-raxes'
    },
    {
      id: 'barbare_sillius',
      label: 'Sillius'
    },
    {
      id: 'barbare_shasheena',
      label: 'Sha-Sheena'
    },
    {
      id: 'barbare_khamisi',
      label: 'Khamisi'
    }
  ],
  races: [
    {
      id: 'barbare_human',
      label: 'Humain'
    },
    {
      id: 'barbare_elfe',
      label: 'Elfe'
    },
    {
      id: 'barbare_nain',
      label: 'Nain'
    },
    {
      id: 'barbare_halfelin',
      label: 'Halfelin'
    }
  ],
  titles: [
    {
      id: 'barbare_glorieux',
      label: 'Le Glorieux'
    },
    {
      id: 'barbare_affame',
      label: "L'Affamé"
    },
    {
      id: 'barbare_irascible',
      label: "L'Irascible"
    },
    {
      id: 'barbare_invaincu',
      label: "L'Invaincu"
    },
    {
      id: 'barbare_vorace',
      label: 'Le Vorace'
    },
    {
      id: 'barbare_broyeur',
      label: "Le Broyeur d'Ennemis"
    },
    {
      id: 'barbare_briseurdos',
      label: "Le Briseur d'Os"
    },
    {
      id: 'barbare_joyeux',
      label: 'Le Joyeux'
    },
    {
      id: 'barbare_melancolique',
      label: 'Le Mélancolique'
    },
    {
      id: 'barbare_toutpuissant',
      label: 'Le Tout-Puissant'
    },
    {
      id: 'barbare_geant',
      label: 'Le Géant'
    },
    {
      id: 'barbare_triomphant',
      label: 'Le Triomphant'
    }
  ],
  looks: [
    [
      {
        id: 'barbare_tourmente',
        label: 'Regard tourmenté'
      },
      {
        id: 'barbare_hagards',
        label: 'Yeux hagards'
      },
      {
        id: 'barbare_feroce',
        label: 'Regard féroce'
      },
      {
        id: 'barbare_voiles',
        label: 'Yeux voilés'
      }
    ],
    [
      {
        id: 'barbare_biscotos',
        label: 'Gros biscotos'
      },
      {
        id: 'barbare_longues',
        label: 'Longues jambes'
      },
      {
        id: 'barbare_squelettique',
        label: 'Squelettique'
      },
      {
        id: 'barbare_souple',
        label: 'Souple'
      }
    ],
    [
      {
        id: 'barbare_tatouages',
        label: 'Tatouages étranges'
      },
      {
        id: 'barbare_bijoux',
        label: 'Bijoux insolites'
      },
      {
        id: 'barbare_parure',
        label: 'Pas la moindre parure'
      }
    ],
    [
      {
        id: 'barbare_fripes',
        label: 'Fripes'
      },
      {
        id: 'barbare_soieries',
        label: 'Soieries'
      },
      {
        id: 'barbare_pillard',
        label: 'Allure de pillard'
      },
      {
        id: 'barbare_inadaptee',
        label: 'Tenue inadaptée au climat'
      }
    ]
  ],
  baseHP : 8,
  damage: 10,
  //TODO
  startingActions : [
    {
      id: `barbare_etranger`,
      title: `Etranger`,
      description: `Vous pouvez être elfe, nain, halfelin ou humain, mais vous et les vôtres n'êtres pas d'ici. Au début de chaque session, le MJ vous demandera quelque chose à propos de votre terre natale, pourquoi vous l'avez quittée ou ce que vous avez laissé derrière vous. Si vous répondez, marquez 1 PX.`
    },
    {
      choices : [
        {
          id: 'barbare_acier',
          title: `Bardé d'acier`,
          description: `Ignorez le marqueur encombrant de l'armure que vous portez.`
        },
        {
          id: 'barbare_poil',
          title: 'A poil et indemne',
          description: `Tant que vous transportez moins que votre poids maximum et que vous ne portez ni armure ni bouclier, gagnez +1 armure`
        },
      ]
    },
    {
      id: `barbare_hercule`,
      title: `Appétits herculéens`,
      description: `Les autres peuvent se contenter d'un vin ou d'un ou deux esclaves à leur service, mais il vous en faut plus !<br>Choisissez deux ambissions ci-dessous. Lorsque vous poursuivez une de vos ambitions, si vous deviez lancer deux d6 pour une action, lancez un d6 et un d8 à la place. Si le résultat du d6 est supérieur à celui du d8, le MJ peut introduire une complication ou un danger provoqué par votre avidité.`,
      //TODO
      choices: [
        {
          id: `barbare_destruction`,
          label: `Destruction pure`
        },
        {
          id: `barbare_pouvoir`,
          label: `Pouvoir sur autrui`
        },
        {
          id: `barbare_plaisirs`,
          label: `Plaisirs terrestres`
        },
        {
          id: `barbare_conquete`,
          label: `Conquête`
        },
        {
          id: `barbare_richesse`,
          label: `Richesses et possessions`
        },
        {
          id: `barbare_gloire`,
          label: `Gloire et renommée`
        }
      ]
    },
    {
      id: `barbare_main`,
      title: `Garder la main`,
      description: `Vous avez +1 continu sur votre dernier soupir. Lorsque vous rendez votre dernier soupir, sur un 7-9 faites une offre à la Mort en échange de votre vie. Si la Mort accepte, elle vous rend la vie, sinon vous trépassez.`
    },
    {
      id: `barbare_costaud`,
      title: `Costaud`,
      description: `Lorsque vous portez une arme, celle-ci gagne les marqueurs puissant et dévastateur`
    },
    {
      id: `barbare_attend`,
      title: `Qu'est ce que t'attends ?`,
      description: `Quand vous hurlez un défi à vos ennemis, lancez 2d6+CON.<br>Sur 10+, ils vous considèrent comme la menace la plus importante à affronter et ignorent vos compagnons. Gagnez +2 dégâts continu contre eux.<br>Sur 7-9, seuls quelques-uns (les plus faibles ou les plus téméraires) succombent à vos provocations.`
    }
  ],
  alignments: [
    {
      id: `barbare_chaotique`,
      title: `Chaotique`,
      description: `Se soustraire à une coutume du monde civilisé.`
    },
    {
      id: `barbare_neutre`,
      title: `Neutre`,
      description: `Enseigner les coutumes de votre peuple à quelqu'un.`
    }
  ],
  maxWeight: 9,
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
      label: `___ se fourre toujours dans les ennuis, je dois le protéger de lui-même`
    },
    {
      label: `___ partage ma faim de gloire; la terre tremblera sur notre passage !`
    },
  ]
}
