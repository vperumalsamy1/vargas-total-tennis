import { Award, Trophy, MapPin, CheckCircle2 } from 'lucide-react'

// Icons are positional — same order as the trust array in both en.js and es.js
const ICONS = [Award, Trophy, MapPin, CheckCircle2]

export default function TrustBar({ content }) {
  return (
    <div className="bg-gray-50 border-b border-black/[0.06]">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex flex-wrap items-center justify-center gap-x-0 gap-y-1">
          {content.map((text, i) => {
            const Icon = ICONS[i]
            return (
              <div
                key={i}
                className="flex items-center gap-2.5 px-5 py-2"
                style={i > 0 ? { borderLeft: '1px solid rgba(0,0,0,0.09)' } : {}}
              >
                <Icon size={14} className="flex-shrink-0" style={{ color: '#1D9E75' }} />
                <span className="text-sm font-medium" style={{ color: '#085041' }}>
                  {text}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
