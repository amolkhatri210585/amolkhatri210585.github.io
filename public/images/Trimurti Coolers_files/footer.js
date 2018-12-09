(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['footer.hbs'] = template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "                            <li><a href=\""
    + alias2(alias1((depth0 != null ? depth0.link : depth0), depth0))
    + "\">"
    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
    + "</a></li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<footer class=\"site-footer border-top\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-6 mb-5 mb-lg-0\">\n                <div class=\"row\">\n                    <div class=\"col-md-12\">\n                        <h3 class=\"footer-heading mb-4\">Navigations</h3>\n                    </div>\n                    <div class=\"col-md-6 col-lg-4\">\n                        <ul class=\"list-unstyled\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.navigations : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                        </ul>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-6 col-lg-3 mb-4 mb-lg-0\">\n\n            </div>\n            <div class=\"col-md-6 col-lg-3\">\n                <div class=\"block-5 mb-5\">\n                    <h3 class=\"footer-heading mb-4\">Contact Info</h3>\n                    <ul class=\"list-unstyled\">\n                        <li class=\"address\">"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.contacts : depth0)) != null ? stack1["0"] : stack1)) != null ? stack1.address : stack1), depth0))
    + "</li>\n                        <li class=\"phone\"><a href=\"tel://"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.contacts : depth0)) != null ? stack1["0"] : stack1)) != null ? stack1.phone : stack1), depth0))
    + "\">"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.contacts : depth0)) != null ? stack1["0"] : stack1)) != null ? stack1.phone : stack1), depth0))
    + "</a></li>\n                        <li class=\"email\">"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.contacts : depth0)) != null ? stack1["0"] : stack1)) != null ? stack1.email : stack1), depth0))
    + "</li>\n                    </ul>\n                </div>\n\n            </div>\n        </div>\n        <div class=\"row pt-5 mt-5 text-center\">\n            <div class=\"col-md-12\">\n                <p>\n                    <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->\n                    Copyright &copy;<script data-cfasync=\"false\" src=\"/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js\"></script><script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i class=\"icon-heart\" aria-hidden=\"true\"></i> by <a href=\"https://colorlib.com\" target=\"_blank\" class=\"text-primary\">Colorlib</a>\n                    <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->\n                </p>\n            </div>\n\n        </div>\n    </div>\n</footer>";
},"useData":true});
})();