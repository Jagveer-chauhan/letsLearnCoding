import Link from "next/link"
import Image from "next/image"

export default function Footer(){
    return(
        <>
        <hr className="text-neutral-50 mx-10"/>
        <footer className="grid w-full sm:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10 p-10 font-Poppins text-neutral-50">
            <aside className="grid place-items-center sm:place-items-start gap-1">
                <Link href="/">
                    <Image src={'/images/logo.png'} width={150} height={70} alt='logo'></Image> 
                </Link>
                <p className="text-center sm:text-start">LetsLearnCodingis a leading institute ion market since 2023</p>
            </aside> 
            <nav className="grid place-items-center sm:place-items-start gap-1">
                <header className="text-neutral-100 font-bold uppercase mb-2 opacity-50">Useful Links</header> 
                <Link href="/courses" className="link link-hover">Courses</Link>
                <Link href="/blogs" className="link link-hover">Blogs</Link>
                <Link href="/contact" className="link link-hover">Contact Us</Link>
                <Link href="/about" className="link link-hover">About Us</Link>
            </nav> 
            <nav className="grid place-items-center sm:place-items-start gap-1">
                <header className="text-neutral-100 font-bold uppercase mb-2 opacity-50">Quick Links</header> 
                <Link href="#" className="link link-hover">About us</Link>
                <Link href="#" className="link link-hover">Contact</Link>
                <Link href="#" className="link link-hover">Jobs</Link>
                <Link href="#" className="link link-hover">Press kit</Link>
            </nav> 
            <nav className="grid place-items-center sm:place-items-start gap-1">
                <header className="text-neutral-100 font-bold uppercase mb-2 opacity-50">Legal</header> 
                <Link href="#" className="link link-hover">Terms of use</Link>
                <Link href="#" className="link link-hover">Privacy policy</Link>
                <Link href="#" className="link link-hover">Cookie policy</Link>
            </nav>
            </footer>
        </>
    )
}