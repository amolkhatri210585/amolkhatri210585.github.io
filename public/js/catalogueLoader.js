
var theData = {image:"images/coolerpics/amazone.jpg", name: "Amazone"};

// Retrieve the HTML from the script tag we setup in step 1
// We use the id (header) of the script tag to target it on the page
var theTemplateScript = $("#details").html();

// The Handlebars.compile function returns a function to theTemplate variable
var theTemplate = Handlebars.compile (theTemplateScript);

$("#productDetails").append (theTemplate ({products:products}));