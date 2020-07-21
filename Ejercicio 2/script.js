'use strict'

// $(document).ready(function() {
//     $.ajax({
//         type: "GET",
//         url: "https://reqres.in/api/users",
//         dataType: "json",
//         data: "data",
//         success: function(data) {
//             $.each(data, function(i, item) {
//                 var div = "<div>" + '<img class="image" src="' +
//                     i.avatar + '"></div>';
//                 $("#container").append(div);
//             })
//         }
//     });
// });

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