

Handlebars.registerHelper('ifCond', function(v1, v2, options) {
  if(v1 && v2) {
    return options.fn(this);
  }
  return options.inverse(this);
});

Handlebars.registerHelper('ifIncentiveTitle', function(v1, v2,v3, v4, options) {
  if((v1 =="" || v2=="") && (v3 =="" || v4=="") ) {
    return options.fn(this);
  }
  return options.inverse(this);
});

Handlebars.registerHelper('ifArrows', function(v1, options) {
  if(v1.length > 0 ) {
    return options.fn(this);
  }
  return options.inverse(this);
});


// Handlebars.registerHelper('ifIncentiveSub-first', function(v1, v2,v3, options) {
//   if(v1 !="" && v2 !="" && v3 != "") {
//     return options.fn(this);
//   }
//   return options.inverse(this);
// });
//
// Handlebars.registerHelper('ifIncentiveSub-second', function(v1, v2,v3, options) {
//   if(v1 != "" && v2 !="" && v3 =="" ) {
//     return options.fn(this);
//   }
//   return options.inverse(this);
// });
//
// Handlebars.registerHelper('ifIncentiveSub-third', function(v1, v2,v3, options) {
//   if(v1 != "" && v2 =="" && v3 !="" ) {
//     return options.fn(this);
//   }
//   return options.inverse(this);
// });
//
// Handlebars.registerHelper('ifIncentiveSub-fourth', function(v1, v2,v3, options) {
//   if(v1 == "" && v2 !="" && v3 !="" ) {
//     return options.fn(this);
//   }
//   return options.inverse(this);
// });



// Handlebars.registerHelper('changeFont', function(options){
//   return options.fn(this)
// })


$(document).ready(function(){

  var adTemplate = $("#ad-template").html();

  var compiledAdTemplate = Handlebars.compile(adTemplate);

  $(".ad").html(compiledAdTemplate(adData));


  $(".disclaimer-title").on("click",function(e){
    $(".disclaimer-text-container").fadeIn();

    $(".disclaimer-text").fadeIn();

    console.log('button clicked')

  });

  $(".disclaimer-exit").on("click",function(e){
    $(".disclaimer-text-container").fadeOut();

    $(".disclaimer-text").fadeOut();

    console.log('button clicked')

  });

  $('.dealerName').each(function(){
    var el= $(this);
      var textLength = el.html().length;
       if (textLength > 25) {
           el.css('font-size', '16px');
       }
    });


    $('.OemSeasonal-dealerName').each(function(){
      var el= $(this);
        var textLength = el.html().length;
         if (textLength > 20) {
             el.css('font-size', '14px');
         }
      });


    $('.incentives-subtitle').each(function(){
      var el= $(this);
        var textLength = el.html().length;
         if (textLength > 130) {
             el.css('font-size', '8px');
         }
      });

    // $('.incentives-subtitle').each(function(){
    //   if ($(".OemText")[0] && $(".OemModel")[0] && $(".Vin")[0]){
    //     $('.first-hypen').show();
    //     $('.second-hypen').show();
    //   }
    //   else if (($(".OemText")[0]) && ($(".OemModel")[0])){
    //     $('.first-hypen').show();
    //   }
    //   else if (($(".OemModel")[0]) && ($(".Vin")[0])){
    //     $('.second-hypen').show();
    //   }
    //   else if (($(".OemText")[0]) && ($(".Vin")[0])){
    //     $('.first-hypen').show();
    //   }
    // })

});
