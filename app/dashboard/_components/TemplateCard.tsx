import React from 'react'
import Image from 'next/image'
import { TEMPLATE } from './TemplateListSection'
import Link from 'next/link'

function TemplateCard(item:TEMPLATE) {
  return (
        <Link href={`/dashboard/content/` + item?.slug}>
      <div className="p-5 border rounded-md shadow-md flex flex-col items-center gap-3 bg-white cursor-pointer hover:scale-105 transition-all 
      h-full min-h-[240px] max-h-[240px]">
        <Image src={item.icon} alt={item.name} width={50} height={50} />
        <h2 className="font-medium text-lg text-center">{item.name}</h2>
        <p className="text-gray-500 line-clamp-2 text-center text-sm">{item.desc}</p>
      </div>
    </Link>

  )
}
export default TemplateCard