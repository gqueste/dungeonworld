export const Druide = {
    id: 'druide',
    label: 'Le druide',
    description: `Observe-les autour du feu. Pourquoi fréquentes-tu ces gens qui puent la sueur et la poussière des villes ? Est-ce ta bonté ? Tu les protèges comme une mère ourse protège ses oursons. Sont-ils de ta meute à présent ? Curieux frères et sœurs en vérité. Malgré ton exemple, ils échoueront sans tes griffes et tes sens affutés.<br>Tu appartiens aux espaces sacrés. Tu es l’enfant de la terre, tu portes les marques des esprits sur ta peau. Peut-être as-tu eu une vie avant, peut-être étais-tu l’un d’eux ? Plus maintenant.<br>Tu as abandonné cette enveloppe immuable.<br>Ecoute tes compagnons prier leurs dieux de pierre et polir leurs carapaces d’argent.<br>Ils te parlent de la gloire qui les attend lorsqu’ils reviendront dans la ville purulente que tu as quittée. Leurs dieux sont des enfants et leur acier une fausse protection. Tu connais les anciennes coutumes et tu portes les fourrures de la terre elle-même.<br>Tu auras ta part du trésor, mais seras-tu jamais l’un des leurs ?<br>Seul le temps le dira.`,
    races: [
        {
            id: `druide_elfe`,
            label: `Elfe`,
            names : [
                {
                    id: `druide_ycorax`,
                    label: `Ycorax`
                },
                {
                    id: `druide_ethanwe`,
                    label: `Ethanwe`
                },
                {
                    id: `druide_sinathel`,
                    label: `Sinathel`
                },
                {
                    id: `druide_demanor`,
                    label: `Demanor`
                },
                {
                    id: `druide_menoliir`,
                    label: `Menoliir`
                },
                {
                    id: `druide_mithralan`,
                    label: `Mithralan`
                },
                {
                    id: `druide_taeros`,
                    label: `Taeros`
                },
                {
                    id: `druide_aegor`,
                    label: `Aegor`
                }
            ],
            startingActions: [
                {
                    id: `druide_elfe`,
                    title: `Elfe`,
                    description: `La sève des Arbres Vénérables circule en vous. La Grande Forêt est toujours considérée comme votre région en plus de tout autre choix.`
                }
            ]
        },
        {
            id: `druide_halfelin`,
            label: `Halfelin`,
            names : [
                {
                    id: `druide_tanner`,
                    label: `Tanner`
                },
                {
                    id: `druide_dunstan`,
                    label: `Dunstan`
                },
                {
                    id: `druide_rose`,
                    label: `Rose`
                },
                {
                    id: `druide_ivy`,
                    label: `Ivy`
                },
                {
                    id: `druide_robard`,
                    label: `Robard`
                },
                {
                    id: `druide_mab`,
                    label: `Mab`
                },
                {
                    id: `druide_chardon`,
                    label: `Chardon`
                },
                {
                    id: `druide_puck`,
                    label: `Puck`
                },
                {
                    id: `druide_anne`,
                    label: `Anne`
                },
                {
                    id: `druide_serah`,
                    label: `Serah`
                }
            ],
            startingActions: [
                {
                    id: `druide_halfelin`,
                    title: `Halfelin`,
                    description: `Vous chantez les chansons bienfaisantes du printemps et du ruisseau. Quand vous montez un camp, vous et vos alliés récupérez +1d6 dégâts.`
                }
            ]
        },
        {
            id: `druide_humain`,
            label: `Humain`,
            names : [
                {
                    id: `druide_elana`,
                    label: `Elana`
                },
                {
                    id: `druide_obelis`,
                    label: `Obelis`
                },
                {
                    id: `druide_herran`,
                    label: `Herran`
                },
                {
                    id: `druide_syla`,
                    label: `Syla`
                },
                {
                    id: `druide_andanna`,
                    label: `Andanna`
                },
                {
                    id: `druide_siobhan`,
                    label: `Siobhan`
                },
                {
                    id: `druide_aziz`,
                    label: `Aziz`
                },
                {
                    id: `druide_pelin`,
                    label: `Pelin`
                },
                {
                    id: `druide_sibel`,
                    label: `Sibel`
                },
                {
                    id: `druide_nils`,
                    label: `Nils`
                },
                {
                    id: `druide_wei`,
                    label: `Wei`
                }
            ],
            startingActions: [
                {
                    id: `druide_humain`,
                    title: `Humain`,
                    description: `Votre peuple a appris à domestiquer des animaux et vous leur êtes lié ; vous êtes capable de prendre la forme de tout animal domestique en plus de vos options habituelles.`
                }
            ]
        }
    ],
    looks: [
        [
            {
                id: 'druide_sage',
                label: 'Regard sage'
            },
            {
                id: 'druide_sauvages',
                label: 'Yeux sauvages'
            },
            {
                id: 'druide_hante',
                label: 'Regard hanté'
            }
        ],
        [
            {
                id: 'druide_fourrure',
                label: 'Capuchon de fourrure'
            },
            {
                id: 'druide_bataille',
                label: 'Cheveux en bataille'
            },
            {
                id: 'druide_tresses',
                label: 'Tresses'
            }
        ],
        [
            {
                id: 'druide_ceremonie',
                label: 'Tenue de cérémonie'
            },
            {
                id: 'druide_confortables',
                label: 'Vêtements de daim confortables'
            },
            {
                id: 'druide_tannees',
                label: 'Fourrures tannées'
            }
        ]
    ],
    baseHP: 6,
    damage: 6,
    startingActions: [
        {
            id: `druide_essence`,
            title: `Contemplation de l’essence`,
            description: `Quand vous passez du temps en contemplation d’un esprit animal, vous pouvez en ajouter l’espèce à celles dont vous pouvez prendre la forme.`
        },
        {
            id: `druide_changeforme`,
            title: `Changeforme`,
            description: `Quand vous faites appel aux esprits pour changer votre forme, lancez 2d6+SAG.<br>Sur 10+, retenez 3. Sur 7-9, retenez 2. Sur un échec, retenez 1 en plus de ce que dira le MJ.<br>Vous pouvez prendre la forme de toute espèce dont vous avez contemplé l’essence ou qui vit dans votre région ; vous et vos possessions se fondent en une parfaite copie de la forme de cette espèce. Vous avez toutes les capacités et faiblesses innées de cette forme : griffes, ailes, branchies vous permettant de respirer sous l’eau. Vous utilisez vos caractéristiques normales, mais certaines actions peuvent être plus difficiles à mettre en œuvre (un chat aura plus de mal à se battre contre un ogre). Le MJ vous indiquera une ou plusieurs actions associées à votre nouvelle forme. Utilisez 1 pour accomplir cette action. Quand vous n’avez plus de retenue, vous revenez à votre forme normale. A tout moment, vous pouvez dépenser toutes vos retenues pour revenir à votre forme normale.<br>Les actions de forme indiquent simplement ce que l’animal fait naturellement, comme « appeler la meute », « piétiner un ennemi » ou « s’envoler dans les airs ». Lorsque vous dépensez votre retenue, votre instinct animal prend le contrôle et cette action se déroule. Si vous dépensez une retenue pour vous échapper dans les airs, ça y est, vous y êtes.`
        },
        {
            id: `druide_nature`,
            title: `Nourri par la nature`,
            description: `Vous n’avez pas besoin de boire ou de manger. Si une action vous demande de consommer une ration, ignorez cette consigne.`
        },
        {
            id: `druide_esprits`,
            title: `Langue des esprits`,
            description: `Les grognements, aboiements, pépiements et appels des créatures de la nature sont un langage pour vous. Vous pouvez comprendre tout animal de votre région ou apparenté à une espèce dont vous avez contemplé l’essence.`
        },
        {
            id: `druide_pays`,
            title: `Enfant du pays`,
            description: `Vous avez appris votre magie dans un lieu où les esprits sont forts et anciens. Ils vous ont marqué comme l’un des leurs. Où que vous alliez, ils vivent en vous et vous permettent de prendre leur forme. Choisissez une région ci-dessous ; c’est celle avec laquelle vous êtes en harmonie. Lorsque vous changez de forme, vous pouvez prendre celle d’un animal qui pourrait vivre dans votre région. Choisissez un aspect - un attribut physique qui vous identifie comme enfant du pays - qui reflète l’esprit de votre région. Ce peut être une caractéristique animale comme des bois ou des taches de léopard ou quelque chose de plus général : une chevelure de feuilles, des yeux de cristal brillant. Votre aspect demeure quelle que soit votre forme.`,
            choices : [
                {
                    id: `druide_foret`,
                    description: `La Grande Forêt`
                },
                {
                    id: `druide_plaines`,
                    description: `Les Plaines Murmurantes`
                },
                {
                    id: `druide_desert`,
                    description: `Le Vaste Désert`
                },
                {
                    id: `druide_marais`,
                    description: `Le Marais Puant`
                },
                {
                    id: `druide_delta`,
                    description: `Le Delta de la Rivière`
                },
                {
                    id: `druide_profondeurs`,
                    description: `Les Profondeurs de la Terre`
                },
                {
                    id: `druide_iles`,
                    description: `Les Iles de Saphir`
                },
                {
                    id: `druide_mer`,
                    description: `La Pleine Mer`
                },
                {
                    id: `druide_montagnes`,
                    description: `Les Hautes Montagnes`
                },
                {
                    id: `druide_nord`,
                    description: `Le Nord Gelé`
                },
                {
                    id: `druide_terres`,
                    description: `Les Terres Flétries`
                }
            ]
        }
    ],
    alignments: [
        {
            id: `druide_bon`,
            title: `Bon`,
            description: `Aider quelque chose ou quelqu’un à grandir, pousser, prospérer.`
        },
        {
            id: `druide_neutre`,
            title: `Neutre`,
            description: `Eliminer une menace non naturelle.`
        },
        {
            id: `druide_chaotique`,
            title: `Chaotique`,
            description: `Détruire un symbole de civilisation.`
        }
    ],
    maxWeight: 6,
    equipments: [
        {
            id: 'druide_souvenir',
            label: `Un souvenir de votre région d'origine`
        },
        {
            choices: [
                {
                    id: 'druide_armure',
                    label: `Armure de peaux (1 armure, 1 poids)`
                },
                {
                    id: 'druide_bouclier',
                    label: `Bouclier en bois (+1 armure, 1 poids)`
                }
            ]
        },
        {
            choices: [
                {
                    id: 'druide_gourdin',
                    label: `Gourdin (proche, 2 poids)`
                },
                {
                    id: 'druide_baton',
                    label: `Bâton (proche, 2 mains, 1 poids)`
                },
                {
                    id: 'druide_epieu',
                    label: `Epieu (proche, lancé, courte, 1 poids)`
                }
            ]
        },
        {
            choices: [
                {
                    id: 'druide_sac',
                    label: `Sac d’aventurier (1 poids)`
                },
                {
                    id: 'druide_cataplasmes',
                    label: `Herbes et cataplasmes (2 utilisations, 1 poids)`
                },
                {
                    id: 'druide_herbes',
                    label: `Herbe de Halfelin (0 poids)`
                },
                {
                    id: 'druide_antidotes',
                    label: `3 antidotes (0 poids)`
                }
            ]
        }
    ],
    bonds: [
        {
            label: `___ a plus l’odeur de la proie que du prédateur.`
        },
        {
            label: `Les esprits m’ont parlé du grand danger qui suit ___.`
        },
        {
            label: `J’ai initié ___ à un rite secret de ma région.`
        },
        {
            label: `J’ai goûté au sang de ___ et lui (elle) au mien. Nous sommes liés par cela.`
        }
    ]
}
