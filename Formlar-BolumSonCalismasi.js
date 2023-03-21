
// 1. Formu seç
// 2. Input bilgisini UL içerisine ekle
// 3. Form içindeki bilgiyi sıfırla
// 4: Eğer forma bilgi girilmemişse kullanıcıyı uyar

let userformDOM = document.querySelector("#userform")
userformDOM.addEventListener("submit", formFunction)

function formFunction(event) {
    event.preventDefault()
}