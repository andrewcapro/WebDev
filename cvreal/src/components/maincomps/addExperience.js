import React from 'react'

const addExperience = ({ onChange, id, experience, onDelete }) => {
  return (
    <>
      <input onChange={(e) => onChange(e,id)} type="text" name="position" placeholder="position name..." value={experience.position} />
      <input onChange={(e) => onChange(e,id)} type="text" name="company" placeholder="company name..." value={experience.company} />
      <input onChange={(e) => onChange(e,id)} type="text" name="years" placeholder="year at the company..." value={experience.years} />
      <button onClick={() => onDelete(id)}>Delete</button>
      <br></br>
    </>
  )
}

export default addExperience;