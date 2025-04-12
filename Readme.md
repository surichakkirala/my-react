#start

# Food order App

- Header

  - Logo
  - NavItems

- Body

  - Search
  - RestaurantContainer
  - RestaurantCard

- Footer

  - Copyright
  - Links
  - Address & Contact

# whenever a state variable updates react triggers a reconciliation cycle(re-renders the component)

# useEffect

- If no dependency is specified useEffect will be called for every render
- If empty dependency array is specified useEffect will be called on initial render (just once)
- If any dependency is specified in the array useEffect will be called everytime the dependency is updated

# Life cycle of class based components

- Parent Constructor
  - Parent reder
    - First child constructor
    - First child render
    - Second child constructor
    - Second child render

< DOM is updated in a single batch>

- First child componentDidMount
- Second child componentDidMount
- Parent componentDidMount

# Different names for Lazy loading

- Chunking
- Code Splitting
- Dynamic Bundling
- OnDemand Loading
- Dynamic Import

# Redux Toolkit

- Install @reduxjs/toolkit and react-redux
- Build our store
- Connect our store to our app
- Create our cartSlice
- Dispatch(action)
- Read the data using selector

# Types of testing(what developer can do)

- Unit Testing
- Integration Testing
- E2E(End to End) Testing

# Setting up testing in our App

- Install React Testing Library
  - Supporting links: https://testing-library.com/
- Install JEST
  - Supporting links: https://jestjs.io/
- Install Babel dependencies
- Configure Babel
- We need to override babel configuration which comes with parcel.Follow below steps
  - Go to https://parceljs.org/
  - Click on Get started and select Javascript from Languages
  - Now on the right hand side select Babel from the provided options
  - Go to Usage with other tools section
  - Create .parcelrc file under root directory and copy the content from above mentioned section.
- Writing Jest configuration - created by running npx jest --init
- Install JSDOM library
  - Supporting links - https://testing-library.com/docs/react-testing-library/setup#jest-28
- Install @babel/preset-react - to make JSX work in test cases
- Include @babel/preset-react inside my babel configuration as below
  - ["@babel/preset-react", { runtime: "automatic" }]
- Install @testing-library/jest-dom (npm i -D @testing-library/jest-dom)
- To fix issues while writing test cases for Header do below steps
  - npm install jest-fixed-jsdom --save-dev
  - Then in ur jest.config.js file, add this config below likely replacing jsdom
    module. exports ={
    testEnvironment : 'jest-fixed-jsdom',
    }
- Add below in package.json so that tests will run whenever there is a change in test file. This is similar to that of npm run
  - "watch-test" : "jest --watch"
