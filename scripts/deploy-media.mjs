import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

// Files to upload (mapped from local path to key)
// Based on finding them in 'public' and 'Pictures'
const filesToUpload = [
    { local: 'public/381A1635-edited-scaled.webp', key: '381A1635-edited-scaled.webp' },
    { local: 'public/381A1367-1024x683.webp', key: '381A1367-1024x683.webp' },
    { local: 'public/381A1392-1024x683.webp', key: '381A1392-1024x683.webp' },
    { local: 'public/381A1454-2048x1365.webp', key: '381A1454-2048x1365.webp' },
    { local: 'public/472620672-2048x1365.webp', key: '472620672-2048x1365.webp' },
    { local: 'public/Doriene-683x1024.webp', key: 'Doriene-683x1024.webp' },
    { local: 'public/Koen-683x1024.webp', key: 'Koen-683x1024.webp' },
    { local: 'public/Lesly-683x1024.webp', key: 'Lesly-683x1024.webp' },
    { local: 'public/Peter-683x1024.webp', key: 'Peter-683x1024.webp' },
    // Use the (1) versions if the main ones are missing or issues, but the originals seem to be in public
];

console.log("🚀 Starting media upload to R2 (fytaal-media)...");

// Ensure bucket exists
try {
    console.log("Checking bucket...");
    execSync('npx wrangler r2 bucket create fytaal-media', { stdio: 'pipe' }); // Pipe to ignore error if exists
} catch (e) {
    // Ignore error if bucket already exists
}

// Upload loop
for (const file of filesToUpload) {
    if (fs.existsSync(file.local)) {
        console.log(`📤 Uploading ${file.local} -> ${file.key}...`);
        try {
            execSync(`npx wrangler r2 object put fytaal-media/${file.key} --file="${file.local}"`, { stdio: 'inherit' });
            console.log(`✅ Uploaded ${file.key}`);
        } catch (err) {
            console.error(`❌ Failed to upload ${file.key}:`, err.message);
        }
    } else {
        console.warn(`⚠️ Local file not found: ${file.local}`);
    }
}

console.log("🎉 Media upload complete!");
