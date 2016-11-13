# Basic
- A basic jeapordy app

## Planning
  1. Wireframing
    - Wireframing from this project includded mapping all parent and child components
    - A single parent element holds all child elements as the page structure does not change during gameplay. See [container compoenent app.js](/app/scripts/components/containers/app.js)
    - `On page modal` vs. `new link modal`
      - The decision to include the modal on the same page was made to allow for further practice of the flexible uni-directional flow of data allowed by React.
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
    - After creating the components, the Question Answer & Total Score components were merged into a single `jsx` element
    ```jsx
    <ScoreKeeper />
    ```
    for styling and semantic purposes as these two codeblocks simultaneously change after answering a single question.
  2. Data Modeling
    - Preliminary data modeling included:
      1. `Collection` of Categories
        - With methods to randomize api endpoints and retrieve server data
      2. `Model` of a single Collection
        - With a method to filter the data and retrieve single questions for the required values of the games. This was handled in pair by parsing server supplied collection data.
      3. `Session` to house player's running score
        - With methods to handle `updating scores`, `verifying answers`, `modal handling` for a specific questions answer prompt, as well as updating the current answer to dispalying in the `modal`. 
    - Once these had been created and data retrieved, it was necessary to creation an additional Model for a single `question`.

## Process

### Dependencies
- [jService API](http://jservice.io/)
- `Sass`
- `Backbone`
- `React`
