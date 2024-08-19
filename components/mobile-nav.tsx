// components/MobileNav.tsx
'use client'

import { useState } from 'react'
import { Dialog, DialogContent, DialogClose } from '@/components/ui/dialog'
import { X as XIcon } from 'lucide-react'
import UserButton from './user-button'
import { Menu as MenuIcon } from 'lucide-react'
import Link from 'next/link'

const navigation = [
  { name: 'Solutions', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Resources', href: '#' },
  { name: 'Contact Us', href: '#' },
]

export default function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Mobile menu button */}
      <div className="flex lg:hidden">
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
        >
          <span className="sr-only">Open menu</span>
          <MenuIcon aria-hidden="true" className="h-6 w-6" />
        </button>
      </div>
      
      {/* Dialog component for the mobile menu */}
      {open && (
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="fixed inset-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Medical SaaS</span>
                <img
                  alt="Medical SaaS Logo"
                  src="/path-to-your-logo.svg" // Replace with your logo path
                  className="h-8 w-auto"
                />
              </a>
              <DialogClose
                type="button"
                onClick={() => setOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XIcon aria-hidden="true" className="h-6 w-6" />
              </DialogClose>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
          
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  )
}
