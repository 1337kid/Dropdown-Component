import CustomDropdown from "./Components/CustomDropdown/CustomDropdown";
import { LuFilm } from "react-icons/lu";

function App() {

  const items = [
    { label: 'Selected Option' },
    { label: 'Default Option' },
    { label: 'Hovered Option' },
    { label: 'Disabled Option', disabled: true },
    { label: 'Text Option' },
    { label: 'Icon and Text Option', icon: LuFilm },
  ];

  return (
    <div className="container">
      <CustomDropdown
        items={items}
        defaultSelected={2}
        showCheck={true}
        showSearchBar={true}
      />
    </div>
  )
}

export default App;
