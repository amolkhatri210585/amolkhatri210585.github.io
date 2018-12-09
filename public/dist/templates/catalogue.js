(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['catalogue.hbs'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "                            <div class=\"col-sm-6 col-lg-4 mb-4\" data-aos=\"fade-up\">\n                                <div class=\"block-4 text-center border\">\n                                    <figure class=\"block-4-image\">\n                                        <a href=\"details.html?id="
    + alias2(alias1((depth0 != null ? depth0.id : depth0), depth0))
    + "\"><img src=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.images : depth0)) != null ? stack1["0"] : stack1), depth0))
    + "\" alt=\"Image placeholder\" class=\"img-fluid\"></a>\n                                    </figure>\n                                    <div class=\"block-4-text p-4\">\n                                        <h3><a href=\"details.html?id="
    + alias2(alias1((depth0 != null ? depth0.id : depth0), depth0))
    + "\">"
    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
    + "</a></h3>\n                                    </div>\n                                </div>\n                            </div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\n"
    + ((stack1 = container.invokePartial(partials["header.hbs"],depth0,{"name":"header.hbs","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "<div class=\"site-wrap\">\n\n    <div class=\"bg-light py-3\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-12 mb-0\"><a href=\"index.html\">Home</a> <span class=\"mx-2 mb-0\">/</span> <strong class=\"text-black\">Catalogue</strong></div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"site-section\">\n        <div class=\"container\">\n\n            <div class=\"row mb-5\">\n                <div class=\"col-md-12 order-2\">\n                    <div class=\"row mb-5\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.products : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n"
    + ((stack1 = container.invokePartial(partials["footer.hbs"],depth0,{"name":"footer.hbs","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"usePartial":true,"useData":true});
})();