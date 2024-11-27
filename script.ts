document.getElementById("resumeForm")?.addEventListener("submit",function(event){
    event.preventDefault()

 const profilepictureInput = document.getElementById("profilePicture")as HTMLInputElement;
const nameElement = document.getElementById("name")as HTMLInputElement;
const emailElement = document.getElementById("email")as HTMLInputElement;
const phoneElement = document.getElementById("phone")as HTMLInputElement|null;
const educationElement = document.getElementById("education")as HTMLInputElement;
const experienceElement = document.getElementById("experience")as HTMLInputElement;
const skillsElement = document.getElementById("skills")as HTMLInputElement;

if(profilepictureInput && nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement){
   const name= nameElement.value;
   const email= emailElement.value;
   const phone= phoneElement.value;
   const experience= experienceElement.value;
   const education= educationElement.value;
   const Skills= skillsElement.value;


   //profile picture

   const profilepicturefile=profilepictureInput.files?.[0]
   const profilepictureURL= profilepicturefile ? URL.createObjectURL(profilepicturefile) : "";

    const resumeOutput = `
    <h2>Resume<h2>
    ${profilepictureURL ? `<img src="${profilepictureURL}"alt="profile picture" class="profile picture">`:''}
    <p><strong>Name:</strong> <span id="edit-name"class="editable"> ${name} </span> </p>
    <p><strong>email:</strong>  <span id="edit-edit"class="editable">  ${email} </span> </p>
    <p><strong>phone Number:</strong>  <span id="edit-phone"class="editable">  ${phone} </span> </p>


    <h3>Education<h3>
   <p id="edit-education"class="editable">${education}</p>

   
    <h4>Experience<h4>
   <p id="edit-experience"class="editable">${experience}</p>
  
   
    <h5>Skills<h5>
   <p id="edit-skills"class="editable">${Skills}</p>
   ` ;

   const resumeOutputElement = document.getElementById("resumeOutput")
   if(resumeOutputElement){
    resumeOutputElement.innerHTML = resumeOutput

    makeEditable();
   }
}else{
    console.error('one or more output elements are missing');
   }   

})

function makeEditable(){
   const editableElements= document.querySelectorAll('.editable');
   editableElements.forEach(Element=>{
      Element.addEventListener('click',function(){
         const currentElement = Element as HTMLElement;
         const currentvalue = currentElement.textContent || "";

         //replace content
        
         if(currentElement.tagName === "p" || currentElement.tagName === 'SPAN'){
            const input = document.createElement('input')
            input.type = 'text'
            input.value = currentvalue
            input.classList.add('editing-input')


            input.addEventListener('blur',function(){
               currentElement.textContent=input.value
               currentElement.style.display= 'inline'
               input.remove()
            })

            currentElement.style.display ='none'
            currentElement.parentNode?.insertBefore(input,currentElement)
         input.focus()
         }

      })
   })
}