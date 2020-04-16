const menuToggle = document.querySelector('#menu-togle');
const mobileNavContainer = document.querySelector('#mobile-nav');

menuToggle.onclick = function(){
	menuToggle.classList.toggle('menu-icon-active');
	mobileNavContainer.classList.toggle('mobile-nav--active');
	$('body').toggleClass('lock');
}
//--------------Слайдер----------------
$(document).ready(function(){
	$('.slider').slick({
		arrows:true,
		dots:true,
		infinite:true,
		speed:1000,
		autoplay:true,
	});
});
//-------------------Коментарии---------
$('#coments-button-1').click(function(){
	$("#coments_text-1").fadeToggle(500);
	$("#coments_text-2").css({"display":"none"});
	$("#coments_text-3").css({"display":"none"});
});
$('#coments-button-2').click(function(){
	$("#coments_text-2").fadeToggle(500);
	$("#coments_text-1").css({"display":"none"});
	$("#coments_text-3").css({"display":"none"});
});
$('#coments-button-3').click(function(){
	$("#coments_text-3").fadeToggle(500);
	$("#coments_text-1").css({"display":"none"});
	$("#coments_text-2").css({"display":"none"});
});

$(function(){
	$('.persons-info').fadeTo(50, 0.4);
	$('#coments-button-2').fadeTo(50, 1);
});

$('#coments-button-1').click(function(){
	$('#coments-button-1').fadeTo(500, 1);
	$('#coments-button-2').fadeTo(100, 0.4);
	$('#coments-button-3').fadeTo(100, 0.4);
});
$('#coments-button-2').click(function(){
	$('#coments-button-2').fadeTo(500, 1);
	$('#coments-button-1').fadeTo(100, 0.4);
	$('#coments-button-3').fadeTo(100, 0.4);
});
$('#coments-button-3').click(function(){
	$('#coments-button-3').fadeTo(500, 1);
	$('#coments-button-2').fadeTo(100, 0.4);
	$('#coments-button-1').fadeTo(100, 0.4);
});
//-------------------Foter-menu---------
$('#list-1').click(function(){
	$("#list__list-1").fadeToggle(200);
	$("#list__list-2").css({"display":"none"});
	$("#list__list-3").css({"display":"none"});
	$("#list__list-4").css({"display":"none"});
});
$('#list-2').click(function(){
	$("#list__list-2").fadeToggle(200);
	$("#list__list-1").css({"display":"none"});
	$("#list__list-3").css({"display":"none"});
	$("#list__list-4").css({"display":"none"});
});
$('#list-3').click(function(){
	$("#list__list-3").fadeToggle(200);
	$("#list__list-1").css({"display":"none"});
	$("#list__list-2").css({"display":"none"});
	$("#list__list-4").css({"display":"none"});
});
$('#list-4').click(function(){
	$("#list__list-4").fadeToggle(200);
	$("#list__list-1").css({"display":"none"});
	$("#list__list-2").css({"display":"none"});
	$("#list__list-3").css({"display":"none"});
});