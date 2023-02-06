
$(function(){
	let $header = $("header");
	let $main = $("main");
	let $titulo = $(".titulo");
	let $m_clara = $(".md_clara");
	let $m_oscura = $(".md_oscura");
	let $foto = $(".foto");
	let $nav_menu = $("#nav_menu");
	let $mn_hamburguesa = $(".mn_hamburguesa");
	let $mn_desplegable = $(".mn_desplegable");
	let $contenedor_fl_down = $("#contenedor_fl_down");
	let $contenedor_fl_up = $("#contenedor_fl_up");
	let $fl_down = $("#fl_down");
	let $fl_up = $("#fl_up");

	//***************
	//Función para que cuando el usuario refresca la pág (con F5), esta cargue en scrollTop 0. De este modo evitamos la mayor parte de conflictos que se producen al refrescar la pág durante la animación o una vez estamos en la parte inferior
	$(window).on('beforeunload', function(){
	  $(window).scrollTop(0);
	});
	//***************

	$mn_hamburguesa.click(function(){
		$mn_hamburguesa.toggleClass('mn_h_desplegado');
		$mn_desplegable.toggleClass('dis_none');
	});

	$contenedor_fl_down.click(function(){

		$contenedor_fl_up.css('left','181px');
		$fl_up.removeClass('animacion_fl_up').css('top','50px');

		$('html, body').animate({'scrollTop':$main.offset().top},3500, function(){
			$contenedor_fl_up.clearQueue().animate({'left':'-20px'},500);
			$contenedor_fl_up.animate({'left':'0px'},300, function(){
				$fl_up.animate({'top':'0px'},1000, function(){
					$fl_up.addClass('animacion_fl_up');
				});
			});
			$m_clara.css('transition','initial');
			$m_oscura.css('transition','initial');
		}).clearQueue();
		$m_clara.css('transition','all 2s').removeClass('md_c_inclinada').addClass('md_c_horizontal');
		$m_oscura.css('transition','all 2s').removeClass('md_o_inclinada').addClass('md_o_horizontal');
	});

	$contenedor_fl_up.click(function(){
		
		$fl_up.removeClass('animacion_fl_up').animate({'top':'-45px'},350, function(){
			$fl_up.css({'top':'50px'});
			$contenedor_fl_up.animate({'left':'181px'},650, function(){
				$('html, body').animate({'scrollTop':$header.offset().top},3000);
			$m_clara.css('transition','all 3s').removeClass('md_c_horizontal').addClass('md_c_inclinada');
			$m_oscura.css('transition','all 3s').removeClass('md_o_horizontal').addClass('md_o_inclinada');
			});
		}).clearQueue();
	});
});