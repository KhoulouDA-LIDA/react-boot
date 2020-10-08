import React from 'react';

function Home(){
   return (
       <div className="identification">
           <h1>Identification</h1>
           <form className="coor">
               <label for="pseudo">Username: </label>
               <input type="text" name="pseudo" id="pseudo"/><br></br>
               <br></br>
               <label for="passw">Password: </label>
               <input type="password" name="password" id="passw"/><br></br>
               <br></br>
           </form>
       </div>
   ) 
}
export default Home;