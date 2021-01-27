const dObj = document.getElementById("object"); 

//1 
myElements = dObj.querySelectorAll('h1, h2'); 

console.log(myElements);

//2 
let myObj = {
    nom: "Dawid",
    age: 23
}
let tab = []; 


console.log(tab);

// 3 
for(key in myObj){
    tab.push(key); 
    console.log(`${key} => ${myObj[key]}`);
}


// 4 
console.clear();

let count=0; 

for(key in myObj){
    console.log(myElements[count]);
    myElements[count].innerHTML=myObj[key];
    count++;
}

