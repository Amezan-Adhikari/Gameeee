type IconProps = {
  className?: string;
};

export function IconChip({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <circle cx="24" cy="24" r="18" fill="currentColor" opacity="0.15" />
      <circle cx="24" cy="24" r="14" stroke="currentColor" strokeWidth="2" fill="none" />
      <path
        d="M24 10v6M24 32v6M10 24h6M32 24h6M14.8 14.8l4.2 4.2M29 29l4.2 4.2M14.8 33.2l4.2-4.2M29 19l4.2-4.2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function IconBolt({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path
        d="M26 4 8 28h12l-2 16 22-28H28l-2-12Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function IconCrown({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path
        d="M8 18 16 10l8 10 8-10 8 8-6 20H14L8 18Z"
        fill="currentColor"
      />
      <path d="M14 38h20" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export function IconSpark({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path
        d="m24 6 4.4 11.2L40 22l-11.6 4.8L24 38l-4.4-11.2L8 22l11.6-4.8L24 6Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function IconGlobe({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="2" fill="none" />
      <path
        d="M6 24h36M24 6c6 6 6 30 0 36M24 6c-6 6-6 30 0 36"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
    </svg>
  );
}
