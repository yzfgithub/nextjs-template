import Image from 'next/image'
import styles from './index.module.css'

const CusFooter = () => {
    return (
        <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          
          pro created by zfyan
          
        </a>
      </footer>
    )
}


export default CusFooter;