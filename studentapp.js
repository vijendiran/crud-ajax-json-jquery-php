$(document).ready(function(){
    $.ajax({
      url:"http://localhost/crud-ajax-json-jquery-php/api/getStudents.php",
      method:"GET",
      success:function(data) {
        console.log(data);
        studentsList = JSON.parse(data);
        for (var i = 0; i < studentsList.length; i++) {
          console.log(studentsList[i]["name"]);
          $(".studentsList").append('<li><h2>'+studentsList[i]["name"]+'</h2><h3>'+studentsList[i]["fathername"]+'</h3><h4>'+studentsList[i]["rollno"]+'</h4><h5>'+studentsList[i]["degree"]+'</h5><h6>'+studentsList[i]["branch"]+'</h6></li>');
        }

      }

    })
})
