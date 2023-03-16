$(document).ready(function() {
    $('.getFavAnimal').on('click', function() {
      
      $.ajax({
        url: `/favorites/animals`,
        method: 'GET',
        success: function(response) {
          console.log("sucess!")
        },
        error: function(res, status, error) {
          location.href = "/"
        }
      });
      
    });
  });