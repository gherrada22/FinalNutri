import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Instagram, 
  Music, 
  Clock,
  Send,
  MessageCircle
} from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="text-primary" size={24} />,
      title: "Email",
      value: "comercial@nutriblitz.com.pe",
      action: "mailto:comercial@nutriblitz.com.pe"
    },
    {
      icon: <Phone className="text-primary" size={24} />,
      title: "Teléfono",
      value: "+51 985 443 209",
      action: "tel:+51985443209"
    },
    {
      icon: <MapPin className="text-primary" size={24} />,
      title: "Dirección",
      value: "Calle Los Álamos 173, Chorrillos",
      action: "https://maps.google.com"
    }
  ];

  const socialMedia = [
    {
      name: "Instagram",
      icon: <Instagram size={24} />,
      handle: "@nutriblitz_pe",
      url: "https://instagram.com/nutriblitz_pe",
      followers: "2.5K seguidores",
      bg: "bg-gradient-to-br from-purple-500 to-pink-500"
    },
    {
      name: "TikTok",
      icon: <Music size={24} />,
      handle: "@nutriblitz",
      url: "https://tiktok.com/@nutriblitz",
      followers: "1.8K seguidores",
      bg: "bg-gradient-to-br from-black to-gray-800"
    }
  ];

  const businessHours = [
    { day: "Lunes - Viernes", hours: "9:00 AM - 6:00 PM" },
    { day: "Sábados", hours: "9:00 AM - 2:00 PM" },
    { day: "Domingos", hours: "Cerrado" }
  ];

  return (
    <section id="contacto" className="py-20 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20" variant="outline">
            <MessageCircle className="mr-2" size={16} />
            Hablemos
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Contacta con Nosotros
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            ¿Tienes preguntas sobre Nutriblitz? ¿Quieres hacer un pedido personalizado? 
            Estamos aquí para ayudarte en tu camino hacia una nutrición más saludable.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground">
                  Envíanos un Mensaje
                </CardTitle>
                <p className="text-muted-foreground">
                  Completa el formulario y nos pondremos en contacto contigo en menos de 24 horas.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Nombre Completo
                    </label>
                    <Input placeholder="Tu nombre completo" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Email
                    </label>
                    <Input placeholder="tu@email.com" type="email" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Teléfono
                    </label>
                    <Input placeholder="+51 999 999 999" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Asunto
                    </label>
                    <Input placeholder="¿En qué podemos ayudarte?" />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Mensaje
                  </label>
                  <Textarea 
                    placeholder="Cuéntanos más detalles sobre tu consulta..."
                    rows={5}
                  />
                </div>

                <Button variant="hero" size="lg" className="w-full">
                  <Send className="mr-2" size={20} />
                  Enviar Mensaje
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info Sidebar */}
          <div className="space-y-6">
            
            {/* Contact Methods */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="text-lg font-bold text-foreground">
                  Información de Contacto
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.action}
                    className="flex items-center p-3 rounded-lg hover:bg-accent/50 transition-colors duration-300 group"
                  >
                    <div className="mr-3 group-hover:scale-110 transition-transform duration-300">
                      {info.icon}
                    </div>
                    <div>
                      <div className="font-medium text-foreground text-sm">
                        {info.title}
                      </div>
                      <div className="text-muted-foreground text-sm">
                        {info.value}
                      </div>
                    </div>
                  </a>
                ))}
              </CardContent>
            </Card>

            {/* Business Hours */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="text-lg font-bold text-foreground flex items-center">
                  <Clock className="mr-2 text-primary" size={20} />
                  Horarios de Atención
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {businessHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-foreground font-medium text-sm">
                      {schedule.day}
                    </span>
                    <span className="text-muted-foreground text-sm">
                      {schedule.hours}
                    </span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="text-lg font-bold text-foreground">
                  Síguenos en Redes Sociales
                </CardTitle>
                <p className="text-muted-foreground text-sm">
                  Mantente al día con recetas, tips y novedades
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                {socialMedia.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center p-4 rounded-lg text-white transition-all duration-300 transform hover:scale-105 ${social.bg}`}
                  >
                    <div className="mr-3">
                      {social.icon}
                    </div>
                    <div className="flex-1">
                      <div className="font-bold">{social.name}</div>
                      <div className="text-sm opacity-90">{social.handle}</div>
                    </div>
                    <div className="text-xs opacity-75">
                      {social.followers}
                    </div>
                  </a>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 bg-accent/10 rounded-2xl p-8 lg:p-12">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">
            Preguntas Frecuentes
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="space-y-2">
              <h4 className="font-semibold text-foreground">¿Cuánto dura un envase?</h4>
              <p className="text-muted-foreground text-sm">
                Cada envase contiene aproximadamente 15-20 porciones, dependiendo del uso diario.
              </p>
            </div>
            
            <div className="space-y-2">
              <h4 className="font-semibold text-foreground">¿Hacen envíos a todo el Perú?</h4>
              <p className="text-muted-foreground text-sm">
                Sí, enviamos a todo el territorio nacional. Envío gratuito en Lima.
              </p>
            </div>
            
            <div className="space-y-2">
              <h4 className="font-semibold text-foreground">¿Es apto para veganos?</h4>
              <p className="text-muted-foreground text-sm">
                Sí, todos nuestros ingredientes son de origen vegetal y aptos para veganos.
              </p>
            </div>
            
            <div className="space-y-2">
              <h4 className="font-semibold text-foreground">¿Tienen descuentos por cantidad?</h4>
              <p className="text-muted-foreground text-sm">
                Sí, ofrecemos descuentos especiales para compras de 3 o más envases.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;