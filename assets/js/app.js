// QUOTES GENERATOR 

let quotes = [
	{
		quote:
			'The most disastrous thing that you can ever learn is your first programming language.',
		author: '- Alan Kay',
	},
	{
		quote:
			'The only way to learn a new programming language is by writing programs in it.',
		author: '- Dennis Ritchie',
	},
	{
		quote:
			'The art of programming is the art of organizing complexity, of mastering multitude and avoiding its bastard chaos as effectively as possible.',
		author: '- Edsger Dijkstra',
	},
	{
		quote:
			'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
		author: '- Martin Fowler',
	},
	{
		quote: 'Code is like humor. When you have to explain it, it is bad.',
		author: 'Cory House',
	},
	{
		quote:
			'The code you write makes you a programmer. The code you delete makes you a good one.',
		author: 'Mario Fusco',
	},
	{
		quote: 'The computer was born to solve problems that did not exist before.',
		author: 'Bill Gates',
	},
	{
		quote: 'First, solve the problem. Then, write the code.',
		author: 'John Johnson',
	},
	{
		quote: 'It is not a bug, it is an undocumented feature.',
		author: 'Anonymous',
	},
	{
		quote:
			'It is not that I am so smart, it is just that I stay with problems longer.',
		author: 'Albert Einstein',
	},
	{
		quote:
			'The most important property of a program is whether it accomplishes the intention of its user.',
		author: 'C.A.R. Hoare',
	},
	{
		quote:
			'The three great virtues of a programmer: laziness, impatience, and hubris.',
		author: 'Larry Wall',
	},
	{
		quote:
			'The best programs are the ones written when the programmer is supposed to be working on something else.',
		author: 'Melinda Varian',
	},
	{
		quote: 'Good code is its own best documentation.',
		author: 'Steve McConnell',
	},
	{
		quote:
			'Debugging is like being a detective in a crime movie where you are also the murderer.',
		author: '- Filipe Fortes',
	},
	{
		quote: 'If you think math is hard, try programming.',
		author: '- Brian Kernighan',
	},
	{
		quote: 'Simplicity is the soul of efficiency.',
		author: '- Austin Freeman',
	},
	{
		quote:
			'Programs must be written for people to read, and only incidentally for machines to execute.',
		author: '- Harold Abelson and Gerald Jay Sussman',
	},
	{
		quote:
			'Coding is not just code, that is a live thing to make something alive.',
		author: '- Anurag Dixit',
	},
	{
		quote: 'The best code is no code at all.',
		author: '- Jeff Atwood',
	},
	{
		quote:
			"Any code of your own that you haven't looked at for six or more months might as well have been written by someone else.",
		author: "- Eagleson's Law",
	},
	{
		quote:
			'Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.',
		author: '- Martin Golding',
	},
	{
		quote: "Programming is not about typing, it's about thinking.",
		author: '- Rich Hickey',
	},
	{
		quote:
			'Perfection is achieved not when there is nothing more to add, but rather when there is nothing more to take away.',
		author: '- Antoine de Saint-Exupéry',
	},
	{
		quote:
			'There are only two kinds of programming languages: those people always bitch about and those nobody uses.',
		author: '- Bjarne Stroustrup',
	},
	{
		quote: 'The best way to learn to swim is by jumping into the water.',
		author: '- Alan Kay',
	},
	{
		quote:
			'The best thing about a boolean is even if you are wrong, you are only off by a bit.',
		author: '- Anonymous',
	},
	{
		quote:
			'If debugging is the process of removing software bugs, then programming must be the process of putting them in.',
		author: '- Edsger Dijkstra',
	},
	{
		quote:
			'Good code is its own best documentation. As you are about to add a comment, ask yourself, How can I improve the code so that this comment is not needed?',
		author: '- Steve McConnell',
	},
	{
		quote:
			'In software, we rarely have meaningful requirements. Even if we do, the only measure of success that matters is whether our solution solves the customers shifting idea of what their problem is.',
		author: '- Jeff Atwood',
	},
	{
		quote:
			'You can not have great software without a great team, and most software teams behave like dysfunctional families.',
		author: '- Jim McCarthy',
	},
	{
		quote:
			'A good programmer is someone who always looks both ways before crossing a one-way street.',
		author: '- Doug Linder',
	},
	{
		quote: "There's nothing quite like a deadline to force action.",
		author: '- Unknown',
	},
	{
		quote: 'Coding is not just code, it is a live thing that runs your life.',
		author: ' - Ali Spittel',
	},
	{
		quote:
			'The purpose of software engineering is to control complexity, not to create it.',
		author: '- Dr. Pamela Zave',
	},
	{
		quote:
			"It's not at all important to get it right the first time. It's vitally important to get it right the last time.",
		author: '- Andrew Hunt and David Thomas',
	},
	{
		quote:
			'The difference between a successful person and others is not a lack of strength, not a lack of knowledge, but rather a lack of will.',
		author: '- Vince Lombardi',
	},
	{
		quote: 'Good code is like a good joke - it needs no explanation.',
		author: '- Russ Olsen',
	},
	{
		quote: 'The best code is written with the user in mind.',
		author: '- Bob Walsh',
	},
	{
		quote: 'The sooner you start to code, the longer the program will take.',
		author: '- Roy Carlson',
	},
];
console.log(quotes);
const $btn = $('#btn');

