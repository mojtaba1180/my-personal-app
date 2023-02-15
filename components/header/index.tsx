import Link from 'next/link';
import ThemeButton from '../themeButton';
import { useRouter } from 'next/router';

import {
    Header as Head,
    HeaderLogo,
    HeaderMenu,
    HeaderMenuList,
    MobileMenuButton
} from './header-style';
import { IconMenu2,IconX } from '@tabler/icons-react';
import { useState,useEffect } from 'react';
interface Header {
    setTheme: Function;
    theme:boolean
}

const Header = ({setTheme, theme}:Header) => {

    const router = useRouter();
    const [toggleMenu , setToggleMenu] = useState(false)

    const CloseMenu = () => {
        setToggleMenu(false)
    }

    useEffect(() => {
        router.events.on('routeChangeStart', CloseMenu);

        return () => router.events.off('routeChangeStart', CloseMenu);
    }, [router.events]);
  return (
    <Head>
        <HeaderLogo>
            SGR
        </HeaderLogo>
       
        <HeaderMenu toggleMenu={toggleMenu} >
            <HeaderMenuList>
            <Link href="/">
                    <li>
                        <span>Home</span>
                    </li>
                </Link>
            <Link href="/about">
                    <li>
                        <span>About</span>
                    </li>
                </Link>
                <li><span>Services</span></li>
                <li><span>portfolio</span></li>
                <li><span>contact</span></li>
            </HeaderMenuList>
        <IconX className="close-btn" onClick={() => setToggleMenu(false)} />
        </HeaderMenu>
            <ThemeButton 
            theme={theme}
            setTheme={setTheme} />
            <MobileMenuButton  onClick={() => setToggleMenu(true)}  >
                <IconMenu2 />
            </MobileMenuButton>
    </Head>
  )
}

export default Header