# The Dating Game

### The Dating Game is a dating platform, it introduces the user that spectial someone in their area and who meet their criteria while playing a game

## Background and Overview

Meeting your significant other could be challenging with our modern life style. The rise of the dating apps on mobile phones which are extremely popluar faces the challange of walking into awkward conversations. Rating people based on a picture is shallow, hence we are intoducing the idea of matching people based on their prefernces, while playing a game that wpould facilitate an intial conversation.


Our approach:
  * Query the database for users who fit your criteria in your area
  * Initialize a game between two users who fit the creteria
  * Implement a websocket chat feature so users can talk while playing

## Functionality & MVP

   - [ ] Sign up, create a profile
   - [ ] Participate in a 2 player game with people who meet the user's criteria
   - [ ] Chat feature that works consequetly while playing

#### Bonus Features
   - [ ] Block users you don't want to interact with
   - [ ] Delete your profile
   - [ ] Add a second game
   - [ ] Add more filtering criteria
   - [ ] Filter pornographic material

## Technologies & Technical Challenges
  ##### Backend: Mongo/Express/Node.js
  ##### Frontend: React Native

#### Composing our data
  + ##### Users
    + Users create their own profiles and enter their basic info and prefrences.
    + For basic info: email, password, first name, age, zip location, sexual preference, gender
    + For preferences: radius of search based on location, gender, age range, hobbies(choose from a list)

  + ##### Games
    + For our first game, we are implementing "Would You Rather?"
    + Implement hundrends of game questions and store the results with the user's information, so that next time you will be matched with someone who answered simliarly to you. (based on a 	percentage)

#### Constructing the chat functionality
  + ##### Building websocket.io
    - Build the ability to chat in express using websocket.io
  + ##### Integrating the chat functionality in the game
    - We intend to initialize chat with new users only during the game
  + ##### Integrating the chat functionality outside the game
    - You can only chat with people you initialized a conversation with before during a game

#### UX
  + ##### Frontend Interface
    - We will implement the ability of sign up, and get matched based on your prefrences
    - We will match the user with another user and start the game for them
    - We will initialize the chat for them and ask them basic introductory questions

  + #### Backend
    + Our backend will be a standard Node.js
    + The backend will make hand over a matching user when a game initlize request is sent
    + The backend will handle the chat functinality and storage of chat history

## Accomplished over the Weekend
 - Identified our Technologies and watched classes on setting it up
 - Completed a React Native tutorial and created a skeleton
 - Completed an Express tutorial and created a skeleton
 - Completed a basic design of the app and it's main features (wire frames)

## Group Members & Work Breakdown

**Chris Comings**,
**Joseph Fiume**,
**Ryan Rolfes**,
**Younis Hamalawy**

***BACKEND TEAM: Chris and Joseph
FRONTEND TEAM: Ryan and Younis

### Day 1
  - Initialize OAUTH **BACKEND TEAM**
  - Initialize frontend views **FRONTEND TEAM**

### Day 2
  - Finalize and test OAUTH **BACKEND TEAM**
  - Finalize and test frontend views **FRONTEND TEAM**

### Day 3
  - Initialize Chat funtionality **BACKEND TEAM**
  - Initialize Game logic **FRONTEND TEAM**

### Day 4
  - Finalize and test Chat functionality **BACKEND TEAM**
  - Finalize and test Game logic **FRONTEND TEAM**

### Day 5, 6
  - Combine the two skeletons and test **WHOLE TEAM**
### Day 7
 - Production Read me **BACKEND TEAM**
 - Improve UX **FRONTEND TEAM**
 - Seed the database **BACKEND TEAM**
