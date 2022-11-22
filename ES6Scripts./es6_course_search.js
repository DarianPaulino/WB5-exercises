


let courses = [
    {
    CourseId: "PROG100",
    Title: "Introduction to HTML/CSS/Git",
    Location: "Classroom 7",
    StartDate: "09/08/22",
    Fee: "100.00",
    },
    {
    CourseId: "PROG200",
    Title: "Introduction to JavaScript",
    Location: "Classroom 9",
    StartDate: "11/22/22",
    Fee: "350.00",
    },
    {
    CourseId: "PROG300",
    Title: "Introduction to Java",
    Location: "Classroom 1",
    StartDate: "01/09/23",
    Fee: "50.00",
    },
    {
    CourseId: "PROG400",
    Title: "Introduction to SQL and Databases",
    Location: "Classroom 7",
    StartDate: "03/16/23",
    Fee: "50.00",
    },
    {
 
    CourseId: "PROJ500",
    Title: "Introduction to Angular",
    Location: "Classroom 1",
    StartDate: "04/25/23",
    Fee: "50.00",
    }
   ];

   let a1 =  whendoesthecorse200starts()
console.log(al)

let a2 =  whendoesthecorse200starts()
console.log(a2)

let a3 =  whatarecoursesunder50()
console.log(a3)

function whatarecoursesunder50(){
    let result ;
    let thecourse = courses.filter(under50)
}

   function whendoesthecorse200starts(){
    let result ;
    let thecourse = courses.find(Prog200)
    return thecourse.StartDate;

 }

 function Prog200(value){
    return (value.Prog200 == "Prog200")
 }
 function whatistittleofprog500(){
    let result;
    let course= course.find(Proj500);
    return thecourse.Title

 }