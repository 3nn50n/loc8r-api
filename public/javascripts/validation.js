$('#addReview').submit(function(e){
    $('.alert.alert-danger').hide();
    if(!$('input#name').val() || !$('textarea#review').val() || !$('select#rating').val()){
        if($('.alert.alert-danger').length){
            $('.alert.alert-danger').show();
        }else{
            $(this).prepend('<div class="alert alert-danger" role="alert">All fields required, please try again</div>');
        }
        return false;
    }
});