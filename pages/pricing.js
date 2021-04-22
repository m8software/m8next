
import Layout from '../components/Layout';

import Image from 'next/image'
import Link from 'next/link';
export default function Pricing() {
  return (
      <Layout>
        <div className=" bg-green-200 min-h-screen">

      <main className="grid grid-cols-12 min-w-full p-5">
        <div className="col-span-12 self-center m-3">

 
            <div className="text-center">
            <h1 className="mb-1">$0 down.  No tricks.</h1>
            <h3>You own your site, cancel anytime.</h3>
            


    

            </div>
        </div>

        <div className="col-span-12 md:col-span-4 md:self-center md:rounded-sm md:shadow-2xl  p-8 mb-2  bg-white">
        <Image
                    
                    src="/../public/sapling.svg"
                    alt="sapling"
                    width={250}
                    height={250}
                    layout="intrinsic"

                />
                <div className="my-3 text-green-700 ">
            <h1 >All-In-One Landing Page, Great for Getting Online.</h1>
            <h2>$0 down, $80 a month.</h2>
        
            </div>
         
        <ul>
            <li className="list-disc">Modern, unbloated site with up to 5 panels of content that loads all at once.</li>
            <li className="list-disc">Comes with Google Analytics built in to monitor site traffic.</li>
            <li className="list-disc">Serves as the online hub for your business, links to all social media.</li>
            <li className="list-disc">Professional email at your domain name, hosting on fast SSDs, domain name renewal,  SSL certification, WHOIS Privacy, unlimited edits all included.</li>
        </ul>
        <Link  href="/contact"><button className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded shadow-md mt-2">Get Online.</button></Link>
           
    
 </div>
 <div className="col-span-12 md:col-span-4 md:self-center md:rounded-sm md:shadow-2xl  p-8 mb-2  bg-white">
        <Image
                    
                    src="/../public/forest.svg"
                    alt="forest"
                    width={250}
                    height={250}
                    layout="intrinsic"

                />
                <div className="my-3 text-blue-700 ">
            <h1 >Statically Generated Next.JS Site.</h1>
            
            <h2 className="mt-1">$0 down, $250 a month.</h2>
            </div>
        <ul>
            <li className="list-disc">Incredibly fast page to page load times.</li>
            <li className="list-disc">Comes with Google Analytics built in to monitor site traffic and Vercel performance analytics to show how well the site performs for users across different devices.</li>
            <li className="list-disc">Serves as the online hub for your business, links to all social media.</li>
            <li className="list-disc">Professional email at your domain name, deployment on Vercel, domain name renewal,  SSL certification, WHOIS Privacy, unlimited edits all included.</li>
        </ul>
        <Link  href="/contact"><button className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded shadow-md mt-2">Start Now.</button></Link>
                  
 </div>

 <div className="col-span-12 md:col-span-4 md:self-center md:rounded-sm md:shadow-2xl  p-8 mb-2  bg-white">
        <Image
                    
                    src="/../public/jungle.svg"
                    alt="jungle"
                    width={250}
                    height={250}
                    layout="intrinsic"

                />
                <div className="my-3 text-purple-700 ">
            <h1 >Custom Software Development / Scripting.</h1>
            <h2>Contact for pricing details.</h2>
            </div>
        <ul>
            <li className="list-disc">Web applications built on Python and/or Javascript technologies.</li>
            <li className="list-disc">Current project enhancements or maintance offloading.</li>
            <li className="list-disc">Custom Python scripts to help your business run smoother.</li>
            

        </ul>
        <Link  href="/contact"><button className="bg-purple-700 hover:bg-purple-900 text-white font-bold py-2 px-4 rounded shadow-md mt-2">Contact Us.</button></Link>
           
 </div>






      </main>


    </div>
    </Layout>
  )
}
