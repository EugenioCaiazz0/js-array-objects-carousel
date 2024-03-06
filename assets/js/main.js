const carousel = [
    {
        url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
        title: 'Svezia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Perù',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
        title: 'Chile',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Argentina',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
        title: 'Colombia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
];

const carouselImgs = document.getElementsByClassName(`my-carousel-images`);
let indexImg = 0;
activateCarousel();

function activateCarousel () {
    carouselImgs.innerHTML += 
    `<div class="my-carousel-item active">
        <img class="img-fluid" src="${carousel[indexImg].url}" alt="${carousel[indexImg].title} picture">
        <div class="item-description px-3">
            <h2>${carousel[indexImg].title}</h2>
            <p>${carousel[indexImg].description}</p>
        </div>
     </div>`
     console.log(`Slide attiva: ${carousel[indexImg].title}`);
     console.log(carousel[indexImg]);
}


const nxtBtn = document.getElementById(`nxtBtn`);
nxtBtn.addEventListener(`click`, function()
{
    indexImg ++;
    if (indexImg > carousel.length) 
        {
         indexImg = 0;
        }
    console.log(`Siamo a pagina ${indexImg}`);    
})

const prvsBtn = document.getElementById(`prvsBtn`);
prvsBtn.addEventListener(`click`, function()
{
    indexImg --;
    if (indexImg < 0) 
        {
         indexImg = carousel.length;
        }
    console.log(`Siamo a pagina ${indexImg}`);  
})