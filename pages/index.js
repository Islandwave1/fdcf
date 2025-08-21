
import Layout from '../components/Layout'
import AIChat from '../components/AIChat'
import Link from 'next/link'

export default function Home(){
  return (<Layout>
    <section className="grid md:grid-cols-2 gap-6 items-center">
      <div>
        <div className="badge mb-2">Canada • Vancouver Island</div>
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">IslandWave — Internet that connects communities.</h1>
        <p className="text-white/80 mt-3">Live island content, marketplace, and a Beat‑Your‑Bill guarantee.</p>
        <div className="mt-5 flex gap-3 flex-wrap">
          <Link href="/plans" className="btn btn-primary">See Plans</Link>
          <Link href="/market" className="btn btn-alt">Explore Marketplace</Link>
        </div>
      </div>
      <div className="card">
        <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-xl">
          <iframe className="absolute inset-0 w-full h-full" src="https://www.youtube.com/embed/live_stream?channel=@Islandwavenet" title="IslandWave Live" allowFullScreen/>
        </div>
        <div className="text-white/70 mt-2">Live: community events & local news</div>
      </div>
    </section>
    <AIChat/>
  </Layout>)
}
