import { servicesData } from '../src/data/services.js';
import fs from 'fs';

const sqlStatements = [];

// Clean up existing service content to avoid duplicates/conflicts on re-seed
// We use a like clause to target service pages if we use a naming convention like 'service-%'
// relying on the plan to prefix IDs with 'service-'
sqlStatements.push(`DELETE FROM Content WHERE id LIKE 'service-%';`);

Object.entries(servicesData).forEach(([slug, data]) => {
    const id = `service-${slug}`;
    const jsonContent = JSON.stringify(data).replace(/'/g, "''"); // Escape single quotes for SQL
    sqlStatements.push(`INSERT INTO Content (id, data) VALUES ('${id}', '${jsonContent}');`);
});

const sqlContent = sqlStatements.join('\n');

fs.writeFileSync('seed_services.sql', sqlContent);

console.log('Generated seed_services.sql');
console.log('Run with: npx wrangler d1 execute fytaal-db --local --file=./seed_services.sql');
