
import Layout from '../components/Layout';
import Link from 'next/link';
import Image from 'next/image'
export default function Software() {
  return (
      <Layout>
        <div className=" bg-gray-200 min-h-screen">

      <main className="grid grid-cols-12 min-w-full p-5">
        <div className="col-span-12 self-center m-3">


            <div className="text-center">
            <h1 className="mb-3">Software Development.</h1>

            <h5 className="mb-3">M8 Software offers fullstack services on both exisitng projects and new applications.  I've helped multiple entrepreneurs and companies build a strong online presence and create great SAAS Applications.</h5>
            <div className='m-4'>
                <Image
                            
                            src="/js.svg"
                            alt="react"
                            width={100}
                            height={100}
                            layout="intrinsic"
                            

                        />

<Image
                            
                            src="/react.svg"
                            alt="javascript"
                            width={100}
                            height={100}
                            layout="intrinsic"
                  

                        />

<Image
                            
                            src="/angular.svg"
                            alt="angular"
                            width={100}
                            height={100}
                            layout="intrinsic"
                            

                        />

                        <h4>I've worked in many different Javascript/Typescript environments, utilizing technologies such as React and Angular.</h4>
            </div>
            <div className='m-2'>
            <Image
                        
                        src="/python.svg"
                        alt="letter"
                        width={100}
                        height={100}
                        layout="intrinsic"
                        

                    />
                        <h4>I also have experience in Python programming, as well as with backend frameworks such as Django and Flask.</h4>
                        <h4 className="m-2">Custom scripting is available for one off projects in Python.</h4>
                        <Link  href="/contact"><button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded shadow-md mt-3">Contact Us.</button></Link>
          
    
            </div>
            </div>
            
        </div>
                 
 
      </main>


    </div>
    </Layout>
  )
}
