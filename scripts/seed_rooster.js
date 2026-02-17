
import fs from 'fs';

const roosterData = {
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
            startTime: "07:00",
            endTime: "08:00",
            activity: "Hyrox Foundation",
            type: "hyrox",
            trainer: "Koen",
            location: "Studio",
            frequency: "Wekelijks",
            status: "available"
        },
        {
            day: "Maandag",
            startTime: "09:00",
            endTime: "10:00",
            activity: "Vitaliteit Check-in",
            type: "vitaliteit",
            trainer: "Sarah",
            location: "Studio",
            frequency: "Wekelijks",
            status: "full"
        },
        {
            day: "Dinsdag",
            startTime: "19:00",
            endTime: "20:00",
            activity: "Small Group Strength",
            type: "pgt",
            trainer: "Julian",
            location: "Studio",
            frequency: "Wekelijks",
            status: "available"
        },
        {
            day: "Woensdag",
            startTime: "07:00",
            endTime: "08:00",
            activity: "Hyrox WOD",
            type: "hyrox",
            trainer: "Koen",
            location: "Studio",
            frequency: "Wekelijks",
            status: "available"
        }
    ]
};

const sqlStatements = [];
sqlStatements.push("DELETE FROM Content WHERE id = 'rooster';");
const jsonContent = JSON.stringify(roosterData).replace(/'/g, "''");
sqlStatements.push(`INSERT INTO Content (id, data) VALUES ('rooster', '${jsonContent}');`);

const sqlContent = sqlStatements.join('\n');
fs.writeFileSync('seed_rooster.sql', sqlContent);
console.log('Generated seed_rooster.sql');
