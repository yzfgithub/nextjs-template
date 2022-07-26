import styles from './index.module.css'
import Image from 'next/image'
import Router from 'next/router'

const HeadMenu  = () => {
    const pageTo = (path:string) => {
        Router.push(path)
    }
    return <div className={styles.head}>
        <div className={styles.logo}>
            <Image width={138} height={32} src="/images/logo.png"></Image>
        </div>
        <div className={styles.menu}>
            <ul>
                <li onClick={() => pageTo('/template')}>Page1</li>
                <li onClick={() => pageTo('/dynamicPage')}>Page2</li>
                <li onClick={() => pageTo('/dynamicPage/1')}>Page3</li>
                <li onClick={() => pageTo('/dynamicPage/2')}>Page4</li>
            </ul>
        </div>
        <div className={styles.user}>
            UserName
        </div>
    </div>
}

export default HeadMenu;