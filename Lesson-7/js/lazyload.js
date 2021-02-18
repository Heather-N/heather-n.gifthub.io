//using code from Brother Blazzard's week 7 virtual lab to help with understanding

const imagesToLoad = document.querySelectorAll('img[data-src]');
//list of items (images with a data-source attribute)

const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {
        image.removeAttribute('data-src');
    };
};

const imgOptions = {
    threshold:0,
    rootMargin: '0px 0px 50px 0px'
};

if ('IntersectionObserver' in window) {
    //if it's supported
    const imgObserver = new IntersectionObserver((items) => {
        items.forEach((item) => {
            if (item.isIntersecting) {
                loadImages(item.target);
                imgObserver.unobserve(item.target);
            }
        });
    }, imgOptions);

    //load image if necessary
    imagesToLoad.forEach((img) => {
        imgObserver.observe(img);
    });
}
else { //load all images if not supported
    imagesToLoad.forEach((img) => {
        loadImages(img);
    });
}