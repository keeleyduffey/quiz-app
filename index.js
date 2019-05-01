'use strict';


let count = 0,
	correctAnswerCount = 0,
	incorrectAnswerCount = 0;

function formatQuestion (questionCount) {
	return `
		<h2>${questionArray[questionCount].question}</h2>
    <form>
      <fieldset>
        <label class="option-wrapper">  
          <input type="radio" name="option" 
            value="${questionArray[questionCount].options[0]}" id="option1" required >
          ${questionArray[questionCount].options[0]}
        </label>

        <label class="option-wrapper">
          <input type="radio" name="option" 
            value="${questionArray[questionCount].options[1]}" id="option2" required >
          ${questionArray[questionCount].options[1]}
        </label>

        <label class="option-wrapper">
          <input type="radio" name="option" 
            value="${questionArray[questionCount].options[2]}" id="option3" required >
          ${questionArray[questionCount].options[2]}
        </label>
        
        <label class="option-wrapper">
          <input type="radio" name="option" 
            value="${questionArray[questionCount].options[3]}" id="option4" required >
          ${questionArray[questionCount].options[3]}
        </label>
      </fieldset>
      <button role="button" class="submit-answer-btn">Submit</button>
    </form>
	`;
}

function renderStart () {
	$('.init-btn').on('click', (event) => {
		$('.intro-screen').css('display', 'none');
		$('.main-container').css('display', 'block');
		renderQuestion();
	})
}

function renderQuestion () {
	$('.content-wrapper').html(formatQuestion(count));
	$('.question-count').html(questionArray[count].questionNum);
}

function submitAnswer () {
	$('.content-wrapper').on('click', '.submit-answer-btn', function(event) {
		event.preventDefault();

		const selection = $("input:checked").val(),
			correctAnswer = questionArray[count].correctAnswer;

		if (selection === correctAnswer) {
			correctAnswerCount++;
			renderCorrectAnswerMessage(correctAnswer);
		} else {
			incorrectAnswerCount++;
			renderIncorrectAnswerMessage(correctAnswer);
		}
		count++;
	})
}

function createCorrectAnswerMessage (message, answer) {
	return ` 
		<div class="content-wrapper">
      <h2>${message}</h2>
      <p> The correct answer was ${answer}</p>
      <div class="img-greybox">Image / Gif</div>
    </div>
    <button role="button" class="next-question-btn">Next</button>`;

} 
/// 
function renderCorrectAnswerMessage (rightAnswer) {
	$('.correct-score').html(correctAnswerCount);
	$('.content-wrapper').html(createCorrectAnswerMessage('Great job!', rightAnswer));
	nextClick();
}

function renderIncorrectAnswerMessage (rightAnswer) {
	$('.incorrect-score').html(incorrectAnswerCount);
	$('.content-wrapper').html(createCorrectAnswerMessage('Too bad', rightAnswer));
	nextClick();
}

function nextClick () {
	$('.content-wrapper').on('click', '.next-question-btn', function(event) {
		event.preventDefault();
		if (count < questionArray.length) {
			renderQuestion();
		} else {
			renderFinalScreen();
		}
	})
}
 
function createFinalScreenMessage (correctCount, incorrectCount) {
	return `
	 	<h2>You're all done!</h2>
    <p>Your score:</p>
    <ul>
      <li>${correctCount} correct </li>
      <li>${incorrectCount} incorrect </li>
    </ul>

    <button role="button" class="retake-quiz-btn">Take quiz again?</button>

	`;
} 

function renderFinalScreen () {
	$('.content-wrapper').html(createFinalScreenMessage(correctAnswerCount, incorrectAnswerCount));
}

function retakeQuiz () {
	$('.content-wrapper').on('click', '.retake-quiz-btn', function(event) {
		event.preventDefault();
		$('.main-container').css('display', 'none');
		$('.intro-screen').css('display', 'block');
	})
}

function handleQuiz () {
	renderStart();
	submitAnswer();
	nextClick();
	retakeQuiz();
}

$(handleQuiz);
