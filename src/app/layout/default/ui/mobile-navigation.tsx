import { CartIcon, DashboardFavoriteIcon, HomeIcon, ProfileIcon } from "@src/shared/assets/icons";
import { NavLink } from "react-router";

const navigationItemClass = ({ isActive }: { isActive: boolean }) =>
  `p-2 cursor-pointer rounded-xl transition-colors ${isActive ? "text-label" : "text-[#c7c5c2]"}`;

export function DefaultLayoutMobileNavigation() {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-1000 border-t border-gray-200 bg-white pb-[env(safe-area-inset-bottom)] lg:hidden">
      <div className="container flex h-14 items-center justify-around">
        <NavLink to="/" end className={navigationItemClass}>
          <HomeIcon className="size-6" />
        </NavLink>

        <NavLink to="/favorites" className={navigationItemClass}>
          <DashboardFavoriteIcon className="size-6" />
        </NavLink>

        <NavLink to="/cart" className={navigationItemClass}>
          <CartIcon className="size-6" />
        </NavLink>

        <button type="button" className="relative p-2 cursor-pointer rounded-xl text-[#c7c5c2]">
          <ProfileIcon className="size-6" />
          <span className="absolute top-1 right-1 size-2.5 rounded-full bg-red-500 ring-2 ring-white" />
        </button>
      </div>
    </nav>
  );
}
