(function(){
    let pinged = false;
    let nav = document.querySelector(".nav");
    let stickyScrollPoint = document.querySelector(".hero-img").clientHeight;

    function pingToTop(){
        if(pinged)return;

        nav.classList.add("pined");
        pinged=true;
    }
    function unPingFromTop(){
        if(!pinged)return;
        nav.classList.remove("pined");
        pinged=false;
    }

    window.addEventListener('scroll',function(ev){
        
    let coords = nav.getBoundingClientRect();
        
       if( window.scrollY < stickyScrollPoint) return unPingFromTop();
       if(coords.top <= 0.01)pingToTop();
    })

})();