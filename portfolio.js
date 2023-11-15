// typingEffect for About me

$(document).ready(function() {
    var i = 0;
    var txt = 'I am an enthusiastic web developer based in Nigeria, with a rich experience of over 6 years in website & product design.';
    var speed = 50;

    function typeWriter() {
        if (i < txt.length) {
            $(".Abt-me").text($(".Abt-me").text() + txt.charAt(i));
            i++;
            setTimeout(typeWriter, speed);
        }
    }

    // Trigger the typing effect
    typeWriter();
});


