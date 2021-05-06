
//declear varables;
let jungleInput:any = document.querySelector(" #home > .en textarea");
// let panelBtn = document.querySelectorAll("main .panels a");
let panelTabs = document.querySelectorAll(".panels a");
let jungleOutput:any = document.querySelector(" #home .jg textarea");
let historyParentEl:Element | any = document.querySelector("#history .history");



//  history
let histories:any[]=[], storage:Storage ;
storage = localStorage;
// 
const save=(input: string):object[]=>{
  histories.push({
      data:input,
      time: new Date().toLocaleTimeString(),
      date: new Date().toLocaleDateString(),
    });
  // storage.setItem("histories", JSON.stringify(histories));
historyParentEl.innerHTML= `${

  histories.map((history,i):string=>{
  return (`
   <div class="history-card">
  <p class="text">${history.data}</p>
<div class="date">
    <div class="time">${history.time}</div>
    <div class="day">${history.date}</div>
</div>
</div>
`.trim())



})



}`
    

  return histories
}

// JUNGLE LANGUAGE CLASS
class Jungle {
  str:string;
 constructor(str:string) {
  //  STRING TO BE CONVERTED
  this.str = str;
 }

 //convert words to jungle language
 convert(callback:Function):string {
  //  destructure string to be converted 
  const { str } = this;
  let vowels : string;
  vowels = ["a", "e", "i", "o", "u"].join("");

  let vowelMatch='',
   err = null;
  if (str || str.match(/(a|e|i|o|u)/gi)) {
   vowelMatch = str
    .replace(/a/gi, '1')
    .replace(/e/gi, '2')
    .replace(/i/gi, '3')
    .replace(/o/gi, '4')
    .replace(/u/gi, '5');
  }
  let newArray = [];
  let join;
  for (let i = 0; i < vowelMatch.length; i++) {
   join = newArray.push(vowelMatch[i]);
   if (!vowelMatch[i].match(/(a|e|i|o|u|[0-9]|\s|\W)/gi)) {
    join = newArray.push("a");
   }
  }

  callback(err, [newArray.join(""), str]);
  return newArray.join('')
 }

 reverse(callback:Function) {
  const { str } = this;
  let err = null,
   data = undefined;
  callback(err, [str, data]);
 }
}

//update input field functions
function update(arg:string) {
 new Jungle(arg).convert((err:string, data:any[]) => {
  jungleOutput.value = data[0];
 });
}

// update(jungleInput.value);

jungleInput.addEventListener("input", (e:any) => {
 update(e.target.value);
});

jungleInput.addEventListener("blur",() => {

  if(jungleInput.value.match(/^\s{0,}$/g)){
    return 0
  }else{
    save(jungleInput.value);
  }
});
