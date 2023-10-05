apiclient = (function(){

    return {
        getBlueprintsByAuthor: function(author, callback){
            callback(
                JSON.parse($.ajax({type: 'GET', url: 'blueprints/' + author, async: false}).responseText)
            )},

        getBlueprintsByNameAndAuthor: function(author, bpname, callback){
            callback(
                JSON.parse($.ajax({type: 'GET', url: 'blueprints/' + author + "/" + bpname, async: false}).responseText)
            )}
    }
})();

