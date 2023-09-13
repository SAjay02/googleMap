let map;
function initMap()
{
    const mylatlng={ lat: 10.877184, lng: 77.020565};
    map=new google.maps.Map(document.getElementById("map"),{
        center:mylatlng,
        zoom:18
    });
       new google.maps.Marker({
        position: mylatlng,
        map,
        title: "Capacity= 8",
      });
      /*const mapLocations = [
        ["Bondi Beach", 10.877184, 77.020565, 4],
        ["Coogee Beach", 10.8770563, 77.022876, 5],
      ];*/
      /*const mapLocations=[{position:new google.maps.Map(10.877184,77.020565)},{position:new google.maps.Map(10.8770563,77.022876)}];

        for (let i = 0; i < mapLocations.length; i++) {
          const beach=new google.maps.Marker({
            position: mapLocations[i].position,
            map:map,
          });*/
        }
window.initMap=initMap;








// /*
//                   /*----TASK SCHEDULER---*/
// //1)

// let task1={
//     taskName:"Learn Mern",
//     dueDate:"1-1-24",
//     priority:"First",
//     completed:"No",
//     getTaskDetail:function()
//     {
//         return `TaskName:${this.taskName} Date:${this.dueDate} Proir:${this.priority} Done:${this.completed}`
//     },
//     toggleCompletion:function()
//     {
//         if(this.completed=="Yes")
//         {
//             console.log("No");
//         }
//         else
//         {
//             console.log("Yes");
//         }
//     }
// }
// let task2={
//     taskName:"Do Projects",
//     dueDate:"1-1-24",
//     priority:"Second",
//     completed:"No",
//     getTaskDetail:function()
//     {
//         return `TaskName:${this.taskName} Date:${this.dueDate} Proir:${this.priority} Done:${this.completed}`
//     },
//     toggleCompletion:function()
//     {
//         if(this.completed=="Yes")
//         {
//             console.log("No");
//         }
//         else
//         {
//             console.log("Yes");
//         }
//     }
// }

// //2)

// let storeTask=[];
// storeTask.push(task1);
// storeTask.push(task2);

// //3)
// /*
// let i=0;
// function display(n)
// {
//     if(n!=0)
//     {
//     console.log(storeTask[i]);
//     i++;
//     n--;
//     }
//     display(n);
// }

// display(storeTask.length);
// */


// //4)

// function addTask(...task)
// {
//     storeTask.push(task)
// }
// //addTask("Sleeping");

// function deletelastTask()
// {
//     storeTask.pop();
// }


// function addTaskToFront(...task)
// {
//     storeTask.unshift(task);
// }
// //addTaskToFront("Eating");

// function deleteFirstTask()
// {
//     storeTask.shift();
// }

// //5)

// import {add}from './add.js'
// let a=add;
// function add1()
// {
//     let b=a;
//     return function()
//     {
//         storeTask.push(b);
//     }
// }
// let a1=add1();
// a1();
// console.log(storeTask);

// import {deletes}from './deletes.js';
// let del=deletes;
// function delet()
// {
//     let dele=del;
//     return function()
//     {
//         storeTask.splice(dele,1);
//     }
// }
// //let b1=delet();
// //b1();
// //console.log(storeTask);

// import {update,updateEle}from './update.js'
// let upIndex=update;
// let upValue=updateEle;

// function upvote()
// {
//     let x=upIndex;
//     let y=upValue;
//     return function()
//     {
//         storeTask.splice(x,1,y);
//     }
// }

// // let c1=upvote();
// // c1();
// // console.log(storeTask);


// //6)

// function saveTasks()
// {
//     let json=JSON.stringify(storeTask);
//     console.log(json);
//     localStorage.setItem("totalTask",json);
// }
// saveTasks();

// async function loadTasks()
// {
//     let getValueFromLocal=await localStorage.getItem("totalTask");
//     let pass=JSON.parse(getValueFromLocal);
//     console.log(pass)
// }
// loadTasks();

