import { useState } from 'react';
import { Expand, Image as ImageIcon } from 'lucide-react';
import type { EditorialPhoto } from '../data/portfolioData';

interface EditorialImageProps {
  photo: EditorialPhoto;
  className?: string;
  onSelect?: (photo: EditorialPhoto) => void;
  priority?: boolean;
  showCaption?: boolean;
}

export function EditorialImage({
  photo,
  className = '',
  onSelect,
  priority = false,
  showCaption = true,
}: EditorialImageProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <figure className={`group flex flex-col ${className}`}>
      <div
        className={`relative overflow-hidden rounded-2xl bg-[#EFE9DC] border border-[#292929]/10 ${photo.aspectClass} ${
          onSelect ? 'cursor-pointer' : ''
        }`}
        onClick={onSelect ? () => onSelect(photo) : undefined}
        role={onSelect ? 'button' : undefined}
        tabIndex={onSelect ? 0 : undefined}
        onKeyDown={
          onSelect
            ? (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onSelect(photo);
                }
              }
            : undefined
        }
        aria-label={onSelect ? `View full photograph: ${photo.location}` : undefined}
      >
        {!hasError ? (
          <img
            src={photo.src}
            alt={photo.alt}
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
            referrerPolicy="no-referrer"
            onError={() => setHasError(true)}
            className="h-full w-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-[#EFE9DC] to-[#E5DCC9] p-6 text-center text-[#5C5852]">
            <ImageIcon className="mb-3 h-7 w-7 text-[#294C3B]/60" strokeWidth={1.5} />
            <p className="font-editorial text-base font-medium text-[#292929]">{photo.location}</p>
            <p className="mt-1 max-w-xs text-xs text-[#5C5852]">{photo.caption}</p>
          </div>
        )}

        {onSelect && !hasError && (
          <span
            aria-hidden="true"
            className="pointer-events-none absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-[#292929]/65 text-[#F7F3EA] opacity-0 backdrop-blur-xs transition-opacity duration-200 group-hover:opacity-100"
          >
            <Expand className="h-4 w-4" strokeWidth={1.75} />
          </span>
        )}
      </div>

      {showCaption && (
        <figcaption className="mt-3 flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
          <span className="text-xs font-semibold tracking-wide text-[#294C3B] whitespace-nowrap">
            {photo.location}
          </span>
          <span className="text-xs leading-relaxed text-[#5C5852] sm:text-right">
            {photo.caption}
          </span>
        </figcaption>
      )}
    </figure>
  );
}
