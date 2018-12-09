
(function () {

   function render(el, model, html) {

       let compiedTemplate = Handlebars.compile (html);

       let renderedTemplate =  compiedTemplate(model);

       $(el).append (renderedTemplate);
   }


   function register() {

       var withSpecific = function(array,options) {

           if (!Array.isArray(array)) return '';
           let id = document.location.search.split('?')[1].split('=')[1];
           id = parseInt(id);

           var product = _.find(array, function (product) {
               return id === product.id
           });

           return options.fn(product);

           /*var result = '';

           for (var i = 0; i < array.length; i++) {
               result += options.fn(array[i]);
           }
           return result;*/
       };


       Handlebars.registerHelper("withSpecific", withSpecific);

       Handlebars.registerHelper('currentId', function() {
           return document.location.search.split('?')[1].split('=')[1];
       });

       let templates = Handlebars.templates || {};

       Object.keys(templates).forEach(function (name) {

            let template = templates[name];

           Handlebars.registerPartial(name,template)

       });

   }

   function renderMain() {

       let mainScript = $("script[name=main]");

       let main = mainScript.attr("template");

       let mainTemplate = Handlebars.templates[main] || "No main template found";

       if(typeof mainTemplate === "string"){
           mainTemplate = Handlebars.compile (mainTemplate);
       }

       let renderedTemplate =  mainTemplate(model);

       $("#main").append (renderedTemplate);
   }


   register();
   renderMain();

})();