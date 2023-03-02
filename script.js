const fname = document.getElementById("name");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");

const nameError = document.getElementById("nameError");
const unameError = document.getElementById("unameError");
const emailError = document.getElementById("emailError");



const valName = () => {
    if(fname.value == "") {
        nameError.classList.add("show");
        nameflag = false;
    }
    // alert("error hai laudde");
    else {
        nameError.classList.remove("show");
        nameflag = true;
    }
}

const valUname = () => {
    if(/^[a-z0-9]*$/.test(username.value) && username.value != "") {
        unameError.classList.remove("show");
        unameflag = true
    }
    else {
        unameError.classList.add("show");
        unameflag = false;
    }
}

const valEmail = () => {
    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
        emailError.classList.remove("show");
        emailflag = true
    }
    else {
        emailError.classList.add("show");
        emailflag = false
    }
}

const valPass = () => {
    if(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/.test(password.value)) {
        passError.classList.remove("show");
        passwordflag = true;
    }
    else {
        passError.classList.add("show")
        passwordflag = false
    }
}

const validate = () => {
    valName()
    valUname()
    valEmail()
    valPass()
    if(nameflag == true && unameflag == true && emailflag == true && passwordflag == true) {
        alert("Signup Successful");
    }
    else {
        alert("Please fill details properly!")
    }
}




const togglePassword = document.querySelector("#togglePassword");
        const pwd = document.querySelector("#password");

        togglePassword.addEventListener("click", function () {
            // toggle the type attribute
            const type = password.getAttribute("type") === "password" ? "text" : "password";
            pwd.setAttribute("type", type);
            
            // toggle the icon
            this.classList.toggle("bi-eye");
        });

        // prevent form submit
        const form = document.querySelector("form");
        form.addEventListener('submit', function (e) {
            e.preventDefault();
        });