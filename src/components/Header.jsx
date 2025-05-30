import 'boxicons/css/boxicons.min.css';

const Header = () => {
    // Function to toggle the mobile menu visibility
    const toggleMobileMenu = () => {
        // Get the mobile menu element and toggle its visibility
        const mobileMenu = document.getElementById('mobileMenu');

        // If the mobile menu is hidden, remove the 'hidden' class, otherwise add it
        if (mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.remove('hidden');
        } else {
            mobileMenu.classList.add('hidden');
        }
    }

  return (
    <header className="flex justify-between items-center py-4 px-4 lg:px-20">
        <a data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="text-3xl md:text-4xl lg:text-5xl font-light m-0" href="#home">
            {/* Logo */}
            Y-M
        </a>

        {/* Desktop Navigation */}

        <nav className="hidden md:flex items-center gap-12">
            
            <a data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1000" className="text-base tracking-wider transitions-colors hover:text-gray-300 z-50" href="#projects">
                PROJECTS
            </a>

            <a data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500" className="text-base tracking-wider transitions-colors hover:text-gray-300 z-50" href="#contact">
                CONTACT
            </a>

            <a data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="2000" className="text-base tracking-wider transitions-colors hover:text-gray-300 z-50" href="#media">
                MEDIA
            </a>
            
        </nav>

        {/* Registration Buttons */}
        <div data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="2000"
            className="hidden md:flex gap-6">
          <button className="bg-[#008080] text-white py-3 px-8 rounded-full border-none font-medium transitions-all duration-500 hover:bg-[#004d4d] cursor-pointer z-50">
            SIGN IN
          </button>
          <button className="bg-[#008080] text-white py-3 px-8 rounded-full border-none font-medium transitions-all duration-500 hover:bg-[#004d4d] cursor-pointer z-50">
            LOG IN
          </button>
        </div>

        {/* Mobile Menu Buttons - Visible Only on Mobile */}
        <button onClick={toggleMobileMenu} className='md:hidden text-3xl p-2 z-50'>
            {/* <i class='bx bx-menu-alt-right' undefined ></i> */}
            <i class='bx bx-menu' style={{ color: '#ffffff' }}></i>
        </button>
        
        {/* Mobile Navigation - Hidden by default */}

        <div id='mobileMenu' className='hidden fixed top-16 bottom-0 left-0 right-0 p-5 md:hidden z-40 bg-black bg-opacity-70 backdrop-blur-md'>
            <nav className='flex flex-col items-center gap-6'>
                
                <a className="text-base tracking-wider transitions-colors hover:text-teal-500 z-50" href="#projects">
                    PROJECTS
                </a>

                <a className="text-base tracking-wider transitions-colors hover:text-teal-500 z-50" href="#contact">
                    CONTACT
                </a>

                <a className="text-base tracking-wider transitions-colors hover:text-teal-500 z-50" href="#media">
                    MEDIA
                </a>
            </nav>
        </div>

    </header>
  )
}

export default Header
