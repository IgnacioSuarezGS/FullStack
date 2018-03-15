let hotels = [];
const arraysHotels = [];

function updateHotels() {
  return $.get('../../data/london.json')
    .then(getHotels => getHotels);
}
updateHotels().then((updatedHotels) => {
  updatedHotels.forEach((hotel) => {
    hotel['Hotel Name Url'].text = hotel['Hotel Name Url'].text.substring(0, hotel['Hotel Name Url'].text.indexOf('Se abre en una ventana nueva') - 1).substring(0, 39);
  });
  hotels = updatedHotels;

  const hotelsPerPage = 16;
  let i;
  let page;
  let escribirPaginas = `
  <ul class="pagination">
    <li class="disabled"><a href="#!"><i class="material-icons">chevron_left</i></a></li>
  `;
  for (i = 0, page = 0; i < hotels.length; i += hotelsPerPage, page++) {
    const pageHotel = {
      page: 0,
      array: [],
    };
    pageHotel.page = page + 1;
    pageHotel.array = hotels.slice(i, i + hotelsPerPage);
    arraysHotels.push(pageHotel);
    escribirPaginas += `
    <li id="page${pageHotel.page}" class="waves-effect" onclick="pageClicked(this)"><a>${pageHotel.page}</a></li>`;
  }
  escribirPaginas += `
    <li class="waves-effect"><a href="#!"><i class="material-icons">chevron_right</i></a></li>
  </ul>
  `;
  $('#pages').append(escribirPaginas);
  showHotels(1);
});
