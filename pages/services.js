
import Layout from '../components/Layout';
import Link from 'next/link';
import Image from 'next/image'
export default function Services() {
  return (
      <Layout>
        <div className=" bg-blue-200 min-h-screen">

      <main className="grid grid-cols-12 min-w-full p-5 bg-blue-200">
        <div className="col-span-12 self-center m-3">

 
            <div className="text-center">
            <h1 className="mb-3">A Web Presence That Feels Like It's Made For Your Audience.</h1>
      
        <div className="bg-white rounded-lg col-span-11 m-3 p-5">
           
            <div className="flex flex-row md:block my-2 ">
                <Image
                    
                    src="/../public/bullseye1.svg"
                    alt="m8 logo"
                    width={130}
                    height={100}
                    layout="intrinsic"

                />
                <Image
                    
                    src="/../public/bullseye2.svg"
                    alt="m8 logo"
                    width={130}
                    height={100}
                    layout="intrinsic"

                />

                <Image
                    
                    src="/../public/bullseye3.svg"
                    alt="m8 logo"
                    width={130}
                    height={100}
             
                    layout="intrinsic"

                />
          
                </div>
            <h1 className="text-purple-700 my-3">Focused Language, Crafted artwork, Memorable Sites</h1>
        


            <h4 className=" motion-safe:animate-fadeIn my-2">We provide messaging that extends an invitation to your customers, and the accompanying graphics that set the tone for the conversation.</h4>
           
            <p className=" motion-safe:animate-fadeIn " >Whether it be simple and elegant, or loud and proud, all M8 sites are tailored to make your mark on the web.</p>
        </div>
 
        <div className=" bg-white rounded-lg  col-span-11 m-3 p-5">
            <div className="flex flex-row md:block ">
        <Image
                    
                    src="/../public/store.svg"
                    alt="store"
                    width={250}
                    height={250}
                    layout="intrinsic"

                />
        <Image
                    
                    src="/../public/storeonline.svg"
                    alt="m8 logo"
                    width={250}
                    height={250}
                    layout="intrinsic"

                />
</div>
            <h1 className="my-3 text-yellow-500">Intuitive and Fast Websites That Showcase Your Business.</h1>



            <h4 className=" motion-safe:animate-fadeIn my-2">Drag and drop sites look and feel slapped together and often go live with bugs that go unfixed.</h4>
            <h4 className=" motion-safe:animate-fadeIn">M8 software utilizes the most performant web development technologies to create beautiful sites that load quickly and correctly across all devices, giving your business enhanced credibility.</h4>
        </div>
        <div className="bg-white rounded-lg col-span-11 m-3 p-5">
        <Image
                    
                    src="/../public/analysis.svg"
                    alt="analysis"
                    width={400}
                    height={400}
                    layout="intrinsic"

                />
            <h1 className="my-3 text-blue-700 ">Connect and analyze all aspects of your online presence.</h1>
        


            <h4 className=" motion-safe:animate-fadeIn">Your website is where you have the most control over your image.</h4>
            <h4 className=" motion-safe:animate-fadeIn my-1"> Give your customers a place to find you and your social media presence and measure the results.</h4>
             <h4 className=" motion-safe:animate-fadeIn">M8 software uses analytics tools to give  feedback on the people who visit your site and how well it is working for them.  </h4>


        </div>
        <Link  href="/contact"><button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded shadow-md mt-3">Put us on your team.</button></Link>
          
            </div>
        </div>


      </main>


    </div>
    </Layout>
  )
}
