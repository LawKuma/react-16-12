import { useState } from "react";

const Menu = () => {
  const [MenuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!MenuVisible);
  };

  return (
    <div>
      <button onClick={toggleMenu}>{MenuVisible ? "Hide" : "Show"} Menu</button>
      {MenuVisible && (
        <div>
          <ul>
            <li>- Nourrir le chien</li>
            <li>- Faire mes devoirs</li>
            <li>- Essayer des trucs en React</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Menu;
