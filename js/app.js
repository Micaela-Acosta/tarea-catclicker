/*
*dato el proyecto catclicker declarar una variable cat 
con los atributos name, photo, voteup, votedown
asignar los valores del modelo datos a la estructura 
html e implementar los eventos clik para el incremento 
o decremento de los votos
*/
var cats = [{
	id: 1,
	name : 'Gato 1',
	photo : 'img/cats/1.jpg',
	voteup:0,
	votedown:0
},
{
	id: 2,
	name : 'Gato 2',
	photo : 'img/cats/2.jpg',
	voteup:0,
	votedown:0
},
{
	id: 3,
	name : 'Gato 3',
	photo : 'img/cats/3.jpg',
	voteup:0,
	votedown:0
},
{
	id: 4,
	name : 'Gato 4',
	photo : 'img/cats/4.jpg',
	voteup:0,
	votedown:0
},
{
	id: 5,
	name : 'Gato 5',
	photo : 'img/cats/5.jpg',
	voteup:0,
	votedown:0
},
{
	id: 6,
	name : 'Gato 6',
	photo : 'img/cats/6.jpg',
	voteup:0,
	votedown:0
},
{
	id: 7,
	name : 'Gato 7',
	photo : 'img/cats/7.jpg',
	voteup:0,
	votedown:0
},
{
	id: 8,
	name : 'Gato 8',
	photo : 'img/cats/8.jpg',
	voteup:0,
	votedown:0
},
{
	id: 9,
	name : 'Gato 9',
	photo : 'img/cats/9.jpg',
	voteup:0,
	votedown:0
}
]
function init (){
	showData(cats);
	bindEvent();
}
function clickUp(){
	var cont = parseInt($(this).find('.up').text());
	cont++;
	$(this).find('.up').text(cont);
}
function clickDown(){
	var cont = parseInt($(this).find('.down').text());
	cont++;
	$(this).find('.down').text(cont);
}
function bindEvent(){
	$('clickerup').click(clickUp);
	$('clickerdown').click(clickDown);
}
function showCats(cats){
	var template = $('#template')
		var catsTpl;
		for (var i = 0; i < cats.length; i++) {
			var c = cats[i];
			catsTpl = $(template).clone();
			catsTpl.find('h1').text(c.name);
			catsTpl.find('img').attr('src',c.photo);
			catsTpl.find('.clikerup span').text(c.voteup);
			catsTpl.find('.clikerdown span').text(c.votedown);
			$('#cats-list').append(catsTpl);
	}
}
