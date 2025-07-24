const signCheck = () => {
  const regId = `^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,12}$`
  const regPw = `^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])(?=.*[\!\@\#\$\%\^\&\*\(\)\.\?]).{8,20}$`
  const regPhone = `^\s*((\d{3})[- )]*)?((\d{3})[- ]*(\d{2,4})(?:[- ]*(\d+))?)\s*$`
  const regMail = `\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b`


}
export default signCheck