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
      question: 'Who painted the Mona Lisa?',
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
        'Cafe Terrace At Night ',
        'Sunflowers',
        'The Starry Night',
        'Almond Blossom'
      ],
      correctAnswer: 'The Starry Night'
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

function templateStartPage() {
  /* the first page of the quiz (html)*/ 
return (`
  <h1>
    Art Quiz
  </h1>
    <section class ="main">
      <p class = "firstpage"> 
        Let's find out how much you know about ART!
      </p>
      <button type="submit" class="start-button">
        Start Quiz
      </button>
    </section>
`);
}
/**
 * <h4> shows the number of question user is on and their score
 * <h3>question that's currently displayed</h3>
 * <label>answer choices</div>
 * (html)
 */
function templateQuestionPage(){
  return(`
  <div class ="wrapper">
    <h1>
      Art Quiz
    </h1>
      <section class= "quiz">
        <h2>
          Question:${currentQuestion+1}/6
        </h2>
        <h2>
          Score:${score}/6
        </h2>
        <form>
          <fieldset>
          
          <legend>${store.questions[currentQuestion].question}</legend>
            
                
          <label><input type="radio" name="choice" value="${store.questions[currentQuestion].answers[0]}"/>
                  ${store.questions[currentQuestion].answers[0]}</label><br/>
                
            <label><input type="radio" name="choice" value="${store.questions[currentQuestion].answers[1]}"/>
                  ${store.questions[currentQuestion].answers[1]}</label><br/>
                
            <label><input type="radio" name="choice" value="${store.questions[currentQuestion].answers[2]}"/>
                  ${store.questions[currentQuestion].answers[2]}</label><br/>
                
            <label><input type="radio" name="choice" value="${store.questions[currentQuestion].answers[3]}"/>
                  ${store.questions[currentQuestion].answers[3]}</label><br>
                
              </fieldset>
            <button type="submit" class="submit-button">
              Submit
            </button>
          <form class="quiz-app">
        </section>
  </div>
    ` );
}
 /**
  * feedback page for users that chose the correct answer (html)
  */
function templateFeedBackPageCorrect(){
  return (`
    <h1>
    Art Quiz
    </h1>
      <section class= "main">
      <h2 class = "correctfeed">
      That's Correct!
      </h2>
      <button type="submit" class="next-button">
      Next
      </button>
    </section>
  `)
}
/**
  * feedback page for users that chose the wrong answer (html)
  */
function templateFeedBackPageWrong(){
  return (`
    <h1>
      Art Quiz
    </h1>
      <section class ="main">
        <h2 class= "feed">
        Whoops, that was incorrect! The correct answer is <p class = "feed">
        "${store.questions[currentQuestion].correctAnswer}!"
        </p>
        </h2>
        <button type="submit" class="next-button">
          Next
        </button>
    </section>
  `)
}
/**
 * end of the questions and display the final score (html)and a restart-button
 */
function templateLastPage(){
  return `
    <h1>
      Art Quiz
    </h1>
      <section class="main">
        <h2 class="lastpage">
        Your Score is: ${score}/6
        </h2>
        <button type="submit" class="restart-button">
          Restart Quiz
        </button>
      </section>
  `
}
function render(){
  $(".quiz-app").html( templateStartPage );
  /**
 * startQuiz sending it to the first question page
 */
  $(".quiz-app").on("click", ".start-button", function(event){
    event.preventDefault();
    $(".quiz-app").html( templateQuestionPage );
    store.quizStarted = true;
  });
  /**
  * submit button to move on to the corresponding feedback page
  */
  $(".quiz-app").on("click", ".submit-button", function(event){
    event.preventDefault();
    let selectedAnswer = $('input:checked').val();
    let answer = store.questions[currentQuestion].correctAnswer;
  /**
 * when on the feedback page, have a next-button to move onto the next question
 */
    if(selectedAnswer === answer){
      score++;
      $(".quiz-app").html( templateFeedBackPageCorrect);
    }
    else{
      if(selectedAnswer === undefined){
        alert("Please select an answer!");
      }else{
        $(".quiz-app").html( templateFeedBackPageWrong);
      }
    }
  });
  $(".quiz-app").on("click", ".next-button", function(event){
    event.preventDefault();
    currentQuestion++;
    if(currentQuestion === 6){
      $(".quiz-app").html(templateLastPage);
    }
    $(".quiz-app").html( templateQuestionPage );
  });
  /**
 * restart button to restart the quiz
 */
  $(".quiz-app").on("click", ".restart-button", function(event){
    event.preventDefault();
    currentQuestion = 0;
    score = 0;
    $(".quiz-app").html( templateStartPage );
});

}
/**
 * calling functions to work
 */
function handleQuiz() {
  $(render);
}

$(handleQuiz);