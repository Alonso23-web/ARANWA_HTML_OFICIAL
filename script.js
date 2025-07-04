const container = document.querySelector(".container");
const btnSignIn = document.getElementById("btn-sign-in");
const btnSignUp = document.getElementById("btn-sign-up");

btnSignIn.addEventListener("click",()=>{
    container.classList.remove("toggle");
});

btnSignUp.addEventListener("click",()=>{
    container.classList.add("toggle");
});

function redireccion(){
    location.href = "Login.html";
}

function redireccionAranwa(){
    location.href = "index.html";
}

function redireccionServiciosDetalles(){
    location.href = "ServiciosDetalles.html";
}

function redireccionReserva(){
    location.href = "inicioreserva.html";
}

function redireccionNosotros(){
    location.href = "Nosotros.html";
}

function redireccionEventos(){
    location.href = "Eventos.html";
}

function redireccionSpa(){
    location.href = "Spa.html";
}

function redireccionBodas(){
    location.href = "Bodas.html";
}

function redireccionHotelCusco(){
    location.href = "CUSCO.html";
}

function redireccionHotelValleSagrado(){
    location.href = "SACRED VALLEY.html";
}

function redireccionHotelColca(){
    location.href = "COLCA.html";
}

function redireccionHotelParacas(){
    location.href = "PARACAS.html";
}

function redireccionHotelVichayito(){
    location.href = "VICHAYITO.html";
}

function redireccionSesion(event){
    event.preventDefault(); 
    location.href = "InicioSesion.html";
}

function redimencionHotel(){
    location.href = "Hoteles.html";
}

function redimencionPagos(){
    location.href = "total.html";
}