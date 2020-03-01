//left自适应高度
var left = document.getElementById("left");
left.style.height = window.innerHeight + "px";
//nav自适应高度
var nav = document.getElementById("nav");
nav.style.height = window.innerHeight + "px";
//固定浏览器下方固定位置
var area_2 = document.getElementById("area_2");
area_2.style.top = window.innerHeight - 30 +"px";
var progress = document.getElementById("progress");
progress.style.top = window.innerHeight -50 +"px";
//profile连着左侧导航栏
var profile = document.getElementById("profile");
profile.style.left = window.innerWidth - 350 + "px";
//人物头像在固定位
var user_info = document.getElementById("user_info");
user_info.style.left = window.innerWidth - 250 +"px";

var choose_chat = document.getElementById("choose_chat");
choose_chat.style.height = window.innerHeight + "px";

var toolbar = document.getElementById("toolbar");
toolbar.style.right = window.innerWidth - 750 + "px";
