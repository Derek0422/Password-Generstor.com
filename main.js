var passwordBox=document.querySelector("#password");
let length = 12;
var uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase="abcdefghijklmnopqrstuvwxyz";
var number="0123456789";
var symbol="()@~}+_:><?>.,./'#'';][]'=+``";
var allchairs=uppercase+lowercase+number+symbol;
function btn() {
let password="";
password += uppercase[Math.floor(Math.random()* uppercase.length)];
password += lowercase[Math.floor(Math.random()* lowercase.length)];
password += number[Math.floor(Math.random()* number.length)];
password += symbol[Math.floor(Math.random()* symbol.length)];
while ( length > password.length) {
password +=allchairs[Math.floor(Math.random() * allchairs.length)];
}
// console.log(passwordBox);
passwordBox.value = password;
}
function copybtn(){
    alert="copied";
    passwordBox.select();
    document.execCommand("copy");
}

var btncyp=document.querySelector(".btncyp");
jjj.addEventListener("click",function btncyp() {
    alert="copied";
})

alert="copied";