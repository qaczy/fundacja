import Link from 'next/link'

export default function NotFound() {
  return <div className='text-center'>
      <h3 className='text-3xl text-orange font-bold uppercase mt-10'>Błąd 404</h3>
      <h1 className='text-9xl text-navy font-extrabold mb-20'>Nie ma takiej strony!</h1>
	  {/* <div className='width-100 h-1 border border-light-grey  bg-light-grey'></div> */}
    <div className='mt-10 font-semibold text-2xl'>
        <Link href="/">Wróć do strony głównej <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline-block">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
        </svg>
        </Link>
      </div>
  </div>
}