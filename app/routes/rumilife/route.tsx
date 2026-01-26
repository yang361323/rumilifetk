import { useState } from "react";

import styles from "./styles.module.css";

export default function RumilifePage() {
  const [active, setActive] = useState("home");
  const tabs = [
    { id: "home", label: "Home", content: <div>home</div> },
    { id: "charts", label: "Charts", content: <div>charts</div> },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.tabLayout}>
        {/* tab nav */}
        <div className={styles.tabButtons}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`${styles.tabButton} ${
                active === tab.id ? styles.active : ""
              }`}
              onClick={() => setActive(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* tab content */}
        <div className={styles.tabContent}>
            {tabs.find((tab) => tab.id === active)?.content}
        </div>
      </div>
    </div>
  );
}
