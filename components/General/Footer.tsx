import React from 'react'
import Link from 'next/link'

function Footer() {
  return (
    <footer className='w-full h-[300px] flex justify-center items-center'>
        <div className='text-left'>
            <h2 className='text-2xl font-medium'>NONA Lifestyle</h2>
            <div className='text-gray-500 leading-6'>
                <p>© 2010 — 2022</p>
                <p>INDIA: FF03, 03A MGF Megacity Mall, Sector 28, Gurugram, Haryana 122002</p>
                <p>UAE: 2310, 23rd floor, Regus Business Centre, Damac Smart heights, Barsha Heights, Dubai</p>
                <p><Link href="#"><a className='text-violet-400'>Terms and Conditon - </a></Link>
                <Link href="#"><a className='text-blue-600'>Privacy Policy</a></Link>
                </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer