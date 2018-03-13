let hotels = [];

function updateHotels() {
  return $.get('../../data/london.json')
    .then(getHotels => getHotels);
}
updateHotels().then((updatedHotels) => {
  updatedHotels.forEach((hotel) => {
    hotel['Hotel Name Url'].text = hotel['Hotel Name Url'].text.substring(0, hotel['Hotel Name Url'].text.indexOf('Se abre en una ventana nueva') - 1).substring(0, 39);
  });
  hotels = updatedHotels;
  showHotels();
});
