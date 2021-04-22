
import Layout from '../components/Layout';

import Image from 'next/image'
export default function Hoodie() {
  return (
      <Layout>
    <div >

      <main className="grid grid-cols-12 min-w-full p-2">
        <div className="col-span-12 self-center ">


            <div className="text-center">
            <h1 className="m-1">Get The Hoodie</h1>
            
                <Image
                    
                    src="/store.svg"
                    alt="store"
                    width={300}
                    height={300}
                    layout="intrinsic"

                />

                <Image
                    
                    src="/coding.svg"
                    alt="m8 logo"
                    width={300}
                    height={300}
                    layout="intrinsic"

                />

                <Image
                    
                    src="/storeonline.svg"
                    alt="m8 logo"
                    width={300}
                    height={300}
                    layout="intrinsic"

                />
                <hr></hr>
            </div>
        </div>
        <div className="col-span-12 md:col-span-6 md:self-center p-2">

        <h1 className="my-3">Intuitive and Fast websites that showcase your business.</h1>


        <hr></hr>
        <h4 className=" motion-safe:animate-fadeIn">Our sites utilize Next.js and Tailwind CSS to create beautiful, statically generated sites that load quickly page to page and carry your company's design language.</h4>
        </div>

        <div className="col-span-12 md:col-span-6 md:self-center" p-2>
        <h1 className="my-3">Focused Language, Crafted artwork</h1>
       

        <hr></hr>
        <h4 className=" motion-safe:animate-fadeIn">We provide messaging that extends an invitation to your customers, and the accompanying graphics that set the tone for the conversation.</h4>
        </div>


        <div className="col-span-12  self-center" >
          <p> </p>

        </div>
      </main>


    </div>
    </Layout>
  )
}
