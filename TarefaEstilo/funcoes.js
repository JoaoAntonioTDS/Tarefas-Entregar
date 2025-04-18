var ctxCabecalho;
var ctxLinks;
var ctxConteudo;
var ctxRodape;

function configEstiloCabecalho(){
 bg=document.getElementById("corFundo").value;
 corFonte=document.getElementById("corFonte").value;
 tamFonte=document.getElementById("tamFonte").value;
 ctxCabecalho="#cabecalho{\n background-color:"+bg+";\n";
 ctxCabecalho+=" color:"+corFonte+";\n";
 ctxCabecalho+=" font-size:"+tamFonte+"pt;\n}\n";
 return ctxCabecalho;
 }
function configEstiloLinks(){
    corLink=document.getElementById("corLinks").value;
    estiloLinks=document.querySelector('input[name="estiloLinks"]:checked').value;
    ctxLinks="a{\n color:"+corLink+";\n";
    let aux=estiloLinks=="0"?"none":"underline";
    ctxLinks+=" text-decoration:"+aux+";\n}\n";
    return ctxLinks;
}

 function gerarCodigo(){
    //Cóigo para CSS
     let codeCSS=document.querySelector("#codeCSS");
     let css=configEstiloCabecalho();
     css+=configEstiloLinks();
     codeCSS.value=css;
    //Código para HTML
     let codeHTML=document.querySelector("#codeHTML");
     ctxHTML="<html>\n<head>\n" +
         "<link rel='stylesheet' href='estilo.css'>\n"+
         "<title>Miha página</title>\n"+
         "</head>\n<body>" +
         "<div id='cabecalho'>"+configHTMLCabecalho()+"</div>\n" +
         "<nav id='links'>\n"+configHtmlLinks()+"\n</nav>\n" +
         "<div id='conteudo'></div>\n" +
         "</body>\n</html>";
     codeHTML.value=ctxHTML;

 }
