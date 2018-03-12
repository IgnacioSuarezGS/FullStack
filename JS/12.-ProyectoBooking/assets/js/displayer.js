function showHotels() {
    for(var i = 0; i < 10; i++){
        $('#hotels').append(`
        <div class="col s12 m3">
            <div class="card">
                <div class="card-image">
                    <img src="http://res.cloudinary.com/faus6rguez/image/upload/v1518387511/b7478_takeoff_khe5lm.jpg">
                    <span class="card-title">Card Title</span>
                    <a class="btn-floating halfway-fab waves-effect waves-light red">
                        <i class="material-icons">+</i>
                    </a>
                </div>
                <div class="card-content">
                    <p>I am a very simple card. I am good at containing small bits of information. I am convenient
                        because I require little markup to use effectively.</p>
                </div>
            </div>
        </div>
        `)
    }
}