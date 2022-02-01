(function(){
  
    let el = document.querySelectorAll(".wavey")[0];
    let oldText = el.innerText
    let newHtml = "";
    for (let i in el.innerText) { newHtml += ("<span style='animation-delay: " + i/10 + "s;'>" + oldText[i] + "</span>"); }
    el.innerHTML = newHtml;
    
  })();