# PlayWright_Practice
This Repo contains all the notes related to playwright and practice sessions using codespaces 
1. Installation & Setup:
 To Get started with playwright as we are focussing on using JavaScript, To execute JavaScript we need to install NodeJS in the the System.

 Note: As i am practicing this session in Github Codespaces, I don't need that installed, because it will be available inbuilt.
 To verify run the following command: node --version

 you can see the latest version -
 @ManvithaAinavolu ➜ /workspaces/PlayWright_Practice (main) $ node --version
v24.14.0

2. To get Started with installing Playwright, you can start a new project by giving the following command in the Terminal.

npm install playwright@latest

![alt text](image.png)

For more info, Please refer : https://playwright.dev/docs/intro#installing-playwright

The command will create default libraries and folders with that command.

Explanation of Folder Structure:
1. playwright.config.js: 
Playwright settings file. - where the Tests Run.

Contains:

Browser configuration
Timeout settings
Base URL
Report settings

2. Package.json:
All the Playwright dependencies will be here 
One of the most important files.

Contains:

Project name
Dependencies
Scripts

3. package-lock.json:
Created automatically by npm.

Contains:

Exact versions of installed packages

4. Tests folder :
This is the most important folder.

Contains:

Your test scripts
Automation scenarios

4. node_modules

Contains all downloaded libraries/packages.

Example:

Playwright
Other npm packages

Think of it as:

"Software installed for this project."




