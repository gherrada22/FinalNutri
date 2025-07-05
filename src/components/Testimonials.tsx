import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const testimonials = [
    {
      id: 1,
      name: "María González",
      role: "Ejecutiva de Marketing",
      image: "https://images.unsplash.com/photo-1494790108755-2616b68ca1f7?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Nutriblitz ha transformado completamente mis mañanas. Como ejecutiva, necesito energía constante y este shake me la proporciona sin el crash del café. El sabor es increíble y me mantiene saciada hasta el almuerzo.",
      date: "Hace 2 semanas"
    },
    {
      id: 2,
      name: "Carlos Mendoza",
      role: "Entrenador Personal",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Recomiendo Nutriblitz a todos mis clientes. La combinación de maca y cacao proporciona una energía natural perfecta para los entrenamientos. Mis clientes han notado mejor rendimiento y recuperación.",
      date: "Hace 1 semana"
    },
    {
      id: 3,
      name: "Ana Patricia Silva",
      role: "Nutricionista",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Como nutricionista, analicé cada ingrediente de Nutriblitz. La calidad es excepcional, sin conservantes ni aditivos. Es el complemento perfecto para una alimentación balanceada. Lo uso personalmente y lo recomiendo profesionalmente.",
      date: "Hace 4 días"
    },
    {
      id: 4,
      name: "Roberto Vásquez",
      role: "Estudiante de Medicina",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Entre clases y estudios, Nutriblitz es mi salvación. Preparación súper rápida y me da la energía mental que necesito para largas jornadas de estudio. El precio es muy accesible para estudiantes.",
      date: "Hace 5 días"
    },
    {
      id: 5,
      name: "Lucía Fernández",
      role: "Madre de Familia",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Con tres niños, no tengo tiempo para desayunos elaborados. Nutriblitz me da la nutrición que necesito en segundos. Mis hijos también lo aman cuando lo preparo como smoothie bowl con frutas.",
      date: "Hace 1 semana"
    },
    {
      id: 6,
      name: "David Romero",
      role: "Ingeniero de Software",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Trabajo remotamente y necesitaba algo nutritivo que no me quite tiempo. Nutriblitz es perfecto: mezclo, tomo y sigo programando con energía sostenida. La claridad mental que siento es notable.",
      date: "Hace 3 días"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(testimonials.length / 2));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(testimonials.length / 2)) % Math.ceil(testimonials.length / 2));
  };

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  const visibleTestimonials = testimonials.slice(currentSlide * 2, currentSlide * 2 + 2);

  return (
    <section id="testimonios" className="py-20 bg-gradient-to-b from-primary/5 to-accent/20">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20" variant="outline">
            <Quote className="mr-2" size={16} />
            Testimonios Reales
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Lo Que Dicen Nuestros Clientes
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Más de 500 personas han transformado su rutina diaria con Nutriblitz. 
            Descubre por qué confían en nosotros para su nutrición diaria.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 min-h-[400px]">
            {visibleTestimonials.map((testimonial, index) => (
              <Card 
                key={testimonial.id}
                className="relative overflow-hidden shadow-medium hover:shadow-strong transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-8">
                  {/* Quote Icon */}
                  <div className="absolute top-6 right-6 text-primary/10">
                    <Quote size={48} />
                  </div>
                  
                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400 mr-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={16} fill="currentColor" />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">{testimonial.date}</span>
                  </div>

                  {/* Testimonial Text */}
                  <blockquote className="text-muted-foreground leading-relaxed mb-6 relative z-10">
                    "{testimonial.text}"
                  </blockquote>

                  {/* User Info */}
                  <div className="flex items-center">
                    <img 
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4 shadow-soft"
                    />
                    <div>
                      <div className="font-bold text-foreground">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="rounded-full"
            >
              <ChevronLeft size={20} />
            </Button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {Array.from({ length: Math.ceil(testimonials.length / 2) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === currentSlide ? 'bg-primary' : 'bg-muted'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="rounded-full"
            >
              <ChevronRight size={20} />
            </Button>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 lg:p-12 shadow-soft">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              ¿Quieres Ser el Próximo en Testimoniar?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Únete a nuestra comunidad de más de 500 personas que han transformado su estilo de vida 
              con Nutriblitz. Tu experiencia podría inspirar a otros.
            </p>
            <Button variant="hero" size="lg">
              Comprar Nutriblitz Ahora
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;