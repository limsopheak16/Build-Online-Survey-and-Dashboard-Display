document.forms[0].addEventListener("submit", submitForm);
function submitForm(event) {
  event.preventDefault();
  let fullname = document.getElementById("fullname").value;
  let email = document.getElementById("email").value;
    // 1
  console.log(fullname);
  // 2
  console.log(email);

  // For grade level
  let grade = document.getElementsByName("flexRadioDefault");
  let gradeValues = [];
  for (let i = 0; i < grade.length; i++) {
    console.log(grade[i].checked, grade[i].value);
    if (grade[i].checked) {
      gradeValues.push(grade[i].value);
    }
  }
  // 3
  console.log(gradeValues);

  // For type of school
  let school = document.getElementsByName("exampleRadios");
  let schoolValues = [];
  for (let i = 0; i < school.length; i++) {
    console.log(school[i].checked, school[i].value);
    if (school[i].checked) {
      schoolValues.push(school[i].value);
    }
  }
  // 4
  console.log(schoolValues);

  // section 1
  let Interest = document.getElementsByName("Interest");
  let InterestValues = [];
  for (let i = 0; i < Interest.length; i++) {
    console.log(Interest[i].checked, Interest[i].value);
    if (Interest[i].checked) {
      InterestValues.push(Interest[i].value);
    }
  }
  // 5
  console.log(InterestValues);

  let Interest_1 = document.getElementsByName("Interest_1");
  let Interest_1Values = [];
  for (let i = 0; i < Interest_1.length; i++) {
    if (Interest_1[i].checked) {
      Interest_1Values.push(Interest_1[i].value);
    }
  }
  // 6
  console.log(Interest_1Values);

  let question3 = document.getElementById("question3").value;
  // 7
  console.log(question3);

  // 'checked_1'
  let checked_1 = document.getElementsByName("checked_1");
  let checked_1Value = [];

  for (let i = 0; i < checked_1.length; i++) {
    if (checked_1[i].checked) {
      checked_1Value.push({
        text: checked_1[i].nextElementSibling.textContent.trim(),
        value: checked_1[i].value,
      });
    }
  }
  // 8
  console.log(checked_1Value);

  // Section 2
  let familiar = document.getElementsByName("familiar");
  let familiar_Values = [];
  for (let i = 0; i < familiar.length; i++) {
    if (familiar[i].checked) {
      familiar_Values.push(familiar[i].value);
    }
  }
  // 9
  console.log(familiar_Values);

  let familiar_2 = document.getElementById("familiar_2").value;
  // 10
  console.log(familiar_2);

  let familiar_3 = document.getElementsByName("familiar_3");
  let familiar_3Values = [];
  for (let i = 0; i < familiar_3.length; i++) {
    if (familiar_3[i].checked) {
      familiar_3Values.push(familiar_3[i].value);
    }
  }
  // 11
  console.log(familiar_3Values);

  let familiar_4 = document.getElementById("familiar_4").value;
  // 12
  console.log(familiar_4);

  // Section 3

  let checked_2 = document.getElementsByName("checked_2");
  let checked_2Value = [];

  for (let i = 0; i < checked_2.length; i++) {
    if (checked_2[i].checked) {
      checked_2Value.push({
        text: checked_2[i].nextElementSibling.textContent.trim(),
        value: checked_2[i].value,
      });
    }
  }
  // 13
  console.log("check_2", checked_2Value);

  let checked_3 = document.getElementsByName("checked_3");
  let checked_3Value = [];

  for (let i = 0; i < checked_3.length; i++) {
    if (checked_3[i].checked) {
      checked_3Value.push({
        text: checked_3[i].nextElementSibling.textContent.trim(),
        value: checked_3[i].value,
      });
    }
  }
  // 14
  console.log("check_3", checked_3Value);

  let Interest_2 = document.getElementsByName("Interest_2");
  let Interest_2Values = [];
  for (let i = 0; i < Interest_2.length; i++) {
    if (Interest_2[i].checked) {
      Interest_2Values.push(Interest_2[i].value);
    }
  }
  // 15
  console.log(Interest_2Values);

  let Interest_3 = document.getElementsByName("Interest_3");
  let Interest_3Values = [];
  for (let i = 0; i < Interest_3.length; i++) {
    if (Interest_3[i].checked) {
      Interest_3Values.push(Interest_3[i].value);
    }
  }
  // 16
  console.log(Interest_3Values);

// Section 4
  let Interest_4 = document.getElementsByName("Interest_4");
  let Interest_4Values = [];
  for (let i = 0; i < Interest_4.length; i++) {
    if (Interest_4[i].checked) {
      Interest_4Values.push(Interest_4[i].value);
    }
  }
  // 17
  console.log(Interest_4Values);

  let question4 = document.getElementById("question4").value;
  // 18
  console.log(question4);

  let question5 = document.getElementById("question5").value;
  // 19
  console.log(question5);

// Section 5
let question6 = document.getElementById("question6").value;
// 20
console.log(question6);

let question7 = document.getElementById("question7").value;
// 21
console.log(question7);
 
let data= {
   answers: [
    {
        email:email,
        fullname: fullname ,
        question_id: 1,
        answer: [fullname],
        created_by: 'G3'
    },
    {
        email: email,
        fullname: fullname,
        question_id: 2 ,
        answer: [email],
        created_by: 'G3'
    },
    {
        email: email,
        fullname: fullname,
        question_id: 3,
        answer: [gradeValues],
        created_by: 'G3'
    },
    {
        email: email,
        fullname: fullname,
        question_id: 4,
        answer: [schoolValues],
        created_by: 'G3'
    },
    {
        email: email,
        fullname: fullname,
        question_id: 5,
        answer: [InterestValues],
        created_by: 'G3'
    },
    {
        email: email,
        fullname: fullname,
        question_id: 6 ,
        answer: [Interest_1Values],
        created_by: 'G3'
    },
    {
        email: email,
        fullname: fullname,
        question_id: 7 ,
        answer: [question3],
        created_by: 'G3'
    },
    {
        email: email,
        fullname: fullname,
        question_id: 8 ,
        answer: [checked_1Value],
        created_by: 'G3'
    },
    {
        email: email,
        fullname: fullname,
        question_id: 9 ,
        answer: [familiar_Values],
        created_by: 'G3'
    },
    {
        email: email,
        fullname: fullname,
        question_id: 10 ,
        answer: [familiar_2],
        created_by: 'G3'
    },
    {
        email: email,
        fullname: fullname,
        question_id: 11 ,
        answer: [familiar_3Values],
        created_by: 'G3'
    },
    {
        email: email,
        fullname: fullname,
        question_id: 12 ,
        answer: [familiar_4],
        created_by: 'G3'
    },
    {
        email: email,
        fullname: fullname,
        question_id: 13 ,
        answer: [checked_2Value],
        created_by: 'G3'
    },
    {
        email: email,
        fullname: fullname,
        question_id: 14 ,
        answer: [checked_3Value],
        created_by: 'G3'
    },
    {
        email: email,
        fullname: fullname,
        question_id: 15 ,
        answer: [Interest_2Values],
        created_by: 'G3'
    },
    {
        email: email,
        fullname: fullname,
        question_id: 16 ,
        answer: [Interest_3Values],
        created_by: 'G3'
    },
    {
        email: email,
        fullname: fullname,
        question_id: 17 ,
        answer: [Interest_4Values],
        created_by: 'G3'
    },
    {
        email: email,
        fullname: fullname,
        question_id: 18 ,
        answer: [question4],
        created_by: 'G3'
    },
    {
        email: email,
        fullname: fullname,
        question_id: 19,
        answer: [question5],
        created_by: 'G3'
    },
    {
        email: email,
        fullname: fullname,
        question_id: 20,
        answer: [question6],
        created_by: 'G3'
    },
    {
        email: email,
        fullname: fullname,
        question_id: 21,
        answer: [question7],
        created_by: 'G3'
    },

    
]
}
calling(data);
console.log(data);

}
function calling(data) {
    fetch('https://wmad-survey-backend.vercel.app/api/form-answers/submit', {
        method:'POST',
        headers: {
            'x-secret-key': '3c9e1f0a4d0f4e9b8b1a2e0d4e3f5a6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => console.log(data))
    
    .catch((error) => {
        console.error("Error:", error)
    })
   
}

