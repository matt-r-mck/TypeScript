let hw: string = "Hello World";
let myName: string = "Matt";
const loaded = () =>{
    let msg = `${hw} ${myName}`;
    let ctrl = document.getElementById("myName");
    if (ctrl != null)
        ctrl.innerHTML = msg;
}