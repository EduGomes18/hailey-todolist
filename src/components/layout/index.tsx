import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { CgMenuLeftAlt } from "react-icons/cg";

interface Layout {
  children: React.ReactNode;
}

const Layout: React.FC<Layout> = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = useCallback(() => {
    setShowMenu(!showMenu);
  }, [showMenu]);

  return (
    <div className={styles.body}>
      <div className={styles.menu}>
        <span onClick={handleMenu}>
          <CgMenuLeftAlt size={30} />
        </span>
        {showMenu && (
          <nav>
            <Link to={"/"}>Lista de tarefas</Link>
            <Link to={"/timer"}>Temporizador</Link>
          </nav>
        )}
      </div>

      {children}
    </div>
  );
};

export default Layout;
