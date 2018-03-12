$(document).ready(function () {
  

    $.ajax({
        type: "GET",
        url: "../json/gornjimeni.json",
        dataType: "json",
        success: function (data) {
            napravigornjimeni(data)
        },

        error: function (xhr,status,err) {
            console.log(err);
        }
    });

});

function napraviGaleriju(data) {
    $.each(data, function (indexInArray, valueOfElement) { 
        console.log(valueOfElement);
         
    });
}

function napravigornjimeni(data) {
    var gornjimeni = document.getElementById("gornjiMeni")
    var sadrzaj = ""
    
    for(var i = 0;i<data.length;i++){
        sadrzaj+= `<li>
                     <a href="${data[i].link}" class="${data[i].klasa}">${data[i].naziv}</a>
                   </li>`
    }
    gornjimeni.innerHTML=sadrzaj;
}

    //slider

$(function() {

    //settings for slider
    var width = 1200;
    var animationSpeed = 1000;
    var pause = 3000;
    var currentSlide = 1;

    //cache DOM elements
    var $slider = $('#slider');
    var $slideContainer = $('.slides', $slider);
    var $slides = $('.slide', $slider);

    var interval;

    function startSlider() {
        interval = setInterval(function() {
            $slideContainer.animate({'margin-left': '-='+width}, animationSpeed, function() {
                if (++currentSlide === $slides.length) {
                    currentSlide = 1;
                    $slideContainer.css('margin-left', 0);
                }
            });
        }, pause);
    }
    function pauseSlider() {
        clearInterval(interval);
    }

    $slideContainer
    .on('mouseenter', pauseSlider)
    .on('mouseleave', startSlider);

startSlider();


});


//dropDownmeni

$(function(){
    $(".main li").hover(
        function(){
            //$('ul.sub', this).slideDown(500);
            //$('>ul.sub', this).slideDown(500);
            $('>ul.sub:not(:animated)', this).slideDown(500);
        },
        function(){
            //$('ul.sub',this).slideUp(300);
            $('>ul.sub',this).slideUp(300);
        }
    );
});


$("#box3").click(function(){
    $("#box3").animate({
        
        opacity: '0.5',
        height: '250px',
        width: '250px'
    });
   
});

$("#box3").dblclick(function(){
    $("#box3").animate({
        
        opacity: '0.5',
        height: '400px',
        width: '400px'
    });
   
});

$("#box2").click(function(){
    $("#box2").animate({
        
        opacity: '0.5',
        height: '250px',
        width: '250px'
    });
   
});

$("#box2").dblclick(function(){
    $("#box2").animate({
        
        opacity: '0.5',
        height: '400px',
        width: '400px'
    });
   
});

$("#box1").click(function(){
    $("#box1").animate({
        
        opacity: '0.5',
        height: '250px',
        width: '250px'
    });
   
});

$("#box1").dblclick(function(){
    $("#box1").animate({
        
        opacity: '0.5',
        height: '400px',
        width: '400px'
    });
   
});


