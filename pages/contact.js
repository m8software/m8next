

import Layout from '../components/Layout';
import Image from 'next/image'
import React,{useState} from 'react';

export default function Contact() {

    const [email,setEmail] = useInput('');
    const [message,setMessage] = useInput('');
    const [name,setName] = useInput('');
    const [company,setCompany] = useInput('');
    const [sent, setSent] = useState(false);

    function useInput(initialValue)  {
        const [value,setValue] = useState(initialValue);
         function handleChange(e){        setValue(e.target.value);    }
        return [value,handleChange];
    
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log(name, message, email)
        fetch('https://www.m8sw.com/api/ContactM8/', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
     

            },
              body: JSON.stringify({
                "name": name,
                "email": email,
                "company": company,
                "text": message,

          
              })
        })
        .then(data => {
          console.log('Success:', data);
          setSent(true);
        })
        .catch((error) => {
          console.error('Error:', error);
          setSent(false);
        });
    }


  return (
    <Layout>
            <main className="p-3 bg-purple-200 grid grid-cols-12  min-h-screen">
                <div className="max-h-full col-span-12 m-2 mb-0  md:col-span-5 md:m-6 ">
                <form className={`${ !sent ? '' : 'hidden'
          } bg-white self-center rounded-md shadow-2xl p-4`} onSubmit={handleSubmit}>
                <p className="mb-3 text-black sm:text-xl md:text-3xl">Shoot us a message.  We respond pretty quickly.</p>
                    <div className="lg:col-span-3 sm:col" > 
                    <input className=" my-1 focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none w-full text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-10"   placeholder="Email" type="email" value={email} onChange={setEmail}/>  
                    <input className="my-1 focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none w-full text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-10"  placeholder="Name" type="text"  value={name} onChange={setName}/> 
                    
                    <input className="my-1 focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none w-full text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-10"  placeholder="Company" type="text"  value={company} onChange={setCompany}/> 
                    </div>

                    <div className="lg:col-span-7 " > 
                    <textarea  className="my-1 focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none w-full text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-10"  rows="5" cols="80"  placeholder="How Can We Help"  value={message} onChange={setMessage} > </textarea>
            
                    </div>
                    <div className="flex-row">

                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-md  m-2">Submit</button>
                 
                    </div>
                </form>
                <div className={`${ sent ? '' : 'hidden'
          } bg-white self-center rounded-md shadow-2xl p-4`}>
              <div className="m-2">
     <h3 className={`${
            sent ? '' : 'hidden'
          }
          bg-green-400 text-white font-bold py-2 px-4 rounded shadow-md `}>
                        Thank You!
                    </h3>

                    <p>We will get back to you as soon as we can.</p>
                    </div>
          </div>


            </div>

       

                    <div className="col-span-12 md:col-span-6">
                    <Image
                        
                        src="/letter.svg"
                        alt="letter"
                        width={400}
                        height={400}
                        layout="intrinsic"
                        

                    />
                    </div>
            </main>

    </Layout>
  )
}
