requirejs.config({
   baseUrl : '../lib',
   
   paths : {
      'eve'     : 'raphael/eve/eve',
      'raphael' : 'raphael/raphael'
   },

   shim : {
      'backbone' : {
         deps : ['underscore', 'jquery'],
         exports : 'Backbone'
      },

      'underscore' : {
         exports : '_'
      },

      'handlebars' : {
         exports : 'HB'
      },

      'raphael' : {
         deps : ['eve'],
         exports : 'Raphael'
      }
   }
});

requirejs(['jquery', 'backbone', 'underscore', 'raphael'],
function( $, Backbone, _, Raphael )
{
   // setup code here
   console.log( Raphael );
   var paper = Raphael(10, 50, 320, 200);
   //paper.path("M10,10C0,100,20,40,150,150");
});
