window.onscroll = function() { 
  scrollFunction() 
}; 
    
function scrollFunction() { 
  if (document.body.scrollTop > 0 || 
      document.documentElement.scrollTop > 0) 
  { 
      document.getElementById("header") 
                  .style.height = "80px";
      document.getElementById("tytle") 
                  .style.whiteSpace = "nowrap";
      }
  
  else { 
      document.getElementById("header") 
                  .style.height = "30vh";
      document.getElementById("tytle") 
                  .style.whiteSpace = "wrap";
    
  } 
} 
  