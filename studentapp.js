$(document).ready(function(){
  $("body").on("click",".studentsList .delete-btn",function() {
    console.log("it works");
    var sID = $(".edit-form .sid").val();
    // console.log(sID);
    return;
    $.ajax({
        type:"POST",
        url:"http://localhost/crud-ajax-json-jquery-php/api/deleteStudent.php",
        data:{
            sid : sID
            },
        success: function(data){
          $(".edit-form").hide();
            $("ul").remove();
            // getall();
          }
        })
    })
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
// $.ajax({
//   url:"http://localhost/crud-ajax-json-jquery-php/api/getStudents.php",
//   method:"GET",
//   success:function(data) {
//     var studentsList = JSON.parse(data);
//     console.log(studentsList);
//     for (var i = 0; i < studentsList.length; i++) {
//       console.log(studentsList[i]["name"]);
//           $(".studentsList").append("<li>"+studentsList[i]["name"]+"</li>");
//     }
//
//   }
//
// })

// Edit-form
$(".edit-student").click(function() {
  // console.log("hello");

  var sName = $(".edit-form .studentName").val();
  var sFname = $(".edit-form .studentFname").val();
  var sRollno = $(".edit-form .studentRollno").val();
  var sDegree = $(".edit-form .studentDegree").val();
  var sBranch = $(".edit-form .studentBranch").val();
  var sID = $(".edit-form .sid").val();

  // console.log(sName);
  // console.log(sFname);
  // console.log(sRollno);
  // console.log(sDegree);
  // console.log(sBranch);
  // console.log(sID);

  //send to php file via ajax
  $.ajax({
    url:"http://localhost/crud-ajax-json-jquery-php/api/editStudents.php",
    method:"POST",
    data:{
      sid : sID,
      name : sName,
      fathername : sFname,
      rollno : sRollno,
      degree : sDegree,
      branch : sBranch
    },
        success:function(data) {
        getall();
        // $(".studentsList").append("<li>"+sName+"</li>");

      }
  })
})

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
    // console.log(data);
    $(".studentsList").append("<li>"+sName+"</li>");
    getall();

  }
  })
})
// $("body").on("click",".studentsList .delete-btn",function() {
//   var sID = $(".edit-form .sid").val();
//   console.log(sID);
//   $.ajax({
//       type:"POST",
//       url:"http://localhost/crud-ajax-json-jquery-php/api/deleteStudent.php",
//       data:{
//           sid : sID
//           },
//       success: function(data){
//         $(".edit-form").hide();
//           $("ul").remove();
//           getall();
//         }
//       })
//
// })
})
