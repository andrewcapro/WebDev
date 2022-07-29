import AddExperience from "./addExperience";

const Experience = ({ onAdd, setExperience, deleteExperience, experience }) => {

  const experienceItems = experience.map((experienceItem) => (
    <AddExperience 
      key={experienceItem.id} 
      experience={experienceItem} 
      onChange={setExperience} 
      onDelete={deleteExperience} 
      id={experienceItem.id}
    />
  ))

  return(
    <div>
    <br></br>
    {experienceItems}
    </div>
  )
}

export default Experience;