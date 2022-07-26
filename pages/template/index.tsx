import type { NextPage } from 'next'
import Layout from '../../components/Layout'
import { postRequest } from '../../utils/axios'

const Template: NextPage = (props) => {
    const requestHandle = () => {
        const params = { 
            url: 'api/hello', // 访问自配的api路由，可用作mock
            method: 'post',
            data: {a:1},
         };
        postRequest(params).then((res: any)=>{
            console.log(res,'res')
        })
    }
  return (
    <Layout>
      <div onClick={requestHandle}>Template</div>
    </Layout>
  )
}


// 服务端渲染页面  异步数据 每次都重新生成
// export async function getServerSideProps(context:any) {
//     const data = await fetch('https://xxx',{}).then(res=> res.json())
//     return {
//       props: {
//         resData: data
//       },
//     }
//   }

  
export default Template