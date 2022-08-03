import Education from "./maincomps/Education";
import Personal from "./maincomps/Personal";
import Experience from "./maincomps/Experience";
import { v4 as uuidv4 } from 'uuid'

const Main = ({ cv, setCV }) => {

  const handleChangePersonal = e => {
    const { name, value } = e.target;
    setCV(prevState => ({
        ...prevState,
        personalInfo: {
        ...prevState.personalInfo,
        [name]: value,
      },
    }))
  }

  const handleChangeEducation = (e, id) => {
    const { name, value } = e.target

    setCV((prevState) => {
      const newEducation = prevState.education.map((educationItem) => {
        if (educationItem.id === id) {
          return { ...educationItem, [name]: value }
        }
        return educationItem
      })
      return { ...prevState, education: [...newEducation] }
    })
  }

  const handleChangeExperience = (e, id) => {
    const { name, value } = e.target

    setCV((prevState) => {
      const newExperience = prevState.experience.map((experienceItem) => {
        if (experienceItem.id === id) {
          return { ...experienceItem, [name]: value }
        }
        return experienceItem
      })
      return { ...prevState, experience: [...newExperience] }
    })
  }

  const handleAddEducation = () => {
    setCV((prevState) => ({
      ...prevState,
      education: [
        ...prevState.education,
        {
          id: uuidv4(),
          university: '',
          degree: '',
          graduationDate: '',
        },
      ],
    }))
  }

  const handleAddExperience = () => {
    setCV((prevState) => ({
      ...prevState,
      experience: [
        ...prevState.experience,
        {
          id: uuidv4(),
          position: '',
          company: '',
          years: '',
        },
      ],
    }))
  }

  const handleDeleteEducation = (id) => {
    setCV((prevState) => {
      const newEducation = prevState.education.filter(
        (educationItem) => educationItem.id !== id
      )
      return { ...prevState, education: [...newEducation] }
    })
  }

  const handleDeleteExperience = (id) => {
    setCV((prevState) => {
      const newExperience = prevState.experience.filter(
        (experienceItem) => experienceItem.id !== id
      )
      return { ...prevState, experience: [...newExperience] }
    })
  }


  return (
    <div className="container" >
      <Personal personalInfo={cv.personalInfo} setCV={setCV} onChange={handleChangePersonal} />
      <Education onAdd={ handleAddEducation } education={ cv.education } setEducation={ handleChangeEducation } deleteEducation={ handleDeleteEducation }/>
      <button onClick={handleAddEducation}>Add</button>
      <Experience onAdd={ handleAddExperience } experience={ cv.experience } setExperience={ handleChangeExperience } deleteExperience={ handleDeleteExperience } />
      <button onClick={handleAddExperience}>Add</button>
    </div>
  )
}

export default Main;