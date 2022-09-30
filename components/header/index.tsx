import Link from 'next/link';
import ThemeButton from '../themeButton';
import {
    Header as Head,
    HeaderLogo,
    HeaderMenu,
    HeaderMenuList
} from './header-style';

interface Header {
    setTheme: Function;
    theme:boolean
}

const Header = ({setTheme, theme}:Header) => {
  return (
    <Head>
        <HeaderLogo>
            SGR
        </HeaderLogo>
       
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
            <ThemeButton 
            theme={theme}
            setTheme={setTheme} />
        </HeaderMenu>
    </Head>
  )
}

export default Header