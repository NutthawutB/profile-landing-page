const ActivityItem = ({ title, summary, period, tags = [] }) => {
  return (
    <article className="group relative flex h-full flex-col gap-4 overflow-hidden rounded-4xl bg-white/95 p-6 shadow-lg ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-2xl">
      <div className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-sky-400 via-sky-300 to-transparent opacity-60" aria-hidden="true" />
      <span className="absolute left-4 top-6 inline-flex h-4 w-4 items-center justify-center rounded-full border-2 border-white bg-sky-500 shadow ring-2 ring-sky-300" aria-hidden="true" />

      <header className="pl-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-600">{period}</p>
        <h3 className="mt-2 text-lg font-semibold text-slate-900">{title}</h3>
      </header>

      <p className="pl-10 text-sm leading-6 text-slate-600">{summary}</p>

      {tags.length > 0 && (
        <ul className="mt-auto flex flex-wrap gap-2 pl-10 text-xs font-medium text-sky-700">
          {tags.map((tag) => (
            <li key={tag} className="rounded-full bg-sky-50 px-3 py-1 ring-1 ring-sky-200">
              {tag}
            </li>
          ))}
        </ul>
      )}
    </article>
  )
}

export default ActivityItem
