<?php
$id = $_POST["sid"];
$dbh = new PDO("mysql:host=localhost;dbname=schoolstd","root","root");
$sql = "UPDATE schoolstudents SET name = :name,fathername = :fathername,rollno = :rollno,degree = :degree,branch = :branch WHERE id = $id";
$addStudentsQuery = $dbh->prepare($sql);
$addStudentsQuery->bindParam(":name",$_POST["name"],PDO::PARAM_STR);
$addStudentsQuery->bindParam(":fathername",$_POST["fathername"],PDO::PARAM_STR);
$addStudentsQuery->bindParam(":rollno",$_POST["rollno"],PDO::PARAM_STR);
$addStudentsQuery->bindParam(":degree",$_POST["degree"],PDO::PARAM_STR);
$addStudentsQuery->bindParam(":branch",$_POST["branch"],PDO::PARAM_STR);
$addStudentsQuery->execute();
?>
