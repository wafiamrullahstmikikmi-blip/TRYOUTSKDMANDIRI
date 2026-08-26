const { execSync } = require('child_process');
try {
    execSync('git reset --hard ca6282e5b8d477652626d56c8e05e098afb364ec', { shell: 'cmd.exe', stdio: 'inherit' });
    console.log("Reset Success");
} catch (e) {
    console.error("Error:", e.message);
}
