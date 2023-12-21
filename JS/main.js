var siteNameInput = document.getElementById('siteName');
var siteURLInput = document.getElementById('siteURL');
var btn = document.getElementById('btn');
var tabelRow = document.getElementById('tableRow');
var boxModal = document.getElementById('box-contant')
var closeBtn = document.getElementById('closeBtn')
var visitBtns;
var websiteList = [];

(function(){
    if(localStorage.getItem('product'))
websiteList=JSON.parse(localStorage.getItem('product'))
})();
display(websiteList)

btn.onclick = function () {
    addProdect()
    clearFoem()
    display()
}

function addProdect() {
    if(NameValid() && webURL())
    {
        var prodect = {
        siteName : siteNameInput.value,
        siteURL : siteURLInput.value,
        }
        websiteList .push(prodect);
        localStorage.setItem('product',JSON.stringify(websiteList))
        
        display()}
        else
        NotMatch()
}

function display(){

    var box = '';
    for(var i = 0; i<websiteList.length;i++)
    {
        box+=`
        <tr  class="text-center">
        <td>${i + 1}</td>
        <td>${websiteList[i].siteName}</td>
        <td> <button class="btn  btn-primary"><a href="https://www.${websiteList[i].siteURL}" target="_blank"><i class="fa-solid fa-eye pe-2"></i> Visit </a></button></td>
        <td><button class="btn btn-danger "onclick = deletefun(${i})><i class="fa-solid fa-trash-can pe-1"></i> Delete</button></td>
        </tr> `
    }
    tableRow.innerHTML = box
}

function deletefun(index){
    websiteList.splice(index,1)
    localStorage.setItem('product',JSON.stringify(websiteList))
    display()
}
function clearFoem(){
    siteNameInput.value='';
    siteURLInput.value='';
    display()
}
function NameValid(){
    var Regex = /^\w{2,10}$/
    return Regex.test(siteNameInput.value)
}
function webURL(){
    var Regex = /^\w+(.com)$/
    return Regex.test(siteURLInput.value)
}
function NotMatch(){
    if(!NameValid())
        boxModal.classList.remove("d-none");
      
else if(!webURL())
        boxModal.classList.remove("d-none");
}






function closeModal() {
    boxModal.classList.add("d-none");
  }
  
  // 3 ways to close modal => close button -  Esc key - clicking outside modal
  
  closeBtn.addEventListener("click", closeModal);
  
  document.addEventListener("keydown", function (e) {
    if (e.key == "Escape") {
      closeModal();
    }
  });
  
  document.addEventListener("click", function (e) {
    if (e.target.classList.contains("box-info")) {
      closeModal();
    }
  });
  


