(function(){
    var buttons = document.querySelectorAll('.cta-button');

    buttons.forEach(button => button.addEventListener('click', ()=>{
        let track = button.getAttribute('data-track-utm');
        
        if(track == "true"){
            let baseUrl = window.location.toString();
            let btnUrl = button.getAttribute('href');
            const t = '?';
  
            let index = baseUrl.indexOf('?');
            let params = baseUrl.slice(index);
            button.getAttribute('href').replace(btnUrl, btnUrl.concat(params));
        }
  
    }));
})();
