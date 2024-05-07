import './App.css';
import ToDo from "./components/Todo"
import img1 from './images/f3.png';
import img2 from './images/f4.png';
import img3 from './images/f5.png';

function App() {
  return (
    <main class="main">
      <div className="container">
        <h2 className="main_title">Что Вам необходимо?</h2>
          <div className="main_block">
            <div className="blocks">
              <ToDo title = "Первый блок" img={img1} text="Текст первого блока "/>
            </div>
            <div className="blocks">
              <ToDo title = "Второй блок" img={img2} text="Текст второго блока "/>
            </div>
            <div className="blocks">
              <ToDo title = "Третий блок" img={img3} text="Текст третьего блока "/>
            </div>
          </div>
      </div>
    </main>
  );
}

export default App;