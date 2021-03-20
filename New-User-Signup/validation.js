const inputs = document.querySelectorAll('input');
const patterns ={
    telephone: /^\d{11}$/
}; 


//validateion function 
function validate(field, regex){
	console.log(regex.test(field.value));
}

inputs.forEach((input)=>{
    input.addEventListener('keyup', (e)=>{
         //console.log(e.target.attributes.name.value);
         validate(e.target, patterns['telephone'])
    })
})

