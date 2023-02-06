console.log('Let\'s get ready to party with jQuery!');

$('article').attr('class', 'image-center');
$('p').eq(5).remove();

$('#title').css('font-size', Math.floor(Math.random()*100));

$('ol').append('<li>This is a new list item</>');

$('aside').children().remove();

$('aside').append('<p>Apologies for such a silly list.</p>');



// $('body').css('background-color', `rbg (${red}, ${blue}, ${green})`)

// const red = $('#red');
// const blue = $('#blue');
// const green = $('#green');


$('.form-control').on('keyup', function(){
	let red = $('#red').val();
	let blue = $('#blue').val();
	let green = $('#green').val();
	$('body').css('background-color', `rgb(${red},${green},${blue}`)
})