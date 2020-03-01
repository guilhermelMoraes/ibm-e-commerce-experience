# IBM E-COMMERCE EXPERIENCE

How to run the project: 

## dependencies

 - Make sure to have installed [Node.JS](https://nodejs.org/en/) - preferably the LTS version;
 - Make sure to have installed [NPM](https://www.npmjs.com/) - the 5.2v above;
 - Make sure to have installed [Yarn](https://classic.yarnpkg.com/en/docs/install#debian-stable) globally;
 - Make sure to have installed [Git](https://git-scm.com/).

 ## steps
 1. clone this repository in any directory on your machine;
 2. open the terminal in the directory and paste this command: `yarn install`;
 3. when it is done, open another tab in the terminal - in the same directory - and paste this command: `npx json-server --port 3001 --watch data/products.json`;
 4. now in the 1st tab of the terminal you've opened, paste this command: `yarn start`;

Done! Now go to [http://localhost:3000/](http://localhost:3000/) and you're good to go.


The project was made with the latest version of the [create-react-app tool](https://create-react-app.dev/).

