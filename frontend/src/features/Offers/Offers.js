import styles from '../../css/offers.module.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Offers = () => {
  
    const offers = [
        {
            title: 'Therapy',
            description: 'Professional therapy sessions to support your mental health and well-being. Our licensed therapists offer personalized treatment for anxiety, depression, stress, and more, in a confidential and supportive environment.',
            link: '/offers/doctors'
        },
        {
            title: 'Coaching',
            description: 'Personalized coaching sessions to help you achieve your goals and unlock your full potential. Our experienced coaches provide guidance, support, and accountability to empower you in areas such as career, relationships, and personal growth.',
            link: '/offers/coaches'
        }
        // Add more offers here
    ];
    
    return (
        <section>
            <div id="main">
                <div className="post featured">
                    <header className="major">
                        <h2>Let's check on <br />our offers</h2>
                    </header>
                </div>

                <section className={styles.offersContainer}>
                    {offers.map((offer, index) => (
                        <Link key={index} to={offer.link}>
                            <div className={styles.offer}>
                                <div className={styles.titleBox}>
                                    <h2 className={styles.offerTitle}>{offer.title}</h2>
                                </div>
                                <div className={styles.offerContent}>
                                    <div className={styles.descriptionBox}>
                                        <p>{offer.description}</p>
                                    </div>
                                    <p className={styles.price}>{offer.price}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </section>
            </div>
        </section>
    );

};

export default Offers;
