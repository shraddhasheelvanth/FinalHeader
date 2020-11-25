//jquery for Desktop Veiw



jQuery(function () {
  jQuery('#payment-solution').click(function () {

    jQuery('.list-default-content').hide();
    jQuery('.sol-payments').show();

  });
});


// if ($(window).width() <= 767) {
//   jQuery(function () {
//     jQuery('#btn').click(function () {
//       jQuery('.main-nav-for-desktop').show();
//       jQuery('#cancel').show();
//       jQuery('#btn').hide();
//     });
//   });
// }



// if ($(window).width() <= 767) {
//   jQuery(function () {
//     jQuery('.MainMenu').click(function () {
//       jQuery('.menu-list-content').hide();

//     });
//   });
// }

// var window_size = window.matchMedia('(max-width: 768px)');

// jQuery(function(){
//     jQuery('.MainMenu').click(function(){
//           // jQuery('.main-nav').show();
//           jQuery('.menu-list-content').hide();

//         });
//       });
//header level two

// function mediaQuery(){
//   let screenWidth = $(document).width();
//   console.log("hwllo");
//   if(screenWidth<767){
//  console.log("hwllo1");
//     $('.menu-list-content').show();
//     $('.menu-list-resources').hide();   //generic....
//     $('.menu-list-our-network').hide();
//     $('.menu-list-insights').hide();
//     $('.menu-list-contact-us').hide();

//   }
//   $('.menu-list').click(mediaQuery)

// }


// if (window.matchMedia('(max-width: 768px)').matches) {
//   jQuery(function () {
//     jQuery('.menu-list').click(function () {
//       jQuery('.menu-list-content').show();

//       jQuery('.menu-list-resources').hide();
//       jQuery('.menu-list-our-network').hide();
//       jQuery('.menu-list-insights').hide();
//       jQuery('.menu-list-contact-us').hide();
//       jQuery('.list-default-content').hide();
//       // jQuery('.sol-payments').hide();
//     });
//   });
// }
// else {
//   jQuery('.menu-list').show();
//   jQuery('.menu-list-resources').show();
//   jQuery('.menu-list-our-network').show();
//   jQuery('.menu-list-insights').show();
//   jQuery('.menu-list-contact-us').show();
// }

// if (window.matchMedia('(max-width: 768px)').matches) {
//   jQuery(function () {
//     jQuery('#payment-solution').click(function () {
//       jQuery('.sol-payments').show();

//       jQuery('#sol-overview').hide();
//       jQuery('#sol-acceptance').hide();
//       jQuery('#sol-fraud').hide();
//       jQuery('#sol-pci').hide();
//       jQuery('#sol-commerce').hide();
//       jQuery('#sol-card').hide();
//       jQuery('#sol-enterprise').hide();
//       jQuery('#sol-debit').hide();
//       jQuery('#sol-collabaration').hide();
//       jQuery('#sol-technology').hide();

//       jQuery('.pay-sol').hide();
//       jQuery('.third-level-heading').show();
//       jQuery('.sol').show();
//       jQuery('.list-content-heading').hide();
//       jQuery('.MainMenu').hide();
//     });
//   });
// }
// else{
//     jQuery('.menu-list').show();
//     jQuery('.menu-list-resources').show();
//             jQuery('.menu-list-our-network').show();
//             jQuery('.menu-list-insights').show();
//             jQuery('.menu-list-contact-us').show(); 
// }








//for mobile veiw



//for solutions
$(document).ready(function(){
    $('.main-nav').show();
    $('.solutions').hide();
    $('.solutions-content').hide();
    function mediaQuery(){
       let screenWidth = $(document).width();
       console.log("hello");
       if(screenWidth<=768 ){
         console.log("hello1");
         $('.resources').hide();
         $('.networks').hide();
         $('.main-nav').hide();
         $('.solutions').show();
         $('.solutions-content').hide();
       } else if(screenWidth<1280 && screenWidth>768){
           console.log('Great');
           $('.main-nav').show();
         $('.solutions').show();
         $('.solutions-content').show();
         $('.resources').hide();
         $('.networks').hide();
        }
   }
   $('.solution-tab').click(mediaQuery)
});


