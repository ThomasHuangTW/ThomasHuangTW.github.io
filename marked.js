const div = document.getElementById('markdown-content');
let xhr2 = new XMLHttpRequest();

xhr2.onreadystatechange = () => {
    if(xhr2.readyState == 4) {
        if(xhr2.status == 200) {
            console.log(xhr2.responseText);
            const markdownContent = xhr2.responseText;
            console.log(markdownContent );
            const htmlContent = marked.parse(markdownContent);
            console.log(htmlContent );
            div.innerHTML = htmlContent;
        }
    }
}
xhr2.open('get', 'README.md', true);
xhr2.send(null);
