import styles from "./layout.module.css";

// Main container that being used everywhere with imported CSS class
export default function Layout({ children }) {
  return (
    <div className={styles.layout}>
      {/* Conditional back button */}
      {/* <div>Will be here</div> */}

      {children}
    </div>
  );
}