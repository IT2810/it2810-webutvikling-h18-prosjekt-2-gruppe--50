## Documentation


### Loading SVG
- Why we didn't use setDangerouslyInnerHTML


### Use of stateless components


### Use of axios
- Better errorhandling

### Structuring
The application is structured with the App component that has Tabs, Display and SelectMenu. 
The Tabs include a Tab component for each tab, and the SelectMenu has a Select for each option. When going from wide screen to smaller screen, the SelectMenu becomes an dropdown list to save space. 
The Display includes the SVG, Sound and Text component. 