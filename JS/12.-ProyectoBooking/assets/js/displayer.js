function showHotels(page) {
  $('#hotels').empty();
  console.log(arraysHotels[page - 1]);
  for (let i = 0; i < arraysHotels[page - 1].array.length; i++) {
    //   }
    $('#hotels').append(`
      <div class="col s12 m3">
          <div class="card medium hoverable">
              <div class="card-image waves-effect waves-block waves-light">
                  <img class="activator" src="${arraysHotels[page - 1].array[i]['Hotel Image'].src}" alt="${arraysHotels[page - 1].array[i]['Hotel Image'].alt}">
              </div>
              <div class="card-content">
                  <span class="card-title activator grey-text text-darken-4">
                      <i class="material-icons right">more_vert</i>${arraysHotels[page - 1].array[i]['Hotel Name Url'].text}</span>
                  <a href="${arraysHotels[page - 1].array[i]['Hotel Name Url'].href}" class="waves-effect waves-light btn">
                      <i class="material-icons left">euro_symbol</i>Reserva</a>
              </div>
              <div class="card-reveal">
                  <span class="card-title grey-text text-darken-4">
                      <i class="material-icons right">close</i>${arraysHotels[page - 1].array[i]['Hotel Name Url'].text}</span>
                  <p>${arraysHotels[page - 1].array[i]['Hotel Description'].text}</p>
                  <a href="${arraysHotels[page - 1].array[i]['Hotel Name Url'].href}" class="waves-effect waves-light btn">
                      <i class="material-icons left">euro_symbol</i>Reserva</a>
              </div>
          </div>
      </div>`);
  }
}
