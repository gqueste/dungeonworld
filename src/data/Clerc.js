export const Clerc = {
    id: 'clerc',
    label: 'Le clerc',
    description: ``,
    races: [
        {
            id: `clerc_nain`,
            label: `Nain`,
            names : [
                {
                    id: `clerc_durga`,
                    label: `Durga`
                },
                {
                    id: `clerc_aelfar`,
                    label: `Aelfar`
                },
                {
                    id: `clerc_gerda`,
                    label: `Gerda`
                },
                {
                    id: `clerc_rurgosh`,
                    label: `Rurgosh`
                },
                {
                    id: `clerc_bjon`,
                    label: `Bjorn`
                },
                {
                    id: `clerc_drummond`,
                    label: `Drummond`
                },
                {
                    id: `clerc_helga`,
                    label: `Helga`
                },
                {
                    id: `clerc_siggrun`,
                    label: `Siggrun`
                },
                {
                    id: `clerc_freya`,
                    label: `Freya`
                }
            ],
            startingActions: [
                {
                    id: `clerc_nain`,
                    title: `Nain`,
                    description: `Vous ne faites qu’un avec la pierre. Quand vous communiez, vous bénéficiez également d’une version personnelle de la Parole des Sans Voix qui compte comme une prière mais ne fonctionne que sur la pierre.`
                }
            ]
        },
        {
            id: `clerc_humain`,
            label: `Humain`,
            names : [
                {
                    id: `clerc_wesley`,
                    label: `Wesley`
                },
                {
                    id: `clerc_brinton`,
                    label: `Brinton`
                },
                {
                    id: `clerc_jon`,
                    label: `Jon`
                },
                {
                    id: `clerc_sara`,
                    label: `Sara`
                },
                {
                    id: `clerc_hawthorn`,
                    label: `Hawthorn`
                },
                {
                    id: `clerc_elise`,
                    label: `Elise`
                },
                {
                    id: `clerc_clarke`,
                    label: `Clarke`
                },
                {
                    id: `clerc_lenore`,
                    label: `Lenore`
                },
                {
                    id: `clerc_piotr`,
                    label: `Piotr`
                },
                {
                    id: `clerc_dahlia`,
                    label: `Dahlia`
                },
                {
                    id: `clerc_carmine`,
                    label: `Carmine`
                }
            ],
            startingActions: [
                {
                    id: `clerc_humain`,
                    title: `Humain`,
                    description: `Votre foi est plurielle. Choisissez un sort de Magicien. Vous pouvez lancer ce sort comme si c’était un sort de Clerc.`
                }
            ]
        }
    ],
    looks: [
        [
            {
                id: 'clerc_aimable',
                label: 'Regard aimable'
            },
            {
                id: 'clerc_percants',
                label: 'Yeux perçants'
            },
            {
                id: 'clerc_triste',
                label: 'Regard triste'
            }
        ],
        [
            {
                id: 'clerc_tonsure',
                label: 'Tonsure'
            },
            {
                id: 'clerc_etrange',
                label: 'Etrange'
            },
            {
                id: 'clerc_chauve',
                label: 'Chauve'
            }
        ],
        [
            {
                id: 'clerc_drapes',
                label: 'Vêtements drapés'
            },
            {
                id: 'clerc_religieux',
                label: 'Habits religieux'
            },
            {
                id: 'clerc_simple',
                label: 'Costume simple'
            }
        ]
    ],
    baseHP: 8,
    damage: 6,
    startingActions: [
        {
            id: `clerc_divinitedomaine`,
            title: `Divinité (Domaine)`,
            description: `Vous servez et adorez une divinité ou puissance qui vous accorde des sorts.<br>Donnez un nom à votre divinité (par exemple, Helferth, Sucrellus, Zorica ou Krugon le Lugubre) et choisissez son domaine`,
            choices : [
                {
                    id: `clerc_soins`,
                    description: `Soins et guérison`
                },
                {
                    id: `clerc_conquete`,
                    description: `Conquête sanglante`
                },
                {
                    id: `clerc_civilisation`,
                    description: `Civilisation`
                },
                {
                    id: `clerc_savoir`,
                    description: `Savoir et mystères`
                },
                {
                    id: `clerc_opprimes`,
                    description: `Les opprimés et les oubliés`
                },
                {
                    id: `clerc_cequiest`,
                    description: `Ce qui est en-dessous`
                }
            ]
        },
        {
            id: `clerc_diviniteprecepte`,
            title: `Divinité (Précepte)`,
            description: `Choisissez un précepte pour votre religion`,
            choices : [
                {
                    id: `clerc_souffr`,
                    description: `Votre religion prêche la souffrance purificatrice. Ajoutez une supplique : souffrance`
                },
                {
                    id: `clerc_sectaire`,
                    description: `Votre religion est sectaire et isolée. Ajoutez une supplique : accéder à des secrets`
                },
                {
                    id: `clerc_rites`,
                    description: `Votre religion a d’importants rites sacrificiels. Ajoutez une supplique : offrande`
                },
                {
                    id: `clerc_combat`,
                    description: `Votre religion croit à l’épreuve du combat. Ajoutez une supplique : victoire personnelle`
                }
            ]
        },
        {
            id: `clerc_inspiration`,
            title: `Inspiration divine`,
            description: `Quand vous adressez une supplique à votre divinité conformément au précepte de votre religion, vous recevez une inspiration utile ou une bénédiction en rapport avec le domaine de votre divinité. Le MJ vous dira de quoi il s’agit.`
        },
        {
            id: `clerc_repousser`,
            title: `Repousser les morts-vivants`,
            description: `Quand vous brandissez votre symbole sacré et invoquez la protection de votre divinité, lancez 2d6+SAG. Sur 7-9, les morts-vivants demeurent hors de portée de vous tant que vous priez dans cette posture. Sur 10+, vous étourdissez momentanément les morts vivants intelligents et provoquez la fuite des autres.<br>La moindre agression brise cet effet et ils peuvent alors agir normalement. Les morts vivants intelligents peuvent toujours trouver moyen de vous nuire à distance. Ils sont malins vous savez !`
        },
        {
            id: `clerc_communier`,
            title: `Communier`,
            description: `Quand vous consacrez un moment ininterrompu (environ 1 heure) en communion tranquille :<ul><li>vous perdez tous les sorts qu’il vous reste,</li><li>vous recevez de nouveaux sorts de votre choix dont le niveau ne dépasse pas le vôtre et dont les niveaux additionnés ne dépassent pas votre niveau+1,</li><li>vos prières sont à nouveau toutes disponibles, elles ne comptent pas dans la limite de niveau.</li></ul>`
        },
        {
            id: `clerc_lancer`,
            title: `Lancer un sort`,
            description: `Quand vous lancez un sort que votre divinité vous a accordé (prières comprises), lancez 2d6+SAG. Sur 10+, le sort est lancé avec succès et votre divinité ne vous le retire pas. Vous pouvez le lancer à nouveau.<br>Sur 7-9 le sort est lancé mais choisissez une option :<br><ul><li>Vous attirez une attention malvenue ou vous vous exposez (le MJ vous décrira comment).</li><li>Vous vous éloignez de votre divinité : vous avez -1 continu pour lancer un sort jusqu’à ce que vous communiiez de nouveau.</li><li>Une fois lancé, le sort est révoqué par votre divinité. Vous ne pouvez plus le lancer tant que vous n’avez pas communié et reçu ce sort à nouveau.</li></ul>À noter que maintenir des sorts et leurs effets peut parfois entraîner une pénalité pour lancer un autre sort.`
        }
    ],
    alignments: [
        {
            id: `clerc_bon`,
            title: `Bon`,
            description: `Se mettre en danger pour soigner quelqu’un.`
        },
        {
            id: `clerc_loyal`,
            title: `Loyal`,
            description: `Se mettre en danger pour son église ou son dieu.`
        },
        {
            id: `clerc_mauvais`,
            title: `Mauvais`,
            description: `Nuire au nom de son église ou de son dieu.`
        }
    ],
    maxWeight: 10,
    equipments: [
        {
            id: 'clerc_rations',
            label: `Des rations (5 utilisations, 1 poids)`
        },
        {
            id: 'clerc_symbole',
            label: `Un symbole de votre divinité (0 poids)`
        },
        {
            choices: [
                {
                    id: 'clerc_cotte',
                    label: `Cotte de maille (1 armure, 1 poids)`
                },
                {
                    id: 'clerc_bouclier',
                    label: `Bouclier (+1 armure, 1 poids)e`
                }
            ]
        },
        {
            choices: [
                {
                    id: 'clerc_marteau',
                    label: `Marteau de guerre (proche, 1 poids)`
                },
                {
                    id: 'clerc_masse',
                    label: `Masse (proche, 1 poids)`
                },
                {
                    id: 'clerc_baton',
                    label: `Bâton (proche, 2 mains, 1 poids) et bandages (0 poids)`
                }
            ]
        },
        {
            choices: [
                {
                    id: 'clerc_sac',
                    label: `Sac d’aventurier (1 poids) et rations (5 utilisations, 1 poids)`
                },
                {
                    id: 'clerc_potion',
                    label: `Potion de soins (0 poids)`
                }
            ]
        }
    ],
    bonds: [
        {
            label: `___ a insulté ma divinité. Je n’ai pas confiance en lui.`
        },
        {
            label: `___ est une personne bonne et pieuse. Je lui fais entièrement confiance.`
        },
        {
            label: `___ est en danger permanent, je vais le protéger.`
        },
        {
            label: `Je vais tâcher de convertir ___ à ma foi.`
        }
    ]
}
