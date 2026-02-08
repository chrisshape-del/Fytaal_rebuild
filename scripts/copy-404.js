import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, '../dist');

const indexHtml = path.join(distDir, 'index.html');
const fourOhFourHtml = path.join(distDir, '404.html');

try {
    fs.copyFileSync(indexHtml, fourOhFourHtml);
    console.log('Successfully created 404.html from index.html for SPA routing.');
} catch (error) {
    console.error('Error creating 404.html:', error);
    process.exit(1);
}
