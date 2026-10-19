import { useState, type FormEvent } from 'react'
import { AlertCircle, CheckCircle2, Loader2, Mail, MessageSquare, Send, User } from 'lucide-react'
import { formEndpoint } from '../data/content'

type Status = 'idle' | 'sending' | 'success' | 'error'

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const fd = new FormData(form)
    if (fd.get('_honey')) { setStatus('success'); form.reset(); return } // robôs preenchem o campo escondido
    const name = String(fd.get('name') ?? '').trim()
    setStatus('sending')
    try {
      const res = await fetch(formEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name,
          email: String(fd.get('email') ?? '').trim(),
          message: String(fd.get('message') ?? '').trim(),
          _subject: `Portfólio: nova mensagem de ${name}`,
          _template: 'table',
          _captcha: 'false',
        }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok || String(data.success) === 'false') throw new Error('envio falhou')
      setStatus('success')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  const sending = status === 'sending'

  return (
    <form onSubmit={onSubmit} className="space-y-4" noValidate={false}>
      <div className="relative">
        <label htmlFor="c-nome" className="sr-only">Seu nome</label>
        <User size={18} className="pointer-events-none absolute left-4 top-4 text-mute" aria-hidden="true" />
        <input id="c-nome" name="name" type="text" required minLength={2} maxLength={80} autoComplete="name" placeholder="Seu nome" disabled={sending} className="input pl-11" />
      </div>
      <div className="relative">
        <label htmlFor="c-email" className="sr-only">Seu e-mail</label>
        <Mail size={18} className="pointer-events-none absolute left-4 top-4 text-mute" aria-hidden="true" />
        <input id="c-email" name="email" type="email" required maxLength={120} autoComplete="email" placeholder="Seu e-mail" disabled={sending} className="input pl-11" />
      </div>
      <div className="relative">
        <label htmlFor="c-msg" className="sr-only">Sua mensagem</label>
        <MessageSquare size={18} className="pointer-events-none absolute left-4 top-4 text-mute" aria-hidden="true" />
        <textarea id="c-msg" name="message" required minLength={10} maxLength={2000} rows={6} placeholder="Sua mensagem" disabled={sending} className="input resize-y pl-11" />
      </div>
      <input type="text" name="_honey" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

      <button type="submit" disabled={sending} className="btn btn-primary w-full disabled:opacity-70">
        {sending ? <Loader2 size={16} className="animate-spin" aria-hidden="true" /> : <Send size={16} aria-hidden="true" />}
        {sending ? 'Enviando…' : 'Enviar mensagem'}
      </button>

      <div aria-live="polite" className="min-h-[1.5rem]">
        {status === 'success' && (
          <p className="flex items-start gap-2 text-sm text-emerald-400"><CheckCircle2 size={18} className="mt-0.5 shrink-0" aria-hidden="true" /> Mensagem enviada! Respondo por e-mail assim que possível.</p>
        )}
        {status === 'error' && (
          <p role="alert" className="flex items-start gap-2 text-sm text-red-400"><AlertCircle size={18} className="mt-0.5 shrink-0" aria-hidden="true" /> Não foi possível enviar agora. Tente de novo em instantes ou me chame pelo LinkedIn.</p>
        )}
      </div>
    </form>
  )
}