$btn.click(function () {
	let number = Math.floor(Math.random() * quotes.length);
	$('#quote').html('<span></span>' + quotes[number].quote + '<span></span>');
	$('#author').html('<span></span>' + quotes[number].author);
});

// QUOTES GENERATOR END

// Jquery plugin (Part 1)

//  below function applied to div, span, paragraph, and the link even though only one div has text jquery applies to all elements in the function🤖
// $(document).ready(function () {

//   $('div, span, p, a').html('Hello Code Sleep')
// });

// below code gives the length of the elements in the function which is the number of elements on the page that have been named in the function
// page contains 2 div 1 span 1 link 1 paragraph = 5
// $(document).ready(function () {
// 	let result = $('div, span, p, a').length;
// 	console.log(result);
// });

// below returns the elements that have been named in the function including index
// $(document).ready(function () {
// 	let result = $('div, span, p, a');
// 	console.log(result);
// });
// below the hide method is used to hide the element selected css method is used to style said element
// $(document).ready(function () {

//   $('#main').html('this is div with main ID');
//   $('.special').hide();
//   $('.parent span').css('color', 'red');

// });

// Jquery plugin (Part 1) END 🤖

// JQUERY plugin (Part 2) 🤖
// below the code selects the second child of div #main with the second element h2 🤖

// $(document).ready(function () {
// 	$('#main h1+h2').css('color', 'green');
// });

// JQUERY plugin (Part 2) END

// JQUERY plugin (Part 3)
// attributes
// below the code selects all paragraph class elements any name class along as it is a p tag element 🤖
// $(document).ready(function () {
// 	$('p[class]').addClass('background');
// });

// JQUERY plugin (Part 3) END

// JQUERY plugin (Part 4)

// $(document).ready(function () {
//   $('a[href="#"]').addClass('link')
//   $('a[href!="#"]').addClass('font-size')
//   $('a[href^="https"]').addClass('external')
//   $('a[href$="org"]').addClass('org');
// });

// JQUERY plugin (Part 4) END

// JQUERY plugin (Part 5)
// :first
// :last
// :even
// :odd
// :equal
// :eq(n)
// :lt(n)
// :gt(n)

// $(document).ready(function () {
// 	$('.first li:first').css('font-size', '40px');
// 	$('.first li:last').html('I am last');
// 	$('.second li:even').addClass('even');
// 	$('.second li:odd').addClass('odd');
// 	$('.third li:eq(2)').hide();
// 	$('.third li:lt(2)').css('font-size', '40px');
// 	$('.third li:gt(2)').css('background-color', 'green');
// });

// JQUERY plugin (Part 5) END

// JQUERY plugin (Part 6)
// forms

// $(document).ready(function () {
// 	// this is kinda weird, below the code uses : and selects everything inside the form tags including the image as a input field
// 	$(':input').addClass('border');
// 	// this makes more sense only the input tag elements are targeted
// 	$('input').css('background-color', 'yellow');
// });

// JQUERY plugin (Part 6) END

