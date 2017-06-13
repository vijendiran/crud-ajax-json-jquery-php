$(document).ready(function(){

$.ajax({
  url:"http://localhost/crud-ajax-json-jquery-php/api/getStudents.php",
  method:"GET",
  success:function(data) {
    console.log(data);
    var studentsList = JSON.parse(data);
    for (var i = 0; i < studentsList.length; i++) {
      console.log(studentsList[i]["name"]);
      $(".studentsList").append("<li>"+studentsList[i]["name"]+"</li>");
    }
  }
})

});
