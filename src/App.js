import './App.css';
import SectionNameAndAvatar from './components/SectionNameAndAvatar';
import SectionStudy from './components/SectionStudy';
import SectionDegree from './components/SectionDegree';
import SectionExperience from './components/SectionExperience';
import SectionSkill from './components/SectionSkill';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <div className="one-page-content-wrapper">
        <SectionNameAndAvatar/>
        <SectionStudy/>
        <SectionDegree/>
        <SectionExperience/>
        <SectionSkill/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
