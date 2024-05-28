import Section from '../components/Section'
import {Pricing} from '../constants'
import Button from '../components/Button'

const Prices = () => {
  return (
    <Section>
      <div className='mt-12 flex flex-col items-center justify-center '>
        <h2 className='text-4xl font-bold font-code '>Pricing</h2>
        <p className='text-n-6 '>Simple & Predictable pricing. No Surprises.</p>
      </div>
      <div className='container flex gap-7 max-lg:flex-wrap w-full justify-center  items-center  '>
        {Pricing.map((item)=>(
          <div key={item.id} className='w-full max-lg:w-full h-full px-6 border  border-n-6   even:py-14 old:py-8 flex flex-col items-center justify-start '>
            <p className='mb-4 text-n-6'>{item.title}</p>
            <h2 className='font-bold font-code text-4xl'>{item.price}</h2>
            <ul>
              {item.features.map((feature,index)=>(
                <li key={index} className='flex items-start py-5 '>
                  <p className='body-2 ml-4'>{feature}</p>
                </li>
              ))}
            </ul>



            <Button className='w-full mb-6 border border-n-1 hover:bg-n-6 hover:text-white old:bg-black old:text-white ' href={item.price?'/':'email@gmail.com'}>{item.price?'Get Started':'Conctact Us'}</Button>

          </div>
        ))}
      </div>
    </Section>
  )
}

export default Prices