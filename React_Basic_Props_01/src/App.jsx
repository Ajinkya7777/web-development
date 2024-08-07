// import "./App.css";
import "./index.css";
// import MyData from "./componenets/MyData";
import MyCard from "./componenets/MyCard";

const App = () => {
  return (
    <>
      <h1>Hello World</h1>
      <MyCard heading={"Good Morning"} />
      <MyCard heading={"Good Afternoon"} />
      <MyCard heading={"Good Evening"} />
      {/* <div>
        <MyData heading={"Good Morning"} />
        <MyData heading={"Good Afternoon"} />
        <MyData heading={"Good Evening"} />
      </div>
      <div>
        <MyData heading={"Good Morning"} />
        <MyData heading={"Good Afternoon"} />
        <MyData heading={"Good Evening"} />
      </div> */}
    </>
  );
};

// function App() {
//   return (
//     <div className="App">
//       <MyData heading={"Good Morning"} />
//       <MyData heading={"Good Afternoon"} />
//       <MyData heading={"Good Evening"} />
//     </div>
//   );
// }

export default App;
