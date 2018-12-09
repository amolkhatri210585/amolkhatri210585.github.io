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

function getSpecifications2() {
    var all = $("tr td");
    var result = [];
    for(var i = 0; i < all.length; i++){
        var name = ($(all[i]).find("span").html() || "").trim();
        if(name === "Inline Water Supply (Float Valve)"){
            continue;
        }
        var values = [];
        var value1 = ($(all[++i]).find("span").html() || "").trim();
        var value2 = ($(all[++i]).find("span").html() || "").trim();
        values.push(value1);
        values.push(value2)
        result.push({ name:name, values:values})
    }
    return result;
}

function getSpecifications3() {
    var all = $("tr td p");
    var result = [];
    for(var i = 3; i < all.length; i++){
        var name = ($(all[i]).html() || "").trim();
        if(name === "Inline Water Supply (Float Valve)"){
            continue;
        }
        var values = [];
        var value1 = ($(all[++i]).html() || "").trim();
        var value2 = ($(all[++i]).html() || "").trim();
        values.push(value1);
        values.push(value2);
        result.push({ name:name, values:values})
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

