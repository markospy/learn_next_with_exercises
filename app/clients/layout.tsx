import SearchBar from "@/components/clients/searchBar";

export default function ClientLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div className="flex flex-col justify-center items-center gap-4 p-4">
            <SearchBar />
            {children}
        </div>
    );
  }