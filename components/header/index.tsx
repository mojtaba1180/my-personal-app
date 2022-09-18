import Link from 'next/link';
import {
    Header as Head,
    HeaderLogo,
    HeaderMenu,
    HeaderMenuList
} from '../../styles/header-style';

interface Header {
    setTheme: Function;
    theme:boolean
}

const Header = ({setTheme, theme}:Header) => {
  return (
    <Head>
        <HeaderLogo>
            Mohammad Asghari
        </HeaderLogo>
       <span style={{display: "flex"}} onClick={() => setTheme(!theme)}>
            {theme 
            ? 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width={20} height={20}>
               <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
            </svg>
            : 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width={20} height={20}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
            </svg>
            }
        </span>
        <HeaderMenu>
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
        </HeaderMenu>
    </Head>
  )
}

export default Header