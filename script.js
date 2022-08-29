let addInputButton = document.getElementById("addInputButton");
let categoryDiv = document.getElementById("categoryDiv");
var clone;
var removeul;
var childrenel;
// Add category
addInputButton.addEventListener("click", function () {
  let addCategory = document.createElement("ul");
  addCategory.className = "add-category";
  categoryDiv.appendChild(addCategory);
  addCategory.innerHTML = `
   <li id="addCategoryLi">
    <input id="categoryInput" type="text" autocomplete="off">
    <button id="toggleButton" class="toggle-btn"><ion-icon name="checkmark-outline"></ion-icon></button>
   </li>
   `;
});
document.onclick = function (e) {
  let i;
  let toggBtn = document.querySelectorAll("#toggleButton ion-icon");
  let categoryInput = document.getElementById("categoryInput");
  for (i = 0; i <= toggBtn.length; i++) {
    if (toggBtn[i] == e.target) {
      let inputValue = categoryInput.value;
      if (inputValue !== "") {
        e.target.parentElement.parentElement.innerHTML = `
                <h5 id="categoryH5">${inputValue}</h5>
                <button class="btn-collapse" style="display: none"><ion-icon name="chevron-down-outline"></ion-icon></button>
                <button class="btn-popup"><ion-icon name="ellipsis-vertical"></ion-icon></button> 
                <div class="popup">
                <p class="add-subcategory"><ion-icon class="iconn1" name="add"></ion-icon><span>Alt çeşid əlave et</span></p>
                <p class="edit"><ion-icon class="iconn2" name="pencil"></ion-icon><span>Redaktə et</span></p>
                <p class="copy"><ion-icon class="iconn3" name="copy"></ion-icon><span>Kopyala</span></p>
                <p class="paste"><ion-icon class="iconn6" name="clipboard"></ion-icon><span>Yapışdır</span></p>
                <p class="transfer"><ion-icon class="iconn4" name="exit"></ion-icon><span>Yerini dəyiş</span></p>
                <p class="place"><ion-icon class="iconn7" name="enter"></ion-icon><span>Yerləşdir</span></p>
                <p class="delete"><ion-icon class="iconn5" name="trash-bin"></ion-icon><span>Sil</span></p>
                </div>
               `;
      }
    }
  }
  //open popup
  let icons = document.querySelectorAll(".btn-popup ion-icon");
  for (i = 0; i < icons.length; i++) {
    let icon = icons[i];
    if (icon != e.target) {
      if (document.querySelector(".popup")) {
        icon.parentElement.nextElementSibling.classList.remove("popup-show");
      }
    } else {
      e.target.parentElement.nextElementSibling.classList.toggle("popup-show");
    }
  }
  //Add sub categories
  let sbc = document.querySelectorAll(".add-subcategory span");
  for (i = 0; i < sbc.length; i++) {
    let sb = sbc[i];
    if (sb == e.target) {
      let addCategory = document.createElement("ul");
      addCategory.className = "add-sub-category";
      addCategory.innerHTML = `
       <li id="addCategoryLi">
        <input id="categoryInput" type="text" autocomplete="off">
        <button id="toggleButton"><ion-icon name="checkmark-outline"></ion-icon></button>
       </li>
       `;

      e.target.parentElement.parentElement.parentElement.parentElement.appendChild(
        addCategory
      );
      if(e.target.parentElement.parentElement.parentElement.nextElementSibling){
      e.target.parentElement.parentElement.parentElement.children[1].style.display="block"
      }
      
    }
  }
  // edit
  let edit = document.querySelectorAll(".edit span");
  for (i = 0; i <= edit.length; i++) {
    let ed = edit[i];
    if (ed == e.target) {
      let value =
        e.target.parentElement.parentElement.previousElementSibling
          .previousElementSibling.previousElementSibling.innerText;
      let input = document.createElement("input");
      input.value = value;
      input.autocomplete = "off";
      input.id = "categoryInput";
      e.target.parentElement.parentElement.parentElement.prepend(input);
      e.target.parentElement.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.remove();
      e.target.parentElement.parentElement.previousElementSibling.innerHTML = `<ion-icon name="checkmark-outline"></ion-icon>`;
      e.target.parentElement.parentElement.previousElementSibling.classList =
        "toggle-btn";
      e.target.parentElement.parentElement.previousElementSibling.id =
        "toggleButton";
    }
  }
  //delete
  let dltbtn = document.querySelectorAll(".delete span");
  for (i = 0; i <= dltbtn.length; i++) {
    let dlt = dltbtn[i];
    if (dlt == e.target) {
      e.target.parentElement.parentElement.parentElement.parentElement.remove();
    }
  }

  //copy
  let copybtn = document.querySelectorAll(".copy span");
  for (i = 0; i <= copybtn.length; i++) {
    let copy = copybtn[i];
    if (copy == e.target) {
      clone =
        e.target.parentElement.parentElement.parentElement.parentElement.cloneNode(
          true
        );
    }
  }
  // paste
  let pastebtn = document.querySelectorAll(".paste span");
  for (i = 0; i <= pastebtn.length; i++) {
    let paste = pastebtn[i];
    if (paste == e.target) {
      e.target.parentElement.parentElement.parentElement.parentElement.appendChild(
        clone
      ).classList = "add-sub-category";
      clone = undefined;
    }
  }
  //transver
  let transferbtn = document.querySelectorAll(".transfer span");

  for (i = 0; i <= transferbtn.length; i++) {
    let transfer = transferbtn[i];
    if (transfer == e.target) {
      clone =
        e.target.parentElement.parentElement.parentElement.parentElement.cloneNode(
          true
        );
      removeul =
        e.target.parentElement.parentElement.parentElement.parentElement;
      removeul.style.opacity = 0.5;
    }
  }
  let placebtn = document.querySelectorAll(".place span");
  for (i = 0; i <= placebtn.length; i++) {
    let place = placebtn[i];
    if (place == e.target) {
      e.target.parentElement.parentElement.parentElement.parentElement.appendChild(
        clone
      ).classList = "add-sub-category";
      clone = undefined;
      removeul.remove();
    }
  }
  //dropdown
  let collapse = document.querySelectorAll(".btn-collapse ion-icon");
  for (i = 0; i <= collapse.length; i++) {
    let coll = collapse[i];
    if (coll == e.target) {
      childrenel = e.target.parentElement.parentElement.parentElement.children;
      
      for (let j = 0; j < childrenel.length; j++) {
        childrenel[j].classList.toggle("dropdown-none");
      }
      // if(!e.target.parentElement.parentElement.nextElementSibling){
      //   e.target.parentElement.style.display="none"
      // }
      // else{
      //   e.e.target.parentElement.style.display="block"
      // }
    }
  }
};


 
