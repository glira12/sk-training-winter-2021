let i = 0;
let j = 1;
i= j;
j = 2;
// console.log(i);
// console.log(j);

let person = {
name: "Ira", 
age:27,
getFullInfo: function(){
alert(this.name + " " + this.age);
}
}

function Student(name, age){
    this.name = name;
    this.age = age;
}

let stud1 = new Student("Alex", 17);
let stud2 = new Student("Alex", 18);
console.log(stud1.age + "_ "+ stud2.age);

person.getFullInfo();




// delete obj1.name;
// if("name" in obj1){
// console.log(true);
// }else{
//     console.log(false);  
// }

// let obj2 = {};

// for (let key in obj1 ){
//    obj2[key] = obj1[key]
// };


// for (let key in obj2 ){
//     console.log(obj2[key])
// };

// let obj3 = Object.assign({},obj2);

// for (let key in obj3 ){
//     console.log(obj3[key])
// };

// let obj4 = JSON.stringify(obj3);
// console.log (obj4);
// obj4 = JSON.parse(obj4);

// for (let key in obj4 ){
//     console.log(obj4[key])
// };


// let arr = [
// {" First name":"Sasha", age: 30, tittle: "f-1"},
// {" First name":"Masha", age: 20, tittle: "f-1"}
// {" First name":"Vika", age: 25, tittle: "f-2"}
// {" First name":"Nik", age: 28, tittle: "f-1"}
// ];

// for(let item of arr){
// if(item.title=="f-1"){
//     console.log(item)}
// }else{
//     console.log(item)
// }


//     for (let key in item){
//         if(key =="title"){
            
//  if (item[key]=="f-1"){           
//             console.log(item[key])}
        
//     }

// }

// console.log(obj1);
// console.log(obj2);


// let arr = [{"First name":"Ivan", age: 30, title: "Junior Dev"},
// {"First name":"Alex", age: 30, title: "Middle Dev"},
// {"First name":"Ann", age: 30, title: "Senior Dev"}];
// console.log(arr[0]["First name"]+arr[1] title + arr[2].age);

// let obj = {"First name":"Ivan", age: 30, title: "Junior Dev"};

// arr: Push(obj);
// console.log(arr[3]);

// console.log(obj.age);
// let age = "age";
// arg = "First name";
// console.log(obj [arg]);