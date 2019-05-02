'use strict';

const questionArray = [
	{
		questionNum: 1,
		question: 'How many times did Ross get divorced?',
		options: [
			'2',
			'3',
			'4',
			'0',
		],
		correctAnswer: '3',
		imageLink: 'https://media.giphy.com/media/GvRdjwAffY4QE/giphy.gif',
		altText: 'Ross talking about his divorces'
	},{
		questionNum: 2,
		question: 'Which soap opera does Joey star in?',
		options: [
			'General Hospital',
			'The Young and The Restless',
			'Days of Our Lives',
			'The Bold and The Beautiful',
		],
		correctAnswer: 'Days of Our Lives',
		imageLink: 'https://media.giphy.com/media/qLPxrfbOwoXII/giphy.gif',
		altText: 'Joey as Dr. Drake Ramoray'
	},{
		questionNum: 3,
		question: 'Which two actresses play Rachel’s sisters?',
		options: [
			'Denise Richards & Reese Witherspoon',
			'Winona Ryder &  Denise Richards',
			'Christina Applegate & Rebecca Romijn',
			'Reese Witherspoon & Christina Applegate',
		],
		correctAnswer: 'Reese Witherspoon & Christina Applegate',
		imageLink: 'https://media.giphy.com/media/qNbeedVeNC1l6/giphy.gif',
		altText: 'Rachel and sister slap fighting'
	},{
		questionNum: 4,
		question: 'What does Phoebe legally change her name to?',
		options: [
			'Princess Consuela Bananahammock',
			'Regina Phalange',
			'Baby Kangaroo Tribbiani',
			'Cutie McPretty',
		],
		correctAnswer: 'Princess Consuela Bananahammock',
		imageLink: 'https://media.giphy.com/media/Eox6eVHsAjhCw/giphy.gif',
		altText: 'Phoebe calling herself Princess Consuela Bananahammock'
	},{
		questionNum: 5,
		question: 'What does Mike say he will change his name to in response?',
		options: [
			'Smoky Smokerson',
			'Ken Adams',
			'Crap Bag',
			'Prince Consuelo Bananahammock',
		],
		correctAnswer: 'Crap Bag',
		imageLink: 'https://media.giphy.com/media/xJEAqaLrAwZCU/giphy.gif',
		altText: 'Phoebe introducing her husband Crap Bag'
	},{
		questionNum: 6,
		question: 'Who gave Phoebe her cab?',
		options: [
			'Her grandmother',
			'Her mother',
			'Her brother',
			'Ross',
		],
		correctAnswer: 'Her grandmother',
		imageLink: 'https://media.giphy.com/media/q3Zxb6mxoik5G/giphy.gif',
		altText: 'Phoebe driving Ross around erratically in a cab'
	},{
		questionNum: 7,
		question: 'What is one thing Joey does not do?',
		options: [
			'Dance',
			'Share food',
			'Bathe',
			'Eat',
		],
		correctAnswer: 'Share food',
		imageLink: 'https://media.giphy.com/media/zoVzl7KwyHU9G/giphy.gif',
		altText: "Rachel saying Joey doesn't share food"
	},{
		questionNum: 8,
		question: 'Where did Phoebe’s love interest David move for his job?',
		options: [
			'Minsk',
			'Yemen',
			'China',
			'Mt. Tibidabo',
		],
		correctAnswer: 'Minsk',
		imageLink: 'https://media.giphy.com/media/xoLiDd7vxyvBK/giphy.gif',
		altText: "David who moves to Minsk"
	},{
		questionNum: 9,
		question: 'What is the occupation of the Ross lookalike (Russ) who Rachel dates?',
		options: [
			'Pathologist',
			'Physician',
			'Periodontist',
			'Paleontologist',
		],
		correctAnswer: 'Periodontist',
		imageLink: 'https://media.giphy.com/media/gJEWhG3f3zszu/giphy.gif',
		altText: 'Russ talking to Chandler'
	},{
		questionNum: 10,
		question: 'What is the last line of the series?',
		options: [
			'Let’s get a coffee.',
			'We were on a break.',
			'Pivot.',
			'Where?',
		],
		correctAnswer: 'Where?',
		imageLink: 'https://media.giphy.com/media/qmAOvICCkuK52/giphy.gif',
		altText: 'Chandler asking if he said something out loud.'
	},
];

const finalScreenInfo = {
	great: {
		message: 'Wow! Great Job!',
		imageLink: 'https://media.giphy.com/media/31lPv5L3aIvTi/giphy.gif',
		altText: 'Phoebe and Rachel jumping up and down with excitement',
	},
	good: {
		message: 'Not too shabby!',
		imageLink: 'https://media.giphy.com/media/peBPfhyCgKBYk/giphy.gif',
		altText: 'Phoebe saying thank you',
	},
	bad: {
		message: 'Ooh, better luck next time!',
		imageLink: 'https://media.giphy.com/media/pFb97vzv7O1UI/giphy.gif',
		altText: 'Phoebe saying this is new information',
	}
}


