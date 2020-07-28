let counter: number = 0;
let ctrl=document.getElementById("inp");

const Increment = () =>{
    counter++;
    Display();
};

const Decrement = () => {
    counter--;
    Display();
}

const Display = (): void => {
    if (ctrl != null)
    ctrl.innerText=counter.toString();
}