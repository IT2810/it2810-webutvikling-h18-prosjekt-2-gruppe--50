# Project 2
A responsive online display with combinations of pictures, music and text based on selection from the three categories to each meadia type.

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
    $ cd it2810-webutvikling-h18-prosjekt-2-gruppe--50
    $ npm install

### Start
    $ npm start

## Documentation

### Loading SVG
Marius - you fill out?
- Why we didn't use dangerouslySetInnerHTML
    - For such a small project we didn't find it necessary.


### Use of stateless components
Marius - you fill out/make more readable/discussion
A functionality in ES6 that makes code more compact and easier to read. It removes the need for the 'this' keyword,which in javascript can be a little confusing, making coding easier.

### Use of axios
Instead of using fetch, we chose to use axios to make HTTP request. One reason for this is that fetch has to steps when handling json data (make the request and then call .json() on the reponse). Axios, on the other hand, just returns the data object, and thereby removes one step. 
Another reason is that fetch has some weaknesses when it comes to errorhandling, since it doesn't necessarily enter the catch-block when it gets a 400 error, but instead enters then-block. Axios handles errors better, since it does, as expected, enter the catch-block when getting an error. 

Axios was therefor used to get the svg-images and the lyrics as json. 

## Structuring
The application is structured with the App component as root, that has Tabs, Display and SelectMenu. 
The Tabs include a Tab component for each tab, and the SelectMenu has a Select for each option. By making Tab and Select as separate components, it was easy to reuse them and their desing. 
The Display includes the SVG, Sound and Text component.

This structuring allowed for nesting and reuse of components, and adding functionality and handling of states to the respective components. Data was sendt from parent to child using props, and parents, like App, was informed about changes in child components, for example when selecting a new category, trough functions sent from parent to child. 

## Testing
TODO: DOUBLECHECK!!!
The goal of the testing was to make sure that the design was responsive, meaning that it wrapped correctly depending on the screensize and continued to look nice and userfriendly. 

During the coding of the design, the inspector in both chrome and mozilla firefox was used, where the responsive design mode was used to simulate different widths on different devices. This was done on a computer with Windows 10. It was also tested on a Macbook. 

On a big screen (> 1024 px), the tabs was on the top. Under was the display with the different media types and the selection-menu was to the right. They took 70% and 30% of the container each. In the display, the different media types was aligned vertically, with sound, image and then text. The text was split in two columns. 

On a table/smaller screen (< 768px), the select menu became dropdown boxes stacked vertically at the top, with the tabs underneath and the display. The text was then only one column. 

### Design
The example design provided in the project description was used as a starting point. Drafts was made for mobile design in Balsamiq. The design and its responsiveness was worked on simultaneously as other functionality. There was therefore multiple design-branches whith different improvements that was made and merged in during development. The basic frame of the design was agreed upon before the real coding was made, but smaller changes was made on the go as saw fit. 

Tested the design regularly and since we use different browsers and OSs, we had continueous cross-browser and cross-system testing.

In a big screen, there was radio-buttons for each choise in regard to category. When the screen got smaller, they where replaced with dropdowns selects, so that they took less place on the screen. The text was shown in two columns on a big screen, since it is more readable with shorter sentences and it was more fitting of the texts. When the screen got smaller, it was decreased to only one column. 

### Github
We used feature, bug and design branches, with a develop branch we rebased on before each merge. Before delivery, we merged it to master. In the first week, all was done in the masterweek because the project was setup and started on before the group met, since it took a while to find a meeting-time that fit all. A pull request was created when the branch was complete, which had to be approved by one other member before it was merged into the develop branch. Because of some inexperience and troubles with git, not all branches was rebase before merge, and the git history is therefore a little messy. 
