$(document).ready(function() {
    $('.getFavAnimal').on('click', function() {
      const token = localStorage.getItem("token")
      $.ajax({
        url: `/favorites/animals`,
        method: 'GET',
        headers: {
          Authorization: 'Bearer ' + token
        },
        success: function(response) {
          console.log(response.message)
          $(".animal").append(response.message)
        },
        error: function(res, status, error) {
          location.href = "/"
        }
      });
      
    });
  });