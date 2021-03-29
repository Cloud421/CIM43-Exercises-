(function () {




let newLink = document.createElement('a');
// make our link have usefull stuff inside. settAtribute works for any attribute
newLink.setAttribute('href', '#');

// we can style an element by doing element.style and then a css property.

//newLink.style.display = 'inline-block';
//newLink.style.color = 'red';
//newLink.style.fontSize = '20px';


// much easier to style things by adding and removing classes
newLink.setAttribute('class', 'readMore');

// innerHTML is for the text people see.
newLink.innerHTML = 'Read More';
console.log(newLink);

// allParagraphs is a list of every p tag on the page
let allParagraphs = document.getElementsByTagName('p');

// firstParagraph gets that first item. in JS the first-item is positioned at 0
const firstParagraph = allParagraphs[0];
// console.log(allParagraphs);

// we made the link. It has all the good info. Now we need to attach it to the first paragraph. Appending it as a good for this.
firstParagraph.appendChild(newLink);



// 4. hide all but first paragraph
for (let i = 1; i < allParagraphs.length; i++) {
    allParagraphs[1].style.display = 'none';
}


newLink.addEventListener( type, 'click' , listener, toggleCopy);

function toggleCopy(e) {

    let allParagraphs = document.getElementsByTagName( qualifiedName, 'p');

    for (let i = 1; i < allParagraphs.length; i++) {
        allParagraphs[1].style.display =  'block';
    }

    this.remove();

    e.preventDefault();
}
})