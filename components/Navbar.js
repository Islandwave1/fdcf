
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar(){
  return (
    <nav className="sticky top-0 z-50 backdrop-blur bg-white/5 border-b border-white/10">
      <div className="container flex items-center gap-4 py-3">
        <Link href="/" className="flex items-center gap-2 font-extrabold text-lg">
          <Image src="/logo.png" alt="IslandWave logo" width={36} height={36}/>
          <span className="bg-gradient-to-r from-iwBlue to-iwTeal bg-clip-text text-transparent">IslandWave</span>
        </Link>
        <div className="ml-auto flex gap-1 text-white/90">
          <Link className="navlink" href="/live">Live</Link>
          <Link className="navlink" href="/plans">Plans</Link>
          <Link className="navlink" href="/community">Community</Link>
          <Link className="navlink" href="/market">Marketplace</Link>
          <Link className="navlink" href="/legal/terms">Legal</Link>
        </div>
      </div>
    </nav>
  )
}
