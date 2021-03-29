let allDots = document.getElementsByClassName('dot');
console.log(allDots);

const dots = Array.from(allDots);


//for (let i = 0;  i < dots.length; i++){
  //  dots[i].addEventListener('click', makeActive);
//}
// allDots.addEventlistener('click', makeActive);

dots.forEach( dot =>{
    dot.addEventListener( 'click', makeActive)
});

function makeActive(){
    console.log( this.id );
    if (this.id= 'dot2'){

        const dot1 = document.getElementById('dot1');
        dot1.classList.remove('dot_active');

    } else {
        console.log("do nothing, this is active");
    }
}

function makeActive2() {
    const aClassList = Array.from(this.classList);
    console.log(aClassList.includes('dot_active'));

    fi (aClassList.includes('dot_active')) {

    } else {

        this.classList.add('dot_active');

    }
}