const STORE = {
    questions: [
      {
        question: "How many birthdays does the average man have?",
        options: [
          "25", 
          "40", 
          "60", 
          "1"
        ],
        answer: "1",
        explination: "a man is only born once, therefore only have one birthday. Answer is 1"
      },
      
      {
        question: "Some months have 31 days, how many have 28 days?",
        options: [
          "1",
          "0", 
          "6",
          "12"
        ],
        answer: "12",
        explination: "Every month has at least 28 days. Answer is 12"
      },
      
      {
        question: "If there are 3 apples and you take 2, how many do you have?",
        options: [
          "3", 
          "2", 
          "0", 
          "1"
        ],
        answer: "2",
        explination: "You only took 2. Answer is 2"
      },
      
      {
        question: "A doctor gives you 3 pills telling you to take 1 every half an hour, how long will the pills last?", 
        options: [
            "30 minutes", 
            "60 minutes", 
            "90 minutes", 
            "0 minutes"
        ],
        answer: "60 minutes",
        explination: "You start by taking one right away, then take the second one after 30 minutes, then the last one after another 30 minutes. Answer is 60 minutes"
      },
      
      {
        question: "A farmer has 17 sheep, all but nine died, how many are left?",
        options: [
          "8", 
          "0", 
          "17", 
          "9"
        ],
        answer: "9",
        explination: "All but nine died, meaning 9 have not died. Answer is 9"
      },
      
      {
        question: "You're participating in a race, you overtook the second person, what position are you in?",
        options: [
          "1st", 
          "2nd", 
          "3rd", 
          "4th"
        ],
        answer: "2nd",
        explination: "The second person is in the 2nd place, you pass them and your position becomes 2nd. Answer is 2nd"
      },
      
      {
        question: "How many 2 cent stamps are in a dozen?",
        options: [
          "24", 
          "6", 
          "12", 
          "0"
        ],
        answer: "12",
        explination: "A dozen is 12, it doesn't matter what type of stamp. Answer is 12"
      },
      
      {
        question: "Mary's father has 5 daughters, Nana, Nene, Nini, Nono. What's the name of the 5th daughter?", 
        options: [
          "Nunu", 
          "Nina", 
          "Mary", 
          "Alice"
        ],
        answer: "Mary",
        explination: "It's MARY's father. Answwer is Mary"
      },
      
      {
        question: "How many animals of each sex did Moses take on the ark?",
        options: [
          "1", 
          "0", 
          "2", 
          "None of the above"
        ], 
        answer: "0",
        explination: "Moses didn't take any animals on the ark, Noah did. Answer is 0"
      },
      
      {
        question: "If a train is traveling south, which way is the smoke going?",
        options: [
          "South", 
          "North", 
          "East", 
          "The direction the wind is blowing"
        ],
        answer: "The direction the wind is blowing",
        explination: "It doesn't matter which direction the train is heading, The wind will determine that. Answer is The direction the wind is blowing"
      },
    ],
    currentQuestion: 0,
    score: 0
  };