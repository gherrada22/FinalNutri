import { Button } from '../components/ui/button';
import { Leaf, Clock, Heart, Award } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Leaf className="text-primary" size={32} />,
      title: "100% Natural",
      description: "Ingredientes premium sin aditivos artificiales ni conservantes"
    },
    {
      icon: <Clock className="text-primary" size={32} />,
      title: "Listo en Segundos",
      description: "Solo mezcla 1-2 cucharadas con agua o leche para un shake perfecto"
    },
    {
      icon: <Heart className="text-primary" size={32} />,
      title: "Nutrición Completa",
      description: "Vitaminas B12, D y minerales como hierro y magnesio"
    },
    {
      icon: <Award className="text-primary" size={32} />,
      title: "Calidad Premium",
      description: "Superalimentos seleccionados: cacao, maca, avena y plátano"
    }
  ];

  return (
    <section id="nosotros" className="py-20 bg-gradient-to-b from-background to-accent/20">
      <div className="container mx-auto px-4">

        {/* What We Do Section */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            What do we do?
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            <span className="text-primary font-semibold">NUTRIBLITZ</span> specializes in creating premium nutritional supplements that transform quick meals into energy routines. We combine oats, bananas and superfoods like maca and cacao to deliver ready-to-mix powders that deliver energy, satisfy hunger and promote long-term wellness.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 card-gradient rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Company Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <h3 className="text-3xl font-bold text-foreground mb-6">
            About Company
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
            Founded in 2025, <strong className="text-primary">NUTRIBLITZ</strong> was created in response to the growing demand for fast food options without compromising nutritional quality. Aimed at professionals and active people who prioritize their health without sacrificing their time.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              <strong className="text-1xl font-bold text-foreground mb-6"> "NUTRIBLITZ</strong> is more than a supplement: <strong className="text-1xl font-bold text-foreground mb-6"> it is a strategic ally for an active and balanced lifestyle"</strong>
            </p>
            <Button variant="hero" size="lg">
              Conoce Más Sobre Nosotros
            </Button>
          </div>

          <div className="animate-fade-in">
            <img
              src="/public/logo.png"
              alt="Nutriblitz Bowl"
              className="w-full h-auto rounded-2xl shadow-strong transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Social Responsibility */}
        <div className="mt-20 text-center bg-primary/5 rounded-2xl p-12">
          <h3 className="text-3xl font-bold text-foreground mb-6">
            Compromiso Social
          </h3>
          <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed text-lg">
            En <strong className="text-primary">NUTRIBLITZ</strong>, creemos en la responsabilidad social y el
            impacto positivo en nuestras comunidades. Trabajamos directamente con productores locales de superalimentos,
            garantizando comercio justo y sostenible. Parte de nuestras ganancias se destinan a programas de nutrición
            infantil en comunidades vulnerables, porque creemos que una buena nutrición debe estar al alcance de todos.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;