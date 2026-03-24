import { tv, type VariantProps } from 'tailwind-variants'

const skeleton = tv({
  base: 'animate-pulse rounded bg-zinc-700',
  variants: {
    size: {
      sm: 'h-3',
      md: 'h-3.5',
      lg: 'h-4',
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

interface SkeletonProps extends VariantProps<typeof skeleton> {
  className?: string
}

export function Skeleton({ size, className }: SkeletonProps) {
  return <div className={skeleton({ size, className })} />
}
