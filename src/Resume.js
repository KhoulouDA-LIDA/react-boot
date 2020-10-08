import React from 'react';

function Resume(){
    return(
       <div className="resume">
           <h1>Add here your resume</h1>
           <form className="elts">
               <label for="obj">Objective</label>
               <textarea id="obj" cols="40" rows="8">White here</textarea><br></br>
               <label for="edu">Education</label>
               <textarea id="edu" cols="40" rows="8">White here</textarea><br></br>
               <label for="car">Carrer Summary</label>
               <textarea id="car" cols="40" rows="8">White here</textarea><br></br>
               <label for="skl">Skills</label>
               <textarea id="skl" cols="40" rows="8">White here</textarea><br></br>
               
           </form>
           
       </div>
    )
}
export default Resume;