var hotels = [];

function updateHotels() {
    return $.get('../../data/london.json')
        .then(getHotels => {
            return getHotels;
        })
}
updateHotels().then(updatedHotels => {
    hotels = updatedHotels;
    showHotels();
});