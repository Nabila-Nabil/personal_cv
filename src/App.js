
import './App.css';
import Hero from './component/hero/hero';
import About  from './component/about/about';
import Skill from'./component/skill/skill'
import Footer from './component/footer/footer';
function App() {
  return (
    <div className="App">
<Hero/>
<About/>
<Skill/>
<Footer/>
    </div>
  );
}

export default App;
