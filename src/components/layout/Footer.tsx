import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  Snowflake,
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

const Footer = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { path: "/", label: t("nav.home") },
    { path: "/about", label: t("nav.about") },
    { path: "/services", label: t("nav.services") },
    { path: "/projects", label: t("nav.projects") },
    { path: "/blog", label: t("nav.blog") },
  ];

  const services = [
    t("services.installation.title"),
    t("services.repair.title"),
    t("services.maintenance.title"),
    t("services.ducting.title"),
    t("services.central.title"),
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <Snowflake className="w-8 h-8 text-primary" />
              <div>
                <h3 className="text-lg font-bold">
                  {isRTL ? "Ice Gate " : "Ice Gate"}
                </h3>
                <p className="text-xs text-secondary-foreground/70">
                  {isRTL ? "للتكييف" : "HVAC Co"}
                </p>
              </div>
            </Link>
            <p className="text-sm text-secondary-foreground/80 leading-relaxed">
              {t("footer.description")}
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">
              {t("footer.quickLinks")}
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">
              {t("footer.services")}
            </h4>
            <ul className="space-y-2">
              {services.map((service, i) => (
                <li key={i}>
                  <Link
                    to="/services"
                    className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">
              {t("footer.contactUs")}
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                <span className="text-sm" dir="ltr">
                  055 861 2626
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                <span className="text-sm">info@icegate-hvac.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                <span className="text-sm">
                  {t("contact.info.addressValue")}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                <span className="text-sm">{t("contact.info.hoursValue")}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-secondary-foreground/10 text-center">
          <p className="text-sm text-secondary-foreground/60">
            © {currentYear} Ice Gate HVAC Co. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
