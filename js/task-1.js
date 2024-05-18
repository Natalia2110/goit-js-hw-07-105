
const ulEl = document.getElementById('categories');
console.log(ulEl);
const ulChildrenEl = ulEl.children;
console.log(ulChildrenEl);
console.log(`Number of categories: ${ulChildrenEl.length}`);

for (const elem of ulChildrenEl) {
    const listEl = elem.querySelector('ul');
    console.log(`Category: ${elem.firstElementChild.textContent}`);
    console.log(`Elements: ${listEl.children.length}`);
    // elem.classList.add('my-style');
}



// const firstLiElem = ulElem.firstElementChild;


// console.log(`Category: ${}`);
// console.log(`Elements: ${}`);



// ulChildrenEl.forEach(element => {

//     console.log(element.firstElementChild);
    
// });

// function findForEachEl(array) {
//     // const titleEl = "";
//     array.forEach(element => {
//         const titleEl = element.firstElementChild.textContent;
//         const listEl = element.querySelector('ul');
//         console.log(`Category: ${titleEl}`);
//         console.log(`Elements: ${listEl.children.length}`);
        
        
//     });
// }

// findForEachEl(ulChildrenEl);