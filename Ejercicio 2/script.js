'use strict'

let div_usuarios = document.querySelector("#usuarios");
let usuarios = [];

fetch("https://reqres.in/api/users")
    .then(data => data.json())
    .then(users => {
        usuarios = users.data;
        console.log(usuarios);
        usuarios.map((user, i) => {
            let div = document.createElement('div');
            div.setAttribute('class', 'caja');
            let imagen = document.createElement('img');
            let nombre = document.createElement('h2');
            imagen.setAttribute('src', user.avatar);
            //let nombre = document.class
            nombre.innerHTML = user.first_name + " " + user.last_name;
            div.appendChild(imagen);
            div.appendChild(nombre);
            div_usuarios.appendChild(div);
        });
    });
let indexP = 0;

function button() {
    fetch("https://reqres.in/api/users?page=2")
        .then(data => data.json())
        .then(users => {
            usuarios = users.data;
            for (let index = 0; index < usuarios.length; index++) {
                if (indexP === index) {
                    let avatar = usuarios[index].avatar;
                    let name = usuarios[index].first_name + " " + usuarios[index].last_name;
                    let div = document.createElement('div');
                    let imagen = document.createElement('img');
                    let nombre = document.createElement('h2');
                    div.setAttribute('class', 'caja');
                    imagen.setAttribute('src', avatar);
                    nombre.innerHTML = name;
                    div.appendChild(imagen);
                    div.appendChild(nombre);
                    div_usuarios.appendChild(div);
                }
            }
            indexP++;
        });
}