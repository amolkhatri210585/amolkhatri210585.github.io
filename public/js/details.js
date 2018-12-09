
(function (products) {

    function getProductDetails(id) {
        var product = _.find(products, function (product) {
            return product.id === id;
        });
        return product;
    }


    function getQueryStringValue (key) {
        return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent(key).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
    }


    function findId(){
        return parseInt(getQueryStringValue("id"));
    }
    
    function render(product) {
        var theTemplateScript = $("#details").html();

        var theTemplate = Handlebars.compile (theTemplateScript);

        $("#productDetails").append (theTemplate (product));
    }
    
    function load() {
        var id = findId();
        var product = getProductDetails(id);
        if(product) {
            render(product);
        }else{
            //go to home page
            //window.location = "http://www.trimurticoolers.com"
        }
    }


    load();

}(products || []));



