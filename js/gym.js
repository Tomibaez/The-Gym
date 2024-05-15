// document.addEventListener('DOMContentLoaded', function() {
//     const stars = document.querySelectorAll('.star');
//     const ratingText = document.querySelector('.current-rating');

//     stars.forEach((star, index) => {
//         star.addEventListener('click', function() {
//             const rating = index + 1;
//             ratingText.textContent = rating;
//             star.parentNode.setAttribute('data-rating', rating);
//         });

//         star.addEventListener('mouseover', function() {
//             highlightStars(index);
//         });

//         star.addEventListener('mouseout', function() {
//             const currentRating = parseInt(star.parentNode.getAttribute('data-rating'));
//             highlightStars(currentRating - 1);
//         });
//     });

//     function highlightStars(index) {
//         stars.forEach((star, i) => {
//             if (i <= index) {
//                 star.style.color = 'gold';
//             } else {
//                 star.style.color = 'black';
//             }
//         });
//     }
// });
