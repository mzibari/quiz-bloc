'use strict';

const STORE = {
  questions: [
    {
      id: 1,
      question: "How many birthdays does the average man have?",
      options: [
        "25",
        "40",
        "60",
        "1"
      ],
      answer: 3,
      explination: "a man is only born once, therefore only have one birthday. Answer is 1"
    },

    {
      id: 2,
      question: "Some months have 31 days, how many have 28 days?",
      options: [
        "1",
        "0",
        "6",
        "12"
      ],
      answer: 3,
      explination: "Every month has at least 28 days. Answer is 12"
    },

    {
      id: 3,
      question: "If there are 3 apples and you take 2, how many do you have?",
      options: [
        "3",
        "2",
        "0",
        "1"
      ],
      answer: 1,
      explination: "You only took 2. Answer is 2"
    },

    {
      id: 4,
      question: "A doctor gives you 3 pills telling you to take 1 every half an hour, how long will the pills last?",
      options: [
        "30 minutes",
        "60 minutes",
        "90 minutes",
        "0 minutes"
      ],
      answer: 1,
      explination: "You start by taking one right away, then take the second one after 30 minutes, then the last one after another 30 minutes. Answer is 60 minutes"
    },

    {
      id: 5,
      question: "A farmer has 17 sheep, all but nine died, how many are left?",
      options: [
        "8",
        "0",
        "17",
        "9"
      ],
      answer: 3,
      explination: "All but nine died, meaning 9 have not died. Answer is 9"
    },

    {
      id: 6,
      question: "You're participating in a race, you overtook the second person, what position are you in?",
      options: [
        "1st",
        "2nd",
        "3rd",
        "4th"
      ],
      answer: 1,
      explination: "The second person is in the 2nd place, you pass them and your position becomes 2nd. Answer is 2nd"
    },

    {
      id: 7,
      question: "How many 2 cent stamps are in a dozen?",
      options: [
        "24",
        "6",
        "12",
        "0"
      ],
      answer: 2,
      explination: "A dozen is 12, it doesn't matter what type of stamp. Answer is 12"
    },

    {
      id: 8,
      question: "Mary's father has 5 daughters, Nana, Nene, Nini, Nono. What's the name of the 5th daughter?",
      options: [
        "Nunu",
        "Nina",
        "Mary",
        "Alice"
      ],
      answer: 2,
      explination: "It's MARY's father. Answwer is Mary"
    },

    {
      id: 9,
      question: "How many animals of each sex did Moses take on the ark?",
      options: [
        "1",
        "0",
        "2",
        "None of the above"
      ],
      answer: 1,
      explination: "Moses didn't take any animals on the ark, Noah did. Answer is 0"
    },

    {
      id: 10,
      question: "If a train is traveling south, which way is the smoke going?",
      options: [
        "South",
        "North",
        "East",
        "The direction the wind is blowing"
      ],
      answer: 3,
      explination: "It doesn't matter which direction the train is heading, The wind will determine that. Answer is The direction the wind is blowing"
    },
  ],
  currentQuestion: 0,
  correct: 0,
  incorrect: 0
};



function renderProgress() {
  $(".mobile").text(`Q: ${STORE.currentQuestion + 1}/10 S: ${STORE.correct}/10`);
  $(".tablet").text(`Question: ${STORE.currentQuestion + 1}/10 Score: ${STORE.correct}/10`);
  $(".desktop").text(`Question: ${STORE.currentQuestion + 1}/10 Score: ${STORE.correct} correct ${STORE.incorrect} incorrect`);
}

function updateProgress() {
  renderProgress()
  STORE.currentQuestion++;

}

function renderQuestion() {
  const displayQuestion = STORE.questions[STORE.currentQuestion];
  $(".question").text(displayQuestion.question);
  renderProgress();
  renderOptions();
}

function renderOptions() {
  const opt = STORE.questions[STORE.currentQuestion];
  for (let i = 0; i < 4; i++) {
    $(`.option-${i}`).text(opt.options[i]);
  }
}

$(function validateAnswer() {
  $('.check').on('click', function (event) {
    event.preventDefault();
    const displayedQuestion = STORE.questions[STORE.currentQuestion];
    const selectedAnswerIndex = returnAnswerIndex();
    if (selectedAnswerIndex === displayedQuestion.answer) {
      renderCorrectAnswer(displayedQuestion);
    }
    else {
      renderIncorrectAnswer(displayedQuestion);
    }
    updateProgress();
    document.getElementById("check").disabled = true;
  });
});

function returnAnswerIndex() {
  const index = document.getElementsByName("options");
  for (let i = 0; i < index.length; i++) {
    if (index[i].checked) {
      return i;
    }

  }
}

function renderCorrectAnswer(obj) {
  $(".feedback").text("You're answer was correct!!!");
  $(".explination").text(`Explination: ${obj.explination}`);
  $(".answer").toggleClass(" hide");
  STORE.correct++;

}

function renderIncorrectAnswer(obj) {
  $(".feedback").text("You're answer was incorrect!");
  $(".explination").text(`Explination: ${obj.explination}`);
  $(".answer").toggleClass(" hide");
  STORE.incorrect++;
}

$(function renderNextQuestion() {
  $('.next').on('click', function (event) {
    event.preventDefault();
    if (STORE.currentQuestion < 10) {
      resetDisplay();
      renderQuestion();
    }
    else {
      renderResults();
    }
  })
});

function resetDisplay() {
  $(".answer").toggleClass(" hide");
  document.getElementById("check").disabled = false;
  for (let i = 1; i <= 4; i++) {
    document.getElementById(`ans-${i}`).checked = false;
  }
}


function renderResults() {
  $(".answer").toggleClass(" hide");
  $(".results").toggleClass(" hide");
  $(".main-questions").toggleClass(" hide");
  $(".result-score").text(`You answered ${STORE.correct}0% of the questions correctly`);
}

function handleQuestions() {
  renderQuestion();
}

$(handleQuestions());
