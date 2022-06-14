function jsonP(url) {
    let script = document.createElement('script');
    script.src = url;
    script.type = 'text/script';
    document.body.appendChild(script);

}