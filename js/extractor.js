var $ = jQuery;


function getSpecifications() {
    var all = $("tr p");
    var result = [];
    for(var i = 2; i < all.length; i++){
        var name = ($(all[i]).html() || "").trim();
        if(name === "Inline Water Supply (Float Valve)"){
            continue;
        }
        var value = ($(all[++i]).html() || "").trim();
        result.push({ name:name, value:value})
    }
    return result;
}



function getHighlights(){
    var result = [];
    var all = $("div .Small-Desc");

    var titles = all.find("h5") || [];

    for(var i = 0; i < titles.length; i++){
        var title = $(titles[i]).html() || "";
        result.push({
            title: title
        })
    }
    console.log("Title length", titles.length);

    var subTitles = all.find("p") || [];
    console.log("subTitles length", subTitles.length);
    for(var i = 0; i < subTitles.length; i++){
        var subTitle = $(subTitles[i]).html() || "";
        var obj = result[i];
        if(obj) {
            obj.subTitle = subTitle;
        }
    }


    return result;
}

var all = {};
all.specifications = getSpecifications();
all.highlights = getHighlights();

JSON.stringify(all);

