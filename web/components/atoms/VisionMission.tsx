import React from 'react'
import styles from '../../styles/atoms/VisionMission.module.css'

interface VisionMissionProps {
}

export const VisionMission: React.FC<VisionMissionProps> = ({ }) => {
    return (
        <div className={styles['body']}>
            <h2>Visi & Misi</h2>
            <p>Menjadi kantor hukum yang berperan dalam menegakkan keadilan, memiliki daya saing global dalam pelayanan hukum yang berlandaskan pada professional.</p>
            <p>Memberikan pelayanan hukum terbaik kepada para klien dan memberikan solusi atas setiap perkara dan tetap mengedepankan penegakan undang-undang, kode etik profesi, norma dan moral.</p>
        </div>
    );
}