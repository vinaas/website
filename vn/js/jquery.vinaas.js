var validateEmail = function (email) {
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return filter.test(email);
};

var addClassError = function (item) {
    if (item.val() == '') {
        item.addClass('has-error');
    } else {
        item.removeClass('has-error');
    }
};

var validateContact = function () {
    $('.contact #txtContent').keyup(function () {
        addClassError($(this));
    });
    
    $('.contact .ct-content>input[type="text"]').keyup(function () {
        addClassError($(this));
    });
};

/*=========== Action Function ==============*/
$(function() {
    validateContact();
});