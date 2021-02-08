const $ = (prop) => document.querySelector(prop);
const $$ = (prop) => document.querySelectorAll(prop);
const $st = (prop) => $(prop).style;
function animateElement(element, animation){
  $(element).style.animation = animation;
  $(element).style.animationFillMode = "forwards";
}
function cssVar(Var, Val){
  $(":root").style.setProperty(Var, Val);
}
function setStats(){
  cssVar("--full-height",window.innerHeight+"px");
  cssVar("--full-width",window.innerWidth+"px");
}
window.onload = function(){
  setStats();
  $st("#loader").display = "none";
};
window.onresize = setStats;
function closeNav(){
  $st("#nav").transition = "0.5s";
  $st("#nav").left = "-202px";
}
function openNav(){
  $st("#nav").transition = "0.5s";
  $st("#nav").left = "0px";
}
