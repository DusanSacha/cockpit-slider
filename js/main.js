(function(library) {

    library(window.jQuery, window, document);

}(function($, window, document) {

   $(function() {
    //DOM Ready
    
        //Repeat function every 6 second for refreshing the slider image
        setInterval(changeImageRepeat ,6000);

        //Change slider image on click
        $(".cdx-sliderdot-link").click(linkClickHandle);

   });

    //Set active link in slider footer
    function toggleActiveElement(el) {
        $(".cdx-sliderdot-link").removeClass("active");
        el.toggleClass("active");
    }

    function changeImage(el) {
        var sliderImage = $("#cdx-sliderimage");
        var newHref = el.attr("href");
        var newLink = el.data("link");
        sliderImage.fadeOut( 1000, function(){
            sliderImage.attr("src",newHref);
            $("#cdx-slider-link").attr("href", newLink);
            sliderImage.fadeIn( 1000 );
        });

        toggleActiveElement(el);
    }

    //Change image repetitive function
    function changeImageRepeat() {
        
        //Get next link element
        var nextEl = $("a.active").next();
        if (!nextEl.length) {
            nextEl = $(".cdx-sliderdot-link").first();
        }

        //Set main image from element information
        changeImage(nextEl);
    }

    //Change image on click
    function linkClickHandle(event){

        //Don't redirect to href from 'a' tag
        event.preventDefault();

        //Set main image from element information
        changeImage($(this));
    }


}));