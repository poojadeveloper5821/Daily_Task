import React from "react";

const data = [
  { name: "Ajay", Profession: "Manager" },
  { name: "Suraj", Profession: "Team Lead" },
  { name: "Vikas", Profession: "Analyst" },
];

const getData = () => {
  setTimeout(() => {
    let output = "";
    data.forEach((data, index) => {
      output += `${data.name}`;
    });
    console.log(output);
  }, 1000);
};

//Callcack function

// const createData=(newData,callback)=>{
//     setTimeout(()=>{
//         data.push(newData);
//         callback();
//     },2000);
// }

// createData({name:"Anuj" ,Profession:"Designer"}.getData)

// Promises function

const createData = (newData) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      data.push(newData);
      let error = false;
      //let error=true;
      if (!error) {
        resolve();
      } else {
        reject("Data not passed..");
      }
    }, 2000);
  });
};

// createData({ name: "Anuj", Profession: "Designer" })
//   .then(getData)
//   .catch((err) => console.log(err));



//async & Await

async function start(){
    await createData({name:"Anuj",Profession:"Designer"})
getData();
}
start();

function Promises() {
  return (
    <>
      {/* <li>{data.name}</li> */}
    </>
  );
}

export default Promises;
