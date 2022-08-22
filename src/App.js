import logo from './logo.svg';
import './App.css';
// import Greeting from './components/pure/greeting';
// import GreetingF from './components/pure/greetingF';
import TaskListComponent from './components/container/task_list';
import ContactListComponent from './components/container/contact.list';
import Ejemplo1 from './hooks/Ejemplo1';
import Ejemplo2 from './hooks/Ejemplo2';
import MiComponenteConContexto from './hooks/Ejemplo3'
import Ejemplo4 from './hooks/Ejemplo4';
import GreetingStyled from './components/pure/greetingStyled';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* Componente propio Greeting.jsx */}
        {/* <Greeting name="Lucas"></Greeting> */}
        {/* Listado de tareas */}
        {/* <GreetingF name="Lucas"></GreetingF> */}
        {/* Componente listado de tareas */}
        {/* <TaskListComponent></TaskListComponent> */}
        {/* <ContactListComponent></ContactListComponent> */}
        {/* Ejemplo de uso de HOOKS  */}
        {/* <Ejemplo1></Ejemplo1> */}
        {/* <Ejemplo2></Ejemplo2> */}
        {/* <MiComponenteConContexto></MiComponenteConContexto> */}
        {/* Todo lo que haya aqui es tratado como props.children */}
        {/* <Ejemplo4 nombre="Lucas">
          <h3>
            Contenido del props.children
          </h3>
        </Ejemplo4> */}
        {/* <GreetingStyled name='Martin'></GreetingStyled> */}

      {/* </header> */}
        <TaskListComponent></TaskListComponent>

    </div>
  );
}

export default App;
