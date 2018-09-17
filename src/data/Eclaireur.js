export const Eclaireur = {
    id: 'eclaireur',
    label: `L'éclaireur`,
    description: `Ces citadins avec lesquels vous voyagez, ont-ils jamais entendu l’appel du loup ? Senti le vent hurler dans les déserts lugubres de l’est ? Ont-ils traqué leur proie avec l’arc et le couteau comme vous ? Bien sûr que non ! C’est pour cela qu’ils ont besoin de vous. Guide. Chasseur. Créature sauvage. Vous êtes tout cela à la fois et bien plus.<br>Vous êtes resté seul dans la nature jusqu’à présent, mais un appel d’une plus grande importance - appelez-le destin si vous le souhaitez - vous a désigné pour accompagner ces gens.<br>Ils sont braves, sans doute. Puissants et forts aussi. Mais vous seul connaissez les secrets des grands espaces. Sans vous, ils seraient perdus. Grands-Pas, montrez la voie dans l’obscurité et le sang.`,
    races: [
        {
            id: `eclaireur_elfe`,
            label: `Elfe`,
            names : [
                {
                    id: `eclaireur_throndir`,
                    label: `Throndir`
                },
                {
                    id: `eclaireur_elrosine`,
                    label: `Elrosine`
                },
                {
                    id: `eclaireur_aranwe`,
                    label: `Aranwe`
                },
                {
                    id: `eclaireur_celion`,
                    label: `Celion`
                },
                {
                    id: `eclaireur_dambrath`,
                    label: `Dambrath`
                },
                {
                    id: `eclaireur_lanethe`,
                    label: `Lanethe`
                }
            ],
            startingActions: [
                {
                    id: `eclaireur_elfe`,
                    title: `Elfe`,
                    description: `Quand vous entreprenez un voyage périlleux dans les terres sauvages, vous réussissez quel que soit le rôle qui vous est confié comme si vous aviez obtenu 10+.`
                }
            ]
        },
        {
            id: `eclaireur_humain`,
            label: `Humain`,
            names : [
                {
                    id: `eclaireur_jonah`,
                    label: `Jonah`
                },
                {
                    id: `eclaireur_halek`,
                    label: `Halek`
                },
                {
                    id: `eclaireur_brandon`,
                    label: `Brandon`
                },
                {
                    id: `eclaireur_emory`,
                    label: `Emory`
                },
                {
                    id: `eclaireur_shrike`,
                    label: `Shrike`
                },
                {
                    id: `eclaireur_nora`,
                    label: `Nora`
                },
                {
                    id: `eclaireur_diana`,
                    label: `Diana`
                }
            ],
            startingActions: [
                {
                    id: `eclaireur_humain`,
                    title: `Humain`,
                    description: `Quand vous montez un camp dans un donjon ou une ville, vous n’avez pas besoin de consommer une ration.`
                }
            ]
        }
    ],
    looks: [
        [
            {
                id: 'eclaireur_farouche',
                label: 'Regard farouche'
            },
            {
                id: 'eclaireur_percant',
                label: 'Regard perçant'
            },
            {
                id: 'eclaireur_animal',
                label: 'Regard animal'
            }
        ],
        [
            {
                id: 'eclaireur_capuche',
                label: 'Capuche'
            },
            {
                id: 'eclaireur_desordonnee',
                label: 'Chevelure désordonnée'
            },
            {
                id: 'eclaireur_chauve',
                label: 'Chauve'
            }
        ],
        [
            {
                id: 'eclaireur_cape',
                label: 'Cape'
            },
            {
                id: 'eclaireur_camouflee',
                label: 'Tenue camouflée'
            },
            {
                id: 'eclaireur_route',
                label: 'Vêtements de route'
            }
        ],
        [
            {
                id: 'eclaireur_souple',
                label: 'Corps souple'
            },
            {
                id: 'eclaireur_sauvage',
                label: 'Allure sauvage'
            },
            {
                id: 'eclaireur_sec',
                label: 'Corps sec'
            }
        ]
    ],
    baseHP: 8,
    damage: 8,
    startingActions: [
        {
            id: `eclaireur_familier`,
            title: `Animal familier`,
            description: `Vous avez un lien surnaturel avec un animal loyal. Vous ne pouvez pas lui parler véritablement mais il agit comme vous le souhaitez. Nommez votre animal familier et choisissez une espèce : loup, puma, ours, aigle, chien, faucon, chat, chouette, pigeon, rat, mule.<br>Choisissez une base :<br><ul><li>Férocité +2, Ruse +1, Armure 1, Instinct +1</li><li>Férocité +2, Ruse +2, Armure 0, Instinct +1</li><li>Férocité +1, Ruse +2, Armure 1, Instinct +1</li><li>Férocité +3, Ruse +1, Armure 1, Instinct +2</li>Choisissez autant de qualités que sa férocité : rapide, costaud, gros, calme, polyvalent, réflexes rapides, infatigable, camouflage, féroce, intimidant, sens développés, discret.<br>Votre animal familier est dressé à attaquer des humanoïdes. Choisissez autant de dressages supplémentaires que sa ruse : chasser, chercher, explorer, garder, combattre les monstres, jouer un spectacle, travailler, voyager.<br>Choisissez autant de faiblesses que son instinct : inconstant, sauvage, lent, soumis, effrayé, étourdi, borné, faible.`
        },
        {
            id: `eclaireur_ordonner`,
            title: `Ordonner`,
            description: `Lorsque vous accomplissez une action pour laquelle votre animal familier est dressé et que...<br>... vous attaquez la même cible, ajoutez sa férocité à vos dégâts.<br>... vous pistez, ajoutez sa ruse à votre jet.<br>... vous subissez des dégâts, ajoutez son armure à la vôtre.<br>... vous discernez la réalité, ajoutez sa ruse à votre jet.<br>... vous négociez, ajoutez sa ruse à votre jet.<br>... quelqu’un cherche à vous gêner, ajoutez son instinct à son jet.`
        },
        {
            id: `eclaireur_chasser`,
            title: `Chasser et pister`,
            description: `Quand vous suivez une piste d’indices laissés par le passage de créatures, lancez 2d6+SAG.<br>Sur 7+, vous suivez la piste de la créature jusqu’à ce qu’un changement significatif dans sa direction ou son moyen de déplacement ne survienne. Sur 10+, vous choisissez aussi une option :<br><ul><li>Vous recevez une information utile sur votre proie. Le MJ vous dira quoi.</li><li>Vous déterminez ce qui a interrompu la piste.</li></ul>`
        },
        {
            id: `eclaireur_tir`,
            title: `Tir précis`,
            description: `Quand vous attaquez à distance un ennemi surpris ou sans défense, vous pouvez choisir d’infliger vos dégâts ou de choisir votre cible et tirer 2d6+DEX. Sur 10+, le résultat est identique à 7-9, plus vos dégâts.<br><ul><li>Tête : 7-9 : l’ennemi reste debout sans rien faire sauf baver quelques instants.</li><li>Bras : 7-9 : l’ennemi lâche tout ce qu’il portait.</li><li>Jambes : 7-9 : l’ennemi est ralenti et boite.</li></ul>`
        },
    ],
    alignments: [
        {
            id: `eclaireur_chaotique`,
            title: `Chaotique`,
            description: `Libérer quelqu’un de ses liens (au propre ou au figuré).`
        },
        {
            id: `eclaireur_neutre`,
            title: `Neutre`,
            description: `Aider un animal ou un esprit sauvage.`
        },
        {
            id: `eclaireur_bon`,
            title: `Bon`,
            description: `Se mettre en danger pour combattre un péril contre nature.`
        }
    ],
    maxWeight: 11,
    equipments: [
        {
            id: 'eclaireur_armure',
            label: `Armure de cuir (1 armure, 1 poids)`
        },
        {
            id: 'eclaireur_fleches',
            label: `Des flèches (3 munitions, 1 poids)`
        },
        {
            id: 'eclaireur_rations',
            label: `Des rations (5 utilisations, 1 poids)`
        },
        {
            choices: [
                {
                    id: 'eclaireur_courte',
                    label: `Arc de chasse (courte, longue, 1 poids), épée courte (proche, 1 poids)`
                },
                {
                    id: 'eclaireur_epieu',
                    label: `Arc de chasse (courte, longue, 1 poids), épieu (allonge, 1 poids)`
                }
            ]
        },
        {
            choices: [
                {
                    id: 'eclaireur_sacfleches',
                    label: `Sac d’aventurier (1 poids), flèches (3 munitions, 1 poids)`
                },
                {
                    id: 'eclaireur_sacrations',
                    label: `Sac d’aventurier (1 poids), rations (1 poids)`
                }
            ]
        }
    ],
    bonds: [
        {
            label: `J’ai guidé ___ auparavant. Il est mon débiteur.`
        },
        {
            label: `___ est un ami de la nature et le mien par conséquent.`
        },
        {
            label: `___ ne respecte pas la nature et je ne le respecte pas non plus.`
        },
        {
            label: `___ ne comprend rien à la vie dans la nature. Je vais la lui apprendre.`
        }
    ]
}
