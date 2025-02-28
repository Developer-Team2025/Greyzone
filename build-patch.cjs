const { exec } = require("child_process");
const path = require("path");
const fs = require("fs");

// Get the React project path dynamically
const reactProjectPath = __dirname; // Greyzone folder
const laravelPublicPath = path.resolve(reactProjectPath, "../api/public/dist");

console.log("Building App...");
exec("npm run build", (err, stdout, stderr) => {
    if (err) {
        console.error(`Build failed: ${stderr}`);
        return;
    }
    console.log(stdout);

    // Remove the old dist folder if it exists
    if (fs.existsSync(laravelPublicPath)) {
        console.log("Processing...");
        exec(`rmdir /s /q "${laravelPublicPath}"`, (err) => {
            if (err) {
                console.error(`Failed to process: ${err.message}`);
                return;
            }
            moveNewBuild();
        });
    } else {
        moveNewBuild();
    }
});

function moveNewBuild() {
    console.log("Building Patch...");
    exec(`move "${path.join(reactProjectPath, 'dist')}" "${laravelPublicPath}"`, (err) => {
        if (err) {
            console.error(`Move failed: ${err.message}`);
        } else {
            console.log("Build successfully updated!");
        }
    });
}
