import React from "react";
import { motion, AnimatePresence } from "framer-motion";

import styles from "./style";
import {
  Navbar,
  Hero,
  Education,
  SkillsAndExperience,
  Footer,
  Projects,
  ExtraCurricular,
  Loading,
  Achievements,
} from "./components";

const App = () => {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1200);
  }, []);

  return (
    <div className="bg-primary w-full overflow-hidden">
      <Navbar /> {/* Navbar remains constant at the top */}

      <AnimatePresence>
        {isLoading ? (
          <Loading key="loading" />
        ) : (
          <motion.section
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.75, delay: 0.5 }}
          >
            {/* Ensure proper spacing so navbar doesn't overlap */}
            <div className="pt-20">
              <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                  <Hero />
                </div>
              </div>

              <div className={`bg-primary ${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>
                  <SkillsAndExperience />
                  <Education />
                </div>
              </div>

              <Achievements />

              <div className={`bg-primary ${styles.flexCenter} ${styles.paddingX}`}>
                <div className={`${styles.boxWidth}`}>
                  <Projects />
                  <ExtraCurricular/>
                </div>
              </div>

              <Footer />
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
