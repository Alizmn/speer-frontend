import MenuIcon from "@material-ui/icons/Menu";

const styles = {
  navbar: {
    display: "flex",
    fontSize: 60,
    alignItems: "center",
    margin: "1rem",
    position: "fixed",
    zIndex: "1",
  },
  menu: {
    fontSize: "3rem",
    color: "white",
    margin: "1rem",
  },
};
export default function Navbar() {
  return (
    <div style={styles.navbar}>
      <MenuIcon style={styles.menu} />
      <p style={styles.menu}>EXP|CON</p>
    </div>
  );
}
