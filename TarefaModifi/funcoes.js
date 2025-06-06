var ctxCabecalho;
var ctxLinks;
var ctxConteudo;
var ctxRodape;

function configEstiloCabecalho(){
    bg = document.getElementById("corFundo").value;
    corFonte = document.getElementById("corFonte").value;
    tamFonte = document.getElementById("tamFonte").value;
    altura = document.getElementById("alturaCabecalho").value;
    largura = document.getElementById("larguraCabecalho").value;
    alinhamento = document.getElementById("alinhamentoTexto").value;

    ctxCabecalho = "#cabecalho{\n";
    ctxCabecalho += " background-color:"+bg+";\n";
    ctxCabecalho += " color:"+corFonte+";\n";
    ctxCabecalho += " font-size:"+tamFonte+"pt;\n";
    if (altura) ctxCabecalho += " height:"+altura+"px;\n";
    if (largura) ctxCabecalho += " width:"+largura+"%;\n";
    ctxCabecalho += " text-align:"+alinhamento+";\n";
    ctxCabecalho += "}\n";

    return ctxCabecalho;
}

function configEstiloLinks(){
    corLink = document.getElementById("corLinks").value;
    estiloLinks = document.querySelector('input[name="estiloLinks"]:checked').value;
    corHover = document.getElementById("corHover").value;
    alturaLinks = document.getElementById("alturaLinks").value;
    larguraLinks = document.getElementById("larguraLinks").value;

    ctxLinks = "#links {\n";
    if (alturaLinks) ctxLinks += " height:" + alturaLinks + "px;\n";
    if (larguraLinks) ctxLinks += " width:" + larguraLinks + "%;\n";
    ctxLinks += "}\n";

    ctxLinks += "a{\n color:"+corLink+";\n";
    let aux = estiloLinks=="0" ? "none" : "underline";
    ctxLinks += " text-decoration:"+aux+";\n}\n";

    if (corHover !== "--") {
        ctxLinks += "a:hover{\n color:"+corHover+";\n}\n";
    }

    return ctxLinks;
}

function configHtmlLinks(){
    links = document.getElementsByName("links");
    href = document.getElementsByName("href");
    ctxLinks = "";
    for(let i=0;i<links.length;i++) {
        vet = href[i].value.split("\\");
        ctxLinks +='<a href="'+vet[vet.length-1]+'">'+links[i].value+'</a>';
    }
    return ctxLinks;
}

function configHTMLCabecalho(){
    let aux = document.querySelector("#textoCabecalho").value;
    ctxCabecalho = '<h1>'+aux+'</h1>';
    return ctxCabecalho;
}

function gerarCodigo(){
    let codeCSS = document.querySelector("#codeCSS");
    let css = configEstiloCabecalho();
    css += configEstiloLinks();
    codeCSS.value = css;

    let codeHTML = document.querySelector("#codeHTML");
    ctxHTML = "<html>\n<head>\n" +
        "<link rel='stylesheet' href='estilo.css'>\n"+
        "<title>Minha página</title>\n"+
        "</head>\n<body>" +
        "<div id='cabecalho'>"+configHTMLCabecalho()+"</div>\n" +
        "<nav id='links'>\n"+configHtmlLinks()+"\n</nav>\n" +
        "<div id='conteudo'></div>\n" +
        "</body>\n</html>";
    codeHTML.value = ctxHTML;
}

function download(campo,arquivo) {
    if(arquivo.trim()==='')
        arquivo = document.getElementById("nomeHTML").value+".html";
    var text = document.getElementById(campo).value;
    var blob = new Blob([text], {type: "text/plain"});
    var a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = arquivo.trim();
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

function criarLinks() {
    pai = document.getElementById("areaLinks");
    link = document.createElement("input");
    link.setAttribute("type","text");
    link.setAttribute("name","links");
    link.setAttribute("id","links");
    link.setAttribute("placeholder","nome do link");
    href = document.createElement("input");
    href.setAttribute("type","file");
    href.setAttribute("name","href");
    href.setAttribute("id","file");
    bt = document.createElement("button");
    bt.setAttribute("onclick","criarLinks()");
    bt.innerText = "+";
    pai.appendChild(link);
    pai.appendChild(href);
    pai.appendChild(bt);
}
