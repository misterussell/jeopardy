# Basic
- A basic jeapordy app

## Process
  1. Wireframing
    - Wireframing from this project includded mapping all parent and child components
    - A single parent element holds all child elements as the page structure does not change during gameplay. See [container compoenent app.js](/app/scripts/components/containers/app.js)
    - `On page modal` vs. `new link modal`
      - The decision to include the modal on the same page was made to allow for further practice of the flexible uni-directional flow of data allowed by React.
      - A boolean key/value was structured in a single session Model, that when toggled hides/views the question modal.
    - Wireframing originally led to the creation on 5 child `jsx` elements:
      1. Nav Control
      ```jsx
      <Nav />
      ```
      2. Category Lists
      ```jsx
      <Categories />
      ```
      3. Modal
      ```jsx
      <Modal />
      ```
      4. Question Answer
      ```jsx
      <Answer />
      ```
      5. Total Score
      ```jsx
      <Score />
      ```
    - After creating the components, the Question Answer & Total Score components were merged into a single `jsx` element ```jsx
    <ScoreKeeper />
    ``` for styling and semantic purposes as these two codeblocks simultaneously change after answering a single question.

## Planning

### Dependencies
- [jService API](http://jservice.io/)
- `Sass`
- `Backbone`
- `React`
