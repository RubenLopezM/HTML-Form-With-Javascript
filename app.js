const MYFORM = document.querySelector("#MYFORM");
const ALERT = document.querySelector("#alert");
const CARD = document.querySelector("#card");
const CVC = document.querySelector("#cvc");
const AMOUNT = document.querySelector("#amount");
const FIRSTNAME = document.querySelector("#FirstName");
const LASTNAME = document.querySelector("#lastName");
const CITY = document.querySelector("#city");
const STATE = document.querySelector("#state");
const POSTALCODE = document.querySelector("#postalCode");
const MESSAGE = document.querySelector("#message");
const RESET = document.querySelector("#reset");
const SUBMIT = document.querySelector("#submit");

const FAIL= document.querySelector("#warning");

window.onload = function() {};


//VALIDACIONES DE LOS INPUTS

const isValid = input => {
     input.classList.remove("is-invalid");
     input.classList.add("is-valid");
};

const isInvalid = input => {
    input.classList.remove("is-valid");
    input.classList.add("is-invalid");
};

const isText = text => {
    return /^[a-zA-Z]*$/.test(text);
};

const isNumber = number => {
    return number % 1 == 0 && number > 0;
};

//EVENTOS DE LOS INPUTS DEL FORMULARIO

CARD.addEventListener("focusout", () => {
  if (isNumber(CARD.value)){
          isValid(CARD)
  } else{
          isInvalid(CARD);
  } 
  if (CARD.value.length <= 19 && CARD.value.length >= 16) {
          isValid(CARD);
  } else {
          isInvalid(CARD);
  }
});


CVC.addEventListener("focusout", () => {
         CVC.value.length == 3 || CVC.value.length == 4 ? isValid(CVC) : isInvalid(CVC);  
         isNumber(CVC.value) ? isValid(CVC) : isInvalid(CVC);

});

AMOUNT.addEventListener("focusout", () => {
         isNumber(AMOUNT.value) ? isValid(AMOUNT) : isInvalid(AMOUNT);
         AMOUNT.value > 0 ? isValid(AMOUNT) : isInvalid(AMOUNT);
});

FIRSTNAME.addEventListener("focusout", () => {
        isText(FIRSTNAME.value) ? isValid(FIRSTNAME) : isInvalid(FIRSTNAME);
        !FIRSTNAME.value.length== 0? isValid(FIRSTNAME) : isInvalid(FIRSTNAME)
});

LASTNAME.addEventListener("focusout", () => {
       isText(LASTNAME.value) ? isValid(LASTNAME) : isInvalid(LASTNAME);
       !LASTNAME.value.length== 0? isValid(LASTNAME) : isInvalid(LASTNAME)
});

CITY.addEventListener("focusout", () => {
       isText(CITY.value) ? isValid(CITY) : isInvalid(CITY);
});

STATE.addEventListener("focusout", () => {
       isText(STATE.value) ? isValid(STATE) : isInvalid(STATE);
       STATEVALUES.some(ElementSelect => ElementSelect == STATE.value)
       ? isValid(STATE)
       : isInvalid(STATE);
});

let OPTION = document.querySelectorAll("option");


let STATEVALUES = [];
for (const index in OPTION) {
  STATEVALUES.push(OPTION[index].value);
}


POSTALCODE.addEventListener("focusout", () => {
       isNumber(POSTALCODE.value) ? isValid(POSTALCODE) : isInvalid(POSTALCODE);
       POSTALCODE.value.length == 5 ? isValid(POSTALCODE) : isInvalid(POSTALCODE);
});

MESSAGE.addEventListener("focusout", () => {
     isText(MESSAGE.value) ? isValid(MESSAGE) : isInvalid(MESSAGE);

});

MYFORM.addEventListener("submit", e => {
    if (!LASTNAME.classList.contains('is-valid') || !FIRSTNAME.classList.contains('is-valid')|| !CARD.classList.contains('is-valid') || !CVC.classList.contains('is-valid')|| !AMOUNT.classList.contains('is-valid')) {
              e.preventDefault();
              warning.classList.toggle('visually-hidden')
    } 
    else{
         if (!FAIL.classList.contains('visually-hidden')) {
              warning.classList.toggle('visually-hidden')
         }
              success.classList.toggle('visually-hidden')
    }
 });

 MYFORM.addEventListener("reset", e=> {
       if (!confirm("Desea Limpiar el Formulario?")){
              e.preventDefault();
       }
 })
