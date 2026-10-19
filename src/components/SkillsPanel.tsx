import { skills } from '../data/content'

export default function SkillsPanel() {
  return (
    <div className="space-y-10">
      {skills.map((g, gi) => (
        <div key={g.group}>
          <h3 className="mb-4 text-sm font-medium text-mute">{g.group}</h3>
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {g.items.map(({ name, icon: Icon, color }, i) => (
              <li key={name} className="rise" style={{ ['--d' as string]: `${(gi * 2 + i) * 40}ms` }}>
                <div className="flex h-full flex-col items-center justify-start gap-3 rounded-2xl border border-ink-line bg-ink-soft px-3 py-6 text-center transition duration-200 hover:-translate-y-1 hover:border-violet/60">
                  <Icon size={38} color={color} aria-hidden="true" />
                  <span className="text-sm font-medium text-white/90">{name}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
