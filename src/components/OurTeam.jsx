import React from 'react';
import manigandanImage from '../assets/images/Manigandan.png';
import brijeshImage from '../assets/images/BrijeshKumbhani.png';
import devranjanImage from '../assets/images/DevranjanSamanta.png';
import dhirajImage from '../assets/images/DhirajKMahajan.png';
import himanshuImage from '../assets/images/HimanshuTyagi.png';
import kalaiselviImage from '../assets/images/Kalaiselvi.png';
import manoranjanImage from '../assets/images/ManoranjanMishra.png';
import muthulingamImage from '../assets/images/MuthulingamSubramaniyan.png';
import navaneethImage from '../assets/images/NavaneethKM.jpg';
import tarakImage from '../assets/images/TarakMondal.jpg';
import vishwajeetImage from '../assets/images/Vishwajeet.jpg';
import ccReadyImage from "../assets/images/ccReddyImage.jpeg";
import PrabhuImage from "../assets/images/PrabhuImage.jpeg";
import NavinImage from "../assets/images/NavinImage.jpeg";

const people = [
  {
    name: 'Dr. Manigandan S.',
    role: 'Co-ordinator CREED',
    imageUrl: manigandanImage, // Correctly use the imported variable here
    xUrl: '#',
    linkedinUrl: 'https://www.linkedin.com/in/dr-manigandan-sabapathy-5b191b1a5/',
  },
  {
    name: 'Dr. Navin Kumar',
    role: 'Prof Mechanical Engineering',
    imageUrl: NavinImage, // Correctly use the imported variable here
    xUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Dr. CC Reddy',
    role: 'Prof Electrical Engineering',
    imageUrl: ccReadyImage, // Correctly use the imported variable here
    xUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Dr. Prabhu Vijayakumaran',
    role: 'Project Manger, KISEM Project',
    imageUrl: PrabhuImage, // Correctly use the imported variable here
    xUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Dr Brijesh Kumbhani',
    role: 'Energy Efficient Wireless Technologies',
    imageUrl: brijeshImage,
    xUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Dr Devranjan Samanta',
    role: 'Fluid Mechanics',
    imageUrl: devranjanImage,
    xUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Dr Dhiraj Mahajan',
    role: 'Energy and Biomedical applications',
    imageUrl: dhirajImage,
    xUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Dr Himanshu Tyagi',
    role: 'Solar energy and energy storage',
    imageUrl: himanshuImage,
    xUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Dr Kalaiselvi',
    role: 'Energy efficiency, VFD, Multilevel inverters',
    imageUrl: kalaiselviImage,
    xUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Prof Manoranjan Mishra',
    role: 'Fluid Dynamics',
    imageUrl: manoranjanImage,
    xUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Dr Muthulingam Subramanian',
    role: 'Energy Storage, Phase change materials, Risk assessment',
    imageUrl: muthulingamImage,
    xUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Dr Navaneeth K M',
    role: 'Fluid Dynamics',
    imageUrl: navaneethImage,
    xUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Dr Tarak Mondal',
    role: 'Biomass conversion, waste-to-energy, CO2 utilization',
    imageUrl: tarakImage,
    xUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Dr Vishwajeet Mehandia',
    role: 'CO2 capture using biological systems, active matter, complex fluids',
    imageUrl: vishwajeetImage,
    xUrl: '#',
    linkedinUrl: '#',
  }
]

export default function OurTeam() {
  return (
    <div className="bg-white py-32 " id='team-section' >
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our team</h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Our interdisciplinary team comprises ten faculty members, including professors, associate professors, and assistant professors, representing diverse disciplines.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-3 lg:mx-0 lg:max-w-none lg:grid-cols-5"
        >
          {people.map((person) => (
            <li key={Math.random() * 10 + Math.random()} className="relative">
              <img className="mx-auto h-36 w-36 rounded-full border" src={person.imageUrl} alt="" />
              <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
              <p className="text-sm leading-6 text-gray-600 mb-6">{person.role}</p>
              <ul role="list" className="mt-6 flex justify-center gap-x-6 absolute bottom-0 w-full">
                <li>
                  <a href={person.xUrl} className="text-gray-400 hover:text-gray-500">
                    <span className="sr-only">X</span>
                    <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M11.4678 8.77491L17.2961 2H15.915L10.8543 7.88256L6.81232 2H2.15039L8.26263 10.8955L2.15039 18H3.53159L8.87581 11.7878L13.1444 18H17.8063L11.4675 8.77491H11.4678ZM9.57608 10.9738L8.95678 10.0881L4.02925 3.03974H6.15068L10.1273 8.72795L10.7466 9.61374L15.9156 17.0075H13.7942L9.57608 10.9742V10.9738Z" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href={person.linkedinUrl} className="text-gray-400 hover:text-gray-500">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
