const ProjectCard = ({ title, category, date, dateLabel, image, summary, tags = [], link }) => {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-xl">
      <div className="relative aspect-video w-full overflow-hidden bg-slate-100">
        {image ? (
          <img
            src={image}
            alt={`${title} preview`}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-sm text-slate-500">
            ไม่มีภาพตัวอย่าง
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6 text-slate-900">
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
          <span>{category}</span>
          <time dateTime={date}>{dateLabel ?? date}</time>
        </div>

        <div className="space-y-2">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-sm leading-6 text-slate-600">{summary}</p>
        </div>

        {tags.length > 0 && (
          <ul className="mt-auto flex flex-wrap gap-2 text-xs font-medium text-sky-700">
            {tags.map((tag) => (
              <li key={tag} className="rounded-full bg-sky-50 px-3 py-1 ring-1 ring-sky-200">
                {tag}
              </li>
            ))}
          </ul>
        )}

        {link && (
          <a
            href={link}
            className="mt-4 inline-flex w-fit items-center gap-2 text-sm font-semibold text-sky-700 hover:text-sky-800"
            target="_blank"
            rel="noreferrer"
          >
            ดูรายละเอียด &gt;
          </a>
        )}
      </div>
    </article>
  )
}

export default ProjectCard
