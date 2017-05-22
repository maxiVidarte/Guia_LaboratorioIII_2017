window.onload = function () {
        var contador=0;
        var num=1;
        while(contador<20)
        {
            num++;
            if (primo(num))
            { 
                document.write("<p>"+num+"</p>");
                 contador++;
            }
           
        }
}
function primo(num)
{
    var primo= true;
    for(i=2;i<num;i++)
    {
     if(num%i==0)
     {
        primo=false
     }
    }
    return primo;
}

