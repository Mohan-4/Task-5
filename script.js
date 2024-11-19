1.

let myresume={
    "basicdetail":
    {
        "name":"Mohan raj s",
        "age":21,
        "qualification":"Bsc cs",
        "phone number":8825790406,
        "emailid":"mohanraj11707@gmail.com",
        "address":[
            {
                "city":"karur",
                "state":"tamilnadu",
                "country":"india",
                "pincode":639002
    }],
"education":
{
    "UG degree":"B.E-COMPUTERSCIENCE",
    "college":"Nehru arts and science college",
    "percentage":70
},
    "skills":"java,js",
    "language known":"tamil,enlish"

    }
        
    
}
console.log(myresume);

2.
//--------------------------------------------------------------------------
 //JSON ITERATION PROCESS (FOR ,FOREACH,)
 //for
let json=[{"name":"mohan","age":21,"qualification":"Bsc cs"},{"name":"ram","age":22}]
console.log(json.length)
 for(var i=0;i<json.length;i++)
 {
   var obj=json[i];
   console.log(obj.name)
   console.log(obj.age)
 }
 //----------------------------------------------------------------------
 //for each
 json.forEach(element1 => {
    console.log(element1)
 });
 //-----------------------------------------------------------------------
 //for in
 for (const key in json) {
    if (Object.hasOwnProperty.call(json, key)) {
        const element = json[key];
        console.log(element)
    }
 }   
 //----------------------------------------------------------------------
  //for of
  for (const element2 of json) {
    console.log(element2)
  }

  