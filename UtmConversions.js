(function(){
    var buttons = document.querySelectorAll('.cta-button');

    buttons.forEach(button => button.addEventListener('click', ()=>{
        let track = button.getAttribute('data-track-utm');
        var url = window.location.href;

        // check if url has ? and if track is true
  		if(url.includes("?") && track == "true"){
            // get url from button
            var buttonUrl = button.getAttribute('href');
            // pass window url, button url, and button clicked to get and set the parameters
            getSetParams(url, buttonUrl, button);
  		}
    }));

    function getSetParams(url, buttonUrl, button){
        // gets the parameters from url
        var params = url.slice(url.indexOf('?'));
        // checks if the button url already parameters
        if(buttonUrl.includes("?")){
            // replaces ? with &
            params = params.replace('?', '&');
        }
        // passes button url, updated paramater string, and button click value
        redirect(buttonUrl, params, button);
    }

    function redirect(u, p, b){
        // checks if url has parameters
        if(u.includes('?')){
            // removes parameters
            u = u.slice(0, u.indexOf('?') + 1);
        }
        // sets the href of the button to the url + parameters
        b.setAttribute('href', u + p);
    }
})();
