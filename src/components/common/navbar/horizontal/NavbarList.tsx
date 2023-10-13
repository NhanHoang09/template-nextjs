'use client';

import { menuIconHorizontal } from './HorizontalNavbar';
import { NavbarItem } from './NavbarItem';

export function NavbarList() {

  return (
    <div className='max-w-full flex flex-wrap items-center justify-between'>
      {
        menuIconHorizontal.map((item, index) => <NavbarItem {...item} key={index} />)
      }
    </div>
  )
}