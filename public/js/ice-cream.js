alert("Hello, ice cream");
document.getElementById("ice-cream-form").onsubmit = (event) => {
    event.preventDefault();
    clearErrors();

    let isValid = true;

    let name = document.getElementById("name").value.trim();
    if (!name) {
        document.getElementById("err-name").style.display = "block";
        isValid = false;
    }


    let email = document.getElementById("email").value.trim();
    if (!email || !email.includes("@")) {
        document.getElementById("err-email").style.display = "block";
        isValid = false;
    }

    let flavor = document.getElementById("flavor").value;
    if (flavor === "none") {
        document.getElementById("err-flavor").style.display = "block";
        isValid = false;
    }


    let coneChecked = document.querySelector('input[name="cone"]:checked');
    if (!coneChecked) {
        document.getElementById("err-cone").style.display = "block";
        isValid = false;
    }



    return isValid;
}
function clearErrors() {
    let errors = document.getElementsByClassName("err");
    for (let i = 0; i < errors.length; i++) {
        errors[i].style.display = "none";
    }
}
