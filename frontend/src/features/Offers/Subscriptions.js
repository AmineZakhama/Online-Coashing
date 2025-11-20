import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from "../../css/subscriptions.module.css"
import { Link } from 'react-router-dom';

const Subscriptions = () => {
   /*  const { doctorId } = useParams();
    const [doctor, setDoctor] = useState(null);
    const [prices, setPrices] = useState([]);

    useEffect(() => {
        const fetchDoctorDetails = async (id) => {
            try {
                const response = await axios.get(`/api/doctors/${id}`);
                setDoctor(response.data);
            } catch (error) {
                console.error("Error fetching doctor details", error);
            }
        };
        if (doctorId) {
            fetchDoctorDetails(doctorId);
        }
    }, [doctorId]);

    useEffect(() => {
        fetchPrices();
    }, []);

    const fetchPrices = async () => {
        try {
            const response = await axios.get("http://localhost:3500/payments/prices");
            if (response && response.data) {
                setPrices(response.data);
            } else {
                console.error("Unexpected response structure", response);
            }
        } catch (error) {
            console.error("Error fetching prices", error);
        }
    }; */

    const offers = [
        {
            title: '1 month',
            description: 'Get 1 month of sessions',
            link: ''
        },
        {
            title: '3 months',
            description: 'Get 3 months of sessions',
            link: ''
        },
        {
            title: '6 months',
            description: 'Get 6 months of sessions',
            link: ''
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

export default Subscriptions;
