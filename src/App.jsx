import "./App.css";
import AppHeader from "./components/AppHeader/AppHeader.component";
import ArithmeticPageComponent from "./components/ArithmeticPage/ArithmeticPage.component";
import SheetsContextProvider from "./utils/global.context.jsx";
import AppFooter from "./components/AppFooter/AppFooter.component.jsx";

function App() {
  return (
    <SheetsContextProvider>
      <AppHeader />
      <main id={"print-media"}>
        <ArithmeticPageComponent />
      </main>
      <AppFooter />
    </SheetsContextProvider>
  );
}

export default App;
