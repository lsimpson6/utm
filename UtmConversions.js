(function(){
    var buttons = document.querySelectorAll('.cta-button');

    buttons.forEach(button => button.addEventListener('click', ()=>{
        let track = button.getAttribute('data-track-utm');
        var baseUrl = window.location.href;
        const t = '?';
        if(track == "true"){
            let params = baseUrl.slice(baseUrl.indexOf(t));
            let btnUrl = button.getAttribute("href");
            let newUrl = btnUrl + params;
  			window.location.href = newUrl;
        }
    }));
})();
