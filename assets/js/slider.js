document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '#image-slider', {
        perPage    : 5,
        play: true,
        breakpoints: {
            640: {
                perPage: 1,
            },
        },
    } ).mount();
} );