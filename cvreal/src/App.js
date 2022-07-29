import Footer from "./components/Footer";
import Main from "./components/Main";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid'

const App = () => {
  const [cv, setCV] = useState({
    personalInfo: {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
    },
    education: [
      {
        id: uuidv4(),
        university: '',
        degree: '',
        graduationDate: '',
      },
    ],
    experience: [
      {
        id: uuidv4(),
        position: '',
        company: '',
        years: '',
      },
    ],
  })

  return (
    <div>
      <Main cv={ cv } setCV={ setCV }/>
      <Footer personalInfo={cv.personalInfo} education={cv.education} experience={cv.experience}/>
    </div>
  );
}

export default App;