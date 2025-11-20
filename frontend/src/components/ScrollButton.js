
import React from 'react';
import styles from '../css/main.module.css'; // Import CSS module 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

class ScrollButton extends React.Component {
  handleClick = () => {
    // Get the element you want to scroll to
    const targetElement = document.getElementById('header');
    
    // Scroll to the target element smoothly
    targetElement.scrollIntoView({ behavior: 'smooth' });
  }

  render() {
    return (
      <a href="#header" onClick={this.handleClick} className={` ${styles.icon} ${styles.solid} ${styles.solo} `}><FontAwesomeIcon className={styles.arrowDownIcon} icon={faArrowDown} size="2xl" /></a>
    );
  }
}

export default ScrollButton;
