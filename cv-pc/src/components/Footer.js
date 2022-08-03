import EduExp from "./footercomps/eduexp";

const Footer = ({ personalInfo, education, experience }) => {
    return (
        <div className="footer">
            <div className="personal-footer">
                <h3 className="personal">{personalInfo.firstName} {personalInfo.lastName} {personalInfo.email} {personalInfo.phoneNumber} </h3>
            </div>
            <div className="education-footer">
                <EduExp education={education} experience={experience}/>
            </div>
        </div>
    )
}

export default Footer;