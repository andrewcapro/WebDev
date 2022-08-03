import AddEducation from "./addEducation";

const Education = ({ setEducation, deleteEducation, education }) => {

  const educationItems = education.map((educationItem) => (
    <AddEducation 
      key={educationItem.id} 
      education={educationItem} 
      onChange={setEducation} 
      onDelete={deleteEducation} 
      id={educationItem.id}
    />
  ))

  return(
    <div>
    {educationItems}
    </div>
  )
}

export default Education;