/**
 * Example store structure
 */

 /*
const store = {
  // 5 or more questions are required
  questions: [
    {
      question: 'What color is broccoli?',
      answers: [
        'red',
        'orange',
        'pink',
        'green'
      ],
      correctAnswer: 'green'
    },
    {
      question: 'What is the current year?',
      answers: [
        '1970',
        '2015',
        '2019',
        '2005'
      ],
      correctAnswer: '2019'
    }
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0
};
*/

/**
 * 
 * Technical requirements:
 * 
 * Your app should include a render() function, that regenerates the view each time the store is updated. 
 * See your course material and access support for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 * 
 */

/********** TEMPLATE GENERATION FUNCTIONS **********/

// These functions return HTML templates

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)

const store = {
  // 5 or more questions are required
  questions: [
    {
      question: 'Who painted the <i>Mona Lisa</i>?',
      answers: [
        'Leonardo Da Vinci',
        'Raphael',
        'Leonardo DiCaprio',
        'Michelangelo'
      ],
      correctAnswer: 'Leonardo Da Vinci'
    },
    {
      question: 'Which art painting of Van Gogh became the most famous piece?',
      answers: [
        '<i>Cafe Terrace At Night</i>',
        '<i>Sunflowers</i>',
        '<i>The Starry Night</i>',
        '<i>Almond Blossom</i>'
      ],
      correctAnswer: '<i>The Starry Night</i>'
    },
    {
      question: 'The artist Kandinsky is considered the first for which type of art?',
      answers: [
        'Fauvism',
        'Cubism',
        'Abstract',
        'Avant-garde'
      ],
      correctAnswer: 'Abstract'
    },
    {
      question: 'Which Renaissance artist is the most famous procrastinator of all time?',
      answers: [
        'Salvador Dalí',
        'Vincent van Gogh',
        'Leonardo Da Vinci',
        'Donatello'
      ],
      correctAnswer: 'Leonardo Da Vinci'
    },
    {
      question: 'Which artist is famous for Pop Art?',
      answers: [
        'Helen Frankenthaler',
        'Andy Warhol',
        'Cy Twombly',
        'Frank Stella'
      ],
      correctAnswer: 'Andy Warhol'
    },
    {
      question: 'What are the three primary colors?',
      answers: [
        'Red,Green,Blue',
        'Purple,Green,Orange',
        'Red,Orange,Blue',
        'Red,Yellow,Blue'
      ],
      correctAnswer: 'Red,Yellow,Blue'
    }
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0
};

let currentQuestion = 0;
let score = 0;

function renderStartPage() {
  /* the first page of the quiz */
return (`
  <h1>
    Art Quiz
  </h1>
  <section>
  <p> 
    Let's find out how much you know about ART!
  </p>
  <button type="submit" class="start-button">
    Start Quiz
  </button>
  </section>
`);
}
/**
 * <h3>question that's on</h3>
 * <div>answer choices</div>
 */
function renderQuestionPage(){
  return(`
  <h1>
  Art Quiz
  </h1>
  <section>
  <h4>
  Question:${currentQuestion+1}/6
  </h4>
  <h4>
  Score:${score}/6
  </h4>
  <h3>
  ${store.questions[currentQuestion].question}
  </h3>
  <div>
    <input type="radio" name="choice" value="${store.questions[currentQuestion].answers[0]}"/>
     ${store.questions[currentQuestion].answers[0]}
  </div>
  <div>
    <input type="radio" name="choice" value="${store.questions[currentQuestion].answers[1]}"/>
    ${store.questions[currentQuestion].answers[1]}
  </div>
  <div>
    <input type="radio" name="choice" value="${store.questions[currentQuestion].answers[2]}"/>
     ${store.questions[currentQuestion].answers[2]}
  </div>
  <div>
    <input type="radio" name="choice" value="${store.questions[currentQuestion].answers[3]}"/>
     ${store.questions[currentQuestion].answers[3]}
  </div>
  <button type="submit" class="submit-button">
  Submit
</button>
</section>
 ` );
}
 
function renderFeedBackPageCorrect(){
  return (`
  <h2>
  That's Correct!
  </h2>
  <button type="submit" class="next-button">
 Next
</button>
  `)
}

function renderFeedBackPageWrong(){
  return (`
  <h2>
  whoops, the correct answer is ${store.questions[currentQuestion].correctAnswer}!
  </h2>
  <button type="submit" class="next-button">
 Next
</button>
  `)
}

/**
 * startQuiz sending it to the first question page
 */
function startQuizHandler(){
$(".quiz-app").on("click", ".start-button", function(event){
  event.preventDefault();
  $(".quiz-app").html( renderQuestionPage );
  store.quizStarted = true;
});
}

function submitHandler(){
$(".quiz-app").on("click", ".submit-button", function(event){
  event.preventDefault();
  let selectedAnswer = $('input:checked').val();
  let answer = store.questions[currentQuestion].correctAnswer;

  if(selectedAnswer === answer){
    score++;
    $(".quiz-app").html( renderFeedBackPageCorrect);
  }
  else{
    if(selectedAnswer === undefined){
      alert("Please select an answer!");
    }else{
      $(".quiz-app").html( renderFeedBackPageWrong);
    }
  }
  
});
}

function nextHandler(){
  $(".quiz-app").on("click", ".next-button", function(event){
    event.preventDefault();
    currentQuestion++;
    $(".quiz-app").html( renderQuestionPage );
  });
}

function handleQuiz() {
  $(".quiz-app").html( renderStartPage );

  $(submitHandler);
  $(startQuizHandler);
  $(nextHandler);

  
}

$(handleQuiz);