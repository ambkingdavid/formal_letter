function currentDate(num1, num2, num3) {
    return num1 + " of " + num2 + ", " + num3;
}

function letterDay(new_day) {
    const newDay = new_day

    if (newDay[newDay.length - 1] >= 4) {
        return newDay + "th";
    }
    else if (newDay[newDay.length - 1] == 1) {
        return newDay + "st";
    }
    else if (newDay[newDay.length - 1] == 2) {
        return newDay + "nd";
    }
    else if (newDay[newDay.length - 1] == 3) {
        return newDay + "rd";
    };
    return "fail";
}

$(document).ready(function () {
    $("#letter1").submit(function (event) {
        event.preventDefault();

        //variable declarations for application letter
        const fullName = $("#input0").val();
        const homeAddress = $("#input1").val();
        const local = $("#input1-1").val();
        const yourCity = $("#input2").val();
        const yourState = $("#input3").val();
        const country = $("#input3-1").val();
        const day = letterDay($("#input4").val());
        const month = $("#input5").val();
        const year = $("#input6").val();
        const date = currentDate(day, month, year);
        const receiverName = $("#input7").val();
        const receiverAddress = $("#input8").val();
        const receiverLocal = $("#input8-1").val();
        const receiverState = $("#input8-2").val();
        const title = $("#input9").val().toUpperCase();


        //madlibs for application letter
        $(".input0").text(fullName);
        $(".input1").text(homeAddress);
        $(".input2").text(yourCity);
        $(".input2-1").text(local);
        $(".input3").text(yourState);
        $(".input3-1").text(country);
        $(".input4").text(date);
        $(".input5").text(receiverName);
        $(".input6").text(receiverAddress);
        $(".input6-1").text(receiverLocal);
        $(".input6-2").text(receiverState);
        $(".input7").text(title);



        //reset input fields for application letter
        $("#input0").val(" ");
        $("#input1").val(" ");
        $("#input1-1").val(" ");
        $("#input2").val(" ");
        $("#input3").val(" ");
        $("#input3-1").val(" ");
        $("#input4").val(" ");
        $("#input5").val(" ");
        $("#input6").val(" ");
        $("#input7").val(" ");
        $("#input8").val(" ");
        $("#input8-1").val(" ");
        $("#input8-2").val(" ");
        $("#input8-3").val(" ");


        //submitting forms
        $(".form1").fadeOut(600);
        $(".hide-1").fadeIn(600);
        
    });

    //Dissappering Act for application letter
    $(".hide-1").click(function () {
        $(".form1").fadeIn(600);
        $(".hide-1").fadeOut(600);
    });

    $(".height1").click(function () {
        $(".form1").fadeIn();
        $("#height1").fadeOut();
    });

    $("#pos1").click(function () {
        $("#height1").fadeIn();
        $(".form1").fadeOut();
       
        
    });





    //variable declarations for Resignation letter
    $("#letter2").submit(function (event) {
        event.preventDefault();
        const fullName = $("#input0-1").val();
        const homeAddress = $("#input1-1").val();
        const local = $("#input1-1-1").val();
        const yourCity = $("#input2-1").val();
        const yourState = $("#input3-1").val();
        const country = $("#input3-1-1").val();
        const day = letterDay($("#input4-1").val());
        const month = $("#input5-1").val();
        const year = $("#input6-1").val();
        const date = currentDate(day, month, year);
        const receiverName = $("#input7-1").val();
        const receiverAddress = $("#input8-1").val();
        const receiverLocal = $("#input8-1-1").val();
        const receiverState = $("#input8-2-1").val();
        const title = $("#input9-1").val().toUpperCase();


        //madlibs for Resignation letter
        $(".input0-1").text(fullName);
        $(".input1-1").text(homeAddress);
        $(".input2-1").text(yourCity);
        $(".input2-1-1").text(local);
        $(".input3-1").text(yourState);
        $(".input3-1-1").text(country);
        $(".input4-1").text(date);
        $(".input5-1").text(receiverName);
        $(".input6-1").text(receiverAddress);
        $(".input6-1-1").text(receiverLocal);
        $(".input6-2-1").text(receiverState);
        $(".input7-1").text(title);



        //reset input fields for Resignation letter
        $("#input0-1").val(" ");
        $("#input1-1").val(" ");
        $("#input1-1-1").val(" ");
        $("#input2-1").val(" ");
        $("#input3-1").val(" ");
        $("#input3-1-1").val(" ");
        $("#input4-1").val(" ");
        $("#input5-1").val(" ");
        $("#input6-1").val(" ");
        $("#input7-1").val(" ");
        $("#input8-1").val(" ");
        $("#input8-1-1").val(" ");
        $("#input8-2-1").val(" ");
        $("#input8-3-1").val(" ");


        //submiting forms
        $(".form2").fadeOut(600);
        $(".hide-2").fadeIn(600);
    });


    // disappearing acts for resignation letter
    $(".hide-2").click(function () {
        $(".form2").fadeIn(600);
        $(".hide-2").fadeOut(600);


    });

    $(".height2").click(function () {
        $(".form2").fadeIn();

        $("#height1").fadeOut();
    });

    $("#pos2").click(function () {

        $("#height1").fadeIn();
        $(".form2").fadeOut();
    });





    //variable declarations for Resignation letter
    $("#letter3").submit(function (event) {
        event.preventDefault();
        const fullName = $("#input0-2").val();
        const homeAddress = $("#input1-2").val();
        const local = $("#input1-1-2").val();
        const yourCity = $("#input2-2").val();
        const yourState = $("#input3-2").val();
        const country = $("#input3-1-2").val();
        const day = letterDay($("#input4-2").val());
        const month = $("#input5-2").val();
        const year = $("#input6-2").val();
        const date = currentDate(day, month, year);
        const receiverName = $("#input7-2").val();
        const receiverAddress = $("#input8-2").val();
        const receiverLocal = $("#input8-1-2").val();
        const receiverState = $("#input8-2-2").val();
        const title = $("#input9-2").val().toUpperCase();


        //madlibs for Resignation letter
        $(".input0-2").text(fullName);
        $(".input1-2").text(homeAddress);
        $(".input2-2").text(yourCity);
        $(".input2-1-2").text(local);
        $(".input3-2").text(yourState);
        $(".input3-1-2").text(country);
        $(".input4-2").text(date);
        $(".input5-2").text(receiverName);
        $(".input6-2").text(receiverAddress);
        $(".input6-1-2").text(receiverLocal);
        $(".input6-2-2").text(receiverState);
        $(".input7-2").text(title);



        //reset input fields for Resignation letter
        $("#input0-2").val(" ");
        $("#input1-2").val(" ");
        $("#input1-1-2").val(" ");
        $("#input2-2").val(" ");
        $("#input3-2").val(" ");
        $("#input3-1-2").val(" ");
        $("#input4-2").val(" ");
        $("#input5-2").val(" ");
        $("#input6-2").val(" ");
        $("#input7-2").val(" ");
        $("#input8-2").val(" ");
        $("#input8-1-2").val(" ");
        $("#input8-2-2").val(" ");
        $("#input8-3-2").val(" ");


        //submiting forms
        $(".form3").fadeOut(600);
        $(".hide-3").fadeIn(600);
    });


    // disappearing acts for resignation letter
    $(".hide-3").click(function () {
        $(".form3").fadeIn(600);
        $(".hide-3").fadeOut(600);


    });

    $(".height3").click(function () {
        $(".form3").fadeIn();

        $("#height1").fadeOut();
    });

    $("#pos3").click(function () {

        $("#height1").fadeIn();
        $(".form3").fadeOut();
    });
})





//setting dark mode
$(document).ready(function () {

    $("#darkMode").click(function () {

        $("body").removeClass("normal")
        $(".white").removeClass("normalMode")

        $("body").addClass("black")
        $(".white").addClass("blackBorder")
    })

    $("#normalMode").click(function () {

        $("body").removeClass("black")
        $(".white").removeClass("blackBorder")

        $("body").addClass("normal")
        $(".white").addClass("normalMode")

    })


});



