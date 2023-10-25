import { Link, Route, BrowserRouter, Routes } from 'react-router-dom';

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '50%', margin: 'auto'}}>
      <BrowserRouter basename="/react-github-pages">
        <NavLinks />
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/about' element={<AboutPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function NavLinks() {
  return (
    <div style={{ display: 'flex', gap: '20px', margin: '20px 0px'}}>
      <Link to="/">home</Link>
      <Link to="/about">about</Link>
    </div>
  )
}

function HomePage() {
  return (
    <div>Home View</div>
  )
}

function AboutPage() {
  return (
    <div>About View</div>
  )
}

export default App;
