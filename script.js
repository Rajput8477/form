function Data(event){

    let a=document.getElementById('fullname').value;
    let b=document.getElementById('pno').value;
    let c=document.getElementById('email').value;
    let d=document.getElementById('pass').value;
    let e=document.getElementById('cpass').value;
    let f=document.getElementById('capt').value;
    let g=document.getElementById('input-box').value;

    //name validation
    if(a==""){
        alert("all fields are mandatory");
        return false;
    }else if(a.length<=5){
        alert("name is very sort");
        return false;

    }
     //phone number validation
     if (b == "") {
        alert("all fields are mandatory");
        return false;
    } else if (b.length < 10 || b.length > 10) {
        alert("Number should be of 10 digits");
        return false;
    } else if (b.charAt(0) != "9" && b.charAt(0) != "8" && b.charAt(0) != "7") {
        alert("Not a valid number");
        return false;
    }


    //email id validation
    if (c == "") {
        alert("all fields are mandatory");
        return false;
    }


    //passward validation
    if (d == "") {
        alert("all fields are mandatory");
        return false;
    } else if (d.length < 8) {
        alert("enter a strong passward");
        return false;
    } else if (d === a || d === "passward") {
        alert("passward can not contain as username,'passward'");
        return false;
    }

    //confirm passward validation
    if (e == "") {
        alert("all fields are mandatory");
        return false;
    } else if (e != d) {
        alert("pasward can't match ");
        return false;
    }


    //captcha validation
    if (g == "") {
        alert("enter a captcha");
        return false;
    } else if (g != f) {
        alert("enter a correct captcha");
        return false;
    }
}

//captcha show function
function captcha() {

    let a = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'q',
        'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '1', '2', '3', '4',
        '5', '6', '7', '8', '9', '0'];

    let cap = "";
    for (let i = 1; i <= 6; i++) {
        let r = Math.floor((Math.random() * 62));
        cap = cap + a[r];
    }
    document.getElementById('capt').value = cap;
}


//onchange event 
function demo1() {
    let a = document.getElementById('fullname');
    a.value = a.value.toUpperCase();
    a.style.color = 'green'
}
function demo2() {
    let b = document.getElementById('pno');
    b.style.color = 'green'
}
function demo3() {
    let c = document.getElementById('email');
    c.style.color = 'green'
} function demo4() {
    let d = document.getElementById('pass');
    d.style.color = 'green'
} function demo5() {
    let e = document.getElementById('cpass');
    e.style.color = 'green'
}


