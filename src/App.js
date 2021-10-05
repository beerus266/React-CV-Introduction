import './App.css';
import SectionNameAndAvatar from './components/SectionNameAndAvatar';
import SectionStudy from './components/SectionStudy';
import SectionExperience from './components/SectionExperience';
import SectionCompany from './components/SectionCompany';
import SectionSkill from './components/SectionSkill';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <div className="one-page-content-wrapper">
        <SectionNameAndAvatar/>
        <SectionStudy/>
        <SectionExperience/>
        <SectionCompany/>
        <SectionSkill/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
