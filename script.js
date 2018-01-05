// Handlebars.registerHelper('ifCond', function (v1, operator, v2, opts) {
//   var isTrue = false;
//   switch (operator) {
//       case '===':
//           isTrue = v1 === v2;
//           break;
//       case '!==':
//           isTrue = v1 !== v2;
//           break;
//       case '<':
//           isTrue = v1 < v2;
//           break;
//       case '<=':
//           isTrue = v1 <= v2;
//           break;
//       case '>':
//           isTrue = v1 > v2;
//           break;
//       case '>=':
//           isTrue = v1 >= v2;
//           break;
//       case '||':
//           isTrue = v1 || v2;
//           break;
//       case '&&':
//           isTrue = v1 && v2;
//           break;
//   }
//   return isTrue ? opts.fn(this) : opts.inverse(this);
// });

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
             el.css('font-size', '16px');
         }
      });

});
