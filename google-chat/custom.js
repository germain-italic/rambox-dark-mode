(()=>{
    const newScript = document.createElement('script');
    newScript.src = "https://cdn.jsdelivr.net/npm/darkreader@4.9.32/darkreader.min.js";
    document.body.appendChild(newScript);
    DarkReader.setFetchMethod(window.fetch)
    DarkReader.enable();
})();