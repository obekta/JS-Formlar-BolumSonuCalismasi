// Formlarla Calismak - Bolum Sonu Egzersizi

// 1-Formu sec
// 2-Input bilgisini UL icerisine ekle
// 3-Form icindeki bilgiyi sifirla
// 4-Eger forma bilgi girilmezse kullaniciyi uyar


let userFormDOM = document.querySelector("#userForm")

const ALERT = `<div class="alert alert-danger alert-dismissible fade show" role="alert">
<strong>A Problem Exists!!</strong> You need to add some information.
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`

let alertDOM = document.querySelector("#alert")

userFormDOM.addEventListener("submit", formHandler)

function formHandler(event) {
    event.preventDefault()

    const INPUT_NAME = document.querySelector("#inputName")

    const INPUT_SCORE = document.querySelector("#inputScore")

    if (INPUT_NAME.value, INPUT_SCORE.value) {

      let userListDOM = document.querySelector("#userList")

      let liDOM = document.createElement("li")

      liDOM.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center")

      liDOM.innerHTML = ` ${INPUT_NAME.value} 
      <span class="badge bg-primary rounded-pill text-white">${INPUT_SCORE.value}</span>
      </li>`

      userListDOM.append(liDOM)

      INPUT_NAME.value = ""
      
      INPUT_SCORE.value = ""

    }

    else {

      alertDOM.innerHTML = ALERT

      console.log("Information needed!")

    }

    

}