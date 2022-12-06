function add(){
    const limite = document.createElement("hr");
    document.getElementById("atvs").appendChild(limite);
    const ctd = document.getElementById("ipt1").value;
    const novoh2 = document.createElement("h2");
    novoh2.style.color = "";
    novoh2.style.fontFamily = "TimesNewRoman";
    novoh2.innerHTML = ctd;
    document.getElementById("atvs").appendChild(novoh2);
    const btt = document.createElement("button");
    btt.innerHTML = "Remover a atividade acima"; 
    btt.style.fontFamily = "TimesNewRoman";
    btt.style.fontSize = "large";
    btt.style.marginLeft = "200px";
    btt.style.padding = "5px";
    btt.style.cursor = "pointer";
    btt.style.color = "beige";
    btt.style.backgroundColor = "DarkSlateGray";
    document.getElementById("atvs").appendChild(btt);
    const div = document.createElement("div");
    div.style.backgroundColor = "beige";
    div.style.width = "30px";
    div.style.heigth = "5px";
    div.innerHTML = "ok?";
    div.style.fontFamily = "TimesNewRoman";
    div.style.fontSize = "large";
    div.style.borderRadius = "5px";
    div.style.cursor = "pointer";
    div.style.contentTop = "50px";
    document.getElementById("atvs").appendChild(div);

    btt.addEventListener("click", function(){
        imgOK.remove();
        limite.remove();
        novoh2.remove();
        btt.remove();
        div.remove();
    })

    div.addEventListener("click", function(){
        novoh2.style.color = "lightgreen";
        imgOK = document.createElement("img");
        imgOK.src = "./../html/imgs/concluido.jpg";
        imgOK.style.width = "20px";
        imgOK.style.heigth = "20px";
        imgOK.style.marginLeft = "540px";
        document.getElementById("atvs").appendChild(imgOK);
    })

    div.addEventListener("mouseover", function(){
        div.style.color = "slateblue";
        div.style.backgroundColor = "darkslategray";
    })

    div.addEventListener("mouseout", function(){
        div.style.color = "black";
        div.style.backgroundColor = "white";
    })

}

function remover(){
    document.getElementById("atvs").innerHTML = "";
}
