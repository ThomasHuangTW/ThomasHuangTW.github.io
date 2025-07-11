const p = document.getElementById('markdown-content');
let xhr = new XMLHttpRequest();

xhr.onreadystatechange = () => {
    if(xhr.readyState == 4) {
        if(xhr.status == 200) {
            const markdownContent = xhr.responseText;
            const htmlContent = marked.parse(markdownContent);
            p.innerHTML = htmlContent;
        }
    }
}
xhr.open('get', 'README.md', true);
xhr.send(null);
