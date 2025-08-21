
export default async function handler(req,res){
  if(req.method!=='POST'){ return res.status(405).json({error:'Use POST'}) }
  const prompt = (req.body?.prompt||'').toLowerCase()
  let answer = ''
  if(prompt.includes('plan') || prompt.includes('price')){
    answer = 'Plans: Basic 100 Mbps $49/mo, Plus 300 Mbps $69/mo, Pro 1 Gbps $99/mo (CAD). We also match & beat competitor regular pricing.'
  } else if(prompt.includes('beat') || prompt.includes('bill')){
    answer = 'Tap “Plans → Beat Your Bill” and upload your bill; we\'ll email you a better offer.'
  } else if(prompt.includes('coverage') || prompt.includes('available')){
    answer = 'Coverage is Canada-wide with strong presence on Vancouver Island. Use Sign Up to confirm by postal code.'
  } else if(prompt.includes('install') || prompt.includes('setup')){
    answer = 'Standard installs within 3–5 business days where available. Self-install kits for eligible addresses.'
  } else if(prompt.includes('market') || prompt.includes('sell')){
    answer = 'Use Marketplace to post local listings. Verified ratings coming soon.'
  } else if(prompt.includes('support')){
    answer = 'For complex issues, click “Talk to a human” in chat and we\'ll email support.'
  } else {
    answer = 'I can help with plans, billing, beat-your-bill, marketplace & community. If I missed it, hit “Talk to a human”.'
  }
  res.status(200).json({answer})
}
