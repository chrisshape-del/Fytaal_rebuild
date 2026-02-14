import bcrypt from 'bcryptjs';
import { v4 as uuidv4 } from 'uuid';

async function run() {
    const hash = await bcrypt.hash("password123", 10);
    console.log(`INSERT INTO AdminUser (id, username, password_hash, must_change_password) VALUES ('${uuidv4()}', 'admin', '${hash}', 1);`);
}
run();
