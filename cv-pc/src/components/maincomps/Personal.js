const Personal = ({ personalInfo, onChange }) => {
    return(
        <div>
            <form>
                <input type="text" value={personalInfo.firstName} placeholder="first name..." name="firstName" onChange={onChange} />
                <input type="text" value={personalInfo.lastName} placeholder="last name..." name="lastName" onChange={onChange} />
                <input type="text" value={personalInfo.email} placeholder="email..." name="email" onChange={onChange} />
                <input type="text" value={personalInfo.phoneNumber} placeholder="phone number..." name="phoneNumber" onChange={onChange} />
            </form>
            <br></br>
        </div>
    )
}

export default Personal;