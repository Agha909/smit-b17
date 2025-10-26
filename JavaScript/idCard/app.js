// console.log("JavaScript running -->")

function studentForm() {
    let studentName = document.getElementById("name")
    let studentEmail = document.getElementById("email")
    let studentCourseName = document.getElementById("course")
    let studentImage = document.getElementById("pfp")
    let studentBatch = document.getElementById("phone")
    let studentRollNum = document.getElementById("roll")


let imageUrl = "";
    let studentData = {
        name: studentName.value,
        email: studentEmail.value,
        batch: studentBatch.value,
        course: studentCourseName.value,
        rollNum: studentRollNum.value,
        profilePic : ""
    }

if(studentImage.files[0]){
    let file = studentImage.files[0]
    studentData.profilePic = URL.createObjectURL(file)
    
    console.log(imageUrl)
    if (studentBatch.value && studentEmail.value && studentCourseName.value && studentName.value && studentRollNum.value) {
        generateIdCard(studentData)
    } else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please Fill the Required Field!",
        });
    }
}else {
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please Upload Your Image!",
    });
}
}

function generateIdCard(studentData) {
console.log("Student Data -->",studentData)

    let idCardUI = ` <div class="idCard">
    <div class="imageBox">
        <img src=${studentData.profilePic} alt="" width="100px" height="100px">
    </div>
    
    <div class="infoBox">
    <div class="name">
        <strong>Name:</strong> <span>${studentData.name}</span>
    </div>
    <div class="email">
        <strong>Email:</strong> <span>${studentData.email}</span>
    </div>
    <div class="studentCourse">
        <strong>Course:</strong> <span>${studentData.course}</span>
    </div>
    <div class="rollNo">
        <strong>Roll Number:</strong> <span>${studentData.rollNum}</span>
    </div>
    <div class="batchNum">
        <strong>Phone Number:</strong> <span>${studentData.batch}</span>
    </div>
       
    </div>
        </div>`
    let idCard = document.getElementById("idCard")

    idCard.innerHTML = idCardUI
}