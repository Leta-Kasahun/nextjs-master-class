import Link from "next/link"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="p-4">
      <nav className="bg-blue-600 text-white p-2 mb-4 space-x-10 flex flex-row">
      <Link href="/dashboard"> <span>Main Dashboard</span></Link>
       <Link href="/dashboard/Admin"> <span>Admin Dashboard</span></Link>
       <Link href="/dashboard/setting"> <span>Setting Dashboard</span></Link>
      

      </nav>

      <section className="bg-white p-4 rounded shadow">
        <h1 className="text-xl font-bold mb-2">Welcome to Dashboard</h1>
        <div>{children}</div>
      </section>
    </div>
  )
}
