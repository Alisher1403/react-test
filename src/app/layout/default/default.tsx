import { DefaultLayoutHeader } from "./ui/header";
import { DefaultLayoutFooter } from "./ui/footer";
import { DefaultLayoutCategories } from "./ui/categories";
import { Outlet } from "react-router";
import { DefaultLayoutMobileNavigation } from "./ui/mobile-navigation";
import { DefaultLayoutMobileHeader } from "./ui/mobile-header";

export default function DefaultLayout() {
  return (
    <div className="flex min-h-screen flex-col pb-[calc(3.5rem+env(safe-area-inset-bottom))] lg:pb-0">
      <DefaultLayoutMobileHeader />
      <DefaultLayoutHeader />
      <DefaultLayoutCategories />
      <main className="flex-1">
        <Outlet />
      </main>
      <DefaultLayoutFooter />
      <DefaultLayoutMobileNavigation />
    </div>
  );
}
