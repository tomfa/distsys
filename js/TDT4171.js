var i = -1;  // current questions
var answered = false;

shuffle(questions);

// Shuffles array
function shuffle(o){
    for(var j, x, i = o.length; i > 0; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x){};
        return o;
}

function submitAnswer() {
    if (answered)
        loadNextQuestion();
    else {
        $('#answer').html(questions[i].answer);
        answered = true;
    }
}

function loadNextQuestion() {
    $('#answer').html("");
    i += 1;
    answered = false;
    if (i+1 >= questions.length) {
        finished();
        return;
    }
    $('#question').html(questions[i].question);
}

function finished() {
    $('.hero-unit').html('<a href="" class="btn btn-primary btn-large">AGAIN!</a>');
    $('.hero-unit').prepend("I has no more questions to gif u. sry :(<br /><br />");
    i = -1;
}


 $(document).ready(function() {
    loadNextQuestion();

    $(".ai2").hover(
    function () {
        $(this).addClass("hover");
    },
    function () {
        $(this).removeClass("hover");
    }


);
 });