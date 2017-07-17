var $contactForm =$("#contactForm");
var $fname = $("#fname");  
var $femail =$("#femail");
var $phoneNumber =$("#phoneNumber");
var $fclass = $("#fclass");
var $fsubmit = $("#fsubmit");
var $errmsg = $("#errmsg");


$( "#fname" ).click(function() {
    alert("First and Last Name Please")
});
$( "#femail" ).click(function() {
    alert("Email Please")
});
    //shows alert when someone checks the box
$( "#fclass" ).click(function() {
    alert("Awesome you are where you need to be")
    });
// Prevent the form from Submitting
$( "#contactForm" ).submit(function(Event) {
    event.preventDefault(); 
    alert("Will Be Working Shortly")
    });
//Using .css on checkbox
 var $fclass = $( "form input:checkbox" )
  .wrap( "<span>Check Here</span>" )
  .parent()
  .css({
    background: "lightblue",
    text: "black",
    border: "10px"
  });
 //Changes the Email to uppercase
$ ("#femail").on( "blur", function() {
  $( this ).val(function( i, val ) {
    return val.toUpperCase();
  });
});



