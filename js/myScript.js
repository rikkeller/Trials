"use strict";
var scrollToElement = function(element) {
    var elementTop = $(element).offset().top;
    $("html, body").animate(
        {    scrollTop: elementTop }, //can add or subtract pixels
        2000 // speed of animation
    );
};





var toggleVideo = function() {
    var v = $("video")[0];
    var $btn = $('.toggle-vid-btn');
    v.volume = 1; // max the volume
    
    if (v.paused) {
        v.play();
        // display pause
        $btn.text('| |');
    } else {
        v.pause();
        // display play
        $btn.text('>');
    }
};



var dna = {};
dna.ALL_POINTS = 3;
dna.setup = function() {
    dna.clicked_points = 0;  
    $('.dna-point').click(function() {
        if ($(this).hasClass("clicked")) {
            // do nothing
        } else {
            dna.point_click();
            $(this).addClass('clicked');
        }
    });
    $('.toggle-vid-btn').click(toggleVideo);
};
$(document).ready(dna.setup);

dna.point_click = function() {
  dna.clicked_points++; // dna.clicked_points = dna.clicked_points + 1;
   if (dna.clicked_points == dna.ALL_POINTS) {
       dna.all_points_clicked();
   }
};

dna.all_points_clicked = function() {
    // all points clicked
   // hide dna, play video
   $('.dna').fadeOut();
   $('.toggle-vid').fadeIn();
   toggleVideo();
};






var modal = {};
modal.setup = function() {
  $("#modal-overlay").click(modal.close);  
  $("#modal").click(function(e) {
    e.stopPropagation(); // we only won't clicks on modal-overlay directly to close the window, not on modal
  });
};
$(document).ready(modal.setup);

modal.open = function(content) {
    $("#modal-overlay").show();
    $("#modal-content").html(content);
    $("#modal").fadeIn();
};

modal.close = function() {
    $("#modal-overlay").hide();
    $("#modal").fadeOut();
};



var dots = {};
dots.setup = function() {
    $('.dot').click(function() {
        var content = $(this).find('.modal-content').html();
        modal.open(content);
    });
};
$(document).ready(dots.setup);



var cast = {};
cast.DATA = [{img: "../img/ari.jpg",
             name: "Ari Millen",
             description: 'Born in Kingston, Canada, Millen became serious about pursuing acting in his senior year of high school and went on to receive training at Ryerson University. After graduation, he began with small roles on Regenesis, Nikita, Rookie Blue and Played and was featured in the 100-person art project that was the subject of Ryan Hughes short film, Makeout. Director Rodrigo Gudiño took notice of Millen and cast him in the sixth episode of the Copperheart Entertainment horror anthology, Darknet, now available on Netflix US, Canada, UK and Ireland, which compliments his ongoing relationship with the Foresight Features team for which he played Dr. Igora in the cult hit, Monsters Brawl, followed by director John Geddes Exit Humanity and, from the pen of Tony Burgess, Ejecta and Hellmouth.as a number of male clones (see here) – the result of a sister project to Project Leda: Project Castor, a top-secret military program. Unlike their Leda counterparts, the Castor clones have always been aware of what they are, being raised together by the US military. The first Castor clone to be introduced to the viewers is Mark Rollins, coming off as a homicidal Prolethean, before being exposed as an undercover Castor agent. '}, 
             //http://www.imdb.com/name/nm2826395/bio?ref_=nm_ov_bio_sm//
             {img: "../img/tat.jpg",
             name: "Tatiana Maslany",
             description: 'Tatiana Maslany as a number of clones (Sarah Manning, Beth Childs, Katja Obinger, Alison Hendrix, Cosima Niehaus, Helena, Rachel Duncan, Jennifer Fitzsimmons, Tony Sawicki, Krystal Goderitch), all born in 1984 to various women by in vitro fertilisation. Their creation was referred to as Project Leda. The series focuses on Sarah Manning, a small-time con woman and orphan who is the only clone to have a biological daughter. (All other clones were presumed to be sterile before Sarah was discovered, with one of the original scientists revealing that the clones, as \'prototypes\', were all designed to be sterile, although there is speculation that Helena may also be able to conceive given her origin as Sarah\'s specific twin.'},
             {img: "../img/jordan.jpeg",
             name: "Jordan Gavaris",
             description: "Jordan Gavaris as Felix \"Fee\" Dawkins, Sarah's foster brother and confidant. He identifies as a modern artist, but moonlights as a prostitute. He is the first person Sarah confides in about the existence of clones, and has developed his own friendship with Alison in particular while helping her cope with the stress of her existence as a clone"}]