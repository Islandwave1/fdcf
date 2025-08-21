export default function NavBar() {
    return (
        <nav className="flex justify-between p-4 bg-blue-800 text-white">
            <div className="font-bold text-xl">IslandWave</div>
            <div className="space-x-4">
                <a href="/">Home</a>
                <a href="/plans">Plans</a>
                <a href="/legal">Legal</a>
            </div>
        </nav>
    )
}
