function pageClicked(object) {
  $('.pagination li').removeClass('active');
  object.classList.toggle('active');
  showHotels(object.innerText);
}
