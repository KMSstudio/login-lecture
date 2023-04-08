"use strict";

const id = document.querySelector("#id"),
name = document.querySelector("#name"),
pw = document.querySelector("#psword"),
confirmPw = document.querySelector("#confirm-psword"),
registerBtn = document.querySelector("#button");

registerBtn.addEventListener("click", register);

function register(){
    if(!id.value) { return alert("id not written"); }
    if(pw.value != confirmPw.value){ return alert("password not confirmed"); }
    const req = {
        id: id.value,
        name: name.value,
        psword: psword.value,
    };
    console.log(req);
    
    fetch("/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(req),
    })
        .then((res) => res.json())
        .then((res) => {
            if (res.success){
                location.href = "/login";
            } else{
                alert(res.msg);
            }
        })
        .catch((err) => {
            console.error(new Error("error in register process"));
        });
}