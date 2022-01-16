let menu = document.querySelector('#menu-btn');
let header = document.querySelector('.header');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
    document.body.classList.toggle('active');
};

window.onscroll = () => {
    if(window.innerWidth < 1200){
        menu.classList.remove('fa-times');
        header.classList.remove('active'); 
    };
};

let productPreviewContainer = document.querySelector('.products-preview-container');
let productPreview = document.querySelectorAll('.products-preview-container .product-preview');


document.querySelectorAll('.products .slide .btn').forEach(detailBtn =>{
    detailBtn.onclick = () =>{
        productPreviewContainer.style.display = 'block';
        let name = detailBtn.getAttribute('data-product');
console.log(name);
        productPreview.forEach(preview => {
            let target = preview.getAttribute('data-target');
            if(name == target){
                preview.style.display = 'flex';
            };
        });
    };
});

let btnPreview = document.querySelectorAll('.btn-preview')
btnPreview.forEach(detailBtn =>{
    detailBtn.onclick = () =>{
        productPreviewContainer.style.display = 'block';
        let name = detailBtn.getAttribute('data-product');
console.log(name);
        productPreview.forEach(preview => {
            let target = preview.getAttribute('data-target');
            if(name == target){
                preview.style.display = 'flex';
            };
        });
    };
});

document.querySelectorAll('.products-preview-container .product-preview .fa-times').forEach(close => {
   close.onclick = () => {
    productPreviewContainer.style.display = 'none';
    productPreview.forEach(closePreview => {
        closePreview.style.display = 'none';
    });
   };
});

var swiper = new Swiper(".products-slider", {
    loop:true,
    spaceBetween: 20,
    grabCursor:true,
    centeredSlides: true,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
    },
  });

  (function() {
    "use strict";
  
    /**
     * Easy selector helper function
     */
    const select = (el, all = false) => {
      el = el.trim()
      if (all) {
        return [...document.querySelectorAll(el)]
      } else {
        return document.querySelector(el)
      }
    }
  
    /**
     * Easy event listener function
     */
    const on = (type, el, listener, all = false) => {
      let selectEl = select(el, all)
      if (selectEl) {
        if (all) {
          selectEl.forEach(e => e.addEventListener(type, listener))
        } else {
          selectEl.addEventListener(type, listener)
        }
      }
    }
  
    /**
     * Easy on scroll event listener 
     */
    const onscroll = (el, listener) => {
      el.addEventListener('scroll', listener)
    }
  
   
  
    /**
     * Back to top button
     */
    let backtotop = select('.back-to-top')
    if (backtotop) {
      const toggleBacktotop = () => {
        if (window.scrollY > 100) {
          backtotop.classList.add('active')
        } else {
          backtotop.classList.remove('active')
        }
      }
      window.addEventListener('load', toggleBacktotop)
      onscroll(document, toggleBacktotop)
    }
  
    
    /**
     * Preloader
     */
    let preloader = select('#preloader');
    if (preloader) {
      window.addEventListener('load', () => {
        preloader.remove()
      });
    }
  
   
  
  })()

  $(document).ready(function(){
      $('.grid').isotope({
          itemSelector:'.item',
      });
      $('.filter-button-group').on('click','li',function(){
          var filterValue = $(this).attr('data-filter');
          $('.grid').isotope({filter:filterValue});
          $('.filter-button-group li').removeClass('active');
          $(this).addClass('active');
      });
  })

//Location
let map = L.map('map').setView([22.176504818584448, -100.96826754418733],14)

//Agregar tilelAyer mapa base desde openstreetmap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

document.getElementById('select-location').addEventListener('change',function(e){
  let coords = e.target.value.split(",");
  console.log(coords);
  map.flyTo(coords,17);
})

const markerSorianaLaPaz = L.marker([22.166966726919902, -100.97661457839469]).addTo(map);

markerSorianaLaPaz.bindPopup("<b>Lugar de entrega</b><br>Lunes-Viernes<br>13:00 - 20:00 hrs.");

const markerBodegaAurrera = L.marker([22.169728865801346, -100.96214137882441]).addTo(map);

markerBodegaAurrera.bindPopup("<b>Lugar de entrega</b><br>Lunes-Viernes<br>13:00 - 20:00 hrs.");

const markerPlazaCarmen = L.marker([22.151254267991128, -100.97412302884516]).addTo(map);

markerPlazaCarmen.bindPopup("<b>Lugar de entrega</b><br>Lunes-Viernes<br>13:00 - 20:00 hrs.");

const marker = L.marker([22.141203938843823, -100.9121957441877]).addTo(map);

marker.bindPopup("<b>Lugar fisico</b><br>Sabado-Domingo<br>03:00 - 15:00 hrs.");



// const zone = L.circle([22.17636075844637, -100.97463510776417], {
//     color: '#12BF31',
//     fillColor: '#12BF31',
//     fillOpacity: 0.5,
//     radius: 1000
// }).addTo(map);
// zone.bindPopup("<b>Zona de entrega</b><br>Lunes-Viernes<br>13:00 - 20:00 hrs.");