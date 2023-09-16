import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import Cart from './components/Cart/Cart'

function App() {
  return (
    <>
      <Header></Header>
      <Blogs>
        <Cart></Cart>
      </Blogs>

    </>
  )
}
export default App
