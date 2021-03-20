const inputs = document.querySelectorAll('input');
const patterns ={
    username: /^.{5,12}$/,
    email: /^(\w|-|\.)+@(\w|-|)+\.([a-zA-Z]{2,5})(\.[a-zA-z]{2,5})?$/,
    password: /^(\w|-|@){8,20}$/,
    telephone: /^\d{11}$/, 
    slug: /^([a-z]|\d|-|_){8,20}$/
}; 


//validateion function 
function validate(field, regex){
	if(regex.test(field.value)){
        field.className = 'valid'
    }else{
        field.className = 'invalid'
    }
}

inputs.forEach((input)=>{
    input.addEventListener('keyup', (e)=>{
         //console.log(e.target.attributes.name.value);
         validate(e.target, patterns[e.target.attributes.name.value])
    })
})

