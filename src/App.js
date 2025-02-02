// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './components/SignUp/SignUp';
import Home from './components/Home/Home';

function App() {
  return (
    <div>
      {/* <Provider store={store}> */}
        <BrowserRouter>
        <Routes>
          <Route path="/" Component={SignUp} />
          <Route path="/Home" Component={Home} />
        </Routes>
        </BrowserRouter>
      {/* <AuctionPage /> */}
      {/* </Provider> */}
    </div>
  );
}

export default App;
