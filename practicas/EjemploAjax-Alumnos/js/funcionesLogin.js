function validarLogin()
{
		var varUsuario=$("#correo").val();
		var varClave=$("#clave").val();
		var recordar=$("#recordarme").is(':checked');
		
$("#informe").html("<img src='imagenes/ajax-loader.gif' style='width: 30px;'/>");
	
	//	url:"php/validarUsuario.php",
	//	type:"post",
	$.ajax({
			url:"php/validarUsuario.php",
			type:"post",
			data:
			{
				usuario:varUsuario,
				clave:varClave,
				recordarme:recordar	
			}
		}).then(funcionUno,funcionDos);
		
	function funcionUno(retorno){
		if(retorno!="No-esta"){	
				MostarBotones();
				MostarLogin();

				$("#BotonLogin").html("Ir a salir<br>-Sesión-");
				$("#BotonLogin").addClass("btn btn-danger");				
				$("#usuario").val("usuario: "+retorno);
			}else
			{
				$("#informe").html("usuario o clave incorrecta");	
				$("#formLogin").addClass("animated bounceInLeft");
			}
	}
	function funcionDos(retorno){
		$("#botonesABM").html(":(");
		$("#informe").html(retorno.resposteText);
		console.info(retorno);
	}


		
			// si esta logeado le habilito los botones 
			//if(?????){	
			//	MostarBotones();
			//	MostarLogin();

			//	$("#BotonLogin").html("Ir a salir<br>-Sesión-");
			//	$("#BotonLogin").addClass("btn btn-danger");				
			//	$("#usuario").val("usuario: "+retorno);
			//}else
			//{
		//		$("#informe").html("usuario o clave incorrecta");	
		//		$("#formLogin").addClass("animated bounceInLeft");
		//	}
	//error de ajax muestro lo siguiente
	//$("#botonesABM").html(":(");
	//	$("#informe").html(retorno.responseText);	

	
}
function deslogear()
{	
	
	//	url:"php/deslogearUsuario.php",
	//	type:"post"		
$.ajax({
			url:"php/deslogearUsuario.php",
			type:"post",
			data:
			{
				queHacer:"MostarBotones"
			}
		}).then(funcionUno,funcionDos);
		
	function funcionUno(retorno){
			MostarBotones();
			MostarLogin();
			$("#usuario").val("Sin usuario.");
			$("#BotonLogin").html("Login<br>-Sesión-");
			$("#BotonLogin").removeClass("btn-danger");
			$("#BotonLogin").addClass("btn-primary");
		console.info(retorno);
	}
	function funcionDos(retorno){
		console.info(retorno);
	}
}
function MostarBotones()
{	
	//	url:"nexo.php",
	//	type:"post",
	//	data:{queHacer:"MostarBotones"}
		$.ajax({
			url:"nexo.php",
			type:"post",
			data:
			{
				queHacer:"MostarBotones"
			}
		}).then(funcionUno,funcionDos);
		
	function funcionUno(retorno){
		$("#botonesABM").html(retorno);
		$("#informe").html("usuario logeado :)");
		console.info(retorno);
	}
	function funcionDos(retorno){
		console.info(retorno);
	}

}
