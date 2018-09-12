export const Chaman = {
    id: 'chaman',
    label: 'Le chaman',
    description: `Tu grattes, tu sculptes l’os avec ton couteau, le fémur d’un satyre mort il y a peu. Tes doigts étalent la pâte vert sombre de scarabée broyé en longues lignes tourbillonnantes. Tu brandis avec fierté le totem enfin terminé. Tes compagnons te regardent de travers alors que tu commences à murmurer. Les flammes deviennent bleues et survient le murmure.<br>Les esprits sont parmi vous ce soir et tu les appelles chacun par son nom.`,
    races: [
        {
            id: `chaman_humain`,
            label: `Humain`,
            names : [
                {
                    id: `chaman_name`,
                    label: `___`
                }
            ],
            startingActions: [
                {
                    id: `chaman_humain`,
                    title: `Humain : Ange gardien`,
                    description: `Choisissez un esprit qui veille sur vous. Une fois par attaque, lorsque vous infligez des dégâts et obtenez 1 sur votre dé, l’esprit vient à votre aide. Relancez le dé et ...<br><ul><li>Esprit du sanglier : ...ajoutez le marqueur puissant à votre attaque.</li><li>Esprit du scarabée : ...vous avez +2 armure à suivre.</li><li>Esprit du faucon : ...vous avez +1 à suivre sur votre prochaine attaque.</li><li>Esprit de l’arbre de fer : ...vous avez +1 à suivre pour défier le danger.</li></ul>`
                }
            ]
        }
    ],
    looks: [
        [
            {
                id: 'chaman_distant',
                label: 'Regard distant'
            },
            {
                id: 'chaman_intense',
                label: 'Regard intense'
            },
            {
                id: 'chaman_sagesse',
                label: 'Yeux empreints de sagesse'
            }
        ],
        [
            {
                id: 'chaman_coiffe',
                label: 'Coiffe'
            },
            {
                id: 'chaman_masque',
                label: 'Masque'
            },
            {
                id: 'chaman_ebouriffe',
                label: 'Ebouriffé'
            }
        ],
        [
            {
                id: 'chaman_plastron',
                label: `Plastron d'os`
            },
            {
                id: 'chaman_peaux',
                label: 'Peaux'
            },
            {
                id: 'chaman_ceremonie',
                label: 'Tenue de cérémonie'
            }
        ],
        [
            {
                id: 'chaman_souple',
                label: 'Corps souple'
            },
            {
                id: 'chaman_tatoue',
                label: 'Corps tatoué'
            },
            {
                id: 'chaman_epaisse',
                label: 'Stature épaisse'
            }
        ]
    ],
    baseHP : 6,
    damage: 6,
    startingActions : [
        {
            id: `chaman_murmures`,
            title: `Murmures`,
            description: `Lorsque vous discernez la réalité, vous pouvez également poser la question suivante : « Que murmurent les esprits ici ? »`
        },
        {
            id: `chaman_pacte`,
            title: `Pacte spirituel`,
            description: `Un pacte scellé avec le royaume des esprits vous permet de créer jusqu’à 3 totems spirituels. Décrivez à quoi ils ressemblent : des poupées, des gris-gris, des os gravés de symboles ou encore des masques rituels ou les crânes de vos ennemis. Quelle que soit leur forme, vous mettez un point d’honneur à créer des totems dignes des esprits qu’ils recevront.<br>Apparence de vos totems : ___`
        },
        {
            id: `chaman_creation`,
            title: `Création de totem`,
            description: `Après avoir passé environ une heure ininterrompue à créer un nouveau totem, vous pouvez lier un esprit commun de la liste ou tout autre esprit que vous indiquera le MJ (qui peut être rattaché à une situation ou un lieu). Vous ne pouvez pas lier plus d’esprits que votre pacte ne vous le permet et vous devez désigner celui qui sera libéré en premier. Chaque totem est doté d’une charge. Consommez une charge et prononcez le nom de l’esprit pour le libérer. Le totem se brise lorsqu’il est à court de charge et l’esprit ne peut plus y retourner.<br>Vous pouvez confier l’un de vos totems d’esprit commun à un allié. Décrivez à quoi il ressemble et indiquez son nombre de charges. N’oubliez pas de lui révéler le nom de l’esprit pour qu’il puisse le libérer. Le totem fonctionne normalement mais vous seul connaissez le langage des esprits.`
        },
        {
            id: `chaman_langage`,
            title: `Langage des esprits`,
            description: `Lorsque vous prononcez le nom d’un esprit lié à l’un de vos totems, vous pouvez lancer 2d6+SAG au lieu de dépenser une charge.<br>Sur 10+, l’esprit est libéré sans problème et revient au totem par la suite.<br>Sur 7-9, l’esprit est libéré mais choisissez 1 :<br><ul><li>Vous attirez une attention malvenue ou vous vous exposez (le MJ vous décrira comment).</li><li>Votre réputation dans le monde des esprits est altérée. Vous avez-1 continu à votre langage des esprits jusqu’à ce que vous preniez une heure pour honorer les esprits par le rituel qui convient.</li><li>Une charge de votre totem est consommée malgré tout.</li></ul>`
        },
        {
            id: `chaman_capture`,
            title: `Capture d'esprit`,
            description: `Lorsque vous êtes témoin de la mort d’une créature, lancez 2d6+SAG pour lier son esprit à un totem spécial et unique que vous transportez. Ce totem n’a pas de charges mais vous ne pouvez pas faire usage de votre langage des esprits et l’esprit est libéré une fois pour toutes.<br>Sur 10+, l’esprit est capturé. Le MJ vous dira ce qu’il advient lorsque vous le libérez. L’effet est surnaturel et associé à la nature ou au désir le plus vif de l’esprit (de son vivant).<br>Sur 7-9, l’esprit est capturé mais une complication survient. Le MJ vous dira laquelle, comme par exemple :<br><ul><li>L’esprit est imprévisible.</li><li>Un effet indésirable survient également.</li><li>L’esprit est agité et doit être libéré après un certain délai.</li></ul>`
        }
    ],
    alignments: [
        {
            id: `chaman_bon`,
            title: `Bon`,
            description: `Soignez ou aidez un esprit perturbé.`
        },
        {
            id: `chaman_neutre`,
            title: `Neutre`,
            description: `Montrez à quelqu’un toute votre sagesse.`
        },
        {
            id: `chaman_chaotique`,
            title: `Chaotique`,
            description: `Contribuez à la vengeance d’un esprit.`
        }
    ],
    maxWeight: 8,
    equipments: [
        {
            id: 'chaman_rations',
            label: `Des rations (5 utilisations, 1 poids)`
        },
        {
            id: 'chaman_totem',
            label: `Votre totem de capture d’esprit (1 poids)`
        },
        {
            id: 'chaman_ciseau',
            label: `Un ciseau à sculpter (contact, 1 poids)`
        },
        {
            choices: [
                {
                    id: 'chaman_dague',
                    label: `Dague de cérémonie (contact, 1 poids)`
                },
                {
                    id: 'chaman_epieu',
                    label: `Epieu (allonge, lancé, courte)`
                },
                {
                    id: 'chaman_baton',
                    label: `Bâton (proche, 2 mains, 1 poids)`
                }
            ]
        },
        {
            choices: [
                {
                    id: 'chaman_bouclier',
                    label: `Bouclier de bois peint (+1 armure, 1 poids)`
                },
                {
                    id: 'chaman_armure',
                    label: `Armure légère de fourrure ou d’os (1 armure, 1 poids)`
                }
            ]
        },
        {
            choices: [
                {
                    id: 'chaman_champignon',
                    label: `Champignon rêveur (hallucinogène, 0 poids)`
                },
                {
                    id: 'chaman_cataplasmes',
                    label: `Cataplasmes et herbes (2 utilisations, lent, 1 poids)`
                },
                {
                    id: 'chaman_antidote',
                    label: `Antidote (0 poids)`
                },
                {
                    id: 'chaman_tambour',
                    label: `Tambour rituel (1 poids)`
                }
            ]
        }
    ],
    bonds: [
        {
            label: `Il m’est évident que ___ a un esprit troublé.`
        },
        {
            label: `___ et mon esprit sont liés.`
        },
        {
            label: `J’ai entendu les esprits parler des pouvoirs de ___`
        },
        {
            label: `___ doit apprendre à respecter le monde des esprits.`
        },
    ]
}
