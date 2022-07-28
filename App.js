const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const Confirm_Password = document.getElementById('Confirm_Password');

//show Error
function showError(input, message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

// show success
function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control sucess';
}

function checkEmail(input){
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(re.test(input.value.trim())){
     showSuccess(input);
    }else{
        showError(input, 'Email is not valid');
    }
}
function checkRequired(inputArr){
    inputArr.forEach(function(input) {
       if(input.value.trim() === ''){
        showError(input , `${fieldName(input)} is Required`)
       }
       else{
        showSuccess(input);
       }
    });
}
//get field name
function fieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);  
}

//check input length
function checklength(input, min, max){
    if(input.value.length < min){
        showError(input, `${fieldName(input)} is must be atleast  ${min} character` )
    } else if(input.value.length>max){
        showError(input ,  `${fieldName(input)} is must be less than ${max} character` ) 
    }else{
        showSuccess(input);
    }
}

// check confirm password
function checkPasswordMatch(input1, input2){
    if(input1.value!== input2.value){
        showError(input2, 'Password is not match')
    }
}

// Event Listener
form.addEventListener('submit',function(e){
     e.preventDefault(); 
   checkRequired([username,email,password,Confirm_Password]);
   checklength(username, 3 , 15);
   checklength(password, 6, 25);
   checkEmail(email);
   checkPasswordMatch(password, Confirm_Password);
});
