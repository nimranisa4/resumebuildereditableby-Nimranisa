var _a;
(_a = document.getElementById("resumeForm")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    var _a;
    event.preventDefault();
    var profilepictureInput = document.getElementById("profilePicture");
    var nameElement = document.getElementById("name");
    var emailElement = document.getElementById("email");
    var phoneElement = document.getElementById("phone");
    var educationElement = document.getElementById("education");
    var experienceElement = document.getElementById("experience");
    var skillsElement = document.getElementById("skills");
    if (profilepictureInput && nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var experience = experienceElement.value;
        var education = educationElement.value;
        var Skills = skillsElement.value;
        //profile picture
        var profilepicturefile = (_a = profilepictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilepictureURL = profilepicturefile ? URL.createObjectURL(profilepicturefile) : "";
        var resumeOutput = "\n    <h2>Resume<h2>\n    ".concat(profilepictureURL ? "<img src=\"".concat(profilepictureURL, "\"alt=\"profile picture\" class=\"profile picture\">") : '', "\n    <p><strong>Name:</strong> <span id=\"edit-name\"class=\"editable\"> ").concat(name_1, " </span> </p>\n    <p><strong>email:</strong>  <span id=\"edit-edit\"class=\"editable\">  ").concat(email, " </span> </p>\n    <p><strong>phone Number:</strong>  <span id=\"edit-phone\"class=\"editable\">  ").concat(phone, " </span> </p>\n\n\n    <h3>Education<h3>\n   <p id=\"edit-education\"class=\"editable\">").concat(education, "</p>\n\n   \n    <h4>Experience<h4>\n   <p id=\"edit-experience\"class=\"editable\">").concat(experience, "</p>\n  \n   \n    <h5>Skills<h5>\n   <p id=\"edit-skills\"class=\"editable\">").concat(Skills, "</p>\n   ");
        var resumeOutputElement = document.getElementById("resumeOutput");
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            makeEditable();
        }
    }
    else {
        console.error('one or more output elements are missing');
    }
});
function makeEditable() {
    var editableElements = document.querySelectorAll('.editable');
    editableElements.forEach(function (Element) {
        Element.addEventListener('click', function () {
            var _a;
            var currentElement = Element;
            var currentvalue = currentElement.textContent || "";
            //replace content
            if (currentElement.tagName === "p" || currentElement.tagName === 'SPAN') {
                var input_1 = document.createElement('input');
                input_1.type = 'text';
                input_1.value = currentvalue;
                input_1.classList.add('editing-input');
                input_1.addEventListener('blur', function () {
                    currentElement.textContent = input_1.value;
                    currentElement.style.display = 'inline';
                    input_1.remove();
                });
                currentElement.style.display = 'none';
                (_a = currentElement.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(input_1, currentElement);
                input_1.focus();
            }
        });
    });
}
