/**
 * Created by m3rkz0r on 10/1/15.
 */
$(document).ready(function(){
    $.ajax({
         url: "/6"

    }).done(function(response){

        var $bodyAppend = "<img src='" + response.value.img + "'></img>";

        console.log(response);
        console.log(response.value.img);

        $('body').append($bodyAppend);
    })

});