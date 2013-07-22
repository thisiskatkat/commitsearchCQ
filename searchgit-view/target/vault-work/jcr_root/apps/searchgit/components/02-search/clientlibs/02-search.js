
// function processSearch(json, lookingFor) {

//     var resultsBox = $("#results");

//     // create array of commit messages
//     var commitMessages = [];
//     for (var i=0; i<json.data.length; i++) {
//         commitMessages.push(json.data[i].commit.message);
//     }

//     //return indexes of commit messages that contain string we are looking for 
//     var tempArray = [];
//     var lookingFor = $('#query')[0].value;
//     for(var i=0; i < commitMessages.length; i++){
//         if(commitMessages[i].indexOf(lookingFor) > -1){
//             tempArray.push(i);
//         }
//     }

//     // return whole commits with the same indexes
//     var results = [];
//     for (var n=0;n<tempArray.length;n++) {
//         i = tempArray[n];
//         results.push(json.data[i].commit);
//     }

//     // show results 
//     resultsBox.empty();

//     if (results.legth < 1) {
//         resultsBox.css('display','block').append('<li class="result-item"><p>No commit messages found.</p></li>');
//     }
//     else {   
//         for (var i=0; i<results.length; i++) {
//             resultsBox.css('display','block').append('<li class="result-item"><h3><a href="'+ results[i].html_url +'">'+ results[i].message +'</a></h3><p>by <b>'+ results[i].committer.name +'</b></p><p>'+ results[i].committer.date +'</p></li>');
//         }
//     }
// }


// $('#search').submit(function() {

//     //get values
//     var repoName = $('#repo')[0].value;
//     var ownerName = $('#owner')[0].value;
//     var lookingFor = $('#query')[0].value;

    // $.ajax({
    //     url: "https://api.github.com/repos/" + ownerName + "/" + repoName + "/commits", //what to do if repo or owner does not exist, how to validate it on the fly in a user friendly way?
    //     dataType: "jsonp", 
    //     success: processSearch,
    //     error: function() {
    //         $("#results").append('<li class="result-item"><p>Couldn\'t reach GitHub API.</p></li>');
    //     }
    // })
    
//     //don't reload the page
//     return false;
// });


// autosuggest for user search
$(function() {
  $("#owner").autocomplete({
    

    source: function(request, response) {
      $.ajax({
        url: "https://api.github.com/search/users?q=twi", 
        dataType: "jsonp", 
        headers: {'Accept': 'application/vnd.github.preview'}
        // success: function(json) {
        //   for (var i=0; i<json.data.length; i++) {
        //     console.log(json.data[i])
        //   }
        // }
      })
    }


  });
});





// $(function() {
//     function log( message ) {
//       $( "<div>" ).text( message ).prependTo( "#log" );
//       $( "#log" ).scrollTop( 0 );
//     }
 
//     $( "#city" ).autocomplete({
//       source: function( request, response ) {
//         $.ajax({
//           url: "http://ws.geonames.org/searchJSON",
//           dataType: "jsonp",
//           data: {
//             featureClass: "P",
//             style: "full",
//             maxRows: 12,
//             name_startsWith: request.term
//           },
//           success: function( data ) {
//             response( $.map( data.geonames, function( item ) {
//               return {
//                 label: item.name + (item.adminName1 ? ", " + item.adminName1 : "") + ", " + item.countryName,
//                 value: item.name
//               }
//             }));
//           }
//         });
//       },
//       minLength: 2,
//       select: function( event, ui ) {
//         log( ui.item ?
//           "Selected: " + ui.item.label :
//           "Nothing selected, input was " + this.value);
//       },
//       open: function() {
//         $( this ).removeClass( "ui-corner-all" ).addClass( "ui-corner-top" );
//       },
//       close: function() {
//         $( this ).removeClass( "ui-corner-top" ).addClass( "ui-corner-all" );
//       }
//     });
//   });




// $.ajax({
//         url: "https://api.github.com/search/users?q=", //what to do if repo or owner does not exist, how to validate it on the fly in a user friendly way?
//         dataType: "jsonp", 
//         headers: {'Accept': 'application/vnd.github.preview'}
//         success: function(json) {
//           for (var i=0; i<json.data.length; i++) {
//             console.log(json.data[i])
//           }
//         }
//     })