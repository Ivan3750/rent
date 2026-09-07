import { Droplet, Phone, Mail } from "lucide-react";

function Footer() {
  return (
    <footer className="px-6 pt-16 md:px-12" style={{ backgroundColor: "#164FAF" }}>
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-12 pb-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <span
                className="flex h-9 w-9 items-center justify-center rounded-full"
                style={{ backgroundColor: "#1C62D9" }}
              >
                <Droplet size={16} className="text-white" fill="white" />
              </span>
              <span className="text-lg font-extrabold text-white">RenServ</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              En familievirksomhed, der tilbyder rengøring af boliger, kontorer og erhvervslokaler
              i Horsens og omegn.
            </p>

           
          </div>

          {/* Menu */}
          <div>
            <p className="text-sm font-semibold text-white">Menu</p>
            <ul className="mt-4 space-y-3 text-sm text-white/60">
              <li><a href="#" className="hover:text-white">Om os</a></li>
              <li><a href="#" className="hover:text-white">Tjenester</a></li>
              <li><a href="#" className="hover:text-white">Priser</a></li>
              <li><a href="#" className="hover:text-white">Kontakt</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-sm font-semibold text-white">Kontakt</p>
            <ul className="mt-4 space-y-3 text-sm text-white/60">
              <li className="flex items-center gap-2">
                <Phone size={15} />
                <a href="tel:+4522858880" className="hover:text-white">+45 22 85 88 80</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={15} />
                <a href="mailto:kontakt@nordklar.dk" className="hover:text-white">
                  kontakt@nordklar.dk
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal bar */}
        <div className="flex flex-col gap-3 border-t border-white/10 py-6 text-xs text-white/45 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} RenServ. Alle rettigheder forbeholdes.</p>
          {/* CVR ще не зареєстровано — заповніть після реєстрації бізнесу */}
          <p>RenServ (CVR: [заповнити]) · [юридична назва]</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;