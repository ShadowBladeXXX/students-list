var studentarray=[];
function submit(){
    var name1=document.getElementById("student1").value; 
    var name2=document.getElementById("student2").value; 
    var name3=document.getElementById("student3").value; 
    var name4=document.getElementById("student4").value; 
    var name5=document.getElementById("student5").value; 
    var name6=document.getElementById("student6").value; 
    studentarray.push(name1);
    studentarray.push(name2);
    studentarray.push(name3);
    studentarray.push(name4);
    studentarray.push(name5);
    studentarray.push(name6);
    console.log(studentarray);
    document.getElementById("input").innerHTML=studentarray;
    document.getElementById("submit").style.display="none";
    document.getElementById("sort").style.display="inline-block";

} 
function sort(){
    studentarray.sort();
    document.getElementById("input").innerHTML=studentarray;
}