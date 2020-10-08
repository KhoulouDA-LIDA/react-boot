import React from 'react';
function About(){
    return(
        <div className="introduction">
            <h1>Please introduce yourself</h1>
            <div className="elts">
                
                <label for="intro" id="qst">Who are you and what is your background ?</label>
                <textarea name="introduction" id="intro" cols="20" rows="3">Write here</textarea>
                <label for="skills" id="qst">What are your talents and interests ?</label>
                <textarea name="skills" id="skills" cols="20" rows="3">Write here</textarea>
                <label for="achievements" id="qst">What are your achievements ?</label>
                <textarea name="achievements" id="achievements" cols="20" rows="3">Write here</textarea>
                <label for="challenges" id="qst">What challenges have you faced ? </label>
                <textarea name="challenges" id="challenges" cols="20" rows="3">Write here</textarea>
            </div>
        </div>
    )
}

export default About;