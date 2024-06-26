
    document.forms[0].addEventListener("submit", submitForm);
    function submitForm(event){
        event.preventDefault();
        let fullname= document.getElementById("fullname").value ;
        let email = document.getElementById('email').value ;
        let age = document.getElementById('age').value ;

        console.log(fullname);
        console.log(email);
        console.log(age);

        let grade = document.getElementsByName('flexRadioDefault');
        let gradeValues = [];
        for(let i=0; i<grade.length; i++){
            console.log(grade[i].checked,grade[i].value)
            if(grade[i].checked){
                gradeValues.push(grade[i].value)
            }
        }
        console.log(gradeValues);


        let school = document.getElementsByName('exampleRadios');
        let schoolValues = []
        for(let i=0; i<school.length; i++){
            console.log(school[i].checked,school[i].value);
            if (school[i].checked){
                schoolValues.push(school[i].value)
            }

        }
        console.log(schoolValues);

     
    // section 1
    let Interest = document.getElementsByName('Interest');
    let InterestValues = [];
    for(let i=0; i<Interest.length; i++){
        console.log(grade[i].checked,grade[i].value)
        if(Interest[i].checked){
            InterestValues.push(Interest[i].value)
        }
    }
    console.log(InterestValues);
    
   
}
    