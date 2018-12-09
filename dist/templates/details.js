(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['details.hbs'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "    <div class=\"site-wrap\">\n        <div class=\"bg-light py-3\">\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-md-12 mb-0\"><a href=\"index.html\">Home</a> <span class=\"mx-2 mb-0\">/</span> <strong\n                            class=\"text-black\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</strong></div>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"site-section\">\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-md-6\">\n                        <img src=\""
    + alias4(container.lambda(((stack1 = (depth0 != null ? depth0.images : depth0)) != null ? stack1["0"] : stack1), depth0))
    + "\" alt=\"Image\" class=\"img-fluid\">\n                    </div>\n                    <div class=\"col-md-6\">\n                        <h2 class=\"text-black\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</h2>\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.highlights : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                    </div>\n                </div>\n            </div>\n        </div>\n        <div>\n            <table class=\"table\">\n                <thead>\n                <tr>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.specHeader : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.program(7, data, 0),"data":data})) != null ? stack1 : "")
    + "                </tr>\n                </thead>\n                <tbody>\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.specifications : depth0),{"name":"each","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n                </tbody>\n            </table>\n        </div>\n    </div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "                            <h5 class=\"text-black\"> "
    + alias2(alias1((depth0 != null ? depth0.title : depth0), depth0))
    + " </h5>\n                            <p>"
    + alias2(alias1((depth0 != null ? depth0.subTitle : depth0), depth0))
    + " </p>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.specHeader : depth0),{"name":"each","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"5":function(container,depth0,helpers,partials,data) {
    return "                            <th scope=\"col\">"
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "</th>\n";
},"7":function(container,depth0,helpers,partials,data) {
    var helper;

  return "                        <th scope=\"col\">Parameters</th>\n                        <th scope=\"col\">"
    + container.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"name","hash":{},"data":data}) : helper)))
    + "</th>\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                    <tr>\n                        <td>"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.name : depth0), depth0))
    + "</td>\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.values : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.program(13, data, 0),"data":data})) != null ? stack1 : "")
    + "                    </tr>\n";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.values : depth0),{"name":"each","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"11":function(container,depth0,helpers,partials,data) {
    return "                                <td>"
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "</td>\n";
},"13":function(container,depth0,helpers,partials,data) {
    return "                            <td>"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.value : depth0), depth0))
    + "</td>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials["header.hbs"],depth0,{"name":"header.hbs","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = (helpers.withSpecific || (depth0 && depth0.withSpecific) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.products : depth0),{"name":"withSpecific","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(partials["footer.hbs"],depth0,{"name":"footer.hbs","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"usePartial":true,"useData":true});
})();