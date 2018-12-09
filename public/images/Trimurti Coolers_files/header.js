(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['header.hbs'] = template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "                    <li> <a href=\""
    + alias2(alias1((depth0 != null ? depth0.link : depth0), depth0))
    + "\">"
    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
    + "</a> </li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<header class=\"site-navbar\" role=\"banner\">\n    <div class=\"site-navbar-top\">\n        <div class=\"container\">\n            <div class=\"row align-items-center\">\n                <div class=\"col-6 col-md-4 order-2 order-md-1 site-search-icon text-left\">\n                </div>\n                <div class=\"col-12 mb-3 mb-md-0 col-md-4 order-1 order-md-2 text-center\">\n\n                    <div class=\"site-logo\">\n                        <a href=\"index.html\" class=\"js-logo-clone\">"
    + container.escapeExpression(((helper = (helper = helpers.site || (depth0 != null ? depth0.site : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"site","hash":{},"data":data}) : helper)))
    + "</a>\n                    </div>\n                </div>\n                <div class=\"col-6 col-md-4 order-3 order-md-3 text-right\">\n                    <div class=\"site-top-icons\"></div>\n                </div>\n\n            </div>\n        </div>\n    </div>\n    <nav class=\"site-navigation text-right text-md-center\" role=\"navigation\">\n        <div class=\"container\">\n            <ul class=\"site-menu js-clone-nav d-none d-md-block\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.pages : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            </ul>\n        </div>\n    </nav>\n</header>";
},"useData":true});
})();