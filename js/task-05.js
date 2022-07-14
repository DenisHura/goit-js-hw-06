const refs = {
    input: document.querySelector("#name-input"),
  nameLabel: document.querySelector("#name-output")
}

refs.input.addEventListener("input", onInputChange);

function onInputChange(event) {
   
    refs.nameLabel.textContent = event.currentTarget.value;
   
     if (refs.input.value.trim() === "") {
         refs.nameLabel.textContent = 'Anonymous';
    }
}



// console.log(refs.input.textContent);