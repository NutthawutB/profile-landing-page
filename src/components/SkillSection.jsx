const accentMap = {
  neutral: 'bg-white/95 ring-slate-200 text-slate-900',
  sky: 'bg-gradient-to-br from-white via-sky-50 to-white ring-sky-200/70 text-slate-900',
  slate: 'bg-slate-900/95 ring-slate-700/60 text-slate-100',
}

const SkillSection = ({ title, description, children, columns = 'grid-cols-1 sm:grid-cols-2', accent = 'neutral' }) => {
  const accentClasses = accentMap[accent] ?? accentMap.neutral
  const isDark = accent === 'slate'
  const headingClass = isDark ? 'text-white' : 'text-slate-900'
  const descriptionClass = isDark ? 'text-slate-300' : 'text-slate-500'

  return (
    <section className={`relative overflow-hidden rounded-4xl p-8 shadow-xl backdrop-blur ${accentClasses}`}>
      <div className="pointer-events-none absolute -right-24 top-16 h-56 w-56 rounded-full bg-white/20 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -left-28 -bottom-32 h-64 w-64 rounded-full bg-sky-200/20 blur-3xl" aria-hidden="true" />

      <header className="relative flex flex-col gap-2">
        <h2 className={`text-2xl font-semibold ${headingClass}`}>{title}</h2>
        {description && <p className={`text-sm ${descriptionClass}`}>{description}</p>}
      </header>
      <div className={`relative mt-6 grid gap-4 ${columns}`}>
        {children}
      </div>
    </section>
  )
}

export default SkillSection
