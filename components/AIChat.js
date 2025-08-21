
import { useRef, useState, useEffect } from 'react'

export default function AIChat(){
  const [open,setOpen]=useState(false)
  const [human,setHuman]=useState(false)
  const [messages,setMessages]=useState([{role:'assistant',content:'Hi! I’m the IslandWave Assistant. Ask about plans, coverage, billing, marketplace or “Beat Your Bill”.'}])
  const inputRef=useRef(null)

  async function send(){
    const text=(inputRef.current?.value||'').trim()
    if(!text) return
    setMessages(m=>[...m,{role:'user',content:text}])
    inputRef.current.value=''
    try{
      const r=await fetch('/api/ai',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({prompt:text})})
      const data=await r.json()
      setMessages(m=>[...m,{role:'assistant',content:data.answer||'If I missed it, tap “Talk to a human”.'}])
    }catch(e){
      setMessages(m=>[...m,{role:'assistant',content:'Trouble answering. Tap “Talk to a human”.'}])
    }
  }

  // fallback email (simple mailto link to you)
  const [f,setF]=useState({name:'',email:'',question:''})
  function mailto(){
    const body = encodeURIComponent(`Name: ${f.name}\nEmail: ${f.email}\nQuestion: ${f.question}`)
    window.location.href = `mailto:josh@islandwave.ca?subject=Live Chat Request&body=${body}`
  }

  return (<>
    <button className="fixed bottom-5 right-5 btn btn-primary shadow-glass" onClick={()=>setOpen(o=>!o)}>💬 Chat</button>
    {open && <div className="fixed bottom-20 right-5 w-96 max-w-[92vw] bg-white/10 backdrop-blur border border-white/10 rounded-2xl shadow-glass overflow-hidden">
      <div className="flex items-center justify-between p-3 border-b border-white/10">
        <div className="font-bold">IslandWave Assistant</div>
        <button className="btn btn-alt" onClick={()=>setHuman(true)}>Talk to a human</button>
      </div>
      <div className="p-3 space-y-2 max-h-[50vh] overflow-auto">
        {messages.map((m,i)=>(<div key={i} className={"p-2 rounded-xl "+(m.role==='user'?'bg-iwTeal/40 text-white':'bg-white/10')}>
          {m.content}
        </div>))}
      </div>
      <div className="p-3 flex gap-2 border-t border-white/10">
        <input className="input" placeholder="Type your question…" onKeyDown={(e)=>{if(e.key==='Enter') send()}} ref={inputRef}/>
        <button className="btn btn-primary" onClick={send}>Send</button>
      </div>
    </div>}

    {human && <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4" onClick={()=>setHuman(false)}>
      <div className="bg-iwNavy border border-white/10 rounded-2xl p-5 w-full max-w-lg" onClick={(e)=>e.stopPropagation()}>
        <h3 className="text-xl font-bold mb-2">Contact a Human</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div><label className="label">Name</label><input className="input" value={f.name} onChange={e=>setF({...f,name:e.target.value})}/></div>
          <div><label className="label">Email</label><input className="input" type="email" value={f.email} onChange={e=>setF({...f,email:e.target.value})}/></div>
        </div>
        <div className="mt-3"><label className="label">Question</label><textarea rows={4} className="input" value={f.question} onChange={e=>setF({...f,question:e.target.value})}/></div>
        <div className="mt-4 flex gap-2">
          <button className="btn btn-primary" onClick={mailto}>Email IslandWave</button>
          <button className="btn" onClick={()=>setHuman(false)}>Close</button>
        </div>
      </div>
    </div>}
  </>)
}
