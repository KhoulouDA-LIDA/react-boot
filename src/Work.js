import React from 'react';

function Work(){
    return(
       <div className="work">

          <h1>Contact Section</h1>
          <form className="elts">
          <label for="addemail" id="co">Your e-mail:</label>
          <input type="email" id="addemail"/><br></br>
          <label for="phone" id="co">Your phone number:</label>
          <input type="tel" id="phone"/><br></br>
          </form>
           <h1>Work section</h1>
           <form className="elts">
               <label for="domain">What line of work are you in ?</label>
               <br></br>
               <select name="domains" id="domain">
                  <option value="Teaching">Teaching</option>
                  <option value="Health">Health</option>
                  <option value="Sciences">Sciences</option>
                  <option value="ComputerScience">Computer Science</option>
                  <option value="Engineeing">Engineering</option>
                  <option value="Commerce">Commerce</option>
                  <option value="Management">Management</option>
                  <option value="Tourism">Tourism</option>
                  <option value="Artandsport">Art and Sport</option>
                  <option value="Other">Other</option>
                </select>
               <br></br>
               <p>For how long have you been doing that ?</p> 
               <select id="for">
                   <option>Less than 1 year</option>
                   <option>More than 1 year</option>
               </select>
           </form>
 
         
         </div>
    )
}
export default Work;