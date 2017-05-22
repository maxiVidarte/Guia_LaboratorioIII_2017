
function MostrarError()
{
	$.ajax({
		url:"nexoNoExiste.php"
		
	}).then(
		funcionUno,funcionDos
	);
	function funcionUno(retorno){
		
		console.info(retorno);
	}
	function funcionDos(retorno){
		$("#principal").html("error :(");
		$("#informe").html(retorno.responseText);
		console.info(retorno);
	}
	
	alert("error");
	//url:"nexoNoExiste.php",type:"post"
}
function MostrarSinParametros()
{
	//url:"nexoTexto.php"});
	$.ajax({
		url:"nexoTexto.php"
	}).then(
		funcionUno,funcionDos
	);
	function funcionUno(retorno){
		$("#principal").html(retorno);
		$("#informe").html("Correcto :)");
		console.info(retorno);
	}
	function funcionDos(retorno){
		console.info(retorno);
	}
}

function Mostrar(queMostrar)
{
		alert(queMostrar);
		$.ajax({
			url:"nexo.php",
			type:"post",
			data:{queHacer:queMostrar}
		}).then(funcionUno,funcionDos);
		
	function funcionUno(retorno){
		$("#principal").html(retorno);
		$("#informe").html("Correcto :)");
		console.info(retorno);
	}
	function funcionDos(retorno){
		console.info(retorno);
	}
		//url:"nexo.php",
		//type:"post",
	
}

function MostarLogin()
{
		//alert(queMostrar);
	var funcionAjax=$.ajax({
		url:"nexo.php",
		type:"post",
		data:{queHacer:"MostarLogin"}
	}).then(funcionUno,funcionDos);
	
	function funcionUno(retorno){
		$("#principal").html(retorno);
		$("#informe").html("Correcto :)");
		console.info(retorno);
	}
	function funcionDos(retorno){
		$("#botonesABM").html(":(");
		$("#informe").html(retorno.responseText);	
	}
	/*funcionAjax.done(function(retorno){
		$("#principal").html(retorno);
		$("#informe").html("Correcto Form login!!!");	
	});
	funcionAjax.fail(function(retorno){
		$("#botonesABM").html(":(");
		$("#informe").html(retorno.responseText);	
	});
	funcionAjax.always(function(retorno){
		//alert("siempre "+retorno.statusText);

	});*/
}