$(document).ready(function(){
	//Solo si no se navega adecuadamente
	if ("ontouchstart" in document.documentElement) { 
		document.querySelector(".hint").innerHTML = "<p>Toca la pantalla en la izquierda o deracha para navehgar</p><p>Toca <A href='#titile'>inicio</A> para volver al inicio</p>";
	}
	//impress.js funciones dentro del index.hmtl
	impress().init();

	$('div.bote').click(function(){
		$(this).parent().find('img').hide('fade',1000);
		$(this).find('img').show('fade',1000);
	});

	$('.slide2-pAzul').click(function(){
		impress().next();
	});
	$('.slide2-pMorado').click(function(){
		impress().next();
	});
	$('.slide11-1').click(function(){
		impress().next();
	});
	$('.slide11-2').click(function(){
		impress().next();
	});
	$('#play-pause-button').click(function(){
		togglePlayPause();
	});

	$('div.switch').click(function(){
		cambio(this,$('div.slide5-chavo'),$('div.slide5-texto'));
	});
});

function mostrar(){
	$('.visible').show();
}

function esconder(){
	$('.hide').hide();
}

function sawIt(selector){
	if($(selector).hasClass('visitada')){
		return true
	}else{
		$(selector).addClass('visitada');
		return false
	}
}

function mostrarById(id){
	$(id).find('.hide').show();
}

function cambio(evento, mono, texto){
	var backGrd = $(evento).attr('name');
	var imageUrl = $(evento).children('img').attr('src');
	mono.toggle('fade',500);
	setTimeout(function(){
		mono.css('background-image', 'url(css/images/'+ backGrd +'.png)');
		texto.children('img').attr('src', imageUrl);
	},500);
	mono.toggle('fade',1000);
	setTimeout(function(){
		mono.toggle('fade',500);
		setTimeout(function(){
			mono.css('background-image', 'url(css/images/normal.png)');
			texto.children('img').attr('src', 'chose-slide-5/1024x768/Letrero02.png');
		},500);
		mono.toggle('fade',1000);
	},2500);
}

document.addEventListener("DOMContentLoaded", function() { initialiseMediaPlayer(); }, false);
var mediaPlayer;
	function initialiseMediaPlayer() {
   mediaPlayer = document.getElementById('media-video');
   mediaPlayer.controls = false;
}
function togglePlayPause() {
	var btn = document.getElementById('play-pause-button');
	if (mediaPlayer.paused || mediaPlayer.ended) {
		btn.title = 'pause';
		btn.innerHTML = '';
		btn.className = 'pause';
		mediaPlayer.play();
	}
	else {
		btn.title = 'play';
		btn.innerHTML = '';
		btn.className = 'play';
		mediaPlayer.pause();
	}
}
function slide2(){
	setTimeout(function(){
		$('.slide2-ventana').show('drop',{direction: 'down'},2000) //Fondo Ventana
	},1000);
	setTimeout(function(){
		$('.slide2-texto').show('slide','',1000) //¿Ha recomendado
	},3000);
	setTimeout(function(){
		$('.slide2-titulo').show('fade','',2000) //¿Ha recomendado
	},4000);
	setTimeout(function(){
		$('.slide2-pAzul').show('slide','',2000) //Plato Azul SI
	},5000);
	setTimeout(function(){
		$('.slide2-pMorado').show('slide',{direction: 'right'},2000) //Plato Morado NO
	},5000);
	setTimeout(function(){
		$('.slide2-pAzul').addClass('animated bounce') //Plato Azul SI
	},8000);
	setTimeout(function(){
		$('.slide2-pAzul').removeClass('animated bounce') //Plato Azul SI
	},20000);
	setTimeout(function(){
		$('.slide2-pMorado').addClass('animated shake') //Plato Azul SI
	},8000);
	setTimeout(function(){
		$('.slide2-pMorado').removeClass('animated shake') //Plato Azul SI
	},20000);
}

