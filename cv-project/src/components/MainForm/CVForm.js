import React,{Component} from "react"
import Personal from "./Personal.js"
import Experience from "./Experience.js"
import Education from "./Education.js"

export default class CVForm extends Component{
    render(){
        const {
          onReset,
          onChangePersonal,
          onChangeExperience,
          onChangeEducation,
          onAddEducation,
          onAddExperience,
          onDeleteExperience,
          onDeleteEducation,
          education,
          experience
        } = this.props;
        return(
            <div className="cvform">
            <Personal onChangePersonal={onChangePersonal}/>
            <Experience
                onChangeExperience={onChangeExperience}
                experience = {experience}
                onAdd = {onAddExperience}
                onDelete={onDeleteExperience}/>
            <Education
                onChangeEducation={onChangeEducation}
                education = {education}
                onAdd = {onAddEducation}
                onDelete={onDeleteEducation}/>
            <button onClick={onReset} className="red">Reset</button>
            </div>
        );
    }
}