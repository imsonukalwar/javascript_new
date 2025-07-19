        const button = document.getElementById("button");
    setInterval (function(){
        let date=new Date();
        button.innerHTML=date.toLocaleTimeString()
    },1000)