import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {
    console.log(block);
    [...block.children].forEach((div,i) => {
        if (div.children.length === 1 && div.querySelector('picture')) div.className = 'featured-image';
        else div.className = 'featured-body';
    })
    
  }