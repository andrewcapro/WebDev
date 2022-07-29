import React from "react";

const EduExp = ({ education, experience }) => {
    const educationItems = education.map((educationItem) => (
        <h3 className="education">{educationItem.university} {educationItem.degree} {educationItem.graduationDate}</h3>
    ))

    const experienceItems = experience.map((experienceItem) => (
        <h3 className="experience">{experienceItem.position} {experienceItem.company} {experienceItem.years}</h3>
    ))

    return(
        <>
            {educationItems}
            {experienceItems}
        </>
    )
}

export default EduExp;