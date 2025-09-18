const SoftSkillCard = ({ title, description }) => {
  return (
    <article className="group relative flex h-full flex-col gap-3 overflow-hidden rounded-3xl bg-white/95 p-6 shadow-md ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-xl">
      <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-sky-400 via-sky-500 to-sky-400 opacity-0 transition group-hover:opacity-100" />
      <h3 className="text-base font-semibold text-slate-800">{title}</h3>
      {description && <p className="text-sm leading-6 text-slate-600">{description}</p>}
    </article>
  )
}

export default SoftSkillCard
