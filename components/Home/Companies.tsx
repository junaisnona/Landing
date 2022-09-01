import React from 'react'
import Image from 'next/image'
import companieLogos from '../../assets/social_proof.png';

function Companies() {
  return (
    <div>
        <Image src={companieLogos} alt="companie logos" />
    </div>
  )
}

export default Companies