


function changeWindow(id) {
    let section = document.getElementsByTagName('section');

    for(i=0; i<section.length; i++){
            section[i].style.display = 'none';
    }
    
    document.getElementById(id.getAttribute("data-option")).style.display = "block"
}

