window.onscroll = function() { 
    scrollFunction() 
}; 
      
function scrollFunction() { 
    if (document.body.scrollTop > 50 || 
        document.documentElement.scrollTop > 50) 
    { 
        document.getElementById("header") 
                    .style.maxHeight = "80px";
        document.getElementById("header") 
                    .style.minHeight = "70px";          
              
        document.getElementById("logo_img") 
                .style.maxWidth = "70px";
        document.getElementById("logo_img") 
                .style.minWidth = "60px"; 
        document.getElementById("logo_img") 
                .style.minHeight = "60px";
        document.getElementById("logo_img") 
                .style.maxHeight = "70px";
    } 
    else { 
        document.getElementById("header") 
                    .style.maxHeight = "177px";
        document.getElementById("header") 
                    .style.minHeight = "160px";    
        document.getElementById("logo_img") 
                .style.maxWidth = "140px"; 
        document.getElementById("logo_img") 
                .style.minWidth = "130px"; 
        document.getElementById("logo_img") 
                .style.minHeight = "130px";

        document.getElementById("logo_img") 
                .style.maxHeight = "140px";
    } 
} 
    