function slide3(){
	setTimeout(function(){
		$('.slide3-barra').show('slide',1000) //Barra blanca
	},500);
	setTimeout(function(){
		$('.slide3-bebe').show('fade',2000) //Fondo Bebe
	},500);
	setTimeout(function(){
		$('.slide3-titulo .throwBldBig').show('clip',{direction: 'vertical'},1500) //Ablactacion
	},1500);
	setTimeout(function(){
		$('.slide3-titulo .nestleLi').show('fade',1000) //Despues de los 6
	},2500);
	setTimeout(function(){
		$('.slide3-3').show('bounce',1500) //Para:
	},8600);
	setTimeout(function(){
		$('.slide3-4').show('slide',{direction: 'right'},1000) //Bullet Aportar
	},9000);
	setTimeout(function(){
		$('.slide3-5').show('slide',{direction: 'right'},1000) //Bullet Desarrollar
	},10000);
	setTimeout(function(){
		$('.slide3-6').show('slide',{direction: 'right'},1000) //Bullet Estimular
	},11000);
	setTimeout(function(){
		$('.slide3-7').show('fade',1000) //Legal OMS
	},11000);
}

function slide4(){
	setTimeout(function(){
		$('.slide4-barra').show('fold',1500) //La energia
	},500);
	setTimeout(function(){
		$('.slide4-barra-texto').show('drop',{direction: 'up'},1000) //Los hidratos
	},1500);
	setTimeout(function(){
		$('.slide4-contenedor').show('drop',{direction: 'down'},1500) //Piramide cereales
	},2500);
}

function slide5(){
	setTimeout(function(){
		$('.slide5-pleca').show('fade',1500)
	}, 500);
	setTimeout(function(){
		$('.slide5-contenedor-chavo-texto').show('fade',1500)
	}, 1000);
	setTimeout(function(){
		$('.slide5-contenedor-plato-cereales').show('fade',1500)
	}, 1500);
}

function slide6(){
	setTimeout(function(){
		$('.slide6-mantel-pleca').show('slide',1500) //La energia
	},500);
	setTimeout(function(){
		$('.slide6-mantel-pleca-babero').show('fade',2000) //Los hidratos
	},850);
	setTimeout(function(){
		$('.slide6-mantel-pleca-trigo').show('fade',1000) //Piramide cereales
	},1000);
	setTimeout(function(){
		$('.slide6-titulo').show('drop',{direction: 'up'},1500) //La cantidad
	},2000);
	setTimeout(function(){
		$('.slide6-texto').show('puff',1000) //Piramide verduras
	},4000);
	setTimeout(function(){
		$('.slide6-mantel-pleca-babero').addClass('animated pulse') //Piramide verduras
	},4000);
	setTimeout(function(){
		$('.manitas').show('bounce',{times: 10},5000)
	}, 3500);
	setTimeout(function(){
		$('.manitas').hide('fade',200)
	}, 4000);
	$('.slide6-mantel-pleca-babero').click(function(){
		$(this).removeClass('animated pulse');
		slide6_1();
	});
}

function slide6_1(){
	setTimeout(function(){
		$('.slide6-mantel-pleca-babero-conciencia-texto-1').show('slide',1500) //La energia
	},1000);
	setTimeout(function(){
		$('.slide6-mantel-pleca-babero-conciencia-texto-2').show('slide',1500) //La energia
	},2000);
	setTimeout(function(){
		$('.slide6-mantel-pleca-babero-conciencia-texto-3').show('slide',1500) //La energia
	},3000);
	setTimeout(function(){
		$('.slide6-mantel-pleca-babero-conciencia-texto-4').show('slide',1500) //La energia
	},4000);
	setTimeout(function(){
		$('.slide6-mantel-pleca-babero-conciencia-texto-5').show('slide',1500) //La energia
	},5000);
}

