//function making sure that we can only type numbers in the zipcode input
//we have to do this because input type="number" doesn't allow for maxlength or minlength.
$("#zipcode-input").keydown(function (e) {
    // Allow: backspace, delete, tab, escape, and enter
    if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110]) !== -1 ||
        // Allow: Ctrl+A, Command+A
        (e.keyCode === 65 && (e.ctrlKey === true || e.metaKey === true)) ||
        // Allow: home, end, left, right, down, up
        (e.keyCode >= 35 && e.keyCode <= 40)) {
        // let it happen, don't do anything
        return;
    }
    // Ensure that it is a number and stop the keypress
    if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
        e.preventDefault();
    }
});

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

$('#learn-more-btn').click(changeArrows);

//removing the sign up form from the page
//this function is being called in the onSubmit attribute of #sign-up-form
var completeSignUp = function(e){
    e.preventDefault();
    e.stopPropagation();

    $('#sign-up-form').remove();
    $('#thank-you').fadeIn('slow');
};