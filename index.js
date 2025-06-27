const p = document.querySelector('p');
let xhr = new XMLHttpRequest();
//xhr.withCredentials = true;
//xhr.addEventListener("readystatechange", () => {
//if(this.readyState == 4) {
//    console.log(this.responseText);
//}

//xhr.setRequesrtHeader("contex-type", "application/x-www-form-urlencoded");
//xhr.setRequesrtHeader("cache-control", "n0-cache");
//xhr.setRequesrtHeader("postman-token", "");

xhr.onreadystatechange = () => {
    if(xhr.readyState == 4) {
        if(xhr.status == 200) {
            p.innerHTML = xhr.responseText;
        }
    }
}
xhr.open('get', 'index.css', true);
xhr.send(null);
