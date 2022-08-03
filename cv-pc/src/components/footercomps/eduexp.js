import React from "react";

const EduExp = ({ education, experience }) => {
    const educationItems = education.map((educationItem) => (
        <div>
            <h3 className="personal">Education</h3>
            <h3 className="education">{educationItem.university} {educationItem.degree} {educationItem.graduationDate}</h3>
        </div>
    ))

    const experienceItems = experience.map((experienceItem) => (
        <div>
            <h3 className="personal">Experience</h3>
            <h3 className="experience">{experienceItem.position} {experienceItem.company} {experienceItem.years}</h3>   
        </div>
    ))

    return(
        <>
            {educationItems}
            {experienceItems}
        </>
    )
}

export default EduExp;