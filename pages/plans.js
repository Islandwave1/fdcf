
import { useRef, useState } from 'react'
import Layout from '../components/Layout'

export default function Plans(){
  const tiers=[
    {id:'basic', name:'Island Basic', speed:'100 Mbps', price:49},
    {id:'plus', name:'Island Plus', speed:'300 Mbps', price:69},
    {id:'pro', name:'Island Pro', speed:'1 Gbps', price:99},
  ]
  const [open,setOpen]=useState(false)
  const [f,setF]=useState({name:'',email:'',provider:'',price:'',file:null})
  const [sent,setSent]=useState(false)

  async function submit(e){
    e.preventDefault()
    // fallback mailto (simple & works everywhere)
    const body = encodeURIComponent(
      `Name: ${f.name}\nEmail: ${f.email}\nProvider: ${f.provider}\nPrice: ${f.price}`
    )
    window.location.href = `mailto:josh@islandwave.ca?subject=Beat Your Bill&body=${body}`
    setSent(true)
  }

  return (<Layout>
    <h1 className="text-3xl font-bold mb-4">Plans & Pricing</h1>
    <div className="grid md:grid-cols-3 gap-4">
      {tiers.map(t=>(<div key={t.id} className="card">
        <div className="font-bold text-xl">{t.name}</div>
        <div className="text-white/80">{t.speed}</div>
        <div className="text-3xl font-extrabold mt-2">${t.price}<span className="text-base text-white/70">/mo</span></div>
        <button className="btn btn-primary mt-3" onClick={()=>setOpen(true)}>Beat Your Bill</button>
      </div>))}
    </div>
    {open && <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4" onClick={()=>setOpen(false)}>
      <div className="bg-iwNavy border border-white/10 rounded-2xl p-5 w-full max-w-xl" onClick={(e)=>e.stopPropagation()}>
        <h3 className="text-xl font-bold mb-2">Upload Your Bill</h3>
        {sent? <div className="card">Thanks! We’ll email you a better offer.</div> :
        <form className="grid md:grid-cols-2 gap-3" onSubmit={submit}>
          <div><label className="text-sm">Name</label><input className="input" required value={f.name} onChange={e=>setF({...f,name:e.target.value})}/></div>
          <div><label className="text-sm">Email</label><input className="input" type="email" required value={f.email} onChange={e=>setF({...f,email:e.target.value})}/></div>
          <div><label className="text-sm">Current Provider</label><input className="input" value={f.provider} onChange={e=>setF({...f,provider:e.target.value})}/></div>
          <div><label className="text-sm">Monthly Price (CAD)</label><input className="input" value={f.price} onChange={e=>setF({...f,price:e.target.value})}/></div>
          <div className="md:col-span-2 flex gap-2 mt-1">
            <button className="btn btn-primary">Send Details</button>
            <button type="button" className="btn" onClick={()=>setOpen(false)}>Close</button>
          </div>
        </form>}
      </div>
    </div>}
  </Layout>)
}
