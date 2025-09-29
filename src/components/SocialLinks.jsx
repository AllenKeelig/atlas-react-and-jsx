import linkedinImg from "../assets/linkedin.svg";
import githubImg from "../assets/github.svg";

function SocialLinks() {
  return (
    <div className="social-links">
      <a
        href="https://www.linkedin.com/in/allen-keeling"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={linkedinImg} alt="LinkedIn" />
      </a>
      <a
        href="https://github.com/AllenKeelig"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={githubImg} alt="GitHub" />
      </a>
    </div>
  );
}

export default SocialLinks;
