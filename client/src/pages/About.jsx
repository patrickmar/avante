import Banner2 from '../components/Banner2';
import Cards2 from '../components/Cards2';
import Cooperate from '../components/Cooperate';
import Values from '../components/Values';
import Vision from '../components/Vision';
import Vision1 from '../components/Vision1';
import Caller from '../components/Caller';
import Feedback from '../components/Feedback';
import styles from '../style';
import React, { useEffect } from 'react';

const About = (offset = 0, trigger = true) => {
  useEffect(() => {
    const scrollToHashElement = () => {
      const { hash } = window.location;
      const elementToScroll = document.getElementById(hash?.replace('#', ''));

      if (!elementToScroll) return;

      window.scrollTo({
        top: elementToScroll.offsetTop - offset,
        behavior: 'smooth',
      });
    };

    if (!trigger) return;

    scrollToHashElement();
    window.addEventListener('hashchange', scrollToHashElement);
    return () => window.removeEventListener('hashchange', scrollToHashElement);
  }, [trigger, offset]);

  return (
    <div>
      <Banner2 />
      <Vision />
      <Vision1 />
      <Values />
      <Cooperate />
      <Feedback />
      <Cards2 />
      <div className={`bg-background ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Caller />
        </div>{' '}
      </div>
    </div>
  );
};

export default About;
