import React, { useEffect, useState } from 'react';
import styles from '../../styles/molecules/HomeServices.module.css'
import { HomeService } from '../atoms/HomeService';
import { Section } from '../templates/Section';
import axios from 'axios'

interface Service {
    iconSrc: string
    title: string
    description: string
    link: string
}

interface HomeServicesProps {
}

export const HomeServices: React.FC<HomeServicesProps> = ({ }) => {
    const [services, setServices] = useState<Service[]>([])

    useEffect(() => {
        const fetch = async () => {
            const response = await axios.get('/api/services')
            if (response.data) {
                setServices(response.data)
            }
        }

        fetch()
    }, [])

    return (
        <Section isFull={false}>
            <div className={styles.body}>
                <h2>Pelayanan Kami</h2>
                <h3>{"Solusi hukum yang andal & efektif"}</h3>
                <p>dapatkan informasi dan saran langsung dari pengacara berpengalaman</p>
                <div className={styles.services}>
                    {services.map(service => (
                        <HomeService
                            key={service.iconSrc}
                            iconSrc={service.iconSrc}
                            title={service.title}
                            description={service.description}
                            link={service.link} />
                    ))}
                </div>
            </div>
        </Section>
    );
}