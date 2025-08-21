import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Head>
        <title>IslandWave - Your ISP</title>
      </Head>
      <header className="bg-blue-900 text-white p-4 flex justify-between items-center">
        <img src="/logo.png" alt="IslandWave Logo" className="h-10"/>
        <nav className="space-x-4">
          <Link href="/">Home</Link>
          <Link href="/community">Community</Link>
          <Link href="/marketplace">Marketplace</Link>
          <Link href="/plans">Plans</Link>
          <Link href="/legal">Legal</Link>
        </nav>
      </header>
      <main className="p-6 text-center">
        <h1 className="text-4xl font-bold text-blue-900">Welcome to IslandWave</h1>
        <p className="mt-4 text-gray-700">Bringing high-speed internet to Vancouver Island and beyond.</p>
        <iframe className="mx-auto mt-6" width="560" height="315" src="https://www.youtube.com/embed/live_stream?channel=YOUR_CHANNEL_ID" frameBorder="0" allowFullScreen></iframe>
      </main>
    </div>
  )
}