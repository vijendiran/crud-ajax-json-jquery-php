$(document).ready(function(){
    $.ajax({
      url:"http://localhost/crud-ajax-json-jquery-php/api/getStudents.php",
      method:"GET",
      success:function(data) {
        console.log(data);
        studentsList = JSON.parse(data);
        for (var i = 0; i < studentsList.length; i++) {
          console.log(studentsList[i]["name"]);
          $(".studentsList").append("<li>"+studentsList[i]["name"]+"</li>");
        }
        $("body").on("click",".studentsList li",function() {
          var index = $(this).index();

          $(".Edit-form .studentName").val(studentsList[index]["name"]);
          $(".Edit-form .studentFname").val(studentsList[index]["fathername"]);
          $(".Edit-form .studentRollno").val(studentsList[index]["rollno"]);
          $(".Edit-form .studentDegree").val(studentsList[index]["degree"]);
          $(".Edit-form .studentBranch").val(studentsList[index]["branch"]);
          $(".Edit-form .sid").val(studentsList[index]["id"]);


          // console.log("li works");
          // console.log($(this).index());
          // console.log(studentsList[0]);
        });
      }

    })

  }
// $.ajax({
//   url:"http://localhost/crud-ajax-json-jquery-php/api/getStudents.php",
//   method:"GET",
//   success:function(data) {
//     console.log(data);
//     var studentsList = JSON.parse(data);
//     for (var i = 0; i < studentsList.length; i++) {
//       console.log(studentsList[i]["name"]);
//     }
//     $("body").on("click",".studentsList li",function() {
//       var index = $(this).index();
//       $(".Edit-form .studentName").val(studentsList[index]["name"]);
//       $(".Edit-form .studentFname").val(studentsList[index]["fathername"]);
//       $(".Edit-form .studentRollno").val(studentsList[index]["rollno"]);
//       $(".Edit-form .studentDegree").val(studentsList[index]["degree"]);
//       $(".Edit-form .studentBranch").val(studentsList[index]["branch"]);
//       $(".Edit-form .sid").val(studentsList[index]["id"]);


      // console.log("li works");
      // console.log($(this).index());
      // console.log(studentsList[0]);
//     });
//   }
//
// })
//Edit-form
// $(".edit-student").click(function() {
//   var sName = $(".Edit-form .studentName").val();
//   var sFname = $(".Edit-form .studentFname").val();
//   var sRollno = $(".Edit-form .studentRollno").val();
//   var sDegree = $(".Edit-form .studentDegree").val();
//   var sBranch = $(".Edit-form .studentBranch").val();
//   var sID = $(".Edit-form .sid").val();
//   //
//   // console.log(sName);
//   // console.log(sFname);
//   // console.log(sRollno);
//   // console.log(sDegree);
//   // console.log(sBranch);
//   // console.log(sID);
//
//   $.ajax({
//     url:"http://localhost/crud-ajax-json-jquery-php/api/editStudents.php",
//     method:"POST",
//     data:{
//       sID : sid,
//       name : sName,
//       fathername : sFname,
//       rollno : sRollno,
//       degree : sDegree,
//       branch : sBranch
//     },
//     success:function(data) {
//     console.log(data);
//     // $(".studentsList").append("<li>"+sName+"</li>");
//
//   }
//   })
// })

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
