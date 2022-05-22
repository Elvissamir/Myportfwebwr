import { useState } from 'react';
import Nav from '../components/Nav';
import MobileMenu from '../components/MobileMenu';

const Home = () => {
    const [showMobile, setShowMobile] = useState(true)
    const [showNav, setShowNav] = useState(true)

    const toggleNav = () => {
        
    }

    return ( 
        <div className=' w-full min-h-full relative'>
            <Nav />
            <MobileMenu />
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit minus porro possimus, nemo, velit ipsam sint recusandae maxime excepturi corrupti aliquid perferendis rem ducimus architecto molestiae impedit sapiente ullam ratione.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque repellendus reiciendis non, consequatur soluta corporis distinctio consequuntur, repudiandae voluptate facilis iusto? Maiores veritatis sint beatae asperiores laborum illum eius recusandae.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A officia nemo veritatis debitis fugit aliquam, assumenda et id nam at similique suscipit quibusdam quis illo alias animi facere amet voluptates.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae libero repudiandae corrupti culpa aperiam excepturi error officiis explicabo, laboriosam deleniti, tempore facilis est ratione iste totam quos nulla repellendus. Quam.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi non debitis, eius rerum nesciunt doloribus similique animi dolore vitae cupiditate quam sequi veritatis assumenda voluptas ab dolorum minus repellat fuga!
        </div> 
    );
}

export default Home;