# Component Hierarchy
N.B. Numbers next to components indicate their number of children components, excluding common components (e.g. buttons, headers).

## `App`

#### `SignUp` (0)
  + Header - "The Dating Game"
  + Button - "Login with Facebook"

#### `Instructions` (0)
  + List of instructions
  + Button - continue

#### `ProspectDetail` (0)
    + Button - To `MatchIndex` (if else to render `ChatIndex` or `GameIndex` on toggle)
    + Button - To `Settings` (See settings below)

#### `MatchIndex` (2)
  + **Description:** Holds the `ChatIndex` and `GameIndex` components
  + Button - Toggle between `ChatIndex` and `GameIndex` (updates state, forces re-render)

  + #### `ChatIndex` (1)
    + **Description:** - A scrollable list of each `ChatDetail` with the photo of each match next to the most recent message

    + #### `MatchDetail` (2)
      + **N.B.** Match detail holds the `ChatDetail` and the `GameDetail` for a match. Thus, you will see `Match Detail` again below - this is the same component being showed twice in this hierarchy only for clarity's sake.
      + A `currentMatch` should be held in the state and passed to `ChatIndex` and `GameIndex`
      + Button - Toggle between chat and game

        + #### `ChatDetail` (1)
          + Button - Back to `ChatIndex`
          + #### `MessagesIndex` (1) - Scrollable list of all `MessageDetail`s
            + **Description** - This is a single chat for that user and the current match

            + #### `MessageDetail` (0) - Individual Message

  + #### `GameIndex` (1)
    + **Description** - A scrollable list of each `GameDetail` with the photo of each match

    + #### `MatchDetail` (2) **Same as above!**

      + #### `GameDetail` (1)
        + Button - Back
        + Button - To `ChatDetail`  for that match (Current match in state?)
          + Ideally these buttons would be a toggle, like bumble
        + State will be updated and when both users have answered, the results will be displayed by the render function

#### `Settings` (2) - Bad Wireframe
  + Button toggle between `UserProfile` and `UserInputForm`
  + Button - Back

  + #### `UserProfile`
    + **Description:** Presentational component that shows the user what his or her profile looks like

  + #### `UserInputForm`
    + Input Fields for all info not fetched from FB (defaults will be applied)
    + Button - Submit or "Done" (missing from wireframes)
    + N.B. Wireframe includes a button to matches the should not be there
