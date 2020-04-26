
function openModel(){
    model=document.getElementById("model");
    model.classList.add('active');
    overlay=document.getElementById("overlay");
    overlay.classList.add('active');
    document.getElementById("overlay").addEventListener("click", function(){
            closeModel();   
        });
}

function closeModel(){
    model=document.getElementById("model");
    model.classList.remove('active');
    overlay=document.getElementById("overlay");
    overlay.classList.remove('active');
}