import openImg from "../assets/open.svg";

export default function OpenLink({ link }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <img src={openImg} alt="Open link" />
    </a>
  );
}
