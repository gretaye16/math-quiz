player1_name=localStorage.getItem("player1_name");
player2_name=localStorage.getItem("player2_name");

player1_score=0;
player2_score=0;

document.getElementById("player1_name").innerHTML=player1_name+" : ";
document.getElementById("player2_name").innerHTML=player2_name+" : ";

document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;

document.getElementById("player_question").innerHTML="questionturn-"+player1_name;
document.getElementById("player_answer").innerHTML="answerturn-"+player2_name;

function send() {

    getword1=document.getElementById("number1").value;
    getword2=document.getElementById("number2").value;
    number=getword1*getword2

    question="<h4 id='word_display'> Question. "+getword1+"X"+getword2+"</h4>"
    box="<br> answer:<input id='input_check_box' type='text'>"
    check1="<br> <br> <button class='btn btn-info' onclick='check()'> CHECK </button>"
    document.getElementById("output").innerHTML=question+box+check1
}

question_turn="player1";
answer_turn="player2";
function check() {

    get_answer=document.getElementById("input_check_box").value;
    if(get_answer==number)
    {
        if(answer_turn=="player1")
        {
            player1_score=player1_score=1;
            document.getElementById("player1_score").innerHTML=player1_score;
        }
        else
        {
            player2_score=player2_score=2;
            document.getElementById("player2_score").innerHTML=player2_score;
        }
    }
    if(question_turn=="player1")
    {
        question_turn="player2"
        document.getElementById("player_question").innerHTML="questionturn"+player2_name;
    }
    else
    {
        question_turn="player1"
        document.getElementById("player_question").innerHTML="questionturn"+player1_name;
    }
    if(question_turn=="player1")
    {
        question_turn="player2"
        document.getElementById("player_answer").innerHTML="answerturn"+player2_name;
    }
    else
    {
        answer_turn="player1"
        document.getElementById("player_answer").innerHTML="answerturn"+player1_name;
    }
    document.getElementById("output").innerHTML="";
    

}