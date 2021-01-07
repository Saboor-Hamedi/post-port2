let activebtn = document.querySelector('#active-remove');
     
        activebtn.addEventListener('click',function(e){
            e.preventDefault();
            let elems = document.querySelector(".active");
          
            if(elems !==null){
                elems.classList.remove("active");
            }
             e.target.className = "active";
        });
        

        // display side bar
        


function OpenFucntion() { 
    document.querySelector('nav').style.width = '250px';
}
       

function CloseFucntion() { 
    document.querySelector('nav').style.width = '0px';
}
    