const SkillPill = ({ label, hint }) => {
  return (
    <span
      className="inline-flex min-h-[3rem] items-center justify-center rounded-full bg-gradient-to-r from-sky-500/10 via-sky-400/10 to-slate-100 px-5 py-2 text-sm font-semibold text-sky-800 shadow-sm ring-1 ring-sky-300/60"
      title={hint}
    >
      {label}
    </span>
  )
}

export default SkillPill
