(function($){
    $(function(){
        $('#slide-out').perfectScrollbar();
        $('.sidebar-collapse').sideNav({
            menuWidth:250
        }
                                      );
        $(document).ready(function() {
            $('select').material_select();
        });

    }); // end of document ready
})(jQuery); // end of jQuery name space


$(window).on('load' , function() {
    setTimeout(function() {
        $('body').addClass('loaded');      
    }, 200);
}); 


$(document).ready(function(){
    $('ul.tabs').tabs();
});

$(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
});