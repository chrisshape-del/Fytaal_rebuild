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
            title: "Ons Aanbod",
            subtitle: "Alles voor jouw vitaliteit",
            image: "/api/media-proxy/aanbod-header.jpg"
        }
    },
    team: {
        intro: {
            title: "Ons Team",
            description: "Maak kennis met de specialisten van Fytaal."
        }
    },
    aanpak: {
        intro: {
            title: "Onze Aanpak",
            content: "Wij werken met een unieke 3-fasen methode..."
        }
    },
    service_template: {
        title: "",
        subtitle: "",
        image: "",
        content: [
            { type: "p", text: "Nieuwe paragraaf" }
        ],
        cta: "AFSPRAAK MAKEN",
        ctaLink: "/contact"
    }
};
