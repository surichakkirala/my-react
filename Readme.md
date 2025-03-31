#start

# Food order App

/\*

- Header
- - Logo
- - NavItems
-
- Body
- - Search
- - RestaurantContainer
-     - RestaurantCard
- Footer
- - Copyright
- - Links
- - Address & Contact
- \*/

# whenever a state variable updates react triggers a reconciliation cycle(re-renders the component)

# useEffect

-- If no dependency is specified useEffect will be called for every render
-- If empty dependency array is specified useEffect will be called on initial render (just once)
-- If any dependency is specified in the array useEffect will be called everytime the dependency is updated

# Life cycle of class based components

- Parent Constructor
- Parent render

- - First child constructor
- - First child render

- - Second child constructor
- - Second child render

< DOM is updated in a single batch>

- - First child componentDidMount
- - Second child componentDidMount

- - Parent componentDidMount

# Different names for Lazy loading

- - Chunking
- - Code Splitting
- - Dynamic Bundling
- - OnDemand Loading
- - Dynamic Import
