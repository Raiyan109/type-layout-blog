import React from 'react';
import styles from './Home.module.css'
import image from '../../images/pexels-steve-johnson-1109354.jpg'


const Home = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.header}>there's a tremendous</h1>
            <h1 className={styles.header}>gap between</h1>
            <h1 className={styles.header}>public opinion and</h1>

            <img className={styles.image} src={image} alt="" />

            <div className={styles.downContainer}>
                <div className={styles.downPara}>
                    <p>The smart way to keep people passive and obedient is to strictly limit the spectrum of acceptable opinion, but allow very lively debate within that spectrum-even encourage the more critical and decental views.</p>
                    <button className={styles.downBtn}>Read article</button>
                </div>

                <div>
                    <h1 className={styles.downHeader}>public policy</h1>
                </div>
            </div>
        </div>
    );
};

export default Home;