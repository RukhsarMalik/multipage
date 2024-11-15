import BooksDisplay from "./components/BooksDisplay";
import Intro from "./components/intro";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Intro/>
      <BooksDisplay/>
    </div>
  )
}