function slide7(){
	setTimeout(function(){
		$('.slide7-mantel-pleca').show('puff',1500) //La energia
	},1000);
	setTimeout(function(){
		$('.slide7-mantel-pleca-bebe').show('drop',{direction: 'down'},1000)
	},2000);
	setTimeout(function(){
		$('.slide7-titulo').show('clip',{direction: 'vertical'},2500) //La energia
	},2500);
	setTimeout(function(){
		$('.slide7-mantel-pleca-trigo').show('slide',1500) //La energia
	},4000);
	setTimeout(function(){
		$('.slide7-4').show('puff',1500) //La energia
	},5000);
	setTimeout(function(){
		$('.manitas').show('bounce',{times: 10},5000)
	}, 3500);
	setTimeout(function(){
		$('.manitas').hide('fade',200)
	}, 4000);
	$('.slide7-4').click(function(){
		$('.slide7-4').animate({"margin-left":"75px"},4000);
		setTimeout(function(){
		$('.slide7-3').show('slide',3000) //La energia
		},500);
	});
}

function slide8(){
	setTimeout(function(){
		$('.slide8-pleca').show('puff',1500) //La energia
	},1000);
	setTimeout(function(){
		$('.slide8-pleca-titulo').show('drop',{direction: 'down'},1500)
	},2000);
	setTimeout(function(){
		$('.slide8-babero').show('slide',1500) //La energia
	},3000);
	setTimeout(function(){
		$('.slide8-textos-contenedor1-pleca').show('slide',{direction: 'right'},1500) //La energia
	},3500);
	setTimeout(function(){
		$('.slide8-textos-contenedor2-pleca').show('slide',1500) //La energia
	},3500);
	setTimeout(function(){
		$('.manitas').show('bounce',{times: 10},5000)
	}, 3500);
	setTimeout(function(){
		$('.manitas').hide('fade',200)
	}, 4000);
	$('.slide8-textos-contenedor1-pleca').click(function(){
		$('.slide8-textos-contenedor1-pleca').animate({"height":"200px"},3000);
		$('.slide8-1').hide('fade',1500);
		setTimeout(function(){
			$('.slide8-1').attr('src','chose-slide-8/1024x768/Puntitos_09.png');
			$('.slide8-1').show('fade',1000);
		},1500);
	});
	$('.slide8-textos-contenedor2-pleca').click(function(){
		$('.slide8-textos-contenedor2-pleca').animate({"height":"200px"},3000);
		$('.slide8-1').hide('fade',1500);
		setTimeout(function(){
			$('.slide8-1').attr('src','chose-slide-8/1024x768/Pancita_09.png');
			$('.slide8-1').show('fade',1000);
		},1500);
	});
}

function slide9(){
	setTimeout(function(){
		$('.slide9-pleca').show('puff',1500) //La energia
	},1000);
	setTimeout(function(){
		$('.slide9-1').show('drop',{direction: 'left'},1500) //La energia
	},1000);
	setTimeout(function(){
		$('.slide9-titulo .nestleBld').show('drop',{ direction: 'up' },1500)
	},2000);
	setTimeout(function(){
		$('.slide9-titulo .nestleLi').show('fade',1500) //La energia
	},3000);
	setTimeout(function(){
		$('.slide9-bullets-1').show('slide',1500) //La energia
	},4000);
	setTimeout(function(){
		$('.slide9-bullets-2').show('slide',1500) //La energia
	},5000);
	setTimeout(function(){
		$('.slide9-bullets-3').show('slide',1500) //La energia
	},6000);
	setTimeout(function(){
		$('.slide9-bullets-4').show('slide',1500) //La energia
	},7000);
}

function slide10(){
	setTimeout(function(){
		$('.slide10-pleca').show('slide', {direction: 'right'},1000) //La energia
	},1000);
	setTimeout(function(){
		$('.slide10-titulo .nestleBld').show('drop',{direction: 'left'},1000) //La energia
	},2000);
	setTimeout(function(){
		$('.slide10-titulo .nestleLi').show('drop',{ direction: 'up' },1500)
	},3000);
	setTimeout(function(){
		$('.slide10-content-trigo').show('fade',1500) //La energia
	},3000);
	setTimeout(function(){
		$('.slide10-content-derecha-fondo').show('scale',1500) //La energia
	},4000);
	setTimeout(function(){
		$('.slide10-1').attr('src', 'chose-slide-10/1024x768/Trigo.gif')
	},5000);
	setTimeout(function(){
		$('.slide10-content-derecha-fondo-bullets-1').show('slide',1500) //La energia
	},5000);
	setTimeout(function(){
		$('.slide10-content-derecha-fondo-bullets-2').show('slide',1500) //La energia
	},6500);
	setTimeout(function(){
		$('.slide10-content-derecha-fondo-bullets-3').show('slide',1500) //La energia
	},8000);
}

