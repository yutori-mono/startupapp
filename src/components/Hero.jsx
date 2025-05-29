import 'boxicons/css/boxicons.min.css';
import Spline from '@splinetool/react-spline';


const Hero = () => {
  return (
    <main className="flex lg:mt-20 justify-between min-h-[calc(90vh-6rem)] items-center flex-col lg:flex-row">

    <div className="max-w-xl ml-[5%] z-10 mt-[90%] md:mt-[60%] lg:mt-0">
        {/* Tag box with gradient border */}

        <div className="relative w-[95%] sm:w-48 h-10 bg-gradient-to-r from-[#008080] to-[#00b3b3] shadow-[0_0_15px_rgba(255,255,255,0.4)] rounded-full flex items-center justify-center text-black font-semibold text-sm md:text-base tracking-wider">
            <div className='absolute inset-[3px] bg-[#faf5ef] rounded-full flex items-center justify-center gap-1'>
                <i class='bx bx-circle' style={{'color':'#008080' }}></i>
                about
            </div>
        </div>

        {/* Main heading with gradient text */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wider my-8">
        YUTORI
        <br />
        MONO

        </h1>
        {/* Description */}
        <p className="text-base sm:text-lg tracking-wider text-gray-400 max-w-[25rem] lg:max-w-[30rem]">
            Yutori translates to “spaciousness.” The concept goes beyond just physical space, encompassing mental, emotional, and temporal space as well.
        </p>

         {/* Buttons */}

         <div className='flex gap-4 mt-12'>
            <a className='border border-[#2a2a2a] py-2 sm:py-3 px-4 sm:px-5 rounded-full sm:text-lg text-sm font-semibold tracking-wider transition-all duration-300 hover:bg-[#85817d]' href="https://github.com/yutori-mono" target="_blank" rel="noopener noreferrer">
                Git <i class='bx bx-link-alt'></i>
            </a>

            <a className='border border-[#2a2a2a] py-2 sm:py-3 px-8 sm:px-10 rounded-full sm:text-lg text-sm font-semibold tracking-wider transition-all duration-300 hover:bg-[#85817d] bg-gray-300 text-black hover:text-white' href="#">
                Get Started <i class='bx bx-link-alt'></i>
            </a>
         </div>
    </div>

    {/* Hero Image */}

    <Spline className='absolute lg:top-0 top-[-20%] bottom-0 lg:left-[25%] sm:left-[-2%] h-full' scene="https://prod.spline.design/jZ8H3kJcTEjqCrJs/scene.splinecode" />


    </main>
  )
}

export default Hero
