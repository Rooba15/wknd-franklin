export default function decorate(block){
    block.parentElement.previousSibling.append(block);
    
    // if(block.querySelector('a').title=='Facebook'){
    //     block.querySelector('a').classList.add('facebook');
    // }else if(block.querySelector('a').title=='Instagram'){
    //     block.querySelector('a').classList.add('instagram');
    // }else{
    //     block.querySelector('a').classList.add('twitter');
    // }

     //block.querySelectorAll('a').textContent='';
}