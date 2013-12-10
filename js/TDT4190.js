var i = -1;  // current questions
var answered = false;

shuffle(questions);
var E2006 = false;
var E2008 = false;
var E2011 = true;
var E2012 = true;
var valid = false;

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
    answered = false;
    valid = false;
    while (!valid) {
        i += 1;
        if (i+1 >= questions.length) {
            finished();
            return;
        }
        valid = true;
        if (!E2011 && (questions[i].chapter == "Eksamen 2011:")){
            valid = false; }
        if (!E2012 && (questions[i].chapter == "Eksamen 2012:")){
            valid = false; }
        if (!E2008 && (questions[i].chapter == "Eksamen 2008:")){
            valid = false; }
        if (!E2006 && (questions[i].chapter == "Eksamen 2006:")){
            valid = false; }
    }
    $('#question').html(questions[i].question);
    $('#chapter').html(questions[i].chapter);
}

function finished() {
    $('.hero-unit').html('<a href="" class="btn btn-primary btn-large">AGAIN!</a>');
    $('.hero-unit').prepend("I has no more questions to gif u. sry :(<br /><br />");
    i = -1;
}


 $(document).ready(function() {
    loadNextQuestion();

    $(":checkbox").click(
    function () {
        var value = false;
        if ($(this).is(':checked'))
            value = true;
        if ($(this).parent().attr('id') == 2006){
            E2006 = value;
            alert("E2006 " + value);
        }
        else if ($(this).parent().attr('id') == 2008)
            E2008 = value;
        else if ($(this).parent().attr('id') == 2011)
            E2011 = value;
        else if ($(this).parent().attr('id') == 2012)
            E2012 = value;
    }
);
 });