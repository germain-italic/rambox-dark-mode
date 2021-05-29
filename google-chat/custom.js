(()=>{
    fetch('https://cdn.jsdelivr.net/npm/darkreader@4.9.32/darkreader.min.js')
    .then(res => res.text())
    .then(js => {
        var jsElement = document.createElement("script");
        jsElement.type = "application/javascript";
        jsElement.src = script;
        document.body.appendChild(js);

        DarkReader.auto({
            brightness: 100,
            contrast: 90,
            sepia: 10
        });
    });
})();