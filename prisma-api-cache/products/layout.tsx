export default function ProductLayout({children}:{children:React.ReactNode}){



    return (
        <section className="bg-white rounded-lg shadow p-6">
             <h2 className="text-xl font-semibold mb-4">🧾 Product Section</h2>
             {children}
        </section>
    )
}