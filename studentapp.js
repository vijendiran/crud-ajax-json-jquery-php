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
$(".submit-student").click(function() {
  var sName = $(".studentName").val();
  var sFname = $(".studentFname").val();
  var sRollno = $(".studentRollno").val();
  var sDegree = $(".studentDegree").val();
  var sBranch = $(".studentBranch").val();
  // console.log(sName);
  // console.log(sFname);
  // console.log(sRollno);
  // console.log(sDegree);
  // console.log(sBranch);

  $.ajax({
    url:"http://localhost/crud-ajax-json-jquery-php/api/addStudents.php",
    method:"POST",
    data:{
      name :sName,
      fathername :sFname,
      rollno :sRollno,
      degree :sDegree,
      branch :sBranch
    },
    success:function(data) {
    console.log(data);
    $(".studentsList").append("<li>"+sName+"</li>");

  }
  })
})
});
