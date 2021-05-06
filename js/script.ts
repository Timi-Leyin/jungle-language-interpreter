
//declear varables;
let panelBtn, panelTabs, jungleInput, jungleOutput, historyParentEl ;
panelBtn = document.querySelectorAll("main .panels a"),
panelTabs = document.querySelector(".panel-tabs"),
jungleInput = document.querySelector(" #home > .en textarea");
(jungleOutput = document.querySelector(" #home > div:last-child textarea")),
 (historyParentEl = document.querySelector("#history .history"));


//  history
let history, storage
history = [];
storage = localStorage;
storage.setItem("history", JSON.stringify(history));


// JUNGLE LANGUAGE CLASS
class Jungle {
 constructor(str) {
  //  STRING TO BE CONVERTED
  this.str = str;
 }

 //convert words to jungle language
 convert(callback) {
  const { str } = this;
  let vowels = ["a", "e", "i", "o", "u"].join("");

  let vowelMatch = "",
   err = null;
  if (str || str.match(/(a|e|i|o|u)/gi)) {
   vowelMatch = str
    .replace(/a/gi, 1)
    .replace(/e/gi, 2)
    .replace(/i/gi, 3)
    .replace(/u/gi, 5)
    .replace(/o/gi, 4);
  }
  let newArray = [];
  let join;
  combine: for (let i = 0; i < vowelMatch.length; i++) {
   join = newArray.push(vowelMatch[i]);
   if (!vowelMatch[i].match(/(a|e|i|o|u|[0-9]|\s|\W)/gi)) {
    join = newArray.push("a");

    // break combine;
    //continue
   }
  }

  callback(err, [newArray.join(""), str]);
 }

 reverse(callback) {
  const { str } = this;
  let err = null,
   data = undefined;
  callback(err, [str, data]);
 }
}

//update input field functions
function save(val) {
 history.push({
  val: val,
  time: new Date().toLocaleTimeString(),
  data: new Date().toLocaleDateString(),
 });
 //         storage.setItem('history',JSON.stringify(history));
 // let parseData =JSON.parse(storage.getItem('history'));
 //    console.log(parseData);

 // console.clear()

 parseData.forEach((value, index) => {
  const newHistoryEl = document.createElement("div");
  newHistoryEl.setAttribute("class", "history-card");
  const node = document.createTextNode(value.val);
  newHistoryEl.appendChild(node);
  console.log(historyParentEl.append(newHistoryEl));
  console.log(value.val);
  console.log(parseData);
 });
 return parseData;
}

function update(arg) {
 new Jungle(arg).convert((err, data) => {
  jungleOutput.value = data[0];
 });
}

update(jungleInput.value);
// save(jungleInput.value)

jungleInput.addEventListener("input", (e) => {
 let { value } = e.target;
 update(value);
});

jungleInput.addEventListener("blur", (e) => {
 save(jungleInput.value);
});
