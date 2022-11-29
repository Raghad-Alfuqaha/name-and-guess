export {getFlag,getFullName,getGender,getNational,getAge};
async function getFlag(element){
    let url=`https://restcountries.com/v3.1/alpha?codes=${element}`;
    try{
        let response = await fetch(url);
        let json = await response.json()
        return json[0].flags.png;

    }
    catch(error){
        console.log(error);
    }
}
async function getFullName(element){
    let url=`https://restcountries.com/v3.1/alpha?codes=${element}`;
    try{
        let response = await fetch(url);
        let json = await response.json()
        return json[0].name.official;
    }
    catch(error){
        console.log(error);
    }
}
async function getGender(username){
    let url=`https://api.genderize.io?name=${username}`;
    try{
        let response = await fetch(url);
        let json = await response.json();
        return json.gender;
        
    }
    catch(error){
        console.log(error);
    }
}
async function getNational(username){
    let url=`https://api.nationalize.io?name=${username}`;
    try{
        let response = await fetch(url);
        let a= await response.json();
        let b=a.country;
        let nat=[];
        b.forEach((element,index) => {
            nat.push(element.country_id);
        });
        return nat;
    }
    catch(error){
        console.log(error);
    }
}
async function getAge(username){
    let url=`https://api.agify.io?name=${username}`;
    try{
        let response = await fetch(url);
        let json= await response.json();
        return json.age;
    }
    catch(error){
        console.log(error);
    }
}