import { ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import type { ProjectEntry } from '@/types/profile'

interface Props {
  project: ProjectEntry
}

export function ProjectCard({ project }: Props) {
  return (
    <div
      className={cn(
        'rounded-xl border p-6 flex flex-col gap-4 transition-colors',
        project.isFlagship
          ? 'border-blue-400/50 bg-black/50 shadow-[0_0_30px_-4px_rgba(96,165,250,0.2)]'
          : 'border-white/10 bg-white/5 hover:bg-white/10'
      )}
    >
      {project.isFlagship && (
        <span className="text-xs font-semibold text-blue-400 tracking-widest uppercase">
          Flagship Project
        </span>
      )}

      <div>
        <h3 className="text-white font-semibold text-lg mb-1">{project.name}</h3>
        <p className="text-white/60 text-sm">{project.tagline}</p>
      </div>

      <p className="text-white/70 text-sm leading-relaxed flex-1">{project.description}</p>

      <div className="flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2.5 py-0.5 rounded-full border border-white/15 text-white/60 bg-white/5"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-3 pt-1">
        {project.isFlagship && project.ctaHref && (
          <Link to={project.ctaHref}>
            <Button size="sm">{project.ctaLabel}</Button>
          </Link>
        )}
        {project.externalUrl && (
          <a
            href={project.externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-white/50 hover:text-white transition-colors"
          >
            <ExternalLink size={14} />
            <span>View project</span>
          </a>
        )}
      </div>
    </div>
  )
}