// let val;
// let dis4=document.getElementById('p4');
// let btn=document.getElementById('btn');
// let txt=document.getElementById('int');
// function addtaskUI()
// {
//     btn.addEventListener('click',()=>
//     {
//         val=txt.value;
//         txt.value="";
//         dis4.textContent=val;
//         localStorage.setItem("user",val);
//         dis4.textContent=localStorage.getItem("user");
//         console.log(val);
//     })
// }
// dis4.textContent=localStorage.getItem("user");
// addtaskUI();
// console.log(storeTask);


// let dis=document.getElementById('p');
// let dis1=document.getElementById('p1');
// let dis2=document.getElementById('p2');
// let dis3=document.getElementById('p3');
// function renderTasks()
// {    
//     dis.textContent=storeTask.map((res)=>res.taskName);
//     dis1.textContent=storeTask.map((res)=>res.dueDate);
//     dis2.textContent=storeTask.map((res)=>res.priority);
//     dis3.textContent=storeTask.map((res)=>res.completed);
// }
// renderTasks();


// let delbt=document.getElementById('delbtn');
// let val1;
// function deleteTaskUI()
// {
//     delbt.addEventListener('click',()=>
//     {
//         val1=txt.value;

//         let ind=storeTask.findIndex(val1);
//         storeTask.splice(ind,1);
//         txt.value="";
//         console.log(val1);
//     })
// }
// deleteTaskUI();



// /*
// let todos=[];

// button.addEventListener('click',()=>{
//     todos.push(input);
//     addtodo(input.value);
//     input.value='';
// })

// function addtodo(todo)
// {
//     let para=document.createElement('p');
//     para.innerText=todo;
//     todolist.appendChild(para);
// }
// */


// /*
//  import {number} from './number.js'
//  document.body.innerHTML=number;
//  console.log(number);

// import {add,sub}from './number.js'
// document.body.innerHTML=add;
// console.log(add);
// console.log(sub);

// import number from "./number.js";
// document.body.innerHTML=number;
// console.log(number);*/

// /*let change=document.getElementById("change");
// change.textContent="hello";
// let hi=document.getElementById("hi")
// let btn=document.createElement('button');
// btn.textContent="Button"
// btn.addEventListener('click',perform);
// function perform()
// {
//      let change=document.getElementById('change');
//      change.textContent="hello";
// }
// let b=document.getElementById('bn');
// b.appendChild(btn);

// let tog=false;
// let btn1=document.createElement('button');
// btn1.textContent="Button"
// b.appendChild(btn1);
// if(tog=!tog)
// {
//     btn1.addEventListener('click',dis)
//     function dis()
//     {
//         console.log(change.textContent);
//         change.classList.toggle("color");
//     }
// }*/

// /*async function promise()
// {
//     const pro=new Promise((resolve,reject)=>
//     {
//         resolve("Done");
//     })
//     let result=await pro;
//     console.log(result);
// }
// promise();

// async function createApi()
// {
//     let fet= await fetch('https://fakestoreapi.com/products/categories');
//     let insert=await fet.json().then(re=>console.log(re));
// }
// createApi();

// let json="{Good BOII}";
// async function Err()
// {
//     try{
//     let pass=JSON.stringify(json);
//     let fet=await JSON.parse(pass);
//     console.log(fet);
//     }catch(err)
//     {
//         console.log("Something got a Error");
//     }
// }
// Err();


// async function run()
// {
// let urls = [
//     'https://api.github.com/users/iliakan',
//     'https://api.github.com/users/remy',
//     'https://api.github.com/users/jeresig'
//   ];
//   let requests = urls.map(url => fetch(url));
//   let find= await  Promise.all(requests)
//   .then(responses => responses.forEach(
//     response => console.log(response.url)
//   ));;

  
// }
// run();
// let variable="{name:Ajay,roll:202}"
// async  function cat()
// {
//     let d= await fetch('https://fakestoreapi.com/products');
//     let fd=await d.json().then((p)=>console.log(p));
//     let num1=10,num2=20;
//     let total=num1+num2;
//     let tot=await total.toPrecision(2);
//     console.log(tot);
//     let chan= await JSON.stringify(variable);
//     let chaOver=await JSON.parse(chan);
//     console.log(chaOver);
// }
// cat();
// */

// /*const myPro=new Promise((resolve,reject)=>
// {
//     setTimeout(()=>resolve("greetings"),3000);
// })
// console.log(myPro)

