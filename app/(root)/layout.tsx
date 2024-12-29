import Navbar from "../components/Navbar";

export default function Layout({ children } : Readonly<{children: React.ReactNode}>) { // this line ko bad me acche se study karo! 
    return (
        <main className="font-work-sans"> 
            <Navbar />
            {children}
        </main>
    )
}