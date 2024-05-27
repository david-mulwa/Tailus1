
import Section from '../components/Section'
import {staff} from '../constants';

const About = () => {
  return (
    <Section>
      <div className='flex flex-col mt-15 items-center justify-center  '>
        <h1 className='text-4xl font-bold font-code'>About</h1>
        <p className='text-n-6 mt-7'>We are a small passionate team.</p>
      </div>
      <div className='mt-15 items-start'>
        <h1 className='text-3xl font-bold font-code'>Empowering the world with Astro.</h1>
        <p className='mt-5 text-n-6 text-wrap'>We're a multi-cultural team from around the world! We come from diverse backgrounds, bringing different personalities, experiences and skills to the job. This is what makes our team so special.</p>
      </div>
      <div className='grid md:grid-cols-3 mx-auto max-w-4xl mt-12'>
        {staff.map((person)=>(
          <div className="group">
            <div key={person.id} className='w-full aspect-square'>
              <img src={person.imageurl} alt={person.name} width={312}  height={312} />
            </div>
            <div>
              <h2>{person.name}</h2>
              <p>{person.position}</p>
            </div>
          </div>

        ))}
      </div>
    </Section>
  )
}

export default About