import type { NextPage } from 'next'
import Layout from '../../components/Layout'
// import { useRouter } from 'next/router'


const DynamicPageID: NextPage = (props) => {
    // const router = useRouter();
    // console.log(router)
    // if(router.isFallback) {
    //     console.log('is ok')
    // } else {
    //     console.log('is none')
    // }
    
  return (
    <Layout>
      <div>DynamicPage/id</div>
    </Layout>
  )
}

// export async function getStaticProps() {
//     const data = await fetch('https://xxx',{}).then(res=> res.json())
//     return {
//         props: {
//             ...data.data
//         }
//     }
// }

// export const getStaticPaths = async () => {
//     return {
//         paths: [{
//             params: {id:'2'}
//         }],
//         fallback:true
//     }
// }

export default DynamicPageID