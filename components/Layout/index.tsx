import styles from './index.module.css'
import CusHead from '../CusHead'
import HeadMenu from './HeadMenu'
import CusFooter from '../CusFooter'
import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from 'react'

const Layout  = (props: { children: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined }) => {
    return <div className={styles.container}>
        <CusHead></CusHead>
        <HeadMenu></HeadMenu> 
        <div className={styles.box}>
            {
                props.children
            }
        </div>
        <CusFooter></CusFooter>
    </div>
}

export default Layout;