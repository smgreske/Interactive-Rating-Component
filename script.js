const ratings = document.querySelectorAll('.rating-btn');
const submit = document.querySelector('.btn-submit');
const mainContent = document.querySelector('.main-content');
const thankYou = document.querySelector('.thank-you');
const rating = document.querySelector('.rating');

console.log(ratings);

function findRatingSelected() {
  for (let i = 0; i < ratings.length; i++) {
    if (ratings[i].checked)
      return (ratings[i].id);
  }
  return false;
}

function submitForm() {
  let ratingSelected = findRatingSelected();
  if (ratingSelected) {
    mainContent.setAttribute('data-hidden', true);
    thankYou.setAttribute('data-hidden', false);
    rating.innerHTML= ratingSelected;
  }
}

submit.addEventListener('click', e => { 
  submitForm();
});