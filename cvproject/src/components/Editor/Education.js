import React, {Component} from "react";
import EducationItems from "./EducationItems.js";

export default class Education extends Component{

    render(){
        const {
            onChangeEducation,
            education,
            onDelete,
            onAdd
        } = this.props;
        const educationItems = education.map((educationItems) => {
            return (<EducationItems onChangeEducation={onChangeEducation} id={educationItems.id} key={educationItems.id}/>)
        });

        return(
            <div className="inputCard">
                <h3>Education</h3>
                {educationItems}
                <button onClick={onAdd}>Add</button>
                <button onClick={onDelete}>Delete</button>
            </div>
        )
    }
}