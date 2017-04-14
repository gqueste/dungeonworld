export const Paladin = {
  id: 'paladin',
  label: `Le paladin`,
  description: `L’enfer guette : une éternité de tourments dans le feu, la glace ou ce qui châtiera au mieux les péchés des foules damnées de Dungeon World. Vous seul vous dressez entre cette sombre torture et le salut des âmes. N’êtes-vous pas une sainte machine de guerre cuirassée, un templier du Bien et de la Lumière ?<br>Le clerc peut bien faire ses prières le soir aux dieux qui séjournent au paradis. Le guerrier peut bien se prévaloir du « bien » lorsqu’il brandit son épée affûtée, mais seul vous savez.<br>Seulement vous.<br>Vous êtes les yeux, les mains et l’exécuteur des dieux.<br>Vous êtes un parangon de droiture, de vertu et de justice.<br>Vous avez le don de vision aussi. Une pureté des intentions qu’ignorent vos compagnons. Alors, guidez ces simples d’esprit, paladin. Embrassez votre juste cause et apportez le salut à ce monde perdu. Vae victis !`,
  races: [
    {
      id: `humain`,
      label: `Humain`,
      names : [
        {
          id: `thaddeus`,
          label: `Thaddeus`
        },
        {
          id: `augustine`,
          label: `Augustine`
        },
        {
          id: `lux`,
          label: `Lux`
        },
        {
          id: `cassius`,
          label: `Cassius`
        },
        {
          id: `hadrian`,
          label: `Hadrian`
        },
        {
          id: `lucia`,
          label: `Lucia`
        },
        {
          id: `octavia`,
          label: `Octavia`
        },
        {
          id: `regulus`,
          label: `Regulus`
        },
        {
          id: `valeria`,
          label: `Valeria`
        },
        {
          id: `sanguinus`,
          label: `Sanguinus`
        },
        {
          id: `titanius`,
          label: `Titanius`
        }
      ],
      startingActions: [
        {
          id: `humain`,
          title: `Humain`,
          description: `Quand vous priez même brièvement, pour obtenir un conseil et que vous demandez : « Où est le mal ici ? », le MJ vous répondra sincèrement.`
        }
      ]
    }
  ],
  looks: [
    [
      {
        id: 'regardaimable',
        label: 'Regard aimable'
      },
      {
        id: 'regardardent',
        label: 'Regard ardent'
      },
      {
        id: 'regardrayonnant',
        label: 'Regard rayonnant'
      }
    ],
    [
      {
        id: 'casque',
        label: 'Casque'
      },
      {
        id: 'coiffuresoignee',
        label: 'Coiffure soignée'
      },
      {
        id: 'chauve',
        label: 'Chauve'
      }
    ],
    [
      {
        id: 'vieuxsymbolebeni',
        label: 'Vieux symbole béni'
      },
      {
        id: 'symboletapealoeil',
        label: `Symbole tape à l'oeil`
      }
    ]
  ],
  baseHP : 10,
  damage: 10,
  startingActions : [
    {
      id: `impositiondesmains`,
      title: `Imposition des mains`,
      description: `Quand vous touchez une personne à même la peau et priez pour son bien-être, lancez 2d6+CHA. Sur 10+ vous soignez 1d8 dégâts ou guérissez une maladie. Sur 7-9, elle est soignée mais les dégâts ou la maladie vous sont transférés.`
    },
    {
      id: `Cuirassé`,
      title: `Cuirassé`,
      description: `Ignorez l’encombrement des armures que vous portez.`
    },
    {
      id: `Laloicestmoi`,
      title: `La loi c’est moi`,
      description: `Quand vous donnez un ordre à un PNJ de par votre droit divin, lancez 2d6+CHA. Sur 7+, il choisit entre : <ul><li>s’exécuter,</li><li>reculer avec précaution avant de fuir,</li><li>vous attaquer.</li></ul>Sur 10+, vous avez aussi +1 à suivre contre lui. Sur un échec, il fait ce qu’il veut et vous avez -1 à suivre contre lui.`
    },
    {
      id: `quete`,
      title: `Quête`,
      description: `Quand vous vous consacrez à une mission par la prière et un rituel de purification, déclarez sa nature :<ul><li>Pourfendre _____________, une grande plaie sur cette terre.</li><li>Défendre _______________ des injustices qui le(s) frappent.</li><li>Découvrir la vérité sur _____________.</li></ul>Choisissez alors jusqu’à deux bénédictions :<ul><li>Un indéfectible sens de l’orientation vers _____________.</li><li>L’invulnérabilité à ___________ (par ex. les armes tranchantes, le feu, les enchantements, etc.).</li><li>Une marque d’autorité divine.</li><li>La révélation innée des mensonges.</li><li>Une voix qui sublime la parole.</li><li>Une insensibilité à la faim, à la soif ou ausommeil.</li></ul>Le MJ vous indiquera le ou les vœux que vous devez respecter pour maintenir ces bénédictions :<ul><li>Honneur (interdiction : des manœuvres ou des ruses de lâche).</li><li>Tempérance (interdiction : la goinfrerie, l’ivresse et les plaisirs de la chair).</li><li>Piété (obligation : le respect des services quotidiens)</li><li>Valeur (interdiction : tolérer la survie d’une créature mauvaise)</li><li>Vérité (interdiction : le mensonge)</li><li>Hospitalité (obligation : réconfort des nécessiteux, quels qu’ils soient).</li></ul>`
    }
  ],
  alignments: [
    {
      id: `bon`,
      title: `Bon`,
      description: `Se mettre en danger pour protéger les plus faibles que vous.`
    },
    {
      id: `loyal`,
      title: `Loyal`,
      description: `Pas de pitié pour les mécréants et les criminels !`
    }
  ],
  maxWeight: 12,
  equipments: [
    {
      label: `Armure d’écailles (2 armure, 3 poids)`
    },
    {
      label: `Des rations (5 utilisations, 1 poids)`
    },
    {
      label: `Un signe de votre foi que vous décrirez (0 poids)`
    },
    {
      choices: [
        {
          label: `Hallebarde (allonge, +1 dégâts, 2 mains, 2 poids)`
        },
        {
          label: `Epée longue (proche, +1 dégâts, 1 poids) et bouclier (+1 armure, 2 poids)`
        }
      ]
    },
    {
      choices: [
        {
          label: `Sac d’aventurier (1 poids)`
        },
        {
          label: `Rations (1 poids), potion de soins (0 poids)`
        }
      ]
    }
  ],
  bonds: [
    {
      label: `Les écarts de conduite de ___ mettent son âme en danger !`
    },
    {
      label: `___ m’a épaulé dans la bataille. Je peux avoir toute confiance en lui.`
    },
    {
      label: `Je respecte les croyances de ___, mais j’espère qu’il trouvera la vraie voie un jour.`
    },
    {
      label: `___ est une âme brave. J’ai beaucoup à apprendre de lui.`
    },
  ]
}
