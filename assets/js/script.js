$(document).ready(function () {
    
    $(".clickBtn").click(function () { 
       $(".navMenu").slideToggle();
       $(".fa-bars{").toggleClass(activeBars);
       $(".fa-x").toggleClass(activeX);
        
    });


    $('.owl1').owlCarousel({
        nav: true,
        dots: true,
        loop:true,
        margin:10,
        nav:true,
        items:1,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })

    
    $('.owl2').owlCarousel({
        nav: true,
        dots: true,
        loop:true,
        items:1,
        margin:10,
        nav:true,
        autoplay: true, 
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

    $('.owl3 , .owl4').owlCarousel({
        nav: true,
        dots: true,
        loop:true,
        items:1,
        margin:10,
        nav:true,
        autoplay: true, 
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
    $('.owl5').owlCarousel({
        nav: true,
        dots: true,
        loop:true,
        items:1,
        margin:10,
        margin:10,
        nav:true,
        autoplay: true, 
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:2
            }
        }
    });
 
                     // ( childParent , child , addClass )
    dropArrowRotat((".prante") , (".fa-caret-down") , ("dropIcon"));
                      // ( childParent , child , addClass )
    dropArrowRotat((".dropmenu-1") , (".dropmenu-1") , ("dropmenuActive"));
                    // ( childParent , child , addClass )
    dropArrowRotat((".dropmenu-2") , (".dropmenu-2") , ("dropmenuActive"));

    // for Digital marketining Cards rotation
            // ( childParent , child , addClass )
            dropArrowRotat((".imgIcon") , (".imgIcon") , ("imgIconActive"));
             // ( childParent , child , addClass )
             dropArrowRotat((".fa-money-check") , (".fa-money-check") , ("iActive"));

    function dropArrowRotat ( childParent , child , addClass ){ 
        var childParent = $(childParent).parent();       
    $(childParent).hover(function () {
      $(this).find(child).addClass(addClass); 
        }, function () {
            $(this).find(child).removeClass(addClass); 
        }
    ); 
}

                // ( childParent , child , addClass )
    toggeling (".accordinHead" , ".accordinBody" , "accordinBodyActive" );
                // ( childParent , child , addClass )
    toggeling (".icons" , ".fa-plus" , "plusActive" )
                // ( childParent , child , addClass )
    toggeling (".icons" , ".fa-minus" , "minusActive" )

function toggeling ( childParent , child , addClass ){ 
    var childParent = $(childParent).parent(); 
    $(childParent).click(function () { 
     $(this).find(child).toggleClass(addClass);
        
    });
  
}

// ( childParent , child , addClass )
toggeling (".digtMarkAccordionHead" , ".digtMarkAccordionBody" , "accordinBodyActive" );
// ( childParent , child , addClass )
toggeling (".icons" , ".fa-arrow-down" , "plusActive" )
// ( childParent , child , addClass )
toggeling (".icons" , ".fa-arrow-up" , "minusActive" )

// popop

$('.enquireBtn').click(function(){
    $('.hideForm').fadeIn();
});

// Close the popup when clicking on the close button
$('.closeBtn').click(function(){
    $('.hideForm').fadeOut();
});

// Close the popup when clicking outside the popup content
$(window).click(function(event){
    if ($(event.target).is('.hideForm')) {
        $('.hideForm').fadeOut();
    }
});



// let arrya = $(".postersLinks li:first-child");

// arrya.forEach(postersLinks , length ){
//     arrya.inner(length);
// };

});

