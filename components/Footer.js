
import Link from 'next/link'
export default function Footer(){
  return (
    <footer className="mt-10 border-t border-white/10 bg-white/5">
      <div className="container py-6 grid md:grid-cols-3 gap-6">
        <div>
          <div className="text-lg font-bold">IslandWave</div>
          <div className="text-white/70">Canada-wide terms apply. Vancouver Island roots.</div>
        </div>
        <div>
          <div className="font-semibold mb-1">Legal</div>
          <div className="text-white/80 space-y-1">
            <div><Link href="/legal/terms">Terms of Service</Link></div>
            <div><Link href="/legal/privacy">Privacy Policy</Link></div>
            <div><Link href="/legal/aup">Acceptable Use</Link></div>
          </div>
        </div>
        <div>
          <div className="font-semibold mb-1">Customer</div>
          <div className="text-white/80 space-y-1">
            <div><Link href="/plans">Plans</Link></div>
            <div><Link href="/market">Marketplace</Link></div>
            <div><Link href="/community">Community</Link></div>
          </div>
        </div>
      </div>
      <div className="container pb-6 text-white/60">© {new Date().getFullYear()} IslandWave. All rights reserved.</div>
    </footer>
  )
}
