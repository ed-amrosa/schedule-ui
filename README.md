## Instructions

### Installation

npm install

### Running project

npm run start

### Running tests

npm run test

## State of the Application 
All functional requirements were met, however due to lack of time to proceed any further \
i've neglected the app responsiveness to lower screen resolutions (specially the schedule log filter component),\
tests (Only made a few for the Card and TextField components just to show examples of how \
i would implement them using jest) and error handling (as it is a simple), however, i'll leave a list of possible improvements i could take. \

As for styling and responsiveness i resorted only to media queries and css. \
I've worked with bootstrap, semantics-ui, material-ui and others before however i \
thought it would be best to create them by scratch. \

### Improvements
- Add lazy loading to render only what we expect to see;
- Encapsulate get requests of lists in a object with pagination info, both in frontend and backend. \
and use viewport measures to detect when a list scroll is at the bottom and trigger another request 
to retrieve the next entries; \
- Add filter by dates;
- Remove "All" option in filter type as it does not filter anything, only status, server name and log id

## Implementation

### Tech used
- Library, framework: React;
- Global state management tool: redux-toolkit, react-redux
- CSS, HTML
- jest

### Global state management tool

I've used redux tool kit as the state management tool as it simplifies the use of redux
and reduces alot of the boilerplate. Also redux is the tool i'm most confortable with.

Redux is quite a strong global state management tool, but adds alot of boilerplate
and can be an overkill for such a simple solution.

Since we have well defined entities (schedules and logs) with simple data structures
the best choice would be, in my opinion, MobX as we can have multiple stores for each entity
and scales well horizontally if we want to add new simple entities and also has a simple setup
and store accessability with very low boilerplate.

ContextAPI could be used to store simple values, flags, etc...
