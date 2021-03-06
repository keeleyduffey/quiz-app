'use strict';

let count = 0,
	correctAnswerCount = 0,
	incorrectAnswerCount = 0;

function createQAForm (questionCount) {
	return `
    <form>
    	<div class="content-wrapper">
	      <fieldset>
	      	<legend>${questions[questionCount].question}</legend>
	        <label class="option-wrapper">  
	          <input type="radio" name="option" 
	            value="${questions[questionCount].options[0]}" id="option1" required >
	          ${questions[questionCount].options[0]}
	        </label>

	        <label class="option-wrapper">
	          <input type="radio" name="option" 
	            value="${questions[questionCount].options[1]}" id="option2" required >
	          ${questions[questionCount].options[1]}
	        </label>

	        <label class="option-wrapper">
	          <input type="radio" name="option" 
	            value="${questions[questionCount].options[2]}" id="option3" required >
	          ${questions[questionCount].options[2]}
	        </label>
	        
	        <label class="option-wrapper">
	          <input type="radio" name="option" 
	            value="${questions[questionCount].options[3]}" id="option4" required >
	          ${questions[questionCount].options[3]}
	        </label>
	      </fieldset>
	    </div>
      <button role="button" class="submit-answer-btn">Submit</button>
    </form>
	`;
}

function createCorrectAnswerMessage (message, questionObj) {
	return ` 
	  <div class="content-wrapper">
	    <h2>${message}</h2>
	    <p> The correct answer was "${questionObj.correctAnswer}"</p>
	    <img class="img" src="${questionObj.imageLink}" alt="${questionObj.altText}" />
	  </div>
    <button role="button" class="next-question-btn">Next</button>`;
}

function createFinalScreenMessage (correctCount, incorrectCount, info) {
	return `
		<div class="content-wrapper">
			<h2>${info.message}</h2>
	    <p>Your score:</p>
	    <ul>
	      <li>${correctCount} correct </li>
	      <li>${incorrectCount} incorrect </li>
	    </ul>
	    <img class="img" src="${info.imageLink}"  alt="${info.altText}" />
		</div>
    <button role="button" class="retake-quiz-btn">Take quiz again?</button>
	`;
}

function resetAllCounts () {
	count = 0;
	correctAnswerCount = 0;
	incorrectAnswerCount = 0;
	$('.question-count').html(1);
	$('.correct-score').html(correctAnswerCount);
	$('.incorrect-score').html(incorrectAnswerCount);
}

function renderCorrectAnswerMessage (questionObj) {
	$('.correct-score').html(correctAnswerCount);
	$('.content-container').html(createCorrectAnswerMessage('Great job!', questionObj));
	nextClick();
}

function renderIncorrectAnswerMessage (questionObj) {
	$('.incorrect-score').html(incorrectAnswerCount);
	$('.content-container').html(createCorrectAnswerMessage('You got it wrong, too bad!', questionObj));
	nextClick();
}

function renderQuestion () {
	$('.content-container').html(createQAForm(count));
	$('.question-count').html(questions[count].questionNum);
}

function renderFinalScreen () {
	let message = {};
	if (correctAnswerCount > 7) {
		message = finalScreenInfo.great;
	} else if (correctAnswerCount < 5) {
		message = finalScreenInfo.fail;
	} else {
		message = finalScreenInfo.average;
	}
	$('.content-container').html(createFinalScreenMessage(correctAnswerCount, incorrectAnswerCount, message));
} 

function renderStart () {
	$('.init-btn').on('click', (event) => {
		$('.intro-screen').css('display', 'none');
		$('.status-container').css('display', 'block');
		$('.content-container').css('display', 'block');
		renderQuestion();
	})
}

function submitAnswer () {
	$('.content-container').on('submit', 'form', function(event) {
		event.preventDefault();

		const selection = $("input:checked").val(),
			questionObj = questions[count],
			correctAnswer = questions[count].correctAnswer;

		if (selection === correctAnswer) {
			correctAnswerCount++;
			renderCorrectAnswerMessage(questionObj);
		} else {
			incorrectAnswerCount++;
			renderIncorrectAnswerMessage(questionObj);
		}
		count++;
	})
}

function nextClick () {
	$('.content-container').on('click', '.next-question-btn', function(event) {
		event.preventDefault();
		if (count < questions.length) {
			renderQuestion();
		} else {
			renderFinalScreen();
		}
	})
}

function retakeQuiz () {
	$('.content-container').on('click', '.retake-quiz-btn', function(event) {
		event.preventDefault();
		resetAllCounts();
		$('.status-container').css('display', 'none');
		$('.content-container').css('display', 'none');
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
