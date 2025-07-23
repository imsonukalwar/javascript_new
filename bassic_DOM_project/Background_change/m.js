

const buttons= document.querySelectorAll('.button');
const body=document.querySelector('body');
buttons.forEach(function (button) {
    console.log(button);
    button.addEventListener('click', function (e) {
    // console.log(e);
    // console.log(e.target);
    // if (e.target.id === 'grey') {
    //     body.style.backgroundColor = e.target.id;
    // }
    // if (e.target.id === 'white') {
    //     body.style.backgroundColor = 'grey';
    // }
    // if (e.target.id === 'blue') {
    //     body.style.backgroundColor = e.target.id;
    // }
    // if (e.target.id === 'yellow') {
    //     body.style.backgroundColor = e.target.id;
    // }
    const tap=e.target;
    if(tap.id==='grey'){
        body.style.backgroundColor="grey"
    }
       if(tap.id==='white'){
        body.style.backgroundColor="white"
    }
       if(tap.id==='blue'){
        body.style.backgroundColor="blue"
    }
       if(tap.id==='yello'){
        body.style.backgroundColor="yellow"
    }
    
    
    });
});
