import Image from 'next/image'
import Link from 'next/link'
import NavItems from './NavItems'

const Header = () => {
  return (
    <header className="sticky top-0 header">
        <div className="conainer header-wrapper">
            <Link href='/'>
                <Image  src='/assets/icons/logo.svg' alt="stocker logo" width={140} height={32} className='h-8 w-auto crusor-pointer'/>
            </Link>
            <nav className="hidden sm:block">
                <NavItems />
            </nav>
            {/* UserDropdown */}
        </div>
    </header>
  )
}

export default Header