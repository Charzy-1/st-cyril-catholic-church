
import { words } from '../constants';
import Button from '../components/Button';


const Hero = () => {
  return (
    <section className='relative overflow-hidden'>
        {/* <div className='absolute top-0 left-0 z-10'>
            <img src="/images/bg.png" alt="" />
        </div> */}

        <div className='hero-layout'>
            {/* left hero content */}
            <header className='flex flex-col justify-center md:w-full w-screen md:px-20 px-5'>
                <div className='flex flex-col gap-7'>
                    <div className='hero-text'>
                        <h1>
                            Building
                            <span className='slide'>
                                <span className='wrapper'>
            {words.map((word) => (
            <span key={word.text} className='flex items-center md:gap-3 gap-1 pb-2'>
            <img src={word.imgPath} alt={word.text}
            className='xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-amber-500' />
            <span>{word.text}</span>
            </span>
            ))}
                                </span>
                            </span>
                            </h1>
                        <h1>into a United Family</h1>
                        <h1>of Christ</h1>
                    </div>
                    <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
        Welcome to <span className='font-bold'>St. Cyril Catholic Church</span>  — a vibrant community rooted in faith, love, and service to God and one another.
        </p>

        <Button
        text="Explore Our Mission"
        className="md:w-80 md:h-16 w-60 h-12"
         id="button"
    />
                </div>

            </header>

            {/* right hero content */}
            <div className='md:w-1/2 w-full flex justify-center'>
            <img 
  src="/images/church1.png" 
  alt="St. Cyril Church" 
  className="w-full md:w-[500px] lg:w-[600px] object-contain"
/>
  </div>
            
        </div>
    </section>
  )
}

export default Hero