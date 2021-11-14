// Variables
const images=document.querySelectorAll('.image-gallery .content img');
const imageViewer = document.getElementById('image-viewer');
const closeIcon = document.querySelector('.image-viewer .close-icon');
const rightArrowIcon = document.getElementById('arrow-icon-right');
const leftArrowIcon = document.getElementById('arrow-icon-left');
const imageSlider = document.querySelector('.image-slider-parent');
const imageSliderChilds = document.querySelectorAll('.image-slider-parent .image-slider-child-container');

// Home Screen Scroll Effect
window.addEventListener('scroll',()=>{ 
    var offset = window.pageYOffset;
    imageSliderChilds[0].childNodes[5].style.transform = 'translateX(-50%) translateY('+ 0.5 * offset+'px)';
});

// Image Viewer

images.forEach(image => {
    image.addEventListener('click',()=>{
        var imageURL = image.getAttribute('src');
        imageViewer.style.display = 'flex';
        var img = document.createElement('img');
        img.setAttribute('src',imageURL);
        if (img.width>img.height) {
            img.style.maxWidth='700px';
            img.style.width='80%';
            img.style.height='auto';
        }
        else{
            img.style.height = '80%';
            img.style.maxHeight = '700px';
            img.style.width='auto';
        }
        
        if (imageViewer.childNodes[imageViewer.childNodes.length-1].nodeType==3) {
            imageViewer.appendChild(img);
        }
        else{
            imageViewer.childNodes[imageViewer.childNodes.length-1].setAttribute('src',img.getAttribute('src'));
        }
    });
});

// Image Viewer Close Icon

closeIcon.addEventListener('click',()=>{
    imageViewer.style.display = 'none';
});

// Image Viewer Right Arrow Icon

rightArrowIcon.addEventListener('click',()=>{
    var image = imageViewer.childNodes[imageViewer.childNodes.length-1];
    for (let i = 0; i < images.length; i++) {
     if (image.getAttribute('src')===images[i].getAttribute('src')) {
        if(image.getAttribute('src')===images[images.length-1].getAttribute('src')){
            image.setAttribute('src',images[0].getAttribute('src'));
            break;
        }
        else{
            image.setAttribute('src',images[i+1].getAttribute('src'));
            break;
        }
     }   
    }
    if (image.width>image.height) {
        image.style.maxWidth='700px';
        image.style.width='80%';
        image.style.height = 'auto';
    }
    else{
        image.style.height = '80%';
        image.style.maxHeight = '700px';
        image.style.width = 'auto';
    }
});

// Image Viewer Left Arrow Icon

leftArrowIcon.addEventListener('click',()=>{
    var image = imageViewer.childNodes[imageViewer.childNodes.length-1];
    for (let i = 0; i < images.length; i++) {
     if (image.getAttribute('src')===images[i].getAttribute('src')) {
        if(image.getAttribute('src')===images[0].getAttribute('src')){
            image.setAttribute('src',images[images.length-1].getAttribute('src'));
            break;
        }
        else{
            image.setAttribute('src',images[i-1].getAttribute('src'));
            break;
        }
     }   
    }
    if (image.width>image.height) {
        image.style.maxWidth='700px';
        image.style.width='80%';
        image.style.height = 'auto';
    }
    else{
        image.style.height = '80%';
        image.style.maxHeight = '700px';
        image.style.width = 'auto';
    }
});