// JQUERY plugin (Part 7)
// chaining
// $('document').ready(function () {
// 	$('div')
//   .hide(2000)
//   .html('We still here')
//   .addClass('border')
//   .show(2000)
// });

// JQUERY plugin (Part 7) END

// JQUERY plugin (Part 8)
// below code outputs the index and the text of the element paragraphs
// $(document).ready(function () {
// 	$('p').each(function (index) {
// 		let item = $(this);
// 		console.log(index + ' ' + item.text());
// 	});
// });

// JQUERY plugin (Part 8) END

// JQUERY plugin (Part 9)

// $(document).ready(function () {
// 	let classNames = [];

// 	$('p[class]').each(function (i) {
// 		classNames[i] = $(this).attr('class');
// 	});
//  console.log(classNames.join(', '));

// });

// JQUERY plugin (Part 9) END

// JQUERY plugin (Part 10)

// $(document).ready(function(){
// 	$('li').each(function(index){
//     if(index % 2 == 1){
// 			$(this).addClass('odd');
// 		}
// 		else {
// 			$(this).addClass('even');
// 		}
// 	})
// });

// JQUERY plugin (Part 10) END

// JQUERY plugin (Part 11)

// $(document).ready(function () {
// 	$('img').each(function (index) {
// 		if (index % 2 == 1) {
// 			$(this).attr({
// 				src: 'images/RobotsThatThink-compressor.png',
// 				title: 'Even Photo',
// 				style: 'height:150px',
// 				class: 'even',
// 			});
// 		} else {
// 			$(this).attr({
// 				src: 'images/F8j25LmSAQ8CgN2Lahbjid-1200-80.jpg',
// 				title: 'Odd Photo',
// 				style: 'height:150px',
// 				class: 'odd',
// 			});
// 		}
// 	});
// });

// JQUERY plugin (Part 11) END

// JQUERY plugin (Part 12)
// $(document).ready(function(){

// let first = $('#append');
// let second = $('#appendTo');

// first.append('<div class="append">Added Element After</div>');
// first.prepend('<div class="prepend">Added Element Before</div>');

// $('<div class="append">Added Element After</div>').appendTo(second);
// $('<div class="prepend">Added Element After</div>').prependTo(second);

// });

// JQUERY plugin (Part 12) END

// JQUERY plugin (Part 13)
// addClass
// hasClass
// removeClass
// toggleClass
// css
// $(document).ready(function () {
// 	$('#main').addClass('special');
// 	$('p').removeClass('special');

// 	$('p,div,span').click(function () {
// 		$(this).toggleClass('special');
// 	});

// 	console.log($('p').hasClass('special'));

// 	$('span').css({
// 		'font-size': '35px',
// 		'background-color': 'purple',
// 		'color': 'yellow',
// 	});
// });
// JQUERY plugin (Part 13) END

// JQUERY plugin (Part 14)

// $(document).ready(function () {
// 	$('#button').click(function () {
// 		$('div').toggleClass('special');
// 	});
// });

// JQUERY plugin (Part 14) END

// JQUERY plugin (Part 15)

// $(document).ready(function(){

// 	$('#name, #lastName, #phone, #email').change(function(){
// 		$(this).addClass('special');
// 	})
// })

// JQUERY plugin (Part 15) END

// JQUERY plugin (Part 16)

// $(document).ready(function () {
// 	$('#main').hover(function () {
// 		alert('You just hovered over here!');
// 		$(this).addClass('special');
// 	});
// });

// JQUERY plugin (Part 16) END

// JQUERY plugin (Part 17)

// $(document).ready(function () {
// 	$('#main')
// 		.mouseenter(function () {
// 			$(this).css('color', 'green');
// 		})
// 		.mouseleave(function () {
// 			$(this).css('color', 'aqua');
// 		});
// });

// JQUERY plugin (Part 18)

// $(document).ready(function () {
// 	$('#main').on('click mouseenter hover', function () {

// 		$(this).css('background-color', 'limegreen');
// 	});
// });

// JQUERY plugin (Part 18) END

// JQUERY plugin (Part 19)

// let mainDiv = $('#main');

// mainDiv.on('mouseover mouseleave', changeDiv);

// function changeDiv() {
// 	mainDiv.toggleClass('change');

