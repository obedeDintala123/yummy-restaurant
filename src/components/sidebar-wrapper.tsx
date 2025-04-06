import { SidebarProvider } from "@/components/ui/sidebar";

export const SidebarWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider> 
      {children}
    </SidebarProvider>
  );
};
