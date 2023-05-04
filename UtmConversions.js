(function(){
    var buttons = document.querySelectorAll('.cta-button');
    var link;

    buttons.forEach(button => button.addEventListener('click', ()=>{
        let track = button.getAttribute('data-track-utm');
        link = button.getAttribute('data-link')
        var urlSearchParams = window.location.search;
        var buttonUrl = button.getAttribute('href');

  		if(urlSearchParams != ""){
            if(buttonUrl.includes('?')){
                buttonUrl = link;
            }
            redirect(buttonUrl, urlSearchParams, button);
  		}
    }));

    function redirect(u, p, b){
        b.setAttribute('href', u + p);
    	console.log(u + p);
    }
})();
