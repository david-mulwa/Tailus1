import Section from '../components/Section'
import { useState } from "react";
import Button from "../components/Button";
const Contact = () => {
  const [form, setform] = useState({name:'', email:'', message:''})
  const [isLoading, setisLoading] = useState(false)
  const handleChange=(e)=>{
    setform({...form, [e.target.name]:e.target.value})

  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    setisLoading(true)
  }

  return (
    <Section>
      <div className='flex flex-col justify-center mt-12 items-center '>
        <h2 className='font-bold font-code text-3xl '>Contact</h2>
        <p className='text-n-6 mt-3 text-xl'>We are a here to help.</p>
      </div>

      <div className=' container flex gap-4 m-20 md:flex-row '>
        <div>
          <h6 className='font-code font-semibold text-xl'> Contact Astroshio</h6>
          <p className='text-n-6 text-balance text-xl'>Have something to say? We are here to help. Fill up the form or send email or call phone.</p>
          <ul className='flex flex-col justify-start mt-3 text-l text-n-6'>
            <li>1734 Sanfransico, CA 93063 </li>
            <li>hello@astroshipstarter.com</li>
            <li>+1 (987) 4587 899</li>
          </ul>

        </div>
        <div className='w-[60%] '>
          <form action="contact" className=' flex flex-col gap-7 mr-20  '>
            
              
              <input 
              type='text'
              name='name'
              className='border border-black bg-whitesmoke p-3'
              placeholder='John'
              required
              value={form.name}
              onChange={handleChange}>

              </input>

            
           
              <input 
              type='email'
              name='email'
              className='border border-black bg-whitesmoke p-3'
              placeholder='John@example.com'
              required
              value={form.email}
              onChange={handleChange}>

              </input>

          

         
              <textarea 
              name='message'
              className='border border-black bg-whitesmoke p-3 h-[150px] '
              placeholder='write to us'
              required
              value={form.message}
              onChange={handleChange}>

              </textarea>

            <Button type='submit' disabled={isLoading} className='border bg-black text-white'> Send message</Button>

          
          </form>
        </div>

      </div>

    </Section>
  )
}

export default Contact