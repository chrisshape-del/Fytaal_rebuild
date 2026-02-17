export const pageStructures = {
    home: {
        hero: {
            title: "DÉ PERSONAL GYM",
            subtitle: "van Baarn",
            videoUrl: "https://www.youtube.com/embed/zoHJYXeDXuM?autoplay=1&mute=1&controls=0&loop=1&playlist=zoHJYXeDXuM&showinfo=0&rel=0&iv_load_policy=3&disablekb=1&modestbranding=1",
            ctaText: "Start Jouw Kickstart",
            ctaLink: "/aanbod/kickstart"
        },
        recognition: {
            heading: "We Begrijpen Je",
            subheading: "Herken je dit?",
            items: [
                { title: 'Na Fysio', description: 'Revalidatie afgerond, nu verder bouwen aan kracht' },
                { title: 'Weer Sporten', description: 'Lang niet gesport, onzeker waar te beginnen' },
                { title: 'Sterker Worden', description: 'Blessurevrij blijven en blijvend presteren' }
            ],
            image: "/api/media-proxy/381A1635-edited-scaled.webp"
        },
        bento_grid: {
            heading: "Waarom Fytaal Werkt",
            subheading: "Onze kracht",
            cards: [
                {
                    title: 'Kleinschalig & Persoonlijk',
                    description: 'Max 6 personen per groep. Echte aandacht voor jouw doelen.',
                    image: '/api/media-proxy/381A1367-1024x683.webp'
                },
                {
                    title: 'Professionele Apparatuur',
                    description: 'Alles wat je nodig hebt voor optimale resultaten',
                    image: '/api/media-proxy/381A1392-1024x683.webp'
                },
                {
                    title: 'Unieke Locatie',
                    description: 'Industriële setting in Baarn met gratis parkeren',
                    image: '/api/media-proxy/381A1454-2048x1365.webp'
                },
                {
                    title: 'Jouw Tweede Thuis',
                    description: 'Een plek waar je je welkom voelt en resultaat boekt',
                    image: '/api/media-proxy/472620672-2048x1365.webp'
                },
                {
                    title: 'Medische Expertise',
                    description: 'Trainers met fysiotherapie achtergrond. Veilig trainen, ook met blessures.'
                },
                {
                    title: 'Persoonlijke Aandacht',
                    description: 'Bij Fytaal ben je geen nummer. We coachen intensief op techniek, motivatie en jouw persoonlijke groei.'
                }
            ]
        },
        timeline: {
            heading: "Jouw Route Naar Succes",
            subheading: "De Fytaal Methode",
            phases: [
                { id: '01', title: 'Herstel', description: 'Fysiotherapeutische begeleiding van klacht naar belastbaarheid.', image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop' },
                { id: '02', title: 'Opbouw', description: 'Van revalidatie naar verantwoorde training.', image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop' },
                { id: '03', title: 'Kracht', description: 'Fundering leggen voor een sterk en weerbaar lichaam.', image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop' },
                { id: '04', title: 'Vitaliteit', description: 'Optimaliseren van energie, voeding en leefstijl.', image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2070&auto=format&fit=crop' },
                { id: '05', title: 'Performance', description: 'Topsport begeleiding en grenzen verleggen.', image: 'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=2069&auto=format&fit=crop' }
            ]
        },
        testimonials: {
            heading: "Ons Team",
            trainers: [
                { name: 'Doriene', role: 'Fysiotherapeut & Personal Trainer', quote: 'Ik help je van klacht naar kracht...', photo: '/api/media-proxy/Doriene-683x1024.webp' },
                { name: 'Koen', role: 'Personal Trainer', quote: 'Samen bouwen we aan jouw kracht...', photo: '/api/media-proxy/Koen-683x1024.webp' },
                { name: 'Lesly', role: 'Personal Trainer', quote: 'Kleinschalig betekent dat ik jou echt zie...', photo: '/api/media-proxy/Lesly-683x1024.webp' },
                { name: 'Peter', role: 'Personal Trainer', quote: 'Met de juiste begeleiding haal je meer uit jezelf...', photo: '/api/media-proxy/Peter-683x1024.webp' }
            ]
        },
        cta: {
            heading: "Start Vandaag Nog!",
            text: "Benieuwd wat wij voor jou kunnen betekenen?\nVraag nu een gratis kennismakingsgesprek aan.",
            ctaText: "AFSPRAAK MAKEN",
            ctaLink: "/contact"
        }
    },
    aanbod: {
        hero: {
            title: "ONS AANBOD",
            subtitle: "Of je nu wilt revalideren, presteren of gewoon lekker wilt bewegen. Wij hebben de expertise en de faciliteiten om jou te helpen."
        },
        cta_section: {
            title: "Bekijk het Rooster",
            description: "Benieuwd wanneer je favoriete training plaatsvindt? Bekijk ons actuele weekrooster.",
            buttonText: "Naar het rooster",
            buttonLink: "/rooster"
        },
        services_list: [
            { slug: "fysiotherapie", title: "FYSIOTHERAPIE", subtitle: "Fysiotherapeutisch trainen bij Fytaal", image: "/381A1610-1-edited-2048x1152.webp" },
            { slug: "personal-training", title: "PERSONAL TRAINING", subtitle: "Gericht. Persoonlijk. Effectief.", image: "/Koen-683x1024.webp" },
            { slug: "vitaliteit", title: "LEEFSTIJLCOACHING", subtitle: "LeefstijlCoaching bij Fytaal", image: "/Doriene-683x1024.webp" },
            { slug: "hyrox", title: "HYROX", subtitle: "Officiële Hyrox Training Club", image: "/472453920-682x1024.jpg" },
            { slug: "personal-group-training", title: "PERSONAL GROUP TRAINING", subtitle: "Persoonlijke aandacht, energie van de groep", image: "/381A1610-1-edited-2048x1152.webp" },
            { slug: "kickstart", title: "6-WEEKSE KICKSTART", subtitle: "Naar een Energieke & Gezonde Leefstijl", image: "/381A1454-2048x1365.webp" }
        ]
    },
    team: {
        hero: {
            title: "Ons Team",
            subtitle: "Maak kennis met de experts die jou helpen je doelen te bereiken. De drijvende kracht achter Fytaal."
        },
        teamMembers: [
            {
                name: "Naam Achternaam",
                role: "Functie",
                img: "/path/to/image.jpg",
                link: "/trainer/naam",
                quote: "Inspirerende quote hier.",
                bio: "Korte bio.",
                detailedBio: [
                    "Eerste alinea van uitgebreide bio.",
                    "Tweede alinea."
                ]
            }
        ]
    },
    aanpak: {
        hero: {
            title: "Onze Aanpak",
            subtitle: "Bij Fytaal werken we niet met quick fixes. Wij geloven in een structurele aanpak waarin we stap voor stap toewerken naar een duurzaam resultaat."
        },
        phases: [
            {
                id: "01",
                title: "Fase Naam",
                description: "Beschrijving van de fase.",
                image: "https://images.unsplash.com/photo-..."
            }
        ],
        extra_content: {
            title: "Waarom deze 5 fases?",
            description: "Uitleg over de aanpak."
        }
    },
    rooster: {
        hero: {
            title: "Rooster",
            subtitle: "Bekijk hier wanneer jouw favoriete trainingen zijn."
        },
        schedule_info: {
            title: "Openingstijden",
            description: "Wij zijn 7 dagen per week geopend."
        },
        events: [
            {
                day: "Maandag",
                startTime: "09:00",
                endTime: "10:00",
                activity: "Pilates",
                type: "vitaliteit",
                trainer: "Doriene",
                location: "Zaal 1",
                frequency: "Wekelijks",
                status: "available"
            }
        ]
    },
    contact: {
        hero: {
            title: "Contact",
            subtitle: "Neem contact met ons op voor een kennismaking."
        },
        decisionCards: {
            bookingCard: {
                title: "Kennismakingsgesprek boeken",
                subtitle: "Gratis en vrijblijvend · 30 minuten · Op locatie",
                buttonText: "Plan direct in"
            },
            messageCard: {
                title: "Stuur ons een bericht",
                subtitle: "Stel je vraag via het formulier · Reactie binnen 24 uur",
                buttonText: "Ga naar formulier"
            }
        },
        info: {
            email: "info@fytaal.nl",
            phone: "035-12345678",
            address: "Adres straat 1, 1234 AB Baarn"
        },
        reviews: [
            {
                name: 'Gerard Born',
                text: 'Ben op zoek gegaan naar fitnesscentrum om gezondheid te stimuleren...',
                rating: 5,
                date: '4 maanden geleden'
            },
            {
                name: 'Peter Velsen',
                text: 'Super combinatie van persoonlijke aandacht door de kleine groepen...',
                rating: 5,
                date: '9 maanden geleden'
            },
            {
                name: 'Denise Boon',
                text: 'Ik had nooit gedacht dat ik ooit in een Personal Gym zou trainen...',
                rating: 5,
                date: '1 jaar geleden'
            }
        ]
    },
    reform: {
        hero: {
            tag: "Bewegen vanuit de Fysio",
            title: "Re·Form",
            subtitle: "Hervorm je lichaam, reset je geest.",
            description: "Een fusie van kracht, flexibiliteit en mindfulness op de reformer.",
            buttonText: "BOEK EEN LES",
            subText: "Fytaal Baarn",
            image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2070&auto=format&fit=crop"
        },
        newBadge: {
            text1: "Nieuw bij Fytaal Baarn",
            text2: "Reformer Pilates, exclusief in een privé boutique setting"
        },
        explainer: {
            tag: "Wat is het?",
            title: "Reformer Pilates uitgelegd",
            description1: "Reformer Pilates is een geavanceerde vorm van Pilates op een speciaal ontworpen machine — de reformer. Met verstelbare veren train je met je eigen lichaamsgewicht en weerstand tegelijk.",
            description2: "Anders dan mat-Pilates biedt de reformer meer variatie, meer controle en een diepere spieractivatie. Je traint je hele lichaam in één sessie: core, benen, armen, rug én flexibiliteit.",
            description3: "Bij Fytaal combineren we de reformer met onze fysiotherapeutische kennis. Elke les is doordacht opgebouwd en geschikt voor elk niveau — van complete beginner tot gevorderde atleet.",
            tags: [
                "Diepere spieractivatie",
                "Volledige lichaamstraining",
                "Begeleiding op maat"
            ],
            image: "https://images.unsplash.com/photo-1754257320382-95b43e9f797c?q=80&w=1200&auto=format&fit=crop",
            statNumber: "300+",
            statText: "oefeningen mogelijk"
        },
        audience: {
            tag: "Voor Wie?",
            title: "Re·Form is er voor iedereen",
            description: "Of je nu herstellende bent, achter een bureau zit of al fanatiek sport — de reformer past zich aan jouw niveau aan.",
            items: [
                {
                    title: "Herstel & Revalidatie",
                    description: "Na een blessure, operatie of fysiotherapie. De reformer biedt een veilige, gecontroleerde manier om kracht en mobiliteit op te bouwen — zonder overbelasting.",
                    tags: ["Na fysio", "Rugklachten", "Schouder/knie herstel"]
                },
                {
                    title: "Vitaliteit & Balans",
                    description: "Voor wie dagelijks veel zit, stress ervaart of simpelweg fitter wil worden. Reformer Pilates verbetert je houding, flexibiliteit en energie.",
                    tags: ["Kantoorwerk", "Stressklachten", "Houding"]
                },
                {
                    title: "Sport & Performance",
                    description: "Als aanvulling op je sport. Verbeter je core stability, voorkom blessures en vergroot je bewegingsbereik. Veel topsporters trainen op de reformer.",
                    tags: ["Hardlopen", "Tennis", "Cross-training"]
                }
            ]
        },
        experience: {
            tag: "De Ervaring",
            title: "Niet zomaar Pilates. Re·Form Pilates.",
            description: "Ontsnap aan de drukte. Dit is jouw moment. Geen schreeuwerige muziek, geen spiegels vol ego's. Alleen jij, de machine, en de weg naar een sterker, soepeler lichaam."
        },
        method: {
            tag: "De Methode",
            title: "Jouw Transformatie",
            steps: [
                {
                    id: "01",
                    title: "Flow & Herstel",
                    description: "We beginnen met het losmaken van het lichaam. Vloeiende bewegingen op de reformer zorgen voor ruimte in je gewrichten en een rustige ademhaling.",
                    image: "/reform-1.png"
                },
                {
                    id: "02",
                    title: "Core & Stabiliteit",
                    description: "De basis van alles. We bouwen kracht op vanuit je kernspieren. Je leert je lichaam controleren en stabiliseren voor een sterke houding.",
                    image: "/reform-2.png"
                },
                {
                    id: "03",
                    title: "Kracht & Performance",
                    description: "We verhogen de weerstand. Dynamische en krachtige bewegingen dagen je spieren uit. Je bouwt aan een atletisch, sterk lichaam.",
                    image: "/reform-3.png"
                }
            ]
        },
        usps: {
            tag: "Waarom Re·Form?",
            title: "Méér dan een les",
            items: [
                { title: "Max 6 per les", description: "Kleine groepen voor persoonlijke aandacht en correctie." },
                { title: "Fysio-achtergrond", description: "Lessen ontworpen vanuit fysiotherapeutische kennis. Veilig en verantwoord." },
                { title: "50 minuten", description: "Compact maar compleet. Warm-up, training en cooldown in één sessie." },
                { title: "Boutique sfeer", description: "Geen grote sportschool. Een rustige, stijlvolle studio speciaal voor jou." },
                { title: "Flexibel boeken", description: "Boek online wanneer het jou uitkomt. Ochtend, middag of avond." },
                { title: "Elk niveau welkom", description: "Complete beginner of ervaren? Elke oefening wordt aangepast aan jouw niveau." }
            ]
        },
        practical: {
            tag: "Praktisch",
            title: "Alles wat je moet weten",
            details: [
                { label: "Lesduur", value: "50 minuten" },
                { label: "Groepsgrootte", value: "Maximaal 6 personen" },
                { label: "Wat meenemen?", value: "Sportkleding met sokken. Handdoek en water staan klaar." },
                { label: "Ervaring nodig?", value: "Nee! We passen elke oefening aan jouw niveau aan." },
                { label: "Locatie", value: "Fytaal Baarn — Amsterdamsestraatweg 21" },
                { label: "Eerste les", value: "Boek een proefles en ervaar het zelf." }
            ],
            image: "https://images.unsplash.com/photo-1717500251646-3e661a2ee7e1?q=80&w=1200&auto=format&fit=crop",
            locationTag: {
                label: "Locatie",
                value: "Fytaal Baarn",
                subValue: "Amsterdamsestraatweg 21"
            }
        },
        cta: {
            title: "Start Jouw Transformatie",
            description: "Ervaar het zelf. Boek een proefles of start direct met onze introductiedeal.",
            button1Text: "BEKIJK ROOSTER",
            button1Link: "/rooster",
            button2Text: "NEEM CONTACT OP",
            button2Link: "/contact"
        }
    }
};
