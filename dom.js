import { Fname,Lstorage } from "./localstorage.js"; 
import{ getFlag,getFullName,getGender,getNational,getAge } from "./Api.js";
const namediv = document.querySelector('#namediv');
const nameform = document.querySelector('#nameform');
const label = document.querySelector('#name');
const gender = document.querySelector('#gender');
const age = document.querySelector('#age');
const national = document.querySelector('#national');
const countries = document.querySelector('#countries');
nameform.addEventListener('submit',function(e){
    e.preventDefault();
    const firstname = document.querySelector('#firstname').value;
    
    const span = document.createElement('span');
    const spanContant = document.createTextNode(firstname);
    span.append(spanContant);
    const br = document.createElement('br');
    label.appendChild(span);
    namediv.appendChild(br);
    const inputFile = document.querySelector('#firstname');
    
    if (Fname.includes(firstname)){
        console.log('The Element Is Already In Local Storage.');
    }
    else{
    Fname.push(firstname);
    Lstorage(Fname);
    }
    inputFile.value = '';
    async function previewGender(){
        let genderVal= await getGender(firstname);
        const span2 = document.createElement('span')
        const spanContant2 = document.createTextNode(genderVal);
        span2.append(spanContant2);
        console.log(span2);
        gender.appendChild(span2);
        namediv.appendChild(br);
    }
    previewGender();
    async function previewAge(){
        let ageVal= await getAge(firstname);
        const span2 = document.createElement('span')
        const spanContant2 = document.createTextNode(ageVal);
        span2.append(spanContant2);
        console.log(span2);
        age.appendChild(span2);
        namediv.appendChild(br);
    }
    previewAge();
    async function previewNational(){
        let nationalVal=await getNational(firstname);
        nationalVal.forEach((element,index)=>{
           previewFlag(element);
        })
    }
    async function previewFlag(element){
        let flagVal = await getFlag(element);
        let fullNameVal= await getFullName(element);
        console.log(flagVal);
        const img = document.createElement('img')
        const h3=document.createElement('h3');
        const h3c=document.createTextNode(fullNameVal);
        h3.append(h3c);
        img.setAttribute('src',flagVal);
        console.log(img);
        countries.appendChild(img);
        countries.appendChild(h3);
        namediv.appendChild(br);
    }
    previewNational();
});






