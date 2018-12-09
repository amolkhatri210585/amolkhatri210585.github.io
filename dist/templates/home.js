(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['home.hbs'] = template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "                <div class=\"col-md-6 col-lg-4 d-lg-flex mb-4 mb-lg-0 pl-4\" data-aos=\"fade-up\" data-aos-delay=\"\">\n                    <div class=\"icon mr-4 align-self-start\">\n                        <span class=\""
    + alias2(alias1((depth0 != null ? depth0.icon : depth0), depth0))
    + "\"></span>\n                    </div>\n                    <div class=\"text\">\n                        <h2 class=\"text-uppercase\">"
    + alias2(alias1((depth0 != null ? depth0.title : depth0), depth0))
    + "</h2>\n                        <p>"
    + alias2(alias1((depth0 != null ? depth0.copy : depth0), depth0))
    + "</p>\n                    </div>\n                </div>\n\n";
},"3":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "<div class=\"site-section border-bottom\" data-aos=\"fade\">\n    <div class=\"container\">\n        <div class=\"row mb-5\">\n            <div class=\"col-md-6\">\n                <div class=\"block-16\">\n                    <figure>\n                        <img src=\""
    + alias2(alias1((depth0 != null ? depth0.image : depth0), depth0))
    + "\" alt=\"Image placeholder\" class=\"img-fluid rounded\">\n                    </figure>\n                </div>\n            </div>\n            <div class=\"col-md-1\"></div>\n            <div class=\"col-md-5\">\n\n\n                <div class=\"site-section-heading pt-3 mb-4\">\n                    <h2 class=\"text-black\">"
    + alias2(alias1((depth0 != null ? depth0.title : depth0), depth0))
    + "</h2>\n                </div>\n\n                <p>"
    + alias2(alias1((depth0 != null ? depth0.copy : depth0), depth0))
    + "</p>\n\n            </div>\n        </div>\n    </div>\n</div>\n\n";
},"5":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "                    <div class=\"item\">\n                        <div class=\"block-4 text-center\">\n                            <figure class=\"block-4-image\">\n                                <img src=\""
    + alias2(alias1((depth0 != null ? depth0.image : depth0), depth0))
    + "\" alt=\"Image placeholder\" class=\"img-fluid\">\n                            </figure>\n                            <div class=\"block-4-text p-4\">\n                                <h3><a href=\"details.html?id="
    + alias2(alias1((depth0 != null ? depth0.id : depth0), depth0))
    + "\">"
    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
    + "</a></h3>\n                            </div>\n                        </div>\n                    </div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return ((stack1 = container.invokePartial(partials["header.hbs"],depth0,{"name":"header.hbs","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n<div class=\"site-blocks-cover\" style=\"background-image: url("
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.hero : depth0), depth0))
    + ");\" data-aos=\"fade\">\n    <div class=\"container\" style=\"padding-top:20px;\">\n        <div class=\"align-items-start align-items-md-center justify-content-end\">\n            <div class=\"text-center text-md-left pt-5 pt-md-0\">\n                <h2 class=\"\">Looking for Perfect Cooler?</h2>\n                <div class=\"intro-text text-center text-md-left\">\n                    <p>\n                        <a href=\"./catalogue.html\" class=\"btn btn-sm btn-primary\">Find Now</a>\n                    </p>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"site-section site-section-sm site-blocks-1\">\n    <div class=\"container\">\n        <div class=\"row\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.taglines : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </div>\n    </div>\n</div>\n\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.sections : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n\n<div class=\"site-section block-3 site-blocks-2 bg-light\">\n    <div class=\"container\">\n        <div class=\"row justify-content-center\">\n            <div class=\"col-md-7 site-section-heading text-center pt-4\">\n                <h2>Featured Products</h2>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"nonloop-block-3 owl-carousel\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.categories : depth0),{"name":"each","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n"
    + ((stack1 = container.invokePartial(partials["footer.hbs"],depth0,{"name":"footer.hbs","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"usePartial":true,"useData":true});
})();