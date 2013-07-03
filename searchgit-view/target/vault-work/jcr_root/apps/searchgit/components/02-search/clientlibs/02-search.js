
/*javascript for search*/

  
  var k33gRepositories = new Gh3.Repositories(k33g);
  k33gRepositories.fetch(function () {
    console.log("Repositories", k33gRepositories);
  }, function(){/*error*/},{page:1, per_page:500, direction : "desc"});
//all repositories, one page, 500 items per page, sort : descending


