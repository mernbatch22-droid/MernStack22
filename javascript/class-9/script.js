// console.log("Object and array")

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!Non Primitive data types!!!!!!!!!!!!!!!!!!!!!!!!!!!
/* ese data type jo user ke dwara banaye jate hai unhe NPDT kahte hai
1.inka use ek time me ek variable ke andar multiple value store karne ke leaye karte hai
2.Inko complex ya manual NPDT kha jata hai
example-> object, array and function

object->
1.its a NPDT, which is a collection of key value pairs. 
2.object ke andar key ka name hamesa unique hona chaheaye. 
3.mutltiple key kee same value ya duplicate value ho sakti hai. 
4.agar aap same key ka name dena chahte hai to us case me same name vali key alag alag level me
ya alag block me honi chaheaye means nested object me hona chaheaye.

ex-> below is the example of an object
*/
// let info =
// {
//     name1: "Jagmohan1",
//     age: 24,
//     city: "Jabalpur"
// };
// let info1 =
// {
//     "name1": "Jagmohan2",
//     "age": 24,
//     "city": "Jabalpur"
// };

/*way of access the value from the object
1. dot notation->
jab kisi key ke name ke beech me space ya hyphen(-) ya use, key ka name nummeric nhi hai to 
us case me object se value nikalne ke leaye dot notation ka use karte hai

console.log(info.name)
console.log(info1.name)



2.Square braces notation-> 
jab kisi key ke name ke beech me space ya hyphen(-) ya use, key ka name nummeric hota hai to 
us case me object se value nikalne ke leaye Square braces notation ka use karte hai
*/


// simple case via dot notation
// let info =
// {
//     name1: "Jagmohan1",
//     age: 24,
//     city: "Jabalpur",
//     simple1: function () {
//         console.log("Normal Case Variable")
//         return "Tamater vale"
//     }
// };

// console.log("simple way",info.name1)
// console.log("simple way",info.age)
// console.log("simple way",info.city)
// console.log("simple way",info.simple1())

// // spacial case by case via  Square braces notation
// let info1 =
// {
//     101: "Jagmohan",
//     "firstName LastName": "Complete Name",
//     "UAN-NO": 2434534585,
//     102: function () {
//         console.log("Normal Case Variable")
//     }
// };



// console.log("Complex tricy questions",info["name1"])
// console.log("Complex tricy questions",info["age"])
// console.log("Complex tricy questions",info["city"])
// console.log("Complex tricy questions",info["simple1"]())




/*How to check key in object
mujhe batao koi key object me hai ya nhi
ans-> in and hasOwnProperty() se pta lga sakta hu koi key object me hai ya nhi hai

in
hasOwnProperty()

*/

// const data = {
//     fName: "JK",
//     id: "c2115",
//     company: "DRF"
// }
// console.log("company" in data)
// console.log(data.hasOwnProperty("compny"))

// const nestedObject = {
//   name: "Root",
//   details: {
//     age: 25,
//     address: {
//       city: "Mumbai",
//       area: {
//         street: "MG Road",
//         house: {
//           number: 101,
//           101: {
//             firstName: "Rahul",
//             lastName: "Sharma",
//             "pin-code": 45201878,
//             101: function () {
//               return "doob maro"
//             }
//           },
//           city: "Katni",
//           "pin-code": 452011,
//           firstName: "Rahul",
//           lastName: "Sharma"


//         }
//       }
//     }
//   }
// };

// console.log(nestedObject.details.address.area.house[101][101]())


