$(function() {

  var reportCardUrl = 'https://www.codeschool.com/users/Jayson_Virissimo.json';
  $.ajax({
    url: reportCardUrl,
    dataType: 'jsonp',
    success: function(response) {
      var courses = response.courses.completed;
      var length = courses.length;
      for (var i = 0; i < length; i++) {
        var element = '<div class="course">';
        element += '<h3>' + courses[i].title + '</h3>';
        element += '<img src="' + courses[i].badge + '"></img>';
        element += '<a href="' + courses[i].url + '" target="blank" class="btn btn-primary">See Courses</a>';
        element += '</div>';
        $('#badges').append(element);
      }
    }
  });
});
