window.onscroll = function() { 
  scrollFunction() 
}; 
var widths = [0, 576, 3000];
    
function scrollFunction() { 
  if (document.body.scrollTop > 0 || 
      document.documentElement.scrollTop > 0) 
  {   
    if (window.innerWidth>=widths[1] && window.innerWidth<widths[2]) {
      document.getElementById("header") 
                  .style.height = "80px";
      document.getElementById("tytle") 
                  .style.whiteSpace = "nowrap";
      }
      
    }
  else { 
    if (window.innerWidth>=widths[1] && window.innerWidth<widths[2]) {
      document.getElementById("header") 
                  .style.height = "30vh";
      document.getElementById("tytle") 
                  .style.whiteSpace = "wrap";}
    
  } 
} 
var widths = [0, 576, 850];

function resizeFn() {
if (window.innerWidth>=widths[0] && window.innerWidth<widths[1]) {
red();
} else if (window.innerWidth>=widths[1] && window.innerWidth<widths[2]) {
orange();
} else {
green();
}
}
window.onresize = resizeFn;
resizeFn();
  