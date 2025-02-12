import { CustomConnectButton } from "~~/components/Scaffold-stark/CustomConnectButton";
import { styles } from "./page.styles";

export default function page() {
  return (
    <div className={styles.container}>
      <div className={styles.connectBox}>
        <div className={styles.text}>
          <span className={styles.titleTextSpan}>
            <h1 className={styles.titleHeader}>NETSTRIKE</h1>
            <small className={styles.titleSmall}>v0.1</small>{" "}
          </span>
          <h2 className={styles.heading}>Secure Terminal Login</h2>
        </div>
        <CustomConnectButton />
      </div>

      <p className={styles.disclaimer}>
        Access to this terminal is restricted under the Secure Operations Act.
        Unauthorized access will trigger security protocols, including but not
        limited to system lockdowns, excessive audit logs, and a
        passive-aggressive IT ticket in your name. Repeat violations may lead to
        enforced policy reviews and prolonged eye contact from security. Proceed
        with dignity.
      </p>

      <div className={styles.footer}>
        <p className={styles.footerText}>
          HELP | 96008N1 8N1 | NOR | NS OS 1.1 | VT102 | Online | ttyACM0
        </p>
      </div>
    </div>
  );
}
