import { Award, Trophy, MapPin, CheckCircle2 } from 'lucide-react'

const items = [
  { Icon: Award,         text: 'USPTA & PTR Certified Coach' },
  { Icon: Trophy,        text: 'All-American & Professional Tour Experience' },
  { Icon: MapPin,        text: 'Tampa Bay · Saddlebrook Resort' },
  { Icon: CheckCircle2,  text: 'All levels · All ages · Year round' },
]

export default function TrustBar() {
  return (
    <div className="bg-gray-50 border-b border-black/[0.06]">
      <div className="max-w-7xl mx-auto px-6 py-4">
        {/* Stacks vertically on mobile, horizontal row with dividers on sm+ */}
        <div className="flex flex-col sm:flex-row items-center justify-center sm:divide-x divide-black/[0.09]">
          {items.map(({ Icon, text }, i) => (
            <div
              key={i}
              className="flex items-center gap-2.5 px-5 py-2.5 sm:py-2 first:pl-0 last:pr-0"
            >
              <Icon
                size={14}
                className="flex-shrink-0"
                style={{ color: '#1D9E75' }}
              />
              <span
                className="text-sm font-medium whitespace-nowrap"
                style={{ color: '#085041' }}
              >
                {text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
