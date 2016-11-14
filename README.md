# Basic
- A basic jeopardy app

## Planning
  1. Wireframing
    - UI
      - Minimum requirements: Clean, colourful, no animations
      - Goal requirements: Low-impact animations, more complicated geometric elements added to page for visual impact.
    - Wireframing from this project includded mapping all parent and child components
    - A single parent element holds all child elements as the page structure does not change during gameplay. *See:* [container component app.js](/app/scripts/components/containers/app.js)
    - `On page modal` vs. `new link modal`
      - The decision to include the modal on the same page was made to allow for further practice of the flexible unidirectional flow of data allowed by React.
      - A boolean key/value was structured in a single session Model, that when toggled hides/views the question modal.
    - Wireframing originally led to the creation on 5 child `jsx` elements:
      * Nav Control
      ```jsx
      <Nav />
      ```
      * Category Lists
      ```jsx
      <Categories />
      ```
      * Modal
      ```jsx
      <Modal />
      ```
      * Question Answer
      ```jsx
      <Answer />
      ```
      * Total Score
      ```jsx
      <Score />
      ```
    - After creating the components, the Question Answer & Total Score components were merged into a single `jsx` element for styling and semantic purposes as these two codeblocks simultaneously change after answering a single question. *See:*
      ```jsx
      <ScoreKeeper />
      ```
  2. Data Modeling
    - Preliminary data modeling included:
      1. `Collection` of Categories
        - With methods to randomize api endpoints and retrieve server data.
      2. `Model` of a single Collection
        - With a method to filter the data and retrieve single questions for the required values of the games. This was handled in pair by parsing server supplied collection data.
      3. `Session` to house player's running score
        - With methods to handle `updating scores`, `verifying answers`, `modal handling` for a specific questions answer prompt, as well as updating the current answer to dispalying in the `modal`.
    - Once these had been created and data retrieved, it was necessary to creation an additional Model for a single `question`, so that an additional boolean key/value could maintain whether a player had handled a single quesiton on the gameboard or not.

## Process
  1. Early level React codeblocks were structred with hardcoded HTML
  2. Once these elements were displaying to the DOM, `collection` and `model` retrieval was prioritized and verified through the console.
  3. React codeblocks were then edited to implement API data as stored in the [parent data store](/app/store.js).
  4. Once dynamic data generation was confirmed functional and rendering to the DOM `Modal` display was prioritized as this was the first real implementation of handling re-rending, with unidirectional data-flow, from User Interaction rather than async data generation.
    * Note: Due to the structure of the data from the API the collections that were created initially were not mirror images of each other. At this point coercing/re-retrieving of data, to have collections of the same number of questions, was deemed a late-stage priority as the concentration of the project, for me, was the unidirectional data-flow.
  5. The `Modal` display proved to be one of the more difficult tasks to handle, utilizing a method on the single question that affected a child element on the parent level container, rather than on the `this` of that component.
  6. Once the `Modal` was functional the data-flow process was evident and much faster to implement for other smaller components.
  7. Styling and visual structure edited to meet minimum requirements.
  8. Model adjustments: Two edits are anticipated in the data-retrieval so that the correct number of questions.
    1. Adjusting the codeblock for the initial model retrieval so that no models with less than the correct number are parsed. I have over-estimated this by requiring that the model contain at least 30 "clues". `complete`
    2. Adjusting the loop in the [single category model](/app/scripts/models/cat.js) so that it does not pull only the first value that matches the predetermined requirement. `incomplete`.
  - Note: one of the fun aspects of this project was that I implemented the randomization very early. Rather than adjusting this so that I could work with the same data, and be able to predict the data to test true/false values, I choose to proof all truth tests in the false returns. 

### Dependencies
- [jService API](http://jservice.io/)
- `Sass`
- `Backbone`
- `React`
