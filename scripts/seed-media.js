import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = path.join(__dirname, '../public');
const files = fs.readdirSync(publicDir);

console.log(`Found ${files.length} files in public/`);

files.forEach(file => {
    if (file.match(/\.(jpg|jpeg|png|webp)$/i)) {
        const filePath = path.join('public', file);
        const key = file;
        console.log(`Seeding ${key}...`);
        try {
            // Use --local to target local dev bucket
            execSync(`npx wrangler r2 object put fytaal-media/${key} --file "${filePath}" --local`, { stdio: 'inherit' });
        } catch (err) {
            console.error(`Failed to seed ${key}`, err.message);
        }
    }
});

console.log("Media seeding complete.");
