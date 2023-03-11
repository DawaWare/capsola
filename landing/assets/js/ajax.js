// $(function ($) {
//     "use strict";
    
    $(document).ready(function(){
        jQuery('#contact_form_submit').on('submit',function(e){
            jQuery('#msg').html('');
            jQuery('#contact_submit').html('Please wait....');
            jQuery('#contact_submit').attr('disabled',true);
            jQuery.ajax({
                url:'mail.php',
                type:'POST',
                data:jQuery('#contact_form_submit').serialize(),
                success:function(result){
                    jQuery('#msg').html(result);
                    jQuery('#contact_submit').html('Send Message');
                    jQuery('#contact_submit').attr('disabled',false);
                    jQuery('#contact_form_submit')[0].reset();

                    setTimeout(function () {
                        $('.alert-dismissible').fadeOut('slow', function(){
                            $(this).remove();
                        });
                    }, 3000);
                }
            });
            e.preventDefault();
        });
    });  
// });  