//for resources
$(document).ready(function(){
    $('.main-nav').show();
    $('.resources').hide();
    function mediaQuery(){
        let screenWidth = $(document).width();
        console.log("hello");
        if(screenWidth<768){
          console.log("hello1");
          $('.resources').show();
          $('.main-nav').hide();
          $('.solutions').hide();
          $('.network').hide();
          $('.solutions-content').hide();
        }else if(screenWidth<1280 && screenWidth>768){
          console.log('Great');
          $('.main-nav').show();
          $('.solutions').hide();
          $('.solutions-content').hide();
          $('.resources').show();
          $('.networks').hide();
         }
    }
    $('.resource-tab').click(mediaQuery)
});


//for networks
$(document).ready(function(){
    $('.main-nav').show();
    $('.networks').hide();
    function mediaQuery(){
        let screenWidth = $(document).width();
        console.log("hello");
        if(screenWidth<768){
          console.log("hello1");
          $('.networks').show();
          $('.main-nav').hide();
          $('.solutions').hide();
          $('.solutions-content').hide();
          $('.resources').hide();
      
        }else if(screenWidth<1280 && screenWidth>768){
            console.log('Great');
            $('.main-nav').show();
            $('.solutions').hide();
            $('.solutions-content').hide();
            $('.resources').hide();
            $('.networks').show();
           }
    }
    $('.networks-tab').click(mediaQuery)
});


//for main-menu
$(document).ready(function(){
    $('.main-nav').show();
 function mediaQuery1(){
    let screenWidth = $(document).width();
    if(screenWidth< 768){
      $('.resources').hide();
      $('.solutions').hide();
      $('.solutions-content').hide();
      $('.networks').hide();
      $('.main-nav').show();
  
    }
}
$('.main-menu').click(mediaQuery1)


});


//for payment-solutions
$(document).ready(function(){
    $('.main-nav').show();
    $('.solutions').hide();
    $('.solutions-content').hide();
    $('.payment-solutions').hide();
    function mediaQuery(){
       let screenWidth = $(document).width();
       console.log("hello");
       if(screenWidth<=768 ){
         console.log("hello1");
         $('.resources').hide();
         $('.networks').hide();
         $('.main-nav').hide();
         $('.solutions').hide();
         $('.solutions-content').hide();
         $('.payment-solutions').show();
       } else if(screenWidth<1280 && screenWidth>768){
           console.log('Great');
           $('.main-nav').show();
         $('.solutions').show();
         $('.solutions-content').show();
         $('.payment-solutions').show();
         $('.resources').hide();
         $('.networks').hide();
        }
   }
   $('.payment-solution-tab').click(mediaQuery)
});



//for solutions-menu
$(document).ready(function(){
    // $('.main-nav').show();
 function mediaQuery1(){
    let screenWidth = $(document).width();
    if(screenWidth< 768){
      $('.resources').hide();
      $('.solutions').hide();
      $('.solutions-content').hide();
      $('.networks').hide();
      $('.payment-solutions').hide();
      $('.solutions').show();
  
    }
}
$('.paymentsolutions-menu').click(mediaQuery1)


});


//jquery for desktop screen

// $(document).ready(function(){
//     // $('.main-nav').show();
//  function mediaQuery1(){
//     let screenWidth = $(document).width();
//     if(screenWidth> 768){
//         jQuery('.solutions').show();
//       jQuery('.solutions-content').show();
  
//     }
// }
// $('..solution-tab').click(mediaQuery1)


// });


// jQuery(function () {
//     jQuery('.solution-tab').click(function () {
  
//       jQuery('.solutions').show();
//       jQuery('.solutions-content').show();
     

  
//     });
//   });


  // jQuery(function () {
  //   jQuery('.close').click(function () {
  //     jQuery('.solutions-content').hide();
     
  //   });
  // });