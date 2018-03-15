function showHotels() {
  for (let i = 0; i < 16; i++) {
    $('#hotels').append(`
    <div class="col s12 m3">
        <div class="card medium hoverable">
            <div class="card-image waves-effect waves-block waves-light">
                <img class="activator" src="${hotels[i]['Hotel Image'].src}" alt="${hotels[i]['Hotel Image'].alt}">
            </div>
            <div class="card-content">
                <span class="card-title activator grey-text text-darken-4">
                    <i class="material-icons right">more_vert</i>${hotels[i]['Hotel Name Url'].text}</span>
                <a href="${hotels[i]['Hotel Name Url'].href}" class="waves-effect waves-light btn">
                    <i class="material-icons left">euro_symbol</i>Reserva</a>
            </div>
            <div class="card-reveal">
                <span class="card-title grey-text text-darken-4">
                    <i class="material-icons right">close</i>${hotels[i]['Hotel Name Url'].text}</span>
                <p>${hotels[i]['Hotel Description'].text}</p>
                <a href="${hotels[i]['Hotel Name Url'].href}" class="waves-effect waves-light btn">
                    <i class="material-icons left">euro_symbol</i>Reserva</a>
            </div>
        </div>
    </div>`);
  }
}
