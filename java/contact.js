

/////////////////////input////////

//hide placeholder on focus
var placeAttr = "" ;

$('input').focus(function(){

      placeAttr = $(this).attr('placeholder');
    
    $(this).attr('placeholder','');

}).blur(function(){
    $(this).attr('placeholder',placeAttr);
    

})