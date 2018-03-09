var users = [];

// Functions
function addUser() {
    var newUser = {
        name: "",
        email: "",
        age: 0,
    }
    newUser.name = $(`#defaultInput input[name="name"]`).val().toLowerCase();
    newUser.email = $(`#defaultInput input[name="email"]`).val().toLowerCase();
    newUser.age = validateNumbers(parseInt($(`#defaultInput input[name="age"]`).val()));
    console.log(newUser.name);
    console.log(newUser.email);
    console.log(newUser.age);
    users.push(newUser);
    addHTML(newUser);
    // [CODE]
    $(`.deleteBtn`).click(deleteUser);
}


function deleteUser(){
    // como coger el data-idUser 
    console.log(this);
    // la pista es que el this hay algo 
}

function validateNumbers(number) {
    if (number == null || isNaN(number) == true || number.length < 0) {
        return 0;
    } else {
        return number;
    }
}

function addHTML(newUser) {
    console.log(users);
    $('#newUsers').append(`
    <div class="card" style="width: 18rem;" id="user${users.length-1}">
    <div class="card-header">
    Persona
</div>
<ul class="list-group list-group-flush">
    <li class="list-group-item">
        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">Nombre</span>
            </div>
            <input type="text" class="form-control" name="name" placeholder="Nombre" value="${newUser.name}">
        </div>
    </li>
    <li class="list-group-item">
        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">Correo</span>
            </div>
            <input type="text" class="form-control" name="email" placeholder="Correo" value="${newUser.email}">
        </div>
    </li>
    <li class="list-group-item">
        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">Edad</span>
            </div>
            <input type="text" class="form-control" name="age" placeholder="Edad" value="${newUser.age}">
        </div>
    </li>
    <li class="list-group-item">
        <button data-idUser="user${users.length-1}" type="button" class="btn btn-secondary mb-2 deleteBtn">Borrar</button>
    </li>
</ul> 
</div>
    `);
}

// [CODE]
$(`#defaultInput #send`).click(addUser);