$(function(){
    var $write = $('#write'),
        shift = false,
        capslock = false;
     
        // The rest of the code goes here.
        $('#keyboard li').click(function(){
            var $this = $(this),
                character = $this.html(); // If it's a lowercase letter, nothing happens to this variable
             
            // Code for processing the key.
        });

        // Delete
        if ($this.hasClass('delete')) {
            var html = $write.html();
             
            $write.html(html.substr(0, html.length - 1));
            return false;
        }

        // Remove shift once a key is clicked.
if (shift === true) {
    $('.symbol span').toggle();
    if (capslock === false) $('.letter').toggleClass('uppercase');
     
    shift = false;
}
 
// Add the character
$write.html($write.html() + character);
});