// 	mainDiv.on('click', function () {
// 		mainDiv.off('mouseover mouseleave', changeDiv);
// 		mainDiv.html('You just clicked here!');
// 		mainDiv.removeClass('change');
// 	});
// }

// JQUERY plugin (Part 19) END

// JQUERY plugin (Part 20)
// comment out code snippets to see the difference
// $('#btn').click(function () {
// 	$('.simple').addClass('hide');
// 	let simpleDiv = $('.simple');
// 	let specialDiv = $('.special');
// 	specialDiv.toggle(5000);
// 	if (simpleDiv.is(':hidden')) {
// 		simpleDiv.show(4000);
// 	} else {
// 		simpleDiv.hide(5000);
// 	}
// });

// JQUERY plugin (Part 20) END

// JQUERY plugin (Part 21)
// comment out code snippets to see the difference
// $('#btn').click(function () {
// let simpleDiv = $('.simple');
// let specialDiv = $('.special');
// specialDiv.fadeOut(4000).fadeIn(4000);
// specialDiv.fadeToggle(5000);
// specialDiv.fadeTo(3000, 0.4);

// simpleDiv.slideToggle(4000);

// });

// JQUERY plugin (Part 21) END

// JQUERY plugin (Part 22)
// Animate animation
// $('#btn').click(function () {
// 	let simpleDiv = $('.simple');
// 	let specialDiv = $('.special');

// 	specialDiv.animate(
// 		{
// 			fontSize: '200px',
// 			marginLeft: '100px',
// 		},
// 		5000
// 	);
// });

// JQUERY plugin (Part 22) END

// JQUERY plugin (Part 23)
// AJAX
//

// $('#result').load('simple.txt', function (response, status, xhr) {
// 	if (status === 'error') {
// 		alert('sorry something went wrong:' + xhr.status + ' ' + xhr.statusText);
// 	} else {
// 		console.log('you are a maniac');
// 	}
// });
// JQUERY plugin (Part 23) END

// JQUERY plugin (Part 24)
//  JSON
//  let obj = {
//   name:"Code",
//   lastName: 'Sleep',
//  }
//  let JSON = {
//   'name': 'Code',
//   'lastName': 'Sleep',
//  }
// got array of quotes from chatgpt4 in JSON format and put in simple.txt
// let url = 'simple.txt';
// // $.getJSON(url, gotData);
// $.ajax({
// 	method: 'GET',
// 	url: 'simple.txt',
// 	dataType: 'json',
// }).done(gotData);

// function gotData(data) {
// 	// console.log(data)
// 	$.each(data, workData);
// }

// function workData(index, dataSet) {
// 	$('#main').append(
// 		'<div class="change">' +
// 			dataSet.author +
// 			' is the author number: ' +
// 			index +
// 			'</div>'
// 	);
// }
// JQUERY plugin (Part 24) END

// MESSAGE APP START
// const $message = $('.message');
// const $text = $('#text');
// const $send = $('#send');
// const $clear = $('#clear');
// // click event
// $send.click(deliverMessage);
// // deliver function
// function deliverMessage() {
// 	let textValue = $text.val();
// 	$message.html(textValue);
// }
// // clear the field
// $clear.click(clearField);

// function clearField () {
// 	$message.html('');
// 	$text.val('');
// }
// MESSAGE APP END

// QUOTE GENERATOR
// const settings = {
// 	async: true,
// 	crossDomain: true,
// 	url: 'https://quotes15.p.rapidapi.com/quotes/random/',
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '384023f0acmsh476a5f560383b2ep1e263djsnddfe29a727bb',
// 		'X-RapidAPI-Host': 'quotes15.p.rapidapi.com',
// 	},
// };

// $.ajax(settings).done(function (response) {
// 	console.log(response);
// });

// const $btn = $('#btn');
// const $quote = $('#quote');
// const $author = $('#author');
// const url = 'https://quotes15.p.rapidapi.com/quotes/random/';

// $btn.click(response);

// function response() {
// 	$.getJSON(url, jsonData);
// }

// function jsonData(data) {
// 	let random = Math.floor(Math.random() * data.length);

// 	$quote.html('<span>"</span>' + data[random].quote + '<span>"</span>');
// 	$author.html('<span>"</span>' + data[random].author);
// }
