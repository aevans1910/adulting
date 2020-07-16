$(document).ready(function() {
    $(".vote-up").submit(function(e) {
    //   e.preventDefault(); - this was stopping the page from refreshing when votes were cast
  
      var postId = $(this).data("id");
      $.ajax({
        type: "PUT",
        url: "posts/" + postId + "/vote-up",
        success: function(data) {
          console.log("voted up!");
        },
        error: function(err) {
          console.log(err.messsage);
        }
      });
    });
  
    $(".vote-down").submit(function(e) {
    //   e.preventDefault(); - this was stopping the page from refreshing when votes were cast
  
      var postId = $(this).data("id");
      $.ajax({
        type: "PUT",
        url: "posts/" + postId + "/vote-down",
        success: function(data) {
          console.log("voted down!");
        },
        error: function(err) {
          console.log(err.messsage);
        }
      });
    });
  });