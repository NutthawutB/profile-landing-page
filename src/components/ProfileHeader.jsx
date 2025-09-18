import img1 from '../assets/1.jpg';
const ProfileHeader = ({ name, role, summary, photo, highlights = [], details = [] }) => {
  return (
    <section className="relative overflow-hidden rounded-4xl bg-gradient-to-br from-white via-sky-50 to-white p-8 shadow-2xl ring-1 ring-slate-200/80">
      <div className="absolute -left-32 top-16 h-64 w-64 rounded-full bg-sky-200/30 blur-3xl" aria-hidden="true" />
      <div className="absolute -right-10 -bottom-24 h-72 w-72 rounded-full bg-slate-200/40 blur-3xl" aria-hidden="true" />

      <div className="relative grid gap-10 lg:grid-rows-[minmax(0,320px),1fr] lg:items-center">
        <div className='flex lg:grid lg:grid-cols-3 lg:items-top gap-8 items-top '>
        <div className="relative mx-auto flex h-64 w-64 items-center justify-center overflow-hidden rounded-[3rem] bg-white shadow-xl ring-1 ring-slate-200/80 lg:mx-0">
          <img
            src={img1}
            alt={`${name} portrait`}
            className="h-full w-full object-cover object-top "
            loading="lazy"
          />
          
        </div>
        <div className="lg:col-span-2 py-1">
          <h1 className="text-[76px] font-bold tracking-tight text-slate-800 ">{name}</h1>
          <p className="mt-1 text-lg font-medium text-slate-600">{role}</p>
          <p className="max-w-2xl text-base leading-7 text-slate-600">{summary}</p>
        </div>
        
        </div>
        <div className="flex flex-col gap-6 text-slate-900">
          

          

          {details.length > 0 && (
            <dl className="grid gap-3 rounded-3xl bg-white/80 p-5 shadow-inner ring-1 ring-slate-200/60 sm:grid-cols-2">
              {details.map(({ label, value }) => (
                <div key={label} className="flex flex-col gap-1">
                  <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">{label}</dt>
                  <dd className="text-sm font-medium text-slate-700">{value}</dd>
                </div>
              ))}
            </dl>
          )}

          {highlights.length > 0 && (
            <ul className="flex flex-wrap gap-3">
              {highlights.map((item) => (
                <li
                  key={item}
                  className="inline-flex items-center gap-2 rounded-full bg-sky-100/80 px-4 py-2 text-sm font-medium text-sky-800 ring-1 ring-sky-200/80"
                >
                  <span className="h-2 w-2 rounded-full bg-sky-500" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  )
}

export default ProfileHeader
