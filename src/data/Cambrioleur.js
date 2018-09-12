export const Cambrioleur = {
    id: 'cambrioleur',
    label: 'Le cambrioleur',
    description: `Tu vis sur le fil du rasoir. Le danger, la décharge d’adrénaline, tu ne connais que ça. C’est une drogue dont tu ne peux te défaire. Quoi de plus stimulant que de risquer sa peau sur une gouttière branlante, dix mètres au-dessus du vide, ou désamorcer le piège mortel qui te sépare d’une rivière de diamants. Tu as tout essayé, mais il t’en faut toujours plus.<br>Et te voilà, en quête de danger et de fortune, avec cette bande de bourrins indécrottables. Ils n’apprendront jamais les approches silencieuses, ombre parmi les ombres, tel le félin en chasse. Ils ne comprendront pas ton art subtil, digne d’un chirurgien. Discret, minutieux, délicat... excitant !<br>Laisse-les foncer en beuglant et s’empaler au fond d’une trappe.<br>Toi seul connais les ingrédients du succès. N’être jamais là où on t’attend.`,
    races: [
        {
            id: `cambrioleur_halfelin`,
            label: `Halfelin`,
            names : [
                {
                    id: `cambrioleur_lili`,
                    label: `Lili`
                },
                {
                    id: `cambrioleur_lamouche`,
                    label: `La Mouche`
                },
                {
                    id: `cambrioleur_merriabouc`,
                    label: `Merriabouc`
                },
                {
                    id: `cambrioleur_puce`,
                    label: `Puce`
                },
                {
                    id: `cambrioleur_tirias`,
                    label: `Tirias`
                },
                {
                    id: `cambrioleur_sadin`,
                    label: `Sadin`
                },
                {
                    id: `cambrioleur_minus`,
                    label: `Minus`
                },
                {
                    id: `cambrioleur_doigts`,
                    label: `Doigts de fée`
                }
            ],
            startingActions: [
                {
                    id: `cambrioleur_halfelin`,
                    title: `Halfelin`,
                    description: `Ajoutez « Mouvement silencieux » à vos actions de départ.`
                }
            ]
        },
        {
            id: `cambrioleur_humain`,
            label: `Humain`,
            names : [
                {
                    id: `cambrioleur_chourave`,
                    label: `Chourave`
                },
                {
                    id: `cambrioleur_arsene`,
                    label: `Arsène`
                },
                {
                    id: `cambrioleur_lulu`,
                    label: `Lulu`
                },
                {
                    id: `cambrioleur_lesquive`,
                    label: `L'Esquive`
                },
                {
                    id: `cambrioleur_charlie`,
                    label: `Charlie`
                },
                {
                    id: `cambrioleur_lombre`,
                    label: `L'Ombre`
                },
                {
                    id: `cambrioleur_olga`,
                    label: `Olga`
                }
            ],
            startingActions: [
                {
                    id: `cambrioleur_humain`,
                    title: `Humain`,
                    description: `Vous êtes un professionnel. Vous avez +1 lorsque vous étalez votre science ou que vous discernez la réalité à propos d’activités criminelles.`
                }
            ]
        },
        {
            id: `cambrioleur_nain`,
            label: `Nain`,
            names : [
                {
                    id: `cambrioleur_casseur`,
                    label: `Casseur`
                },
                {
                    id: `cambrioleur_romruk`,
                    label: `Romruk`
                },
                {
                    id: `cambrioleur_baramin`,
                    label: `Baramin`
                },
                {
                    id: `cambrioleur_glothar`,
                    label: `Glothar`
                },
                {
                    id: `cambrioleur_gudran`,
                    label: `Gudran`
                },
                {
                    id: `cambrioleur_nim`,
                    label: `Nim`
                },
                {
                    id: `cambrioleur_piedbiche`,
                    label: `Pied de Biche`
                },
                {
                    id: `cambrioleur_passepartout`,
                    label: `Passe-Partout`
                }
            ],
            startingActions: [
                {
                    id: `cambrioleur_nain`,
                    title: `Nain`,
                    description: `Ajoutez « Recel » à vos actions de départ.`
                }
            ]
        }
    ],
    looks: [
        [
            {
                id: 'cambrioleur_mobile',
                label: 'Regard mobile'
            },
            {
                id: 'cambrioleur_biais',
                label: 'Regard en biais'
            }
        ],
        [
            {
                id: 'cambrioleur_encapuchonne',
                label: 'Encapuchonné'
            },
            {
                id: 'cambrioleur_petard',
                label: 'Cheveux en pétard'
            },
            {
                id: 'cambrioleur_brosse',
                label: 'Cheveux en brosse'
            }
        ],
        [
            {
                id: 'cambrioleur_sombres',
                label: 'Habits sombres'
            },
            {
                id: 'cambrioleur_chics',
                label: 'Vêtements chics'
            },
            {
                id: 'cambrioleur_ordinaires',
                label: 'Vêtements ordinaires'
            }
        ],
        [
            {
                id: 'cambrioleur_svelte',
                label: 'Corps svelte'
            },
            {
                id: 'cambrioleur_noueux',
                label: 'Corps noueux'
            },
            {
                id: 'cambrioleur_mou',
                label: 'Mou'
            }
        ]
    ],
    baseHP : 6,
    damage: 8,
    startingActions : [
        {
            id: `cambrioleur_pièges`,
            title: `Expertise des pièges`,
            description: `Quand vous prenez le temps d’étudier une zone dangereuse, lancez 2d6+DEX.<br>Sur 10+ prenez 3, sur 7-9 prenez 1.<br>Dépensez 1 pour poser une des questions suivantes pendant que vous vous déplacez dans cette zone :<br><ul><li>Y a-t-il un piège ici et si oui, comment se déclenche-t-il ?</li><li>Que fait ce piège quand il se déclenche ?</li><li>Qu’y a-t-il d’autre caché ici ?</li></ul>`
        },
        {
            id: `cambrioleur_ficelles`,
            title: `Ficelles du métier`,
            description: `Quand vous crochetez une serrure, faites les poches de quelqu’un ou désactivez un piège, lancez 2d6+DEX. Sur 10+ vous y parvenez sans problème. Sur 7-9, vous y parvenez mais le MJ vous laisse choisir deux options parmi suspicion, danger ou coût.`
        },
        {
            id: `cambrioleur_morale`,
            title: `Morale souple`,
            description: `Quand quelqu’un essaie de déterminer votre alignement, vous pouvez répondre par l’alignement qui vous chante.`
        },
        {
            id: `cambrioleur_attaque`,
            title: `Attaque sournoise`,
            description: `Quand vous attaquez un ennemi sans défense ou par surprise avec une arme de mêlée, vous pouvez choisir d’infliger vos dégâts ou de lancer lancez 2d6+DEX. Sur 10+ choisissez 2 options.<br>Sur 7-9 choisissez-en 1 :<br><ul><li>Vous évitez le corps à corps avec votre adversaire.</li><li>Vous infligez vos dégâts +1d6.</li><li>Vous obtenez un avantage de +1 à suivre pour un allié ou vous même si vous en profitez.</li><li>Vous réduisez son armure de 1 jusqu’à ce qu’il la répare.</li></ul>`
        },
        {
            id: `cambrioleur_dissimulation`,
            title: `Dissimulation`,
            description: `Personne ne peut vous apercevoir tant que vous restez immobile dans l’ombre ou l’obscurité.`
        },
        {
            id: `cambrioleur_pied`,
            title: `Pied sûr`,
            description: `Vous gardez toujours votre équilibre quelle que soit la surface sur laquelle vous vous déplacez, tant que vous n’êtes pas en surcharge et que vous ne portez pas d’armure.`
        }
    ],
    alignments: [
        {
            id: `cambrioleur_bon`,
            title: `Bon`,
            description: `Prendre aux riches, donner aux pauvres.`
        },
        {
            id: `cambrioleur_chaotique`,
            title: `Chaotique`,
            description: `Se mettre en danger pour le plaisir.`
        },
        {
            id: `cambrioleur_mauvais`,
            title: `Mauvais`,
            description: `Voler dès que l’occasion se présente, aux riches comme aux pauvres.`
        }
    ],
    maxWeight: 9,
    equipments: [
        {
            id: 'cambrioleur_rations',
            label: `Des rations (5 utilisations, 1 poids)`
        },
        {
            id: 'cambrioleur_corde',
            label: `Une corde`
        },
        {
            id: 'cambrioleur_grappin',
            label: `Un grappin léger (1 poids)`
        },
        {
            id: 'cambrioleur_or',
            label: `10 Po`
        },
        {
            choices: [
                {
                    id: 'cambrioleur_dague',
                    label: `Dague (contact, 1 poids), épée courte (proche, 1 poids)`
                },
                {
                    id: 'cambrioleur_rapiere',
                    label: `Rapière (proche, précis, 1 poids)`
                }
            ]
        },
        {
            choices: [
                {
                    id: 'cambrioleur_dagueslancer',
                    label: `3 dagues de lancer (lancer, courte, 0 poids)`
                },
                {
                    id: 'cambrioleur_arc',
                    label: `Arc rudimentaire (courte, 2 poids), flèches (3 munitions, 1 poids)`
                }
            ]
        },
        {
            choices: [
                {
                    id: 'cambrioleur_sac',
                    label: `Sac d’aventurier (1 poids)`
                },
                {
                    id: 'cambrioleur_arc',
                    label: `Potion de soin`
                }
            ]
        }
    ],
    bonds: [
        {
            label: `J’ai volé quelque chose à ___`
        },
        {
            label: `___ couvre mes arrières`
        },
        {
            label: `___ connaît des détails compromettants sur moi`
        },
        {
            label: `Moi et ___ sommes tous les deux sur un « coup »`
        },
    ]
}
