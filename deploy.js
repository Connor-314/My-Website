const { exec } = require('child_process');
const fs = require('fs');

// Function to check if a dependency is installed
function checkDependency(dependency) {
    return new Promise((resolve, reject) => {
        exec(`npm list ${dependency}`, (error, stdout, stderr) => {
            if (error) {
                resolve(false); // Dependency is not installed
            } else {
                resolve(true); // Dependency is installed
            }
        });
    });
}

// Function to install a dependency
function installDependency(dependency) {
    return new Promise((resolve, reject) => {
        console.log(`Installing ${dependency}...`);
        exec(`npm install ${dependency}`, (error, stdout, stderr) => {
            if (error) {
                reject(`Failed to install ${dependency}: ${stderr}`);
            } else {
                console.log(`${dependency} installed successfully.`);
                resolve();
            }
        });
    });
}

// Function to validate package.json
function validatePackageJson() {
    const packageJsonPath = './package.json';
    if (!fs.existsSync(packageJsonPath)) {
        console.error('Error: package.json file not found.');
        process.exit(1);
    }

    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    if (!packageJson.dependencies) {
        packageJson.dependencies = {};
    }

    if (!packageJson.dependencies['react-router-dom']) {
        console.log('Adding react-router-dom to package.json...');
        packageJson.dependencies['react-router-dom'] = '^6.14.1';
        fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
        console.log('react-router-dom added to package.json.');
    }
}

// Function to deploy the project
async function deploy() {
    try {
        console.log('Validating package.json...');
        validatePackageJson();

        console.log('Checking dependencies...');
        const isReactRouterDomInstalled = await checkDependency('react-router-dom');
        if (!isReactRouterDomInstalled) {
            await installDependency('react-router-dom');
        }

        console.log('Building the project...');
        exec('npm run build', (error, stdout, stderr) => {
            if (error) {
                console.error(`Build failed: ${stderr}`);
                process.exit(1);
            } else {
                console.log('Build completed successfully.');
                console.log('Your project is ready for deployment.');
            }
        });
    } catch (error) {
        console.error(`Error: ${error}`);
        process.exit(1);
    }
}

// Run the deploy script
deploy();