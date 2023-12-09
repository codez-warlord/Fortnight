function openAriaTab(obj, target) { 
   //Mostrar seccion de tabs 
   $("[data-type='tab-section']").removeClass("pf-active"); 
   $("#" + target).addClass("pf-active"); 
  
   //Marcar boton de menu activo 
   $("#TabListInfoUser .pf-btn-tab").removeClass("pf-active"); 
   $(obj).addClass("pf-active"); 
 } 
  
 window.onload = function () { 
   jam(); 
 }; 
  
 function jam() { 
   var e = document.getElementById("jam"), 
     d = new Date(), 
     h, 
     m, 
     s; 
   h = d.getHours(); 
   m = set(d.getMinutes()); 
   s = set(d.getSeconds()); 
  
   e.innerHTML = h + ":" + m + ":" + s; 
  
   setTimeout("jam()", 1000); 
 } 
  
 function set(e) { 
   e = e < 10 ? "0" + e : e; 
   return e; 
 }