window.onscroll = function() { 
  scrollFunction() 
}; 

function scrollFunction() { 
  const header = document.getElementById("header");
  const tytle = document.getElementById("tytle");
  if (document.body.scrollTop > 50 || 
      document.documentElement.scrollTop > 50) 
  {  
    header.classList.add('scroll');
    tytle.classList.add('scroll');
    } 
  else{
    header.classList.remove('scroll');
    tytle.classList.remove('scroll');
  }
  
} 


  