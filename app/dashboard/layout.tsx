import { Navbar } from "@/components/layout/Navbar";
import { Sidebar } from "@/components/layout/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <Sidebar />
      <div className="flex flex-col pl-64">
        <Navbar />
        <main className="flex-grow p-6">{children}</main>
      </div>
    </div>
  );
}
