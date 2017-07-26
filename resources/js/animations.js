function deroule_onglet(onglet,titre){
	var element = document.getElementById(onglet);
	var display_mode = element.style.display; 
	var jquery_id = "#"+onglet;
	if (display_mode=="none" || display_mode=="") {
		/* On change l'opacité des titres */
		$(titre).parent().children('h2').css("opacity",0.5);
		$(titre).css("opacity",1);
		/* On fait apparaitre l'onglet et disparaitre les autres */
		$(jquery_id).parent().children('article').hide();
		$(jquery_id).fadeIn();
	} else {
		$(jquery_id).fadeOut();
		$(titre).css("opacity",0.5);
	}
}

function masque_show(id){
	 $(id).animate({width: "toggle"});
}

function myFancy(classe){
	$(classe).fancybox();
}