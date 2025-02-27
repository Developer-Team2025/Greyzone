const { exec } = require("child_process");
const path = require("path");
const fs = require("fs");

// Get the React project path dynamically
// const reactProjectPath = __dirname; // Greyzone folder
// const laravelPublicPath = path.resolve(reactProjectPath, "../pjdevproduction/public/dist");
const reactProjectPath = __dirname; // Greyzone folder
const laravelProjectPath = path.resolve(reactProjectPath, "../api"); // Path to the Laravel project root
const laravelPublicPath = path.resolve(laravelProjectPath, "public/dist");
console.log("Building App...");
exec(`rm -rf "${laravelPublicPath}"`, (err) => {
    if (err) {
        console.error(`Failed to remove old dist folder: ${err.message}`);
        return;
    }
    console.log("Old build directory removed!");

    // Move the newly built dist directory from React to the Laravel public directory
    exec(`mv "${path.join(reactProjectPath, 'dist')}" "${laravelPublicPath}"`, (err) => {
        if (err) {
            console.error(`Move failed: ${err.message}`);
        } else {
            console.log("React build successfully moved to Laravel public/dist!");
            exec("php artisan cache:clear", { cwd: laravelProjectPath }, (err, stdout, stderr) => {
                if (err) {
                    console.error(`Failed to clear cache: ${stderr || err.message}`);
                } else {
                    console.log("Laravel cache cleared successfully:", stdout);
                }
            });

            exec("php artisan config:cache", { cwd: laravelProjectPath }, (err, stdout, stderr) => {
                if (err) {
                    console.error(`Failed to clear config cache: ${stderr || err.message}`);
                } else {
                    console.log("Laravel config cache cleared successfully:", stdout);
                }
            });
        }
    });
});
// exec("npm run build", (err, stdout, stderr) => {
//     if (err) {
//         console.error(`Build failed: ${stderr}`);
//         return;
//     }
//     console.log(stdout);

//     // Remove the old dist folder if it exists
//     if (fs.existsSync(laravelPublicPath)) {
//         console.log("Processing...");
//         exec(`rmdir /s /q "${laravelPublicPath}"`, (err) => {
//             if (err) {
//                 console.error(`Failed to process: ${err.message}`);
//                 return;
//             }
//             moveNewBuild();
//         });
//     } else {
//         moveNewBuild();
//     }
// });

// function moveNewBuild() {
//     console.log("Building Patch...");
//     exec(`move "${path.join(reactProjectPath, 'dist')}" "${laravelPublicPath}"`, (err) => {
//         if (err) {
//             console.error(`Move failed: ${err.message}`);
//         } else {
//             console.log("Build successfully updated!");
//         }
//     });
// }