function slide11(){
	setTimeout(function(){
		$('.slide11-ventanas').show('drop',{direction: 'up'},1000) //La energia
	},500);
	setTimeout(function(){
		$('.slide11-ventanas-pleca').show('drop',{ direction: 'up' },1500)
	},2000);
	setTimeout(function(){
		$('.slide11-titulo').show('fade',1500) //La energia
	},3000);
	setTimeout(function(){
		$('.slide11-ventanas-contenedor-izquierda').show('bounce',{times: 20}, 12000)
	},4000);
	setTimeout(function(){
		$('.slide11-ventanas-contenedor-derecha').show('shake',{times: 6}, 5000) //La energia
	},4000);
}

function slide12(){
	setTimeout(function(){
		$('.slide12-pleca').show('drop', {direction: 'up'},1500) //La energia
	},500);
	setTimeout(function(){
		$('.slide12-titulo .throwBld').show('drop',{direction: 'down'},1000) //La energia
	},1000);
	setTimeout(function(){
		$('.slide12-titulo .nestleLi').show('drop',{ direction: 'down' },2000)
	},2000);
	setTimeout(function(){
		$('.slide12-contenedor-plato').show('fade',1000) //La energia
	},3000);
	setTimeout(function(){
		$('.slide12-contenedor-plato-cuarto1').show('drop',{ direction: 'down' }, 1000)
	},4000);
	setTimeout(function(){
		$('.slide12-contenedor-plato-cuarto2').show('drop',{ direction: 'down' }, 1000) //La energia
	},5000);
	setTimeout(function(){
		$('.slide12-contenedor-plato-cuarto3').show('drop',{ direction: 'down' },1000) //La energia
	},6000);
	setTimeout(function(){
		$('.slide12-contenedor-plato-cuarto4').show('drop',{ direction: 'down' },1000) //La energia
	},7000);
	setTimeout(function(){
		$('.slide12-contenedor-plato-brillo').show('drop',{ direction: 'down' },1500)
	},7000);
	setTimeout(function(){
		$('.slide12-contenedor-plato-cuchara-1').show('fade',1500) //La energia
	},8000);
	setTimeout(function(){
		$('.slide12-contenedor-plato-cuchara-2').show('fade', 1500)
	},8500);
	setTimeout(function(){
		$('.slide12-contenedor-plato-cuchara-3').show('fade', 1500) //La energia
	},9000);
	setTimeout(function(){
		$('.slide12-contenedor-plato-cuchara-4').show('fade',1500) //La energia
	},9500);
	setTimeout(function(){
		$('.slide12-contenedor-plato-cuchara-5').show('fade',1500) //La energia
	},10000);
	setTimeout(function(){
		$('.slide12-contenedor-plato-cuchara-6').show('fade',1500)
	},10500);
	setTimeout(function(){
		$('.slide12-contenedor-plato-cuchara-7').show('fade',1500) //La energia
	},11000);
	setTimeout(function(){
		$('.slide12-contenedor-plato-cuchara-8').show('fade', 1500)
	},11500);
	setTimeout(function(){
		$('.slide12-contenedor-plato-cuchara-9').show('fade', 1500) //La energia
	},12000);
}

