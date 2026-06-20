import appGalleryIcon from "@src/shared/assets/images/app-gallery.svg";
import appStoreIcon from "@src/shared/assets/images/app-store.svg";
import googlePlayIcon from "@src/shared/assets/images/google-play.svg";
import ruStoreIcon from "@src/shared/assets/images/ru-store.svg";
import qrCode from "@src/shared/assets/images/yandex-go-qr.svg";

export function DefaultLayoutFooter() {
  return (
    <footer className="mt-16 border-y border-gray-200 bg-white">
      <div className="container grid gap-10 py-10 lg:grid-cols-[1.25fr_1fr_1fr_1fr] lg:gap-16">
        <section>
          <h2 className="max-w-sm text-title leading-none font-bold">
            Делайте покупки на Маркете
            <br />в приложении Yandex GO
          </h2>

          <div className="mt-8 flex gap-2.5">
            <a href="#">
              <img src={appStoreIcon} alt="" className="size-14" />
            </a>
            <a href="#">
              <img src={googlePlayIcon} alt="" className="size-14" />
            </a>
            <a href="#">
              <img src={appGalleryIcon} alt="" className="size-14" />
            </a>
            <a href="#">
              <img src={ruStoreIcon} alt="" className="size-14" />
            </a>
          </div>

          <div className="mt-20">
            <img src={qrCode} alt="QR code for downloading Yandex Go" className="size-32" />
            <p className="mt-3 max-w-56 text-callout leading-5 text-label-secondary">
              Наведите камеру на QR-код,
              <br />
              чтобы скачать приложение
            </p>
          </div>
        </section>

        <nav>
          <h2 id="footer-categories" className="font-bold">
            Категории
          </h2>
          <div className="mt-5 flex flex-col items-start gap-3 text-sm text-label-secondary">
            <a href="#" className="hover:text-label">
              Компьютерная техника
            </a>
            <a href="#" className="hover:text-label">
              Гейминг
            </a>
            <a href="#" className="hover:text-label">
              Бытовая техника
            </a>
            <a href="#" className="hover:text-label">
              Аптека
            </a>
            <a href="#" className="hover:text-label">
              Товары для дома
            </a>
            <a href="#" className="hover:text-label">
              Электроника
            </a>
            <a href="#" className="hover:text-label">
              Мебель
            </a>
          </div>
        </nav>

        <div className="space-y-20">
          <nav>
            <h2 id="footer-buyers" className="font-bold">
              Покупателям
            </h2>
            <div className="mt-5 flex flex-col items-start gap-3 text-sm text-label-secondary">
              <a href="#" className="hover:text-label">
                Как выбрать товар
              </a>
              <a href="#" className="hover:text-label">
                Оплата и доставка
              </a>
              <a href="#" className="hover:text-label">
                Обратная связь
              </a>
              <a href="#" className="hover:text-label">
                О сервисе
              </a>
              <a href="#" className="hover:text-label">
                Возвраты
              </a>
              <a href="#" className="hover:text-label">
                Наш канал в Telegram
              </a>
            </div>
          </nav>

          <nav>
            <h2 id="footer-sellers" className="font-bold">
              Продавцам
            </h2>
            <div className="mt-5 text-sm text-label-secondary">
              <a href="#" className="hover:text-label">
                Сайт для партнёров
              </a>
            </div>
          </nav>
        </div>

        <nav>
          <h2 id="footer-partnership" className="font-bold">
            Сотрудничество
          </h2>
          <div className="mt-5 text-sm text-label-secondary">
            <a href="#" className="hover:text-label">
              Открыть пункт выдачи заказов
            </a>
          </div>
        </nav>
      </div>
    </footer>
  );
}
