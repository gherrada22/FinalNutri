import { Button } from '../components/ui/button';
import { ChevronDown, Sparkles, Heart, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 hero-gradient"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 animate-float">
          <Sparkles className="text-primary-light opacity-20" size={32} />
        </div>
        <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '1s' }}>
          <Heart className="text-secondary-light opacity-20" size={28} />
        </div>
        <div className="absolute bottom-40 left-20 animate-float" style={{ animationDelay: '2s' }}>
          <Zap className="text-primary opacity-20" size={36} />
        </div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="text-center lg:text-left animate-slide-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Energía Natural Para 
              <span className="text-primary-light block">Tu Día Perfecto</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Descubre la fuerza de los superalimentos con nuestro shake nutritivo premium. 
              <strong> Cacao, Maca, Avena y Plátano</strong> en una mezcla perfecta.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button variant="hero" size="xl" className="bg-white text-primary hover:bg-white/90">
                <Zap className="mr-2" size={20} />
                Comprar Ahora - S/ 25
              </Button>
              <Button variant="outline-primary" size="xl" className="border-white text-white hover:bg-white hover:text-primary">
                Ver Recetas
              </Button>
            </div>

            <div className="flex items-center justify-center lg:justify-start space-x-8 text-white/80">
              <div className="text-center">
                <div className="font-bold text-2xl text-white">100%</div>
                <div className="text-sm">Orgánico</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-2xl text-white">0</div>
                <div className="text-sm">Preservantes</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-2xl text-white">+12</div>
                <div className="text-sm">Vitaminas</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex justify-center animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl scale-110 animate-pulse"></div>
              <img 
                src="/public/productonuevo.png"
                alt="Nutriblitz Superfood Shake"
                className="relative z-10 max-w-md w-full h-auto drop-shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-white/60" size={32} />
        </div>
      </div>
    </section>
  );
};

export default Hero;