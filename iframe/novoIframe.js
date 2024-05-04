function novoIframe(url) {
    //container eh a div que possui os iframes
    var container = document.querySelector(".iframes");
    //define o iframe atual como o primeiro iframe dentro da div
    var iframeAtual = container.querySelector('iframe');

    //remove o iframe atual caso ele exista
    if (iframeAtual) {
        container.removeChild(iframeAtual);
    }

    //cria um novo iframe
    var iframe = document.createElement('iframe');

    //define o src do iframe como a url passada como parametro
    iframe.src = url;
    iframe.style.width = "100%";
    iframe.style.height = "90vh";

    //adiciona o iframe a div
    container.appendChild(iframe);
}