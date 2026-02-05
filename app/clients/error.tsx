'use client'

export default function Error() {
    return <div className="flex flex-col justify-center items-center gap-8 h-screen font-extrabold text-xl">
        <h1>Algo ha salido mal al cargar los clientes</h1>
        <div className="text-8xl text-center animate-pulse">🦧</div>
    </div>
}