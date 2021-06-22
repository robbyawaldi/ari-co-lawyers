import React from 'react'
import styles from '../../styles/atoms/HomeCounterBar.module.css'

interface HomeCounterBarProps {
}

export const HomeCounterBar: React.FC<HomeCounterBarProps> = ({ }) => {
    return (
        <div className={styles.body}>
            <div className={styles.item}>
                <div>53</div>
                <p>Cases Success</p>
            </div>
            <div className={styles.item}>
                <div>40</div>
                <p>Happy Clients</p>
            </div>
            <div className={styles.item}>
                <div>60</div>
                <p>Cases Done</p>
            </div>
        </div>
    );
}