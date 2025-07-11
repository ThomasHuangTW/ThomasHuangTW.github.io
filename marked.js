const div = document.getElementById('markdown-content');
let xhr = new XMLHttpRequest();

xhr.onreadystatechange = () => {
    if(xhr.readyState == 4) {
        if(xhr.status == 200) {
            console.log(xhr.responseText);
            const markdownContent = xhr.responseText;
            console.log(markdownContent );
            const htmlContent = marked.parse(markdownContent);
            console.log(htmlContent );
            div.innerHTML = htmlContent;
        }
    }
}
xhr.open('get', 'README.md', true);
xhr.send(null);
