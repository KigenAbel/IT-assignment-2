alert("Welcome to GOT");
function buymerch() {
    alert("Merch added to cart");  
}
function register() {
alert("Registration successful");
}
function setCookie(){
    document.cookie = "got=visited";
}
function getCookie(){
return document.cookie;   
}
if(getCookie()===""){
    alert("GOT welcomes you");
    setCookie();
}else{
    alert("welcome back:" + getCookie());
}
function filterCars(){
    const model= document.getElementById("models").value.toLowerCase();
    const filtered=CaretPosition.filter (car=>{
        return (model===" \\ merch.model.tolowercase()=== model")
    });
    if (filtered.legth===0){
        list.innerHTML="No merch found";
    }
}