import Link from 'next/link'
import {
    Header as Head,
    HeaderLogo,
    HeaderMenu,
    HeaderMenuList
} from '../../styles/header-style'
const Header = () => {
  return (
    <Head>
        <HeaderLogo>
            Mohammad Asghari
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
        </HeaderMenu>
    </Head>
  )
}

export default Header