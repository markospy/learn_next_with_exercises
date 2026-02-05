export default function Loading() {
  return (
    <div className="space-y-4 p-4 animate-pulse">
      <div className="bg-muted rounded-md w-48 h-8" />
      <div className="flex items-center gap-2">
        <div className="bg-muted rounded w-24 h-5" />
        <div className="bg-muted rounded w-4 h-4" />
        <div className="bg-muted rounded w-32 h-5" />
      </div>
    </div>
  )
}
