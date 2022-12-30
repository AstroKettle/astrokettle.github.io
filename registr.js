function Verif1(el){
    
    var pass = el.pass.value;
    var log = el.login.value;
    if (log == "Админ") {
        
        if (pass === "Я главный") {
            alert("Пароль верный!");
            return true;
        } else {
            alert("Неверный пароль!");
            return false;
        }
    } else {
        alert("Я вас не знаю");
        return false;
    }
    
}
