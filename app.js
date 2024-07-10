const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const eye = document.getElementById("eye");



// Show input error message
function showError(input,message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

// show Success outline
function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}

// Check input length
function checkLength(input, min , max){
    if(input.value.length < min){
        showError(input , `${getFiledName(input)} must be at lest ${min} characters`);
    } else if(input.value.length > max){
        showError(input , `${getFiledName(input)} must be less than ${max} characters`);
    } else{
        showSuccess(input);
    }
}

// check Email
function checkEmail(input){
    const re = /^(([^<>\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value.trim())){
        showSuccess(input);
    } else {
        showError(input, "Email is not valid");
    }
}

// Check Required inputes
function checkRequired(inputArr){
    inputArr.forEach(input => {
        if(input.value.trim() === ''){
            showError(input , `${getFiledName(input)} is Required`);
        } else {
            showSuccess(input);
        }
    });
}


// Check password
function checkPasswordMatch(input1,input2){
    if(input1.value !== input2.value){
        showError(input2,"Passwords do not match");
    }
}


// Get FieldName
function getFiledName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
} 

// Event listeners
form.addEventListener('submit', e =>{
    
    checkRequired([username,email,password,password2]);
    checkLength(username , 3,15);
    checkLength(password, 6, 25);
    checkEmail(email);
    checkPasswordMatch(password, password2);
    e.preventDefault();
});


let isEye = false;
eye.addEventListener('click' , e =>{
    if(e.target.className = "fa-solid" && isEye === false){
        e.target.className = "fa-solid fa-eye-slash";
        e.target.style.color = "#e74c3c";
        password.type = "text";
        password2.type = "text";
        isEye = true;
    } else if(e.target.className = "fa-solid" && isEye === true){
         e.target.className = "fa-solid fa-eye";
        e.target.style.color = "#2ecc71";
        password.type = "password";
        password2.type = "password";
        isEye = false;
    }
})