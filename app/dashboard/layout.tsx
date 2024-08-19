import Header from "./header";
import Sidebar from "./sidebar";


export default function DashboardLayout({ children, root } : {children: React.ReactNode, root: React.ReactNode}) {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <Sidebar />
      <div className="flex flex-col">
        <Header />
        <main>
            {children}
        </main>
      </div>
    </div>
  )
}