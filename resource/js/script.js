$(document).ready(function(){
    console.log('Jquery checked');
    $('#btn-check').click(function(){
       var val = $('#num').val();
        if(val == ""){
            alert('Enter Some Value to check the functionality!!');
        }else{
            $.ajax({
                url : 'http://localhost/cgi-bin/projectmmm/check.py',
                type:'post',
                datatype : 'json',
                crossDomain : true,
                data : {val_sent_js  : val },
                success : function(data){
                    data = (JSON.stringify(data));
                    console.log(data);
                    $('#json').css('display' , 'block');
                    $('#json').html(data);
                },error: function(error) {
                    console.log(error);
                }
            })
        }
        
    });  
})