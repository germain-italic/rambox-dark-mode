(()=>{
    fetch('https://raw.githubusercontent.com/Germain-Italic/rambox-dark-mode/main/google-chat/custom.css')
    .then(res => res.text())
    .then(css => {
        var tag = document.createElement("style");
        tag.type = "text/css";
        tag.innerHTML = css;
        document.getElementsByTagName("head")[0].appendChild(tag);
    });
})();