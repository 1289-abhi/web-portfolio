const quotes = [{
    "quote":"Poetry is the best words in the best order.",
    "author":"Samuel Taylor Coleridge"
},
{
    "quote":"Poetry are the thoughts that breathe and the words that burn.",
    "author":"Thomas Gray"
},
{ 
    "quote":"Poetry is when emotion has found its thought and the thought has found words.",
    "author":"Robert Frost"
},
{
    "quote":"Poetry is the clear expression of mixed feelings.",
    "author":"W. H. Auden"
},
{
    "quote":"Poetry is what gets lost in translation.",
    "author":"Robert Frost"
}]

const quoteSlideshow = document.getElementById('quotes-slideshow');
const quote = document.querySelector('.quotes-slideshow .quote');
const author = document.querySelector('.quotes-slideshow .author');

quote.innerHTML=`${quotes[0].quote}`;
author.innerHTML = `- ${quotes[0].author}`;

var counter = 1;
setInterval(() => {
    if(counter<5){
        quote.innerHTML = `${quotes[counter].quote}`;
        author.innerHTML = `- ${quotes[counter].author}`;
        counter+=1;
    }
    else{
        counter=1;
        quote.innerHTML=`${quotes[0].quote}`;
        author.innerHTML = `- ${quotes[0].author}`;
    }
}, 5000);

const poetries = document.querySelectorAll('.poetries .poetry');
const poetryViewer = document.querySelector('.poetry-full');
const poetryViewerClose = document.querySelector('.poetry-full .close-icon');
const poetryFull = document.querySelector('.poetry-full .poetry-content');
const poetryTitle = document.querySelector('.poetry-full .poetry-title');

poetries.forEach(poetry => {
    var str = poetry.innerText;
    if (str.split(/\r\n|\r|\n/).length>10) {
        const readMore = document.createElement('div');
        readMore.classList.add('read-more');
        readMore.setAttribute('id','read-more');
        readMore.innerHTML = `<p>Read More...</p>`;
        poetry.appendChild(readMore);
        }
});

const readMoreIcons = document.querySelectorAll('#read-more');

readMoreIcons.forEach(icon => {
    icon.addEventListener('click',()=>{    
        poetryViewer.style.display = 'flex';
        const parent = icon.parentNode;
        const poemTitle = parent.childNodes[3].innerText;
        const content = parent.childNodes[1].innerText;
        poetryFull.innerText = content;
        poetryTitle.innerText = poemTitle;
    })
});

poetryViewerClose.addEventListener('click',()=>{
    poetryViewer.style.display = 'none';
})

 