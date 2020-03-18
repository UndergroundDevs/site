var bodyElemen = document.querySelector("#page-top");
var heElement = document.querySelector(".masthead");
var navElement = document.querySelector(".navbar");
var navSlogan = document.querySelector("#slogan");

function c2() {
    navElement.style.animation = "navbar-topo 2s forwards";
    navSlogan.style.animation = "imagem-maior 2s forwards";

}

function c() {
    navElement.style.animation = "navbar-abaixada 2s forwards";
    navSlogan.style.animation = "imagem-menor 2s forwards";
    console.log("Hello ");
}

function c3() {
    navElement.style.animation = "navbar-topo 2s forwards";
    navSlogan.style.animation = "imagem-maior 2s forwards";
}