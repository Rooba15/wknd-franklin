import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {
    console.log(block)
    let articleData = [];
    const ul = document.createElement('ul');

    [...block.children].forEach((row) => {
        const li = document.createElement('li');
        while (row.firstElementChild) li.append(row.firstElementChild);
        [...li.children].forEach((div) => {
            li.querySelector('.button-container a').classList.remove('button');
            if (div.children.length === 1 && div.querySelector('picture')) div.className = 'articles-card-image';
            else div.className = 'articles-card-body';
        })
        ul.append(li);
    })
    ul.querySelectorAll('img').forEach((img) => img.closest('picture').replaceWith(createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }])));
    block.textContent = '';
    block.append(ul);

    fetch('/magazine/articles.json')
    .then(response => response.json())
    .then(data => {
        articleData=[...data.data];
        //Build articles
        let articleElem = document.querySelector('.articles.block ul').firstElementChild;
        articleData.forEach((row) => {
            block.querySelector('ul').innerHTML += '';
            articleElem.querySelector('.articles-card-image picture').replaceWith(createOptimizedPicture(row.Image, row.title, false, [{ width: '750' }]));
            articleElem.querySelector('.articles-card-body p.button-container a').textContent = row.title;
            articleElem.querySelector('.articles-card-body p:not(.button-container)').textContent = row.description;
            block.querySelector('ul').appendChild(articleElem);
        });
        document.querySelector('.articles.block ul').firstElementChild.remove();
    });
 
}
