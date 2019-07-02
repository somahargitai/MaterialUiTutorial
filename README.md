# Material UI Tutorial
This is an introducton with simple examples on using Material UI in a React + Typescript environment.

## Get Started
- prequisites -
You will need node, npm and I highly recommend to have Git and VS Code with your favourite [extensions](https://gist.github.com/somahargitai/486d9d747d9922cede777e319e124d0c).

- [create-react-app](https://github.com/facebook/create-react-app) supports typescript, so you can simply create your app like: 
  - `npx create-react-app name-off-application --typescript`

- install [Material UI](https://material-ui.com/)
  - `npm install @material-ui/core`

- install [Styled Components](https://www.styled-components.com/) -
Originally I wanted to avoid using styling, just show Material UI capabilities before ANY kind of styles. Unfortunately some elements without styles are so ugly that finally I just added Styled Components. It depends on you how you style your Material UI components. MUI itself provides a styling package. My library of choice is Styled Components. I tried not to rely on it too much.
  - `npm install --save styled-components`
  - `npm install @types/styled-components`

- Clean that ridiculous React logo. 
Okay, it is not ridiculous, but you don't need it and it is so big that you won't see your new elements below. You can delete it in _src/App.tsx_ or at lease make things smaller in _App.css_ with modifying some line: 
`.App-logo { height: 10vmin; }` instead of 40vmin, `.App-header { min-height: 20vh; }` instead of 100vh, `@keyframes App-logo-spin { to {    transform: rotate(30deg); } }` instead of 360deg, and add `.App-header p { margin: 0; }`.


## Add some Material elements
Just browse Material UI component site and paste a [Button](https://material-ui.com/components/buttons/) or a [Checkbox](https://material-ui.com/components/selects/).

## Theming
https://material-ui.com/customization/themes/

## Recommendations
Example projects by Material UI: https://material-ui.com/getting-started/example-projects/