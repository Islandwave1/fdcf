
import Navbar from './Navbar'
import Footer from './Footer'
export default function Layout({children}){
  return (<div className="min-h-screen bg-gradient-to-br from-blue-900 via-iwNavy to-blue-950">
    <Navbar/>
    <main className="container py-8">{children}</main>
    <Footer/>
  </div>)
}
