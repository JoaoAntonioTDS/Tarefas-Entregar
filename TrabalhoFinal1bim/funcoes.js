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
function configHTMLConteudo() {
    txtConteudo = "";
    txtConteudo = document.querySelector("#txtConteudo").value;
    return txtConteudo;
}

function configEstiloimg() {
    largura = document.getElementById("largura").value;
    altura = document.getElementById("altura").value;
    imgConteudo = "#imagem{\n width:" + largura + ";\n";
    imgConteudo += " height:" + altura + "pt;\n}\n";
    return imgConteudo;
}

function configHTMLimg() {
    let aux = document.getElementById("imagem").value.split("\\").pop();
    return '<img id="imagem" src="' + aux + '">';
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
        "<div id='conteudo'>" + configHTMLConteudo() + configHTMLimg() + "</div>\n" +
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
    const pai = document.getElementById("areaLinks");

    const link = document.createElement("input");
    link.setAttribute("type", "text");
    link.setAttribute("name", "links");
    link.setAttribute("placeholder", "nome do link");

    const href = document.createElement("input");
    href.setAttribute("type", "file");
    href.setAttribute("name", "href");

    const br = document.createElement("br");

    pai.appendChild(link);
    pai.appendChild(href);
    pai.appendChild(br);
}


function removeLinks(check) {
    if (check.checked) {
        txt = "hidden";
        ancora = false;
    }
    else {
        txt = "visible";
        ancora = true;
    }
    document.querySelector("#areaLinks").style.visibility = txt;

}

function renderIframe() {
    const iframe = document.getElementById('pagina');
    const htmlCode = document.getElementById('codeHTML').value;
    const cssCode = document.getElementById('codeCSS').value;

    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlCode, 'text/html');

    const style = document.createElement('style');
    style.textContent = cssCode;

    if (doc.head) {
        doc.head.appendChild(style);
    }
    const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
    iframeDoc.open();
    iframeDoc.write('<!DOCTYPE html>\n' + doc.documentElement.outerHTML);
    iframeDoc.close();

    document.getElementById("containerCod").classList.add("hidden");
}

function mostraOcultaDiv(id) {
    const divs = document.querySelectorAll('.content');
    divs.forEach(div => div.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

function aviso() {
    alert("Para que o link funcione o arquivo de destino deve estar no mesmo diretório do projeto.");
    return true;
}