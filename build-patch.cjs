const { exec } = require("child_process");
const path = require("path");
const fs = require("fs");

// Get the React project path dynamically
const reactProjectPath = __dirname; // Greyzone folder
const laravelPublicPath = path.resolve(reactProjectPath, "../api/public/dist");

console.log("Building React...");
exec("npm run build", (err, stdout, stderr) => {
    if (err) {
        console.error(`Build failed: ${stderr}`);
        return;
    }
    console.log(stdout);

    // Remove the old dist folder if it exists
    if (fs.existsSync(laravelPublicPath)) {
        console.log("Removing old dist folder...");
        exec(`rmdir /s /q "${laravelPublicPath}"`, (err) => {
            if (err) {
                console.error(`Failed to remove old dist: ${err.message}`);
                return;
            }
            moveNewBuild();
        });
    } else {
        moveNewBuild();
    }
});

function moveNewBuild() {
    console.log("Moving new build...");
    exec(`move "${path.join(reactProjectPath, 'dist')}" "${laravelPublicPath}"`, (err) => {
        if (err) {
            console.error(`Move failed: ${err.message}`);
        } else {
            console.log("Build successfully updated!");
        }
    });
}
