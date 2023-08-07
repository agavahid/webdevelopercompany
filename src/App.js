import logo from './logo.svg';
import './App.css';
import MainLayout from './layouts/mainLayout/mainLayout';
import MainPage from './pages/mainPage/mainPage';

function App() {
  return (
    <MainLayout>
      <MainPage/>
    </MainLayout>
  );
}

export default App;
