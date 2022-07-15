
const form = document.querySelector(".login-form");


form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const formElements = event.currentTarget.elements;

    const email = formElements.email.value;
    const password = formElements.password.value;

    if (email.trim === "" || password.trim() === "") {
        alert("Необходимо заполнить все поля");
        return;
    }

    const formData = {
        email,
        password,
    }
    console.log(formData);
    
    // =========== или ===========
    // const formData = new FormData(event.currentTarget);
    // console.log(formData);
    // formData.forEach((value, key) => {
    //     console.log(`${key}: ${value}`);
    // })
    
    form.reset();
}