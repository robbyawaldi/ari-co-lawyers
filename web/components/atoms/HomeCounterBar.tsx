import React, { useEffect, useRef } from 'react'
import { useCountUp } from 'react-countup'
import styles from '../../styles/atoms/HomeCounterBar.module.css'

interface HomeCounterBarProps {
}

export const HomeCounterBar: React.FC<HomeCounterBarProps> = ({ }) => {
    const { countUp: countUp1, start: start1 } = useCountUp({ end: 53, startOnMount: false })
    const { countUp: countUp2, start: start2 } = useCountUp({ end: 40, startOnMount: false })
    const { countUp: countUp3, start: start3 } = useCountUp({ end: 60, startOnMount: false })
    
    const isCountUpDone = useRef(false)
    const ref: React.LegacyRef<HTMLDivElement> | undefined = useRef(null)

    useEffect(() => {
        const onScroll = () => {
            const elementOffset = ref.current?.parentElement?.parentElement?.parentElement?.offsetTop ?? 0
            if (window.pageYOffset > elementOffset && !isCountUpDone.current) {
                start1()
                start2()
                start3()
                isCountUpDone.current = true
            }
        }

        document.addEventListener('scroll', onScroll)

        return () => {
            document.removeEventListener('scroll', onScroll)
        }
    }, [])

    return (
        <div className={styles.body} ref={ref}>
            <div className={styles.item}>
                <span>{countUp1}</span>
                <p>Cases Success</p>
            </div>
            <div className={styles.item}>
                <span>{countUp2}</span>
                <p>Happy Clients</p>
            </div>
            <div className={styles.item}>
                <span>{countUp3}</span>
                <p>Cases Done</p>
            </div>
        </div>
    );
}