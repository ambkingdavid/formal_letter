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
    $("#letter").submit(function (event) {
        event.preventDefault();
        const fullName = $("#input0").val();
        const homeAddress = $("#input1").val();
        const local = $("#input1-1").val();
        const yourCity = $("#input2").val();
        const yourState = $("#input3").val();
        const country = $("#input3-3").val();
        // const day = $("#input4").val();
        const day = letterDay($("#input4").val());
        const month = $("#input5").val();
        const year = $("#input6").val();
        const date = currentDate(day, month, year);
        const receiverName = $("#input7").val();
        const receiverAddress = $("#input8").val();
        const receiverLocal = $("#input8-1").val();
        const receiverState = $("#input8-2").val();
        const title = $("#input9").val().toUpperCase();



        $(".input0").text(fullName);
        $(".input1").text(homeAddress);
        $(".input2").text(yourCity);
        $(".input2-1").text(local);
        $(".input3").text(yourState);
        $(".input3-3").text(country);
        $(".input4").text(date);
        $(".input5").text(receiverName);
        $(".input6").text(receiverAddress);
        $(".input7").text(title);




        $("#input1").val(" ");
        $("#input2").val(" ");
        $("#input3").val(" ");
        $("#input4").val(" ");
        $("#input5").val(" ");
        $("#input6").val(" ");
        $("#input7").val(" ");
        $("#input8").val(" ");
        $("#input9").val(" ");
        $("#input10").val(" ");

        $(".hide").fadeOut(600);
        $("#hide").fadeIn(600);




    });

    $("#hide").click(function () {
        $(".hide").fadeIn(600);
        $("#hide").fadeOut(600);


    })




    //flash card operations
    $(document).ready(function () {
        $("#height1").click(function () {
            $("#reveal1").fadeIn();
            $("#height1").fadeOut();
        })

        $("#pos1").click(function () {
            $("#height1").fadeIn();
            $("#reveal1").fadeOut();
        })

        $("#darkMode").click(function() {

            $("body").removeClass("normal")
            $(".white").removeClass("normalMode")

            $("body").addClass("black")
            $(".white").addClass("blackBorder")
        })

        $("#normalMode").click(function() {

            $("body").removeClass("black")
            $(".white").removeClass("blackBorder")

            $("body").addClass("normal")
            $(".white").addClass("normalMode")

        })

       
    });


});

