(function(){
    var buttons = document.querySelectorAll('.cta-button');

    buttons.forEach(button => button.addEventListener('click', ()=>{
        let track = button.getAttribute('data-track-utm');
        
            let baseUrl = window.location.toString();
            const t = '?';
  
            let index = baseUrl.indexOf('?');
            let params = baseUrl.slice(index);

            button.getAttribute("href");
            button.setAttribute("href", btnUrl.concat(params));
  
    }));
})();
