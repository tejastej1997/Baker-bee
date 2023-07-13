

let btn = document.getElementById('bar')
let items = document.querySelector('.navigation__items')
console.log(items);


btn.addEventListener('click', () => {
    btn.classList.toggle('fa-xmark')
    items.classList.toggle('show')
})




// $(document).ready(function(){
//     $('.carosel__content__img').slick({
//         slidesToShow: 4,
//         slidesToScroll: 1,
//         autoplay: false,
//         // autoplaySpeed: 2000,
//         nextArrow : $('.next'),
//         prevArrow : $('.prev'),
//         responsive: [
//             {
//               breakpoint: 1024,
//               settings: {
//                 slidesToShow: 3,
//                 slidesToScroll: 1,
//                 infinite: true,
//                 dots: true
//               }
//             },
//             {
//               breakpoint: 600,
//               settings: {
//                 slidesToShow: 2,
//                 slidesToScroll: 2
//               }
//             },
//             {
//               breakpoint: 480,
//               settings: {
//                 slidesToShow: 1,
//                 slidesToScroll: 1
//               }
//             }
//             // You can unslick at a given breakpoint now by adding:
//             // settings: "unslick"
//             // instead of a settings object
//           ]
//       });
//   });

$(document).ready(function () {
    $('.carosel__content__img').slick({
        // slidesToShow: 4,
        // slidesToScroll: 1,
        nextArrow: $('.after'),
        prevArrow: $('.before'),
        variableWidth: true,
    });

});

$(document).ready(function () {
    $('.review__carosel').slick({
        // slidesToShow: 4,
        // slidesToScroll: 1,
        nextArrow: $('.next'),
        prevArrow: $('.prev'),
        arrows: true
    });
});