function slide13(){
	setTimeout(function(){
		$('.slide13').show('drop', {direction: 'up'},1500) //La energia
	},700);
	setTimeout(function(){
		$('.slide13-ventanas').show('drop',{direction: 'up'},1000) //La energia
	},500);
	setTimeout(function(){
		$('.slide13-ventanas-pleca').show('slide',{ direction: 'left' },1000)
	},2000);
	setTimeout(function(){
		$('.slide13-ventanas-pleca-titulo').show('blind',{ direction: 'left' },1500)
	},3000);
	setTimeout(function(){
		$('.slide13-ventanas-pleca-logo').show('fade',1500)
	},4000);setTimeout(function(){
		$('.slide13-1').show('bounce', 1500)
	},4500);
	setTimeout(function(){
		$('.slide13-2').show('bounce', 1500) //La energia
	},5500);
	setTimeout(function(){
		$('.slide13-3').show('bounce', 1500)
	},6500);
	setTimeout(function(){
		$('.slide13-4').show('bounce', 1500) //La energia
	},7500);
	setTimeout(function(){
		$('.slide13-5').show('bounce', 1500) //La energia
	},8500);
}

function slide14(){
	setTimeout(function(){
		$('.slide14').show('drop', {direction: 'up'},1500) //La energia
	},700);
	setTimeout(function(){
		$('.slide14-ventanas').show('drop',{direction: 'up'},1000) //La energia
	},500);
	setTimeout(function(){
		$('.slide14-ventanas-pleca').show('puff',1000)
	},2000);
	setTimeout(function(){
		$('.slide14-ventanas-pleca-titulo').show('blind',{ direction: 'left' },1500)
	},3000);
	setTimeout(function(){
		$('.slide14-ventanas-pleca-logo').show('shake',1500)
	},4000);setTimeout(function(){
		$('.slide14-1').show('fade', 1500)
	},5000);
	setTimeout(function(){
		$('.slide14-2').show('bounce', 1500) //La energia
	},6000);
	setTimeout(function(){
		$('.slide14-3').show('bounce', 1500)
	},7000);
	setTimeout(function(){
		$('.slide14-4').show('bounce', 1500) //La energia
	},8000);
	setTimeout(function(){
		$('.slide14-5').show('bounce', 1500) //La energia
	},9000);
	setTimeout(function(){
		$('.slide14-6').show('bounce', 1500) //La energia
	},10000);
	setTimeout(function(){
		$('.slide14-7').show('bounce', 1500) //La energia
	},11000);
	setTimeout(function(){
		$('.slide14-8').show('bounce', 1500) //La energia
	},12000);
}

function slide15(){
	setTimeout(function(){
		$('.slide15-pleca').show('clip',{direction: "horizontal"},1500)
	},1000);
	setTimeout(function(){
		$('.slide15-titulo').show('fade', 1500)
	},2500);
	setTimeout(function(){
		$('.slide15-1').show('size',2000)
	},4000);
}

function slide16(){
	setTimeout(function(){
		$('.slide16-pleca').show('fade',1500)
	}, 500);
	setTimeout(function(){
		$('.slide16-pleca-logo').show('fade',1500)
	}, 1500);
	setTimeout(function(){
		$('.slide16-pleca-titulo').show('fade',1500)
	}, 2000);
	setTimeout(function(){
		$('.slide16-contenedor').show('fade',1500)
	}, 3000);
	setTimeout(function(){
		$('.manitas').show('bounce',{times: 10},5000)
	}, 3500);
	setTimeout(function(){
		$('.manitas').hide('fade',200)
	}, 4000);
}

function slide17(){
	setTimeout(function(){
		$('.slide17-pleca').show('fade',1500)
	}, 500);
	setTimeout(function(){
		$('.slide17-pleca-logo').show('fade',1500)
	}, 1500);
	setTimeout(function(){
		$('.slide17-pleca-titulo').show('fade',1500)
	}, 2000);
	setTimeout(function(){
		$('.slide17-contenedor').show('fade',1500)
	}, 3000);
	setTimeout(function(){
		$('.manitas').show('bounce',{times: 10},5000)
	}, 3500);
	setTimeout(function(){
		$('.manitas').hide('fade',200)
	}, 4000);
}

function slide18(){
	setTimeout(function(){
		$('.slide18').show('fold',2000)
	}, 1000);
}

