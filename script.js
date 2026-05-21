function verificarLogin() {
    let login = document.getElementById("login").value;
    let senha = document.getElementById("senha").value;

    if(login ==="admin" && senha ==="123456"){
        alert("Seja bem-vindo(a)");
        window.location.href ="games.html";
    } else{
        alert("Login ou senha incorretos.");
    }

    login = document.getElementById("login").value = '';
    senha = document.getElementById("senha").value = '';
};