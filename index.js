const p = document.querySelector('p');
let xhr = new XMLHttpRequest();
xhr.onreadystatechange = () => {
    if(xhr.readyState == 4) {
        if(xhr.status == 200) {
            p.innerHTML = xhr.responseText;
        }
    }
}
xhr.open('get', 'index.css', true);
xhr.send(null);