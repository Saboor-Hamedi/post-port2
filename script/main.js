let activebtn = document.querySelector('#active-remove');
     
        activebtn.addEventListener('click',function(e){
            e.preventDefault();
            let elems = document.querySelector(".active");
          
            if(elems !==null){
                elems.classList.remove("active");
            }
             e.target.className = "active";
        });
        