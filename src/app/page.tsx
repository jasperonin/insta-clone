import Image from "next/image";
import { AppSidebar } from "./sidebar/sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { ProfileContainer } from "./profile-container/container";
import { CreateTab } from "./tabs/tabs";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <div></div>

      <div>Hello next!</div>
      <ProfileContainer />
      
      <SidebarProvider>
        <AppSidebar />
        <CreateTab/>
      </SidebarProvider>
     
    </main>
  );
}
