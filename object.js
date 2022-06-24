// for in loop is useful to travers whole loop

// OBJECT -> group of key : value pair
let temp = {
    firstname:"DRUMIL",
    lastName: "Akhenia",
    address:{
        landMark : "gandhivadi",
        city : "Dhoraji",
        state : "New York"
    },
    age : 19,
    hobbies : ["chess","coding","teaching"],
    sayHi: function(){
        console.log("hi from drumil");
    }
}

// temp.sayHi();
// console.log(temp.age);
// temp.age = 18;
// console.log(temp.age);
// temp.thirdName = "DilipBhai";
// console.log(temp);
// delete temp.address
// console.log(temp)

// for(let key in temp){
//     console.log( key + ":" + temp[key] )
// }

// // see the diffrence between this two representations
// console.log(temp.age);//this representation will find the word as key(in object) which we write after the dot(.)
// t = "age";
// console.log(temp[t]);//this representation first put value of variable which we put inside the square([]) bracktes then find that value as key in the object
// console.log(temp["age"])//here we provide value inside the square bracktes so it will find this value as key in the object


/////////////////////////////////////////////////////////////
// console.log(temp.xyz);
// console.log(temp);
// let xyz = "xyz";
// console.log(temp[xyz]);
// console.log(temp);
// console.log(temp["xyz"]);
// console.log(temp)
// learning from this if key is not present in the object then all three representations will give undefined and not add this key inside the object
