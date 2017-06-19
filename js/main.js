//Switching the arrow icon each time the 'Learn More About Darth' button is clicked.
var changeArrows = function(){
    if($('#arrow-icon').hasClass('fa-angle-down')){
        $('#arrow-icon').removeClass('fa-angle-down');
        $('#arrow-icon').addClass('fa-angle-up');
    }
    else {
        $('#arrow-icon').removeClass('fa-angle-down');
        $('#arrow-icon').addClass('fa-angle-down');
    }
};

var completeSignUp = function(e){
    e.preventDefault();
    e.stopPropagation();

    //removing the sign up form from the page
    $('#sign-up-form').remove();

    //showing modal after successful sign-up completion
    $(document).ready(function(){
        $('#thankyouModal').modal('show');
    });

};

$('#learn-more-btn').click(changeArrows);
// $('#sign-up-btn').submit(completeSignUp);