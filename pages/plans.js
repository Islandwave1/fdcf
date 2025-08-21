
import { useRef, useState } from 'react'
import Layout from '../components/Layout'
import emailjs from '@emailjs/browser'

export default function Plans(){
  const tiers=[
    {id:'basic', name:'Island Basic', speed:'100 Mbps', price:49},
    {id:'plus', name:'Island Plus', speed:'300 Mbps', price:69},
    {id:'pro', name:'Island Pro', speed:'1 Gbps', price:99},
  ]
  const [open,setOpen]=useState(false)
  const [sending,setSending]=useState(false)
  const [sent,setSent]=useState(false)
  const [f,setF]=useState({name:'',email:'',provider:'',price:'',file:null})
  const fileRef = useRef(null)

  async function submit(e){
    e.preventDefault(); setSending(true)
    try{
      let base64=''
      if(f.file){
        base64 = await new Promise((resolve,reject)=>{
          const r = new FileReader()
          r.onload=()=>resolve(String(r.result).split(',')[1]||'')
          r.onerror=reject
          r.readAsDataURL(f.file)
        })
      }
      const params={
        to_email:'josh@islandwave.ca',
        from_name:f.name||'Visitor',
        reply_to:f.email||'noemail@islandwave.ca',
        current_provider:f.provider||'Unknown',
        current_price:f.price||'Unknown',
        attachment:base64,
        filename:f.file?.name||'bill.pdf'
      }
      const SERVICE_ID=process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID||'YOUR_SERVICE_ID'
      const TEMPLATE_ID=process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID||'YOUR_TEMPLATE_ID'
      const PUBLIC_KEY=process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY||'YOUR_PUBLIC_KEY'
      if(SERVICE_ID.startsWith('YOUR_')){
        await new Promise(r=>setTimeout(r,900)); setSent(true); setSending(false); return
      }
      await emailjs.send(SERVICE_ID,TEMPLATE_ID,params,{ publicKey: PUBLIC_KEY })
      setSent(true)
    }catch{ alert('Could not submit right now. Please email your bill to josh@islandwave.ca') }
    setSending(false)
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

    <div className="card mt-6">
      <div className="badge mb-2">Guarantee</div>
      <h2 className="text-2xl font-bold">We’ll beat your bill — or your first month is free.</h2>
      <p className="text-white/80">Upload your current internet bill and we’ll send you a better offer.</p>
      <button className="btn btn-alt mt-3" onClick={()=>setOpen(true)}>Upload Your Bill</button>
    </div>

    {open && <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4" onClick={()=>setOpen(false)}>
      <div className="bg-iwNavy border border-white/10 rounded-2xl p-5 w-full max-w-xl" onClick={e=>e.stopPropagation()}>
        <h3 className="text-xl font-bold mb-2">Upload Your Bill</h3>
        {sent? <div className="card">Thanks! We’ll review and email you a better offer.</div> :
        <form className="grid md:grid-cols-2 gap-3" onSubmit={submit}>
          <div><label className="label">Name</label><input className="input" required value={f.name} onChange={e=>setF({...f,name:e.target.value})}/></div>
          <div><label className="label">Email</label><input className="input" required type="email" value={f.email} onChange={e=>setF({...f,email:e.target.value})}/></div>
          <div><label className="label">Current Provider</label><input className="input" value={f.provider} onChange={e=>setF({...f,provider:e.target.value})} placeholder="e.g., Telus, Rogers, Bell"/></div>
          <div><label className="label">Monthly Price (CAD)</label><input className="input" value={f.price} onChange={e=>setF({...f,price:e.target.value})} placeholder="$"/></div>
          <div className="md:col-span-2">
            <label className="label">Upload Bill (PDF/JPG/PNG)</label>
            <input className="input" type="file" ref={fileRef} accept=".pdf,.png,.jpg,.jpeg" onChange={e=>setF({...f,file:e.target.files?.[0]||null})}/>
          </div>
          <div className="md:col-span-2 flex gap-2 mt-1">
            <button className="btn btn-primary" disabled={sending}>{sending?'Sending…':'Send to IslandWave'}</button>
            <button type="button" className="btn" onClick={()=>setOpen(false)}>Close</button>
          </div>
        </form>}
      </div>
    </div>}
  </Layout>)
}
