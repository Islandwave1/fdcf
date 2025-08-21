export default function Home() {
    return (
        <div className="bg-gradient-to-br from-blue-500 to-green-500 text-white h-screen flex flex-col items-center justify-center">
            <img src="/logo.png" alt="IslandWave Logo" className="w-32 mb-6" />
            <h1 className="text-4xl font-bold mb-4">Welcome to IslandWave</h1>
            <p className="mb-4">Your community ISP with live content, marketplace, and more.</p>
            <a href="/plans" className="bg-white text-blue-600 px-4 py-2 rounded">View Plans</a>
        </div>
    )
}
