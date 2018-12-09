(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['details.hbs'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"bg-light py-3\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-12 mb-0\"><a href=\"index.html\">Home</a> <span class=\"mx-2 mb-0\">/</span> <strong class=\"text-black\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</strong></div>\n        </div>\n    </div>\n</div>\n\n<div class=\"site-section\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-6\">\n                <img src=\""
    + alias4(container.lambda(((stack1 = (depth0 != null ? depth0.images : depth0)) != null ? stack1["0"] : stack1), depth0))
    + "\" alt=\"Image\" class=\"img-fluid\">\n            </div>\n            <div class=\"col-md-6\">\n                <h2 class=\"text-black\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</h2>\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.highlights : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                <!--<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, vitae, explicabo? Incidunt facere, natus soluta dolores iusto! Molestiae expedita veritatis nesciunt doloremque sint asperiores fuga voluptas, distinctio, aperiam, ratione dolore.</p>-->\n                <!--<p class=\"mb-4\">Ex numquam veritatis debitis minima quo error quam eos dolorum quidem perferendis. Quos repellat dignissimos minus, eveniet nam voluptatibus molestias omnis reiciendis perspiciatis illum hic magni iste, velit aperiam quis.</p>-->\n            </div>\n        </div>\n    </div>\n</div>\n<div>\n    <table class=\"table\">\n        <thead>\n        <tr>\n            <th scope=\"col\">Parameters</th>\n            <th scope=\"col\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</th>\n        </tr>\n        </thead>\n        <tbody>\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.specifications : depth0),{"name":"each","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </tbody>\n    </table>\n</div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "                    <p>"
    + alias2(alias1((depth0 != null ? depth0.title : depth0), depth0))
    + " </p>\n                    <p>"
    + alias2(alias1((depth0 != null ? depth0.subTitle : depth0), depth0))
    + " </p>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "            <tr>\n                <td>"
    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
    + "</td>\n                <td>"
    + alias2(alias1((depth0 != null ? depth0.value : depth0), depth0))
    + "</td>\n            </tr>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\n\n\n"
    + ((stack1 = container.invokePartial(partials["header.hbs"],depth0,{"name":"header.hbs","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = (helpers.withSpecific || (depth0 && depth0.withSpecific) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.products : depth0),{"name":"withSpecific","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(partials["footer.hbs"],depth0,{"name":"footer.hbs","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"usePartial":true,"useData":true});
})();