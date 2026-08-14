import React from 'react'
import { Link, useLocation } from 'react-router'

// Turns "shop-all-products" or "shop_all_products" into "Shop All Products"
const formatLabel = (segment) => {
  const decoded = decodeURIComponent(segment)
  return decoded
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase())
}

const Breadcrumb = () => {
  const { pathname } = useLocation()

  // "/shop/men/shirts" -> ["shop", "men", "shirts"]
  const segments = pathname.split('/').filter(Boolean)

  // Build up the accumulated path for each segment so it's clickable
  // e.g. ["/shop", "/shop/men", "/shop/men/shirts"]
  const crumbs = segments.map((segment, index) => {
    const to = '/' + segments.slice(0, index + 1).join('/')
    return { label: formatLabel(segment), to }
  })

  return (
    <div className='w-full'>
      <ul className='text-primary flex items-center gap-2 text-sm leading-6 font-medium uppercase'>
        <li>
          <Link to='/'>Home</Link>
        </li>

        {crumbs.map((crumb, index) => {
          const isLast = index === crumbs.length - 1
          return (
            <li key={crumb.to} className='flex items-center gap-2'>
              <span aria-hidden='true'>/</span>
              {isLast ? (
                // Current page — no link, just text
                <span aria-current='page' className='text-gray-500 '>
                  {crumb.label}
                </span>
              ) : (
                <Link to={crumb.to}>{crumb.label}</Link>
              )}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Breadcrumb
