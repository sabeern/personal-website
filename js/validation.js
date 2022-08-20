function contactValidation() {
    let msgFlag=0,nameErr='',regName,emailErr='',subLength,subErr='',contactErr='';
    let name=document.contact_form.cont_name.value;
    let email=document.contact_form.cont_email.value;
    let subject=document.contact_form.cont_subject.value;
    let contactNo=document.contact_form.cont_phone.value;
    nameLength=name.trim().length;
    var validRegex = /^[a-zA-Z ]*$/;
    if(nameLength < 1) {
        nameErr="Name required";
        msgFlag=1;
    }else if (!name.match(validRegex)) {
        nameErr="Name required";
        msgFlag=1;
    } 
    var validRegex = /^[a-zA-Z0-9.!$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!email.match(validRegex)) {
        emailErr="Enter a valied email";
        msgFlag=1;
    } 
    subLength=subject.trim().length;
    if(subLength < 1) {
        subErr="Subject required";
        msgFlag=1;
    }
    if (!/^\d{10}$/.test(contactNo)) {
        contactErr="Enter a valied Contact Number";
        msgFlag=1;
    }
    if(msgFlag==1) {
        document.getElementById("name_required").innerHTML=nameErr;
        document.getElementById("email_required").innerHTML=emailErr;
        document.getElementById("subject_required").innerHTML=subErr;
        document.getElementById("contact_required").innerHTML=contactErr;
        return false;
    }

}