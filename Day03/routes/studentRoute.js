const express=require("express");
const controller=require("./../Controller/studentController");

const router=express.Router(); //craete express route object and return it 

router.route("/student")
       .get(controller.getAllStudent)
       .post(controller.addStudent)
       .patch(controller.updateStudent)   //-> id, newName,newAge
    

// router.get("/student/:id",controller.getStudentById);
// router.delete("/student/:id",controller.deleteStudent)

router.route("/student/:id")
       .get(controller.getStudentById)
       .delete(controller.deleteStudent);

module.exports=router;


// router.get("/student",
// (request,repsone,next)=>{
//     //check   admin or teacher
//     if(!true)
    
//     next();
//     else
//     next(new Error("not authorized"))

// },
// (request,repsone,next)=>{
//     //body check , url data check valid 
//     // next() or next(new Error("Error validation"))
// }
// ,(requset,repsonse)=>{
// //code databse

//     repsonse.status(200).json({data:[{id:1,name:"xxx"},{id:2,name:"yyy"}]})
// });
// router.post("/student",(requset,repsonse)=>{
//     //code
//         repsonse.status(200).json({data:"added"})
// })
// router.patch("/student",(requset,repsonse)=>{
//     //code
//         repsonse.status(200).json({data:"updated"})
// })
// router.delete("/student",(requset,repsonse)=>{
//     //code
//         repsonse.status(200).json({data:"deleted"})
// });












