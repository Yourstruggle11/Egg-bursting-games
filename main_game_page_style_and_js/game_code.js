$(document).ready(function () {
 

    //creating counter     //codes for countdown
    var button = $("button");
    button.click(function () {

    
        let time = 1.5;
        var SetTime = time * 60;
        var interval = setInterval(timer, 1000)
        function timer() {
            let min = Math.floor(SetTime / 60);
            let sec = SetTime % 60;

            //console.log(min);
            //console.log(sec);

            SetTime--;

            sec = sec < 10 ? "0" + sec : sec;
            min = min < 10 ? "0" + min : min;

            var countdown = document.getElementById("countdown");
            countdown.innerHTML = `Time Left : ${min}:${sec}`;
            console.log(SetTime);


            if (min == 0 & sec == 0) {
                clearInterval(interval);
                setTimeout(function(){
                    alert("opps you lost the game! better luck next time")
                    window.location.href = "index.html";
                },400)

            }

            /*var score =  prompt("Enter Your Name Gamer!");

if(score != null){
          console.log((1+SetTime) * (100/90) );
      }
      else{
          window.location.href = "index.html";
      }*/
            //codes for showing scores

            var count = 0;
            click.click(function () {
                count++;
                if (count == 3) {
                    setTimeout(function () {
                        var name = prompt("Enter Your Name Gamer!");

                        if (name != null) {
                            alert("hello "+ name + " your score is : " + Math.floor((1+SetTime) * (100/90)));
                            window.location.href = "index.html";
                        }
                        else {
                            window.location.href = "index.html";
                        }
                    }, 400)
                }
            })
        }

        //codes for start the games
        let dialogBox = $(".dialog_box");
        dialogBox.css("display", "none");

        //codes for start the animation
        let animation1, animation2, animation3;

        animation1 = $("#animation1");
        animation2 = $("#animation2");
        animation3 = $("#animation3");

        animation1.addClass("egg1_animation");
        animation2.addClass("egg2_animation");
        animation3.addClass("egg3_animation");



    })

    //codes for broke eggs

    var egg1 = $("#eggs1");
    var egg2 = $("#eggs2");
    var egg3 = $("#eggs3");
    var click = $(".click")

    egg1.click(function () {
        egg1.addClass("broken_egg")
    })
    egg2.click(function () {
        egg2.addClass("broken_egg")
    })
    egg3.click(function () {
        egg3.addClass("broken_egg")
    })









})