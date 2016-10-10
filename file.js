$(document).ready(function(){

 var whichAsk = 0; 

$(".start_text").click(function(){
    //console.log("this works");
    $(".ask_one").show();
    $(".answer_one").show();  
    $(".start_text").hide();
    $(".submit_text").show();
    console.log(whichAsk);
});/// - start game, first question show

var askAnswer = "";
$(".pick_text").click(function(){
  askAnswer = (this.id);
});/// - user selects answer


function q1Hide(){
    $(".ask_one").hide();
    $(".answer_one").hide();
};/// - hide question 1

function q2Show(){
    $(".ask_two").show();
    $(".answer_two").show();
};/// - show question 2

function q2Hide(){
    $(".ask_two").hide();
    $(".answer_two").hide();
};/// - hide question 2

function q3Show(){
    $(".ask_three").show();
    $(".answer_three").show();
};/// - show question 3

$(".submit_text").click(function(){
  whichAsk++;
  console.log(askAnswer);
  checkAnswer(askAnswer);
});

  function checkAnswer(answer){
    if (whichAsk == 1 && answer == "answer_b"){
      console.log("answer one is right");
      $(".q1_boot").show();
      q1Hide();
      q2Show();
    }
    else if (whichAsk == 1 && answer !== "answer_b"){
      console.log("answer one is wrong");
      $(".q1_boot").show();
      $(".q1_boot").css({"outline": "2px dotted red"});
      q1Hide();
      q2Show();
    }
    else if (whichAsk == 2 && answer == "answer_a") {
      console.log("answer two is right");
      $(".q2_boot").show();
      q2Hide();
      q3Show();
    }
    else if (whichAsk == 2 && answer !== "answer_a") {
      console.log("answer two is wrong");
      $(".q2_boot").show();
      $(".q2_boot").css({"outline": "2px dotted red"});
      q2Hide();
      q3Show();
    }
    else if (whichAsk == 3 && answer == "answer_c") {
      console.log("answer three is right");
      $(".q3_boot").show();
      $("submit_text").text("you win!")
    }
    else if (whichAsk == 3 && answer !== "answer_c") {
      console.log("answer three is wrong");
      $(".q3_boot").show();
      $(".q3_boot").css({"outline": "2px dotted red"});
    }
    else {
    }
  };/// - result of answer selected by user*/

});
