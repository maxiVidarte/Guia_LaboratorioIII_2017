$(document).ready( function(){

    $("btnSubmit").click(EnviarDatos());
});
	function EnviarDatos()
	{
		debugger;
		$.ajax({
			url:'index.html',
			type:'POST',
			data:{email: $('#txtEmail').val(), password: $('#txtPassword').val()},
		})
		.done(function(data,textStatus,peticion){
			$('#resultado').html(data+' '+peticion.status);
		})
		.fail(function(peticion, textStatus, errorThrown){
			alert("error"+data.status);
		})
		.always(function(){
			alert("Terminado");
		});
	};

	/*debugger;
	var url="index.html";
    var email=$("#email").val();
    var password=$("#password").val();
	var datoslogin= {"email":email, "password":password};
	
	$.post("http://localhost:1337/login",JSON.stringify(datoslogin),function (data) {
		console.log(data);
		if (data.autenticado =="si") {
			localStorage.setItem("datos",data);
			window.location.replace(url);
		}
		else{
			alert(data);
		}
	});
}*/
