export default function Footer(){
    return(
        <>
        <hr className="text-neutral-50 mx-10"/>
        <footer className="grid w-full sm:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10 p-10 font-Poppins text-neutral-50">
            <aside className="grid place-items-center sm:place-items-start gap-1">
                <p className="font-bold text-2xl"> LetsLearnCoding</p>
                <p>LetsLearnCodingis a leading institute ion market since 2023</p>
            </aside> 
            <nav className="grid place-items-center sm:place-items-start gap-1">
                <header className="text-neutral-100 font-bold uppercase mb-2 opacity-50">Services</header> 
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav> 
            <nav className="grid place-items-center sm:place-items-start gap-1">
                <header className="text-neutral-100 font-bold uppercase mb-2 opacity-50">Company</header> 
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav> 
            <nav className="grid place-items-center sm:place-items-start gap-1">
                <header className="text-neutral-100 font-bold uppercase mb-2 opacity-50">Legal</header> 
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
            </footer>
        </>
    )
}