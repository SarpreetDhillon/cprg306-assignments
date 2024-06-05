import Link from 'next/link'
import React from 'react'

export default function StudentInfo() {
  return (
    <div className='flex flex-col'>
      Sarpreet Kaur Dhillon
      <Link href={"https://github.com/SarpreetDhillon"}>GitHub</Link>
    </div>
  )
}
