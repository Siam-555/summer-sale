document.querySelector('.card').addEventListener('click', function(e) {
  console.log(document.querySelector('.card').classList);
  document.querySelector('.card').classList.add('hle');
  console.log(document.querySelector('.card').classList);
})