// const dataFetch=new Promise((resolve,reject)=>
// {
//     resolve(fetch('https://fakestoreapi.com/products').then(res=>res.json().then(json=>console.log(json))))
// })
// console.log(dataFetch);


// const num=new Promise((resolve,reject)=>{
//     let value=Math.floor(Math.random()*10);
//     if(value%2==0)
//     {
//         resolve("Done");
//     }
//     else if(value%2==1){
//         reject("Not Done");
//     }
// })
// console.log(num);

// let urls = [
//     'https://api.github.com/users/iliakan',
//     'https://api.github.com/users/remy',
//     'https://api.github.com/users/jeresig'
//   ];
//   let requests = urls.map(url => fetch(url));
//   Promise.all(requests)
//     .then(responses => responses.forEach(
//       response => console.log(response.url)
//     ));

//     const mulPro=new Promise((resolve,reject)=>
//     {
//         resolve(1)
//     }).then(function(val1){return val1+10}).then(function(val2){return val2*100}).then((tot)=>console.log(tot));
//     console.log(mulPro);*/

// /*function add()
// {
//     let d=10;
//     return function()
//     {
//         console.log(`${d+10}`);
//     }
// }
// let a=add();
// a();

// function one()
// {
//     let count=0;
//     return function()
//     {
//         count++;
//         console.log(count);
//     }
// }

// let store=one();
// store();
// store();

// function multiple()
// {
//     let c1=0,c2=3,c3=1;
//     return function()
//     {
//         c1--;
//         c2=c2**c2;
//         c3=c3*c3;
//         console.log(c1);
//         console.log(c2);
//         console.log(c3);
//     }
// }
// let value=multiple();
// value();
// value();

// function pri()
// {
//     let priVariable=0;
//     return function()
//     {
       
//     } 
// }
// */

// /*function add(n1,n2)
// {
//     return n1+n2;
// }
// console.log(add(1,2));
// console.log(add(1,2,3));

// const numbers=[1,2,3,45,5];
// console.log(add(...numbers));

// const clone={
//     name:"Ajay",
//     roll:202,
//     dept:"EEE",
//     side:"fullStack"
// }
// console.log(clone);
// let convertJson=JSON.stringify(clone);
// console.log(convertJson);
// console.log( typeof (convertJson));

// const obj1={
//     name:"Ajay",
//     dept:"EEE"
// }

// const obj2={
//     Roll:202,
//     learning:"MERN"
// }

// function newObj()
// {
//     const ob=new Object({...obj1,...obj2})
//     console.log(ob);
// }
// newObj();

// const serialize={
//     Front:"REACT",
//     BACK:"NODE AND EXPRESS",
//     DataBase:"MONGO DB"
// }

// let serObj=JSON.stringify(serialize);
// console.log(serObj);
// let deserObj=JSON.parse(serObj);
// console.log(deserObj);*/

// /*let sum=1;
// function findFactorial(num)
// {
//     sum*=num;
//     const perform=num-1;
//     if(perform>0)
//     {
//         findFactorial(perform);
//     }
// }
// findFactorial(5);
// console.log(sum);

// function findFibo(num)
// {
//     if(num<=1)
//     {
//         return num;
//     }
//     return findFibo(num-2)+findFibo(num-1);
// }
// console.log(findFibo(7));

// function totalWays(way)
// {
//     if(way==0)
//     {
//         return 1;
//     }
//     if(way<0)
//     {
//         return 0;
//     }
//     return totalWays(way-1)+totalWays(way-2)+totalWays(way-3);
// }
// console.log(totalWays(3));

// function flatten(arr) {
//     return arr.reduce((acc, cur) => acc.concat(Array.isArray(cur) ? flatten(cur) : cur), []);
// };
 
// const arr = [[1,2],[3,[4,[5]]]];
// const flattened = flatten(arr);
// console.log(flattened);

// function towerOfHanoi(n, from_rod,  to_rod,  aux_rod)
// {
//         if (n == 0)
//         {
//             return;
//         }
//         towerOfHanoi(n - 1, from_rod, aux_rod, to_rod);
//         towerOfHanoi(n - 1, aux_rod, to_rod, from_rod);
//     }
//     var N = 3;
//     console.log(towerOfHanoi(N, 'A', 'C', 'B'));*/