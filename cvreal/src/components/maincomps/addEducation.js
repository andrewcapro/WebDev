import React from 'react'

const addEducation = ({ onChange, id, education, onDelete }) => {
  return (
    <>
      <input 
        onChange={(e) => onChange(e,id)} 
        type="text" 
        name="university" 
        placeholder="university name..." 
        value={education.university} 
        style={{borderRadius: 5, borderColor: 'green', backgroundColor: 'lightgreen', fontWeight: '800'}}
      />
      <input 
        onChange={(e) => onChange(e,id)} 
        type="text" 
        name="degree" 
        placeholder="degree title..." 
        value={education.degree} 
      />
      <input 
        onChange={(e) => onChange(e,id)} 
        type="text" 
        name="graduationDate" 
        placeholder="year of graduation..." 
        value={education.graduationDate} 
      />
      <button onClick={() => onDelete(id)} style={{color: 'green', fontWeight: '1000', backgroundColor: 'lightgray' }}>Delete</button>
      <br></br>
    </>
  )
}

export default addEducation