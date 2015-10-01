/**
 * Created by m3rkz0r on 10/1/15.
 */
$(document).ready(function(){
    var pool = [0, 1, 2, 3, 4, 5];

    function randomImages() {

        for (var i = 1; i < 6; i++) {

            var newNum = numPool();

            console.log(i);

            var newId = 'id' + i;

            $.ajax({
                url: "/" + newNum

            }).done(function (response) {

                console.log(newNum);
                var $bodyAppend = "<div class='container'><img class='generatedImg' src='" + response.value.img + "'></img><button id=" + response.value.id + " class='newImg'>Get New Image</button></div>";

                $('.appendedInfo').append($bodyAppend);
            })//end done
        }//end forLooop




        //We moved pool to here so it always will reinitalize the array.
        pool = [0, 1, 2, 3, 4, 5];
    }//end randomImages

    $(document).on("click", ".newImg",function(event){
        $.ajax({
            url: "/" + pool[pickRandomNum()]
        }).done(function(response){

            //var $newAppend = "<img class='nextGenImg' src='" + response.value.img + "'></img>";
            //console.log("clicked");
            //console.log('THIS IS THE MOTHER LOVIN ID' , event.target.id);
            //
            //console.log($(this));

            var queryString = '#' + event.target.id;

            $(queryString).siblings("img").attr('src', response.value.img);

            //$(this).parent().children("img").remove();
        });//end done
    });///end click

    // this removes the current generated images then makes new ones
    $(".randomPic").click(function(){
        $(".appendedInfo").empty();
        randomImages();
    });

    //this calls the randomImages function.
    randomImages();


    //this creates a random number between 1-6
    function pickRandomNum(){
        var randomNum = Math.floor((Math.random() * pool.length));

        return randomNum;
    }

    //this function creates a unique random index.
    function numPool() {
        var drawn = pool.splice(pickRandomNum(),1);
        console.log("Pool values" + pool);
        return drawn[0];
    }//end numPool



});//end document ready