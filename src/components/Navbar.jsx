import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { default as Logo } from '../../public/CREED_LOGO_1.svg'
import { Link, NavLink } from 'react-router-dom'



const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Project', href: '/projects' },
    { name: 'Contact', href: '/contact' },
]

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="bg-gray-900 border-b">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                <Link to="/" className="-m-1.5 p-1.5">
                    <span className="sr-only">Your Company</span>
                    {/* <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" /> */}
                    {/* Placeholder Logo */}
                    <img src={Logo} alt="CREED Logo" className='h-12' />
                    {/* <svg fill="none" height="32" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><filter id="a" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse" height="54" width="48" x="0" y="-3"><feFlood flood-opacity="0" result="BackgroundImageFix" /><feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" /><feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" /><feOffset dy="-3" /><feGaussianBlur stdDeviation="1.5" /><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" /><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" /><feBlend in2="shape" mode="normal" result="effect1_innerShadow_3051_46869" /><feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" /><feOffset dy="3" /><feGaussianBlur stdDeviation="1.5" /><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" /><feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0" /><feBlend in2="effect1_innerShadow_3051_46869" mode="normal" result="effect2_innerShadow_3051_46869" /><feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" /><feMorphology in="SourceAlpha" operator="erode" radius="1" result="effect3_innerShadow_3051_46869" /><feOffset /><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" /><feColorMatrix type="matrix" values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.24 0" /><feBlend in2="effect2_innerShadow_3051_46869" mode="normal" result="effect3_innerShadow_3051_46869" /></filter><filter id="b" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse" height="42" width="34.5" x="6.75" y="5.25"><feFlood flood-opacity="0" result="BackgroundImageFix" /><feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" /><feMorphology in="SourceAlpha" operator="erode" radius="1.5" result="effect1_dropShadow_3051_46869" /><feOffset dy="2.25" /><feGaussianBlur stdDeviation="2.25" /><feComposite in2="hardAlpha" operator="out" /><feColorMatrix type="matrix" values="0 0 0 0 0.141176 0 0 0 0 0.141176 0 0 0 0 0.141176 0 0 0 0.1 0" /><feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_3051_46869" /><feBlend in="SourceGraphic" in2="effect1_dropShadow_3051_46869" mode="normal" result="shape" /></filter><linearGradient id="c" gradientUnits="userSpaceOnUse" x1="24" x2="26" y1=".000001" y2="48"><stop offset="0" stop-color="#fff" stop-opacity="0" /><stop offset="1" stop-color="#fff" stop-opacity=".12" /></linearGradient><linearGradient id="d" gradientUnits="userSpaceOnUse" x1="24" x2="24" y1="9.75" y2="38.25"><stop offset="0" stop-color="#fff" stop-opacity=".8" /><stop offset="1" stop-color="#fff" stop-opacity=".5" /></linearGradient><linearGradient id="e" gradientUnits="userSpaceOnUse" x1="24" x2="24" y1="0" y2="48"><stop offset="0" stop-color="#fff" stop-opacity=".12" /><stop offset="1" stop-color="#fff" stop-opacity="0" /></linearGradient><clipPath id="f"><rect height="48" rx="12" width="48" /></clipPath><g filter="url(#a)"><g clip-path="url(#f)"><rect fill="#16b364" height="48" rx="12" width="48" /><path d="m0 0h48v48h-48z" fill="url(#c)" /><g filter="url(#b)"><path d="m20.4375 9.75c0 5.9025-4.785 10.6875-10.6875 10.6875v7.125h10.6875v10.6875h7.125c0-5.9025 4.785-10.6875 10.6875-10.6875v-7.125h-10.6875v-10.6875z" fill="url(#d)" /></g></g><rect height="46" rx="11" stroke="url(#e)" stroke-width="2" width="46" x="1" y="1" /></g></svg> */}
                </Link>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12 ">
                    {navigation.map((item) => (
                        <NavLink key={item.name} to={item.href} className="text-sm font-semibold leading-6 text-white">
                            {item.name}
                        </NavLink>
                    ))}
                </div>
            </nav>
            <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-10" />
                <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <Link to="/" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            {/* <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" /> */}
                            {/* Placeholder Logo */}
                            <img src={Logo} alt="CREED Logo" className='h-12' />
                            {/* <svg fill="none" height="32" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><filter id="a" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse" height="54" width="48" x="0" y="-3"><feFlood flood-opacity="0" result="BackgroundImageFix" /><feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" /><feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" /><feOffset dy="-3" /><feGaussianBlur stdDeviation="1.5" /><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" /><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" /><feBlend in2="shape" mode="normal" result="effect1_innerShadow_3051_46869" /><feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" /><feOffset dy="3" /><feGaussianBlur stdDeviation="1.5" /><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" /><feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0" /><feBlend in2="effect1_innerShadow_3051_46869" mode="normal" result="effect2_innerShadow_3051_46869" /><feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" /><feMorphology in="SourceAlpha" operator="erode" radius="1" result="effect3_innerShadow_3051_46869" /><feOffset /><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" /><feColorMatrix type="matrix" values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.24 0" /><feBlend in2="effect2_innerShadow_3051_46869" mode="normal" result="effect3_innerShadow_3051_46869" /></filter><filter id="b" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse" height="42" width="34.5" x="6.75" y="5.25"><feFlood flood-opacity="0" result="BackgroundImageFix" /><feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" /><feMorphology in="SourceAlpha" operator="erode" radius="1.5" result="effect1_dropShadow_3051_46869" /><feOffset dy="2.25" /><feGaussianBlur stdDeviation="2.25" /><feComposite in2="hardAlpha" operator="out" /><feColorMatrix type="matrix" values="0 0 0 0 0.141176 0 0 0 0 0.141176 0 0 0 0 0.141176 0 0 0 0.1 0" /><feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_3051_46869" /><feBlend in="SourceGraphic" in2="effect1_dropShadow_3051_46869" mode="normal" result="shape" /></filter><linearGradient id="c" gradientUnits="userSpaceOnUse" x1="24" x2="26" y1=".000001" y2="48"><stop offset="0" stop-color="#fff" stop-opacity="0" /><stop offset="1" stop-color="#fff" stop-opacity=".12" /></linearGradient><linearGradient id="d" gradientUnits="userSpaceOnUse" x1="24" x2="24" y1="9.75" y2="38.25"><stop offset="0" stop-color="#fff" stop-opacity=".8" /><stop offset="1" stop-color="#fff" stop-opacity=".5" /></linearGradient><linearGradient id="e" gradientUnits="userSpaceOnUse" x1="24" x2="24" y1="0" y2="48"><stop offset="0" stop-color="#fff" stop-opacity=".12" /><stop offset="1" stop-color="#fff" stop-opacity="0" /></linearGradient><clipPath id="f"><rect height="48" rx="12" width="48" /></clipPath><g filter="url(#a)"><g clip-path="url(#f)"><rect fill="#16b364" height="48" rx="12" width="48" /><path d="m0 0h48v48h-48z" fill="url(#c)" /><g filter="url(#b)"><path d="m20.4375 9.75c0 5.9025-4.785 10.6875-10.6875 10.6875v7.125h10.6875v10.6875h7.125c0-5.9025 4.785-10.6875 10.6875-10.6875v-7.125h-10.6875v-10.6875z" fill="url(#d)" /></g></g><rect height="46" rx="11" stroke="url(#e)" stroke-width="2" width="46" x="1" y="1" /></g></svg> */}
                        </Link>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                {navigation.map((item) => (
                                    <NavLink
                                        key={item.name}
                                        to={item.href}
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                        {item.name}
                                    </NavLink>
                                ))}

                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    )
}
