$(document).ready(function(){

var whichAsk = 0; 
var askAnswer = "";
var number = 0;
var answer = "";

$(".start_text").click(function(){
    $(".start_wrap").hide();
    $(".submit_wrap").show();
    $(".ask_one").show();  
    $(".answer_one").show();  
    $(".hiker_img").hide();
    $(".hiker_img2").show();
    $(".pick_text").css('color','#47456D');
    console.log(whichAsk);
});/// - start game, show first question

$(".pick_text").click(function(){
  askAnswer = (this.id);
  console.log(askAnswer);
  $(this).parent().find('.pick_text').css('color','#47456D');
  $(this).css('color','#99D1BE');
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
  if (answer == ""){
    alert("Please select an answer!");
    answer = 1;
  }else {
    console.log("Else");
    whichAsk++;
    checkAnswer(askAnswer)
    answer = 0;
  }
});///- check if answer is selected and if it's right


  function checkAnswer(answer){
    if (whichAsk == 1 && answer == "answer_b"){
      console.log("answer one is right");
      number = number+1
      q1Hide();
      q2Show();
    }
    else if (whichAsk == 1 && answer !== "answer_b"){
      console.log("answer one is wrong");
      number = 0;
      q1Hide();
      q2Show();
    } 
    else if (whichAsk == 2 && answer == "answer_a") {
      console.log("answer two is right");
      number = number+1
      q2Hide();
      q3Show();
    }
    else if (whichAsk == 2 && answer !== "answer_a") {
      console.log("answer two is wrong");
      number = number;
      q2Hide();
      q3Show(); 
    }
    else if (whichAsk == 3 && answer == "answer_c") {
      console.log("answer three is right");
      number = number+1
      $(".number").html(number);
      $(".results").show();
      $(".submit_wrap").hide();
      $(".ask_three").hide();  
      $(".answer_three").hide();     
    }
    else if (whichAsk == 3 && answer !== "answer_c") {
      console.log("answer three is wrong");
      $(".number").html(number);
      $(".results").show();
      $(".submit_wrap").hide();
      $(".ask_three").hide();  
      $(".answer_three").hide();  
    }
    else {
    }
  };/// - result of answer selected by user*/

  $(".button").click(function(){
    $(".start_wrap").show();
    $(".results").hide();  
    $(".hiker_img").show();
    $(".hiker_img2").hide();
    whichAsk = 0; 
    askAnswer = 0;
    answer = "";
});/// - restart game

});
