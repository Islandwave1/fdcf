
import { useEffect, useState } from 'react'
import Layout from '../components/Layout'

export default function Community(){
  const [posts,setPosts]=useState([])
  const [draft,setDraft]=useState({name:'',text:''})

  useEffect(()=>{
    const saved = JSON.parse(localStorage.getItem('iw_posts')||'[]')
    setPosts(saved)
  },[])

  function addPost(){
    if(!draft.text.trim()) return
    const p = { id: Date.now(), name: draft.name || 'Anonymous', text: draft.text, ts: new Date().toISOString() }
    const next = [p, ...posts]
    setPosts(next)
    localStorage.setItem('iw_posts', JSON.stringify(next))
    setDraft({name:'',text:''})
  }

  return (<Layout>
    <h1 className="text-3xl font-bold mb-4">Community</h1>
    <div className="card mb-4">
      <div className="grid md:grid-cols-2 gap-3">
        <input className="input" placeholder="Your name (optional)" value={draft.name} onChange={e=>setDraft({...draft,name:e.target.value})}/>
        <input className="input" placeholder="Share an update, ask a question…" value={draft.text} onChange={e=>setDraft({...draft,text:e.target.value})}/>
      </div>
      <button className="btn btn-primary mt-3" onClick={addPost}>Post</button>
    </div>
    <div className="space-y-3">
      {posts.length===0 && <div className="text-white/70">No posts yet. Be the first!</div>}
      {posts.map(p=>(<div key={p.id} className="card">
        <div className="font-bold">{p.name}</div>
        <div className="text-white/90 mt-1">{p.text}</div>
        <div className="text-white/60 text-sm mt-2">{new Date(p.ts).toLocaleString()}</div>
      </div>))}
    </div>
  </Layout>)
}
