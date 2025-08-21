
import Head from 'next/head'

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-primary to-secondary min-h-screen text-white">
      <Head>
        <title>IslandWave</title>
      </Head>
      <header className="flex justify-between items-center p-6 bg-secondary bg-opacity-80">
        <img src="/logo.png" alt="IslandWave Logo" className="h-12" />
        <nav>
          <ul className="flex gap-6">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#plans" className="hover:underline">Plans</a></li>
            <li><a href="#beat-your-bill" className="hover:underline">Beat Your Bill</a></li>
            <li><a href="#community" className="hover:underline">Community</a></li>
            <li><a href="#marketplace" className="hover:underline">Marketplace</a></li>
            <li><a href="#legal" className="hover:underline">Legal</a></li>
          </ul>
        </nav>
      </header>
      <main className="p-10 text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to IslandWave</h1>
        <p className="text-xl mb-6">Your local ISP for Vancouver Island – Reliable, Affordable, and Community Driven.</p>
        <div className="mt-6">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/live_stream?channel=YOUR_CHANNEL_ID" title="IslandWave Live" frameBorder="0" allowFullScreen></iframe>
        </div>
      </main>
    </div>
  )
}
