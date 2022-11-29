export {Fname,Lstorage};

let Fname = []; 

getDataFromLocalStorage();
console.log(Fname);
const localS = document.querySelector('#localStorage');
Fname.forEach((element,index)=>{
    const span = document.createElement('span');
    const spanContant = document.createTextNode(element);
    span.append(spanContant);
    localS.appendChild(span);
    const br = document.createElement('br');
    localS.appendChild(br);
});

function getDataFromLocalStorage(){ 
    let visitors =localStorage.getItem('visetors');
    if(visitors!=null){ 
    Fname = [...JSON.parse(visitors)].map((element,index)=>{
        return element;
    });

}
}
function Lstorage(items){
    const string = JSON.stringify(items);
    localStorage.setItem('visetors',string);
}