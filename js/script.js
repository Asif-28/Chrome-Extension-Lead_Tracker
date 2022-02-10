// function save()

// {
//     let buttonEl=document.getElementById("btn-input")
//     buttonEl=console.log("button pressed")

// }

// ANNOTHER WAY OF WRITING THE SAME CODE OF INPUT IS THIS -->
let myLead = [];
const inputEl = document.getElementById("input-el");

let inputBtn = document.getElementById("btn-input");
let ulEl = document.getElementById("ul-el");
let tabBtn=document.getElementById("savetab-btn")
deleteBtn=document.getElementById("delete-btn")

let leadsFromLocalStorage=JSON.parse(localStorage.getItem("myLead"))
// console.log(leadsFromLocalStorage)

if(leadsFromLocalStorage){
  myLead=leadsFromLocalStorage
  render(myLead)
  
}





tabBtn.addEventListener("click", function(){
  chrome.tabs.query({active:true ,currentWindow:true}, function(tabs){
    myLead.push(tabs[0].url)
    localStoraage.setItem("myLead",JSON.stringify(myLead))
    render(myLead)
  })


})

deleteBtn.addEventListener("dblclick" ,function(){
  localStorage.clear()
  myLead=[]
  render(myLead)
})

inputBtn.addEventListener("click", function () {
  myLead.push(inputEl.value);
  inputEl.value = "";
  localStorage.setItem("myLead", JSON.stringify(myLead))
  render(myLead);
});


function render(leads) {
  let listItems = "";
  for (let i = 0; i < leads.length; i++) {
    listItems += `
    <li>
    <a target='_blank' href='${leads[i]}'> ${leads[i]}</a>
    </li>
    `;
  }
  ulEl.innerHTML = listItems;
}
