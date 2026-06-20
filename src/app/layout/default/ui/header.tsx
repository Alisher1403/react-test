import avatar from "@src/shared/assets/images/dashboard-avatar.png";
import logo from "@src/shared/assets/images/market-yandex-go-logo.svg";
import { CartIcon, CoinIcon, DashboardFavoriteIcon, LanguageIcon, OrdersIcon, SearchIcon } from "@src/shared/assets/icons";
import { Link, NavLink } from "react-router";
import { Button } from "@src/shared/ui";

function HeaderAction({
  icon,
  label,
  to,
  compact = false,
}: {
  icon: React.ReactNode;
  label: string;
  to?: string;
  compact?: boolean;
}) {
  return (
    <Link
      to={to || "/"}
      className={`${compact ? "hidden md:flex" : "flex"} min-w-10 cursor-pointer flex-col items-center gap-0.5 text-label-secondary hover:text-label sm:min-w-14`}
    >
      {icon}
      <span className="hidden text-xs xl:block">{label}</span>
    </Link>
  );
}

export function DefaultLayoutHeader() {
  return (
    <header className="sticky top-0 z-1000 hidden bg-white lg:block">
      <div className="container flex min-h-16 flex-wrap items-center gap-2 py-2 sm:gap-3 lg:min-h-18 lg:flex-nowrap">
        <NavLink to="/" className="shrink-0">
          <img src={logo} alt="Market Yandex Go" className="h-auto w-26 sm:w-36" />
        </NavLink>

        <Button type="primary" className="hidden md:inline-flex">
          Каталог
        </Button>

        <label className="order-last flex h-11 w-full min-w-0 items-center rounded-xl border-3 border-yellow-400 px-3 focus-within:border-yellow-500 sm:h-12 sm:rounded-2xl lg:order-0 lg:flex-1">
          <SearchIcon className="mr-3 shrink-0 text-label-secondary" />
          <span className="sr-only">Найти товары</span>
          <input
            type="search"
            placeholder="Найти товары"
            className="min-w-0 flex-1 bg-transparent text-base outline-none placeholder:text-label-secondary"
          />
        </label>

        <button
          type="button"
          className="hidden shrink-0 cursor-pointer items-center rounded-full bg-neutral-800 py-1 pr-1 pl-2 text-sm font-bold text-white lg:flex"
        >
          Призы <CoinIcon className="ml-1 size-6" />
        </button>

        <nav className="ml-auto flex items-center lg:ml-0 lg:gap-1">
          <HeaderAction icon={<OrdersIcon className="size-6" />} label="Заказы" compact />
          <HeaderAction icon={<DashboardFavoriteIcon className="size-6" />} label="Избранное" to="/favorites" />
          <HeaderAction icon={<CartIcon className="size-6" />} label="Корзина" to="/cart" />
          <HeaderAction icon={<LanguageIcon className="size-6" />} label="Русский" compact />
        </nav>

        <button type="button" className="cursor-pointer">
          <img src={avatar} alt="" className="size-9 rounded-full bg-container-primary object-cover sm:size-10" />
        </button>
      </div>
    </header>
  );
}
