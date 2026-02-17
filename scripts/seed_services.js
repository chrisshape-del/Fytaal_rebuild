
import fs from 'fs';
import { servicesData } from '../src/data/services.js';

const sqlStatements = [];

// Clean up existing service content
sqlStatements.push("DELETE FROM Content WHERE id LIKE 'service-%';");

Object.entries(servicesData).forEach(([slug, data]) => {
    // Skip 'rooster' as it is handled as a main page
    if (slug === 'rooster') return;

    const pageId = `service-${slug}`;

    // Transform content array to match the structure expected by the frontend/editor if needed 
    // or just store it as is. 
    // ServicePage.jsx expects: { title, subtitle, content: [], cta: ..., image: ... }
    // The data in services.js ALREADY matches this.

    const jsonContent = JSON.stringify(data).replace(/'/g, "''"); // Escape single quotes for SQL
    sqlStatements.push(`INSERT INTO Content (id, data) VALUES ('${pageId}', '${jsonContent}');`);
});

const sqlContent = sqlStatements.join('\n');

fs.writeFileSync('seed_services.sql', sqlContent);

console.log('Generated seed_services.sql');
console.log('Run with: npx wrangler d1 execute fytaal-db --remote --file=./seed_services.sql');
