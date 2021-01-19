
console.log(this);
const check=function(a){
console.log(arguments);
    console.log('simple');
    console.log(this);
}

check(10,20)

const checkArrow=(a)=>{
    //console.log(arguments);
    console.log('arrow');
    console.log(this);
}



checkArrow(30)

function handleDetails(event){
 
    event.preventDefault();
    console.log("btn form ppppp");
    console.log(event.target);
    console.log(event.target.elements);
    console.log(event.target.elements.content.value);
    console.log(event.target.elements.detail.value);
    
   
}

