import "../styles/App.css";
import data from "../assets/data1";
import data2 from "../assets/data2";
import Renderer from "../components/renderer";
import React, { createContext } from "react";
export const ModalContext = createContext();

//Render function to recursively render the json until there are no children items left. In that case (base case) the object is passed to renderer.js. More details inside that file.
const RenderLoop = (items) => {
  return (
    <div>
      {Object.keys(items.items).map((key, index) => (
        <div key={key}>
          {items.items[key].Content.type !== "ModalComponent" && (
            <div>
              {!items.items[key].Children && (
                <Renderer data={items.items[key].Content} />
              )}
              {items.items[key].Children && (
                <RenderLoop items={items.items[key].Children} />
              )}
            </div>
          )}
          {items.items[key].Content.type === "ModalComponent" && (
            <Renderer data={items.items[key]} />
          )}
        </div>
      ))}
    </div>
  );
};

function App() {
  //Declaring variable for use with context to globally store dialog open value
  const [open, setOpen] = React.useState(true);
  function toggle() {
    setOpen(!open);
  }

  return (
    <div className="App">
      {data2.Content.type === "BoxComponent" && (
        <div
          style={{
            border: data2.Content.props
              ? data2.Content.props.borderSize + " solid"
              : "1px solid",
          }}
        >
          <ModalContext.Provider value={{ open, toggle }}>
            {/* Starting point for the json . Change data2 to data to use with dummy data data1.js*/}
            <RenderLoop items={data2.Children} />
          </ModalContext.Provider>
        </div>
      )}
    </div>
  );
}

export default App;
