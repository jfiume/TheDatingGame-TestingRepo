```js

// Do we need a session slice of state for this?
{
  session: {
    current_user: 1
    errors: []
  }

// first_name, last_name, age, sex, city, state all pulled from FB via OAuth

  users: {
    1: {
      first_name: "Ryan",
      last_name: "Rolfes",
      age: 25,
      sex: "M",
      age_range_low: 21,
      age_range_high: 29,
      // Pull city from FB
      city: "San Francisco",
      state: "California"
      // No password_digest, correct?
      // Believe we still need a session_token, but lmk if not
      session_token: "akasdhfakj807q36",
      occupation: "Software Developer",
      school: "Stanford University",
      image_url: "image_url.com",
      about_me: "I am...",
      interested_in: "Women", 
      likes: [7892, 8997, 9877],
      chats: [3987, 5663, 6945, 7778],
      matched_users: [234, 6787, 8976]
    }
  }

  chats: {
    1: {
      messages: [3293, 3687, 4567],
      user_ids: [1, 7878],
      // track games played to avoid repetition
      played_games: [1, 6]
    }
  }


  messages: {
    1: {
      author_id: 1,
      message_origination_time: 1502067019040,
      message_content: "Hey, Sara! Where do you work that you'd rather show up naked?!" + :stuck_out_tongue_winking_eye:
    }
  }

  text_games: {
    1: {
      game_title: "Would you rather?",
      question: "Go to work naked? Get walked in on by your mom?",
      user_ids: [1, 7878],
      game_response_ids: [743, 817]
    }
  }

  text_games_responses: {
    1: {
      author_id: 1,
      // "A" or "B" because these questions are inherently binary
      response: "A"
    }
  }

}
```
