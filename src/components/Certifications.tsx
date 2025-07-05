import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Award, CheckCircle2 } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      name: "USDA Orgánico",
      description: "Certificación del Departamento de Agricultura de Estados Unidos que garantiza que nuestros ingredientes son 100% orgánicos, libres de pesticidas y químicos sintéticos.",
      logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/USDA_Organic_Seal.svg",
      features: [
        "Ingredientes 100% orgánicos",
        "Sin pesticidas sintéticos",
        "Proceso de cultivo sostenible",
        "Auditado regularmente"
      ]
    },
    {
      id: 2,
      name: "Certificación Europea BIO",
      description: "Sello de la Unión Europea que certifica la calidad orgánica de nuestros productos, asegurando estándares estrictos en toda la cadena productiva.",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Organic_food_logo.svg/200px-Organic_food_logo.svg.png",
      features: [
        "Estándares europeos de calidad",
        "Trazabilidad completa",
        "Control de calidad riguroso",
        "Respeto al medio ambiente"
      ]
    },
    {
      id: 3,
      name: "ISO 22000",
      description: "Certificación internacional de seguridad alimentaria que garantiza la gestión de riesgos en toda nuestra cadena de producción, desde la materia prima hasta el producto final.",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/ISO_22000_logo.svg/200px-ISO_22000_logo.svg.png",
      features: [
        "Sistema de gestión de seguridad alimentaria",
        "Control de puntos críticos",
        "Análisis de peligros",
        "Mejora continua"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-accent/20 to-background">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <Badge className="mb-4 bg-secondary/10 text-secondary border-secondary/20" variant="outline">
            <Shield className="mr-2" size={16} />
            Certificaciones de Calidad
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Respaldados por los Más Altos Estándares
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nuestro compromiso con la calidad se refleja en cada certificación obtenida. 
            Garantizamos la excelencia en cada paso de nuestro proceso productivo.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {certifications.map((cert, index) => (
            <Card 
              key={cert.id}
              className="overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 transform hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-8 text-center">
                {/* Certification Logo/Icon Area */}
                <div className="w-24 h-24 mx-auto mb-6 bg-primary/5 rounded-full flex items-center justify-center">
                  <Award className="text-primary" size={40} />
                </div>

                {/* Certification Name */}
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {cert.name}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  {cert.description}
                </p>

                {/* Features List */}
                <div className="space-y-2">
                  {cert.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm">
                      <CheckCircle2 className="text-primary mr-2 flex-shrink-0" size={14} />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quality Promise Section */}
        <div className="bg-primary/5 rounded-2xl p-8 lg:p-12 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <Shield className="text-primary" size={32} />
              </div>
            </div>
            
            <h3 className="text-3xl font-bold text-foreground mb-6">
              Nuestra Promesa de Calidad
            </h3>
            
            <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
              En <strong className="text-primary">NUTRIBLITZ</strong>, cada certificación representa nuestro 
              compromiso inquebrantable con la excelencia. No solo cumplimos con estándares internacionales, 
              los superamos. Desde la selección de materias primas hasta el empaque final, cada proceso 
              está monitoreado y certificado para garantizar que recibas un producto de la más alta calidad.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="p-4">
                <div className="text-2xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Ingredientes Certificados</div>
              </div>
              <div className="p-4">
                <div className="text-2xl font-bold text-primary mb-2">0</div>
                <div className="text-sm text-muted-foreground">Aditivos Artificiales</div>
              </div>
              <div className="p-4">
                <div className="text-2xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Control de Calidad</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;