
import Image from 'next/image'
import Layout from '../components/Layout';
import Link from 'next/link';
import { faTwitter, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Home() {
  return (
    <Layout>
    <div className=" bg-blue-200 min-h-screen">

      <main className="grid grid-cols-11 min-w-full min-h-full p-5">
        <div className="col-span-11  md:col-span-5 md:m-6 self-center ">
          <Image
     
          src="/m8logo.svg"
          alt="m8 logo"
          width={450}
          height={450}
          layout="responsive"

        />
        </div>
          <div className="col-span-12  md:col-span-5 md:self-center ">
            <div className="text-center flex my-2">
              <p className=" lg:text-4xl">Websites.  </p> <p className="  lg:text-4xl mx-3">  Web Apps. </p> <p className=" lg:text-4xl text-purple-700 ">  Web Presence.</p>

            </div>
            <div className=" rounded-md shadow-2xl p-5 mb-4  bg-white">
              <h2 className="my-3">Custom software development that maps your ideas and needs onto antifragile solutions.</h2>
            


            <h3 className="my-3 motion-safe:animate-fadeIn ">Put us on your team and run your business knowing your online presence is taken care of.</h3>
            
            {/* <h3 className="my-3 motion-safe:animate-fadeIn ">M8 software offers website and web app creation, as well as contract work.</h3> */}
            <Link  href="/contact"><button className="bg-purple-700 hover:bg-purple-900 text-white font-bold py-2 px-4 rounded shadow-md ">Get in touch.</button></Link>
                    
          </div>

          <div className=" flex flex-row rounded-md shadow-2xl text-center   max-w-min p-3 self-center  bg-white">
  
      
          <Link href='https://instagram.com/m8software'>
          <a className='inline-flex items-center p-2 ' target="_blank">
          <FontAwesomeIcon icon={faInstagram} size="3x"/>

          </a>
          
        </Link>
      
 
        <Link href='https://twitter.com/m8software'>
          <a className='inline-flex items-center  mx-6 ' target="_blank">
          <FontAwesomeIcon icon={faTwitter} size="3x"/>

          </a>
        </Link>
  
    
        <Link href='https://github.com/m8software'>
          <a className='inline-flex items-center ' target="_blank">
          <FontAwesomeIcon icon={faGithub} size="3x"/>

          </a>
        </Link>
     
        
    
          </div>

        </div>

      </main>


    </div>
    </Layout>
  )
}
