import { Button } from './ui/button';
import { Separator } from './ui/separator';
import { 
  Instagram, 
  Music, 
  Mail, 
  Phone, 
  MapPin,
  Heart,
  Leaf
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Producto', href: '#producto' },
    { name: 'Recetas', href: '#recetas' }
  ];

  const supportLinks = [
    { name: 'Testimonios', href: '#testimonios' },
    { name: 'Contacto', href: '#contacto' },
    { name: 'Política de Privacidad', href: '#' },
    { name: 'Términos y Condiciones', href: '#' }
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-16">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <img 
                src="/public/logo.png"  
                alt="Nutriblitz" 
                className="h-12 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-secondary-foreground/80 mb-6 leading-relaxed">
              Energía natural para tu día perfecto. Superalimentos premium que transforman 
              tu rutina nutricional con cacao, maca, avena y plátano.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="icon"
                className="text-secondary-foreground/60 hover:text-secondary-foreground hover:bg-secondary-foreground/10"
                asChild
              >
                <a href="https://instagram.com/nutriblitz_pe" target="_blank" rel="noopener noreferrer">
                  <Instagram size={20} />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-secondary-foreground/60 hover:text-secondary-foreground hover:bg-secondary-foreground/10"
                asChild
              >
                <a href="https://tiktok.com/@nutriblitz" target="_blank" rel="noopener noreferrer">
                  <Music size={20} />
                </a>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-secondary-foreground mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="font-bold text-secondary-foreground mb-4">Soporte</h3>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-secondary-foreground mb-4">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center text-sm">
                <Mail className="text-secondary-foreground/60 mr-2 flex-shrink-0" size={16} />
                <a 
                  href="mailto:comercial@nutriblitz.com.pe"
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors duration-300"
                >
                  comercial@nutriblitz.com.pe
                </a>
              </div>
              <div className="flex items-center text-sm">
                <Phone className="text-secondary-foreground/60 mr-2 flex-shrink-0" size={16} />
                <a 
                  href="tel:+51985443209"
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors duration-300"
                >
                  +51 985 443 209
                </a>
              </div>
              <div className="flex items-start text-sm">
                <MapPin className="text-secondary-foreground/60 mr-2 flex-shrink-0 mt-0.5" size={16} />
                <span className="text-secondary-foreground/80">
                  Calle Los Álamos 173,<br />
                  Chorrillos, Lima
                </span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-secondary-foreground/20 mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center text-sm text-secondary-foreground/60">
            <span>© {currentYear} Nutriblitz. Todos los derechos reservados.</span>
          </div>
          
          <div className="flex items-center text-sm text-secondary-foreground/60">
            <span>Hecho con</span>
            <Heart className="mx-1 text-red-400" size={14} fill="currentColor" />
            <span>para tu bienestar</span>
            <Leaf className="ml-1 text-primary" size={14} />
          </div>
        </div>

        {/* Certifications Footer */}
        <div className="mt-8 pt-8 border-t border-secondary-foreground/20">
          <div className="text-center">
            <p className="text-xs text-secondary-foreground/60 mb-2">
              Certificado por estándares internacionales de calidad
            </p>
            <div className="flex justify-center items-center space-x-6 opacity-60">
              <span className="text-xs font-medium">USDA ORGANIC</span>
              <span className="text-xs font-medium">BIO CERTIFICADO</span>
              <span className="text-xs font-medium">ISO 22000</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;