$(document).ready(function(){
var studentsList;
function getall() {
  $(".studentsList").html(" ");
  $.ajax({
    url:"http://localhost/crud-ajax-json-jquery-php/api/getStudents.php",
    method:"GET",
    success:function(data) {
      studentsList = JSON.parse(data);
      console.log(studentsList);
      for (var i = 0; i < studentsList.length; i++) {
        // console.log(studentsList[i]["name"]);
        $(".studentsList").append('<li><h2>'+studentsList[i]["name"]+'</h2><h3>'+studentsList[i]["fathername"]+'</h3><h4>'+studentsList[i]["rollno"]+'</h4><h5>'+studentsList[i]["degree"]+'</h5><h6>'+studentsList[i]["branch"]+'</h6><div class="update-btn">update</div></li>');
      }
    }
  })
}
getall();
// Add a student to database
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
  // return;

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
    // console.log(data);
    $(".studentsList").append('<li><h2>'+sName+'</h2><h3>'+sFname+'</h3><h4>'+sRollno+'</h4><h5>'+sDegree+'</h5><h6>'+sBranch+'</h6><div class="update-btn">update</div></li>');
    getall();

  }
  })
})
})
