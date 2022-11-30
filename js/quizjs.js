function begin_quiz(){    /* function to show the first question and the timer */
    document.getElementById("question-01").style.display = "block";
    document.getElementById("timer").style.display = "block";
    document.getElementById("rule-box").style.display = "none"; 
    timer();
}

function q2(){    /* functions to get the radio input and display each question */
    document.getElementById("question-02").style.display = "block";
    document.getElementById("question-01").style.display = "none";
    inputAnswers[0] = getRadioValue(a1);  /* getRadioValue function to get the radio input */
}

function q3(){
    document.getElementById("question-03").style.display = "block";
    document.getElementById("question-02").style.display = "none";
    inputAnswers[1] = getRadioValue(a2);
}

function q4(){
    document.getElementById("question-04").style.display = "block";
    document.getElementById("question-03").style.display = "none";
    inputAnswers[2] = getRadioValue(a3);
}

function q5(){
    document.getElementById("question-05").style.display = "block";
    document.getElementById("question-04").style.display = "none";
    inputAnswers[3] = getRadioValue(a4);
}

function q6(){
    document.getElementById("question-06").style.display = "block";
    document.getElementById("question-05").style.display = "none";
    inputAnswers[4] = getRadioValue(a5);
}

function q7(){
    document.getElementById("question-07").style.display = "block";
    document.getElementById("question-06").style.display = "none";
    inputAnswers[5] = getRadioValue(a6);
}

function q8(){
    document.getElementById("question-08").style.display = "block";
    document.getElementById("question-07").style.display = "none";
    inputAnswers[6] = getRadioValue(a7);
}

function q9(){
    document.getElementById("question-09").style.display = "block";
    document.getElementById("question-08").style.display = "none";
    inputAnswers[7] = getRadioValue(a8);
}

function q10(){
    document.getElementById("question-10").style.display = "block";
    document.getElementById("question-09").style.display = "none";
    inputAnswers[8] = getRadioValue(a9);
}

function submitLast(){   /* function to hide the timer and show the results page */
	inputAnswers[9]=getRadioValue(a10);
    document.getElementById("timer").style.display ='none';
	results();
}

/* array to store all the radio input values */
let inputAnswers = [];  

/* array with all the correct answers to compare with the input values */
let answers = ["Warriors","Steph Curry","Wilt Chamberlain","Bill Russel",
                "Chicago Bulls","Derrick Rose","30","Steph Curry","Los Angeles Lakers","Steph Curry"];

/* getRadioValue function to get the radio input from the user */
function getRadioValue(radioArray){	          

	for(i = 0; i < radioArray.length; i++){
		if(radioArray[i].checked){
			return radioArray[i].value;
		}
	}
	return "";
}

/* variables used to store the radio inputs */
let a1 = document.getElementsByName("question1");
let a2 = document.getElementsByName("question2");
let a3 = document.getElementsByName("question3");
let a4 = document.getElementsByName("question4");
let a5 = document.getElementsByName("question5");
let a6 = document.getElementsByName("question6");
let a7 = document.getElementsByName("question7");
let a8 = document.getElementsByName("question8");
let a9 = document.getElementsByName("question9");
let a10 = document.getElementsByName("question10");

/* function used to show the final results */
function results(){	     

	document.getElementById("results").style.display = "block";   
    document.getElementById("question-10").style.display = "none";   /* hiding all the question sections */
    document.getElementById("question-09").style.display = "none";
    document.getElementById("question-08").style.display = "none";
    document.getElementById("question-07").style.display = "none";
    document.getElementById("question-06").style.display = "none";
    document.getElementById("question-05").style.display = "none";
    document.getElementById("question-04").style.display = "none";
    document.getElementById("question-03").style.display = "none";
    document.getElementById("question-02").style.display = "none";
    document.getElementById("question-01").style.display = "none";

	let points = 0;
	let correct = 0;
	let incorrect = 0;

    /* for-loop to check if the answers are correct and allocate points accordingly */
	for(let x = 0; x < inputAnswers.length;x++){
		if(inputAnswers[x] == answers[x]){
			correct++;
			points+=2;
		}
		else{
            points--;
			incorrect++;
		}
				
	}

    /* using inner-HTML to show the answers in the section */
    document.getElementById("seconds").innerHTML = timeEliminated;
	document.getElementById("correct").innerHTML = correct;
	document.getElementById("incorrect").innerHTML = incorrect;
	document.getElementById("points").innerHTML = points;

    /* code to change the background color according to the score */
	if(points>0){
		document.getElementById("results").style.backgroundColor = "green";
	}
	else{
		document.getElementById("results").style.backgroundColor = "red";
	}
}

let timeEliminated = 0;


function timer(){	  /* function to show the timer */
    let time_left = 60;

    runTimer();

    function display_two_digits( t ){  /* using 2-digits for the timer */	
    	let x;
    	if(t <= 9 ){
    		x = "0" + t;
    	}
    	else{
    		x = t;
    	}
        return x;
    }

    function runTimer(){ /* function to update the timer every second */
        time_left--;
        if ( time_left < 0 ) {
        	document.getElementById("timer").innerHTML = "Time Out!";
            force_stop();
        } 
        else {
            document.getElementById("timer").innerHTML =  '00:' + display_two_digits(time_left);
            timeEliminated++;
            setTimeout( runTimer,1000);
        }
    }    

    function force_stop(){	      /* force stop the quiz if a minute is over */
        for(let i = inputAnswers.length; i < 10;i++){
            inputAnswers[i]="";
        }
	    results();
    }
}


