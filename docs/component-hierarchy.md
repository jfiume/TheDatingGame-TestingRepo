# Component Hierarchy
N.B. Numbers next to components indicate their number of children components, excluding common components (e.g. buttons, headers).

## `App`

#### `SignUp` (0)
  + Header - "The Dating Game"
  + Button - "Login with Facebook"

#### `Instructions` (0)
  + List of instructions
  + Button - continue

#### `ProspectIndex` (1)
  + N.B. We never render a list of prospects to screen, this is used to render prospect details. I.e. this renders a prospect detail.

  + #### `ProspectDetail` (2)
    + Button - To `MatchIndexForm` (if else to render `ChatIndex` or `GameIndex` on toggle)
    + Button - To `Settings` (See settings below)

    + #### `MatchIndexForm` (2)
      **Description:** Holds the `ChatIndex` and `GameIndex` components
      + Button - Toggle between `ChatIndex` and `GameIndex`

      + #### `ChatIndex` (1)
        + **Description:** - A scrollable list of each `ChatDetail` with the photo of each match next to the most recent message

        + #### `ChatDetail` (1)
          + Button - Back
          + Button - To `GameDetail` for that match (Current match in state?)
            + Ideally these buttons would be a toggle, like bumble

          + #### `MessagesIndex` (1) - Scrollable list of all `MessageDetail`s
            + **Description** - This is a single chat for that user and another match

            + #### `MessageDetail` (0) - Individual Message

      + #### `GameIndex` (1)
        + Description - A scrollable list of each `GameDetail` with the photo of each match

        + #### `GameDetail` (1)
          + Button - Back
          + Button - To `ChatDetail`  for that match (Current match in state?)
            + Ideally these buttons would be a toggle, like bumble

          + #### `MessagesIndex` (1) - Scrollable list of all `MessageDetail`s
            + **Description** - This is a single chat for that user and another match

            + #### `MessageDetail` (0) - Individual Message

    + #### `Settings` (2) - Bad Wireframe
      + Button toggle between `UserProfile` and `UserInputForm`
      + Button - Back

      + #### `UserProfile`
        + **Description:** Presentational component that shows the user what his or her profile looks like

      + #### `UserInputForm`
        + Input Fields for all info not fetched from FB (defaults will be applied)
        + Button - Submit or "Done" (missing from wireframes)
        + N.B. Wireframe includes a button to matches the should not be there
