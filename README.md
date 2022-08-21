# Dat Assessment

The task was done using React and its Material UI. I found no need to use NextJS because it's just a landing page.

## Live preview

A live version of the completed task is running on heroku just so you can have a look before if necessary, run it in your local machine.

Note that you will not be served the production build so expect some delay on first load as in dev environmnet.

Live link [http://dat-assessment.herokuapp.com/](http://dat-assessment.herokuapp.com/)

## Start

```cmd
npm install
```

```cmd
npm start
```

## #Note

- Please let me know about anything that is unclear.
- App is responsive so you can try different screen sizes.
- Will keep adding updates untill my feedback is provided, thanks.
- styling is done in the form
  - `Component/`
    - `Styled.js`
    - `...others.jsx`
- @mui uses @motion for styling which provides built-in support for sass as JavaScript objects
- No testing made due to shortage of time

## Breakdown

### Dependencies

- `@mui` : For designing the UI
- `Formik` : For easy form validation
- `Yup` : For creating validation schema used by `Formik`
- `Redux` : For centralising the global state of the application such as (theme, cart informations, etc)

### Structure

#### componenets

- `utils/` : This folder holds utility components that are repeatedly used within the application. Some of which include

  - `icons/` : Contains all SVGIcons for the app
  - `Center` : Centralizes its contents both vertically and horizontally
  - `Wrapper`: Wraps its children in paddings depending on screen size.
  - `Image` : Fetches and converts image src to blob src and while doing so, displays a loading indicator. All images in the project were loaded using this component.

- `Main components` : Every compont here is a section to the home page except for the `Cart`
  - `Cart/` : Provides neccesary UIs for the cart in store
  - `ExtraFeatures` : These are additional features including `ThemeSwitch` that will toggle the theme mode between `light` and `dark`, `ImageLoadingSimultor` which will simulate a situation where images loaded using `utils/Image` are still loading.
  - `...rest` : The rest of the components are the various sections of the home page

#### hooks

- `useLocalStorage` : Keeps in sync with localStorage. Always tries to fetch from localStorage, but if no result is found, then fetch from api and save the response.
- `useFetch` : Provides an easy interface for calling api endpoints.
- `useMediaQuery` : Keeps in sync with device size by using mui's breakpoints
- `useExtra`: Returns methods and values for the extra features added such as `theme`, `toggleThemeMode`

#### features/store

- `cartSlice` : Stores all informations about the shopping cart for global access
- `extraSlice` : Store all informations about the extra features for global access
  ss
