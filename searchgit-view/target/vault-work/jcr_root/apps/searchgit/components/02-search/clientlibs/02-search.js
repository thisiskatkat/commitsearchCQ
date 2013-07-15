
function processSearch(json, lookingFor) {

    

    // create array of commit messages
    var commitMessages = [];
    for (var i=0; i<json.data.length; i++) {
        commitMessages.push(json.data[i].commit.message);
    }

    //return indexes of commit messages that contain string we are looking for 
    var tempArray = [];
    var lookingFor = $('#query')[0].value;
    for(var i=0; i < commitMessages.length; i++){
        if(commitMessages[i].indexOf(lookingFor) > -1){
            tempArray.push(i);
        }
    }

    // return whole commits with the same indexes
    var results = [];
    for (var n=0;n<tempArray.length;n++) {
        i = tempArray[n];
        results.push(json.data[i].commit);
    }

    // show results 
    $("#results").empty();

    if (results.legth < 1) {
        $("#results").css('display','block');
        $("#results").append('<li class="result-item"><p>No commit messages found.</p></li>');
    }
    else {   
        for (var i=0; i<results.length; i++) {
            $("#results").css('display','block');
            $("#results").append('<li class="result-item"><h3><a href="'+ results[i].html_url +'">'+ results[i].message +'</a></h3><p>by <b>'+ results[i].committer.name +'</b></p><p>'+ results[i].committer.date +'</p></li>');
        }
    }
}


$('#search').submit(function() {

    //get values
    var repoName = $('#repo')[0].value;
    var ownerName = $('#owner')[0].value;
    var lookingFor = $('#query')[0].value;

    $.ajax({
        url: "https://api.github.com/repos/" + ownerName + "/" + repoName + "/commits", //what to do if repo or owner does not exist, how to validate it on the fly in a user friendly way?
        dataType: "jsonp", 
        success: processSearch,
        error: function() {
            $("#results").css('display','block');
            $("#results").append('<li class="result-item"><p>Couldn\'t reach GitHub API.</p></li>');
        }
    })
    
    //don't reload the page
    return false;
});


