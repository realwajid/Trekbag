import BackgroundHeading from "./BackgroundHeading";
import Footer from "./Footer";
import itemList from "./itemList";
import Sidebar from "./SlideBar"; 
import Header from "./Header";

export default function App() {
  return (
    <>
      <BackgroundHeading />
      <main>
        <Header />
        <ItemList />
        <Sidebar />
      </main>
      <Footer />
    </>
  );
}