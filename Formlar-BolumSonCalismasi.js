
// 1. Formu seç
// 2. Input bilgisini UL içerisine ekle
// 3. Form içindeki bilgiyi sıfırla
// 4: Eğer forma bilgi girilmemişse kullanıcıyı uyar

let userFormDOM = document.querySelector("#userForm")
userFormDOM.addEventListener("submit", formFunction)

let alertDOM = document.querySelector("#alert")

const alertFunction = (title, alertMessage) => `<div class="alert alert-danger alert-dismissible fade show" role="alert">
<strong>${title}</strong> ${alertMessage}
<button type="button" class="close" data-dismiss="alert" aria-label="Close">
  <span aria-hidden="true">&times;</span>
</button>
</div>`

function formFunction(event) {
    event.preventDefault()

    const USER_NAME = document.querySelector("#userName")
    const SCORE = document.querySelector("#score")

    if (USER_NAME.value && SCORE.value) {

        addItem(USER_NAME.value, SCORE.value)   // bilgileri gonderdikten sonra sifirlandi

        USER_NAME.value = ""
        SCORE.value = ""
        
    } else {
        alertDOM.innerHTML = alertFunction("DİKKAT!", "Bilgileriniz eksik")
    }
} 

let userListDOM = document.querySelector("#userList")

function addItem (userName, score) {

    let liDOM = document.createElement("li")
    liDOM.innerHTML = `

    ${userName} 
    <span class="badge badge-primary badge-pill">${score}</span>`

    liDOM.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center")

    userListDOM.append(liDOM) 

}