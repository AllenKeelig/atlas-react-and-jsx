import Header from "./components/Header";
import HelpfulResource from "./components/HelpfulResource";
import Section from "./components/Section";
import AboutMe from "./components/AboutMe"
import Footer from "./components/Footer";

function App() {
  return <div className="app">
    <Header />
    <Section title="What is react?">
      <p>
        React is a JavaScript library for building user interfaces. It allows
        developers to create reusable components and efficiently update the UI
        when data changes by using a virtual DOM for performance.
      </p>
    </Section>

    <Section title="Benefits of react">
      <ul>
        <li>Reusable components make development faster and more organized.</li>
        <li>The virtual DOM improves performance with efficient rendering.</li>
        <li>Strong community support and a large ecosystem of libraries.</li>
        <li>JSX makes it easier to write UI logic and structure in one place.</li>
        <li>Works seamlessly with modern development tools and frameworks.</li>
      </ul>
    </Section>

    <Section title="Helpful resources">
      <HelpfulResource link="https://atlas-jswank.github.io/blog/hello-react/#rendering-react-to-the-dom" label="literally where I'm learning this" />
      <HelpfulResource link="https://www.w3schools.com/react/react_intro.asp" label="where I would usuall learn this" />
      <HelpfulResource link="https://www.youtube.com/watch?v=j942wKiXFu8" label= "I did not verify this video but it did annoy me when I started it so its probably good"/>
    </Section>

    <AboutMe>
      Hello, My name is Allen Keeling. I am a t5 full stack web-developer, I plan to use this skill for work in some way but no concrete plans. For now I have personal projects I am working on personal projects related to that skill and hope to use them as resume pieces.
    </AboutMe>
    <Footer/>
  </div>;
}

export default App;
