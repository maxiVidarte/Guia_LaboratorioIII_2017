  $(document).on("ready",function(){
    $("#btnSubmit").click(function(){
       debugger;
        var varEmail = $("#txtEmail").val();
        var varPassword = $("#txtPassword").val();

    $.ajax({
        url:"http://localhost:1337/login",
        type:"post",
        data:{email:varEmail,password:varPassword}
    }).then(funcionUno,funcionDos);

    function funcionUno(data)
    {
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
    }
    function funcionDos(data)
    {
    }
        
});
})