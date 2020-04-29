function carregar() {
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("image")
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas!`
    if (hora >= 0 && hora <= 12) {
        // bom dia!
        img.src = "images/manhahorario.jpg"
        document.body.style.background = "#ffe455"
    } else if (hora >= 12 && hora < 18) {
        // boa tarde
        img.src = "images/tardehorario.jpg"
        document.body.style.background = "#e69846"
    } else {
        img.src = "images/noitehorario.jpg"
        document.body.style.background = "#0a1d2c"
        var h1 = window.document.querySelector("h1")
        h1.style.color = "white"
            // boa noite
    }
}