# Project 2
A responsive online display of pictures, music and text.

## Requirements
For development, you will only need Node.js installed on your environement.

### Node
Node is really easy to install & now include NPM. You should be able to run the following command after the installation procedure below.

    $ node --version
    v8.9.4

    $ npm --version
    6.4.1

### Node installation on OS X
You will need to use a Terminal. On OS X, you can find the default terminal in /Applications/Utilities/Terminal.app.

Please install Homebrew if it's not already done with the following command.

    $ ruby -e "$(curl -fsSL https://raw.github.com/Homebrew/homebrew/go/install)"
If everything when fine, you should run

    brew install node

### Node installation on Linux
    sudo apt-get install python-software-properties
    sudo add-apt-repository ppa:chris-lea/node.js
    sudo apt-get update
    sudo apt-get install nodejs

### Node installation on Windows
Just go on official Node.js website & grab the installer. Also, be sure to have git available in your PATH, npm might need it.

## Install
    $ git clone https://github.com/IT2810/it2810-webutvikling-h18-prosjekt-2-gruppe--50.git
    $ cd project_1
    $ npm install

### Start
    $ npm start

## Languages and tools

### HTML
Used for initialising view

### JavaScript
 - React is used for UI

### CSS
All styling and responsive design done in CSS without use of external CSS frameworks

### Loading SVG
- Why we didn't use dangerouslySetInnerHTML
    - For such a small project we didn't find it necessary.


### Use of stateless components
A functionality in ES6 that makes code more compact and easier to read. It removes the need for the 'this' keyword,which in javascript can be a little confusing, making coding easier.


### Use of axios
Axios is a JavaScript library used to make HTTP requests from node.js or XMLHttpRequests from the browser.
- Better errorhandling

## Structuring
The application is structured with the App component that has Tabs, Display and SelectMenu. 
The Tabs include a Tab component for each tab, and the SelectMenu has a Select for each option. When going from wide screen to smaller screen, the SelectMenu becomes a dropdown list to save space. 
The Display includes the SVG, Sound and Text component.

## Testing

### Design
Used the example design provided in the project description as a starting point. Made drafts for mobile design in Balsamiq.
Started working on the responsive design in CSS while simultaneously working on functionality in a different branch.
The design layout was planned before we began with the project so we were all on the same page, which helps :)

Tested the design regularly and since we use different browsers and OSs, we had continueous cross-browser and cross-system testing.

### Github
We used feature branches and merged and rebased to the 'develop' branch when PRs were approved. 