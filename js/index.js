function getValue(id) { 
    return document.getElementById(id).value; 
    // 查找元素
} 
function checkuser() { 
    if(getValue('uname') == "admin" && getValue('password') == "yy1993") { 
        if(msg.style.display == "block"){
            msg.style.display == "none";
        }
        setTimeout(function(){
            window.location.href = "/shouye.html";
        },1000);

        
    }else { 
        msg.style.display = "block";
        // 警告框
        return false; 
    } 
}  