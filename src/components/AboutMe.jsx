import selfie from "../assets/almostprofessionalselfie.webp";
const AboutMe = ({children}) => {
  return (
    <div className="about-me">
      <img src={selfie} alt="ProfessionalImg" />
      <p>{children}</p>
    </div>
  );
}

export default AboutMe;