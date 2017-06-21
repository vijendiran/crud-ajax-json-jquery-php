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
      // console.log(studentsList[0][0]);
      for (var i = 0; i < studentsList.length; i++) {
        // console.log(studentsList[i]["name"]);
            $(".studentsList").append("<ul><li>"+studentsList[i]["name"]+"</li><li>"+studentsList[i]["fathername"]+"</li><li>"+studentsList[i]["rollno"]+"</li><li>"+studentsList[i]["degree"]+"</li><li>"+studentsList[i]["branch"]+"</li><div class='delete-btn'>delete</div></ul>");
      }

    }

  })
}
getall();
//li-on-click
$("body").on("click",".studentsList ul",function() {
  // console.log("li works");
  // console.log(studentsList[$(this).index()]);
  // console.log(studentsList[0]);
  $(".edit-form").show();
  var index = $(this).index();
  $(".edit-form .studentName").val(studentsList[index]["name"]);
  $(".edit-form .studentFname").val(studentsList[index]["fathername"]);
  $(".edit-form .studentRollno").val(studentsList[index]["rollno"]);
  $(".edit-form .studentDegree").val(studentsList[index]["degree"]);
  $(".edit-form .studentBranch").val(studentsList[index]["branch"]);
  $(".edit-form .sid").val(studentsList[index]["id"]);
});

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
    // console.log(data);
    $(".studentsList").append("<li>"+sName+"</li>");
    getall();

  }
  })
})
})
