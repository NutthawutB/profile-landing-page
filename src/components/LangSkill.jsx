const LangSkill = ({ src, lang }) => {
  return (
    <article className="group relative flex items-center gap-4 overflow-hidden rounded-3xl bg-white/95 p-5 shadow-md ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-xl">
      <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-sky-400 via-sky-500 to-sky-400 opacity-0 transition group-hover:opacity-100" />
      <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl bg-slate-50 ring-1 ring-slate-200">
        {src ? (
          <img src={src} alt={`${lang} logo`} className="h-10 w-10 object-contain" loading="lazy" />
        ) : (
          <span className="text-base font-semibold text-slate-500">{lang.slice(0, 2).toUpperCase()}</span>
        )}
      </div>
      <h3 className="text-base font-semibold text-slate-800">{lang}</h3>
    </article>
  )
}

export default LangSkill
