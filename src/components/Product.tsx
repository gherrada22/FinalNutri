import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { CheckCircle, Star, ShoppingCart, Zap, Leaf } from 'lucide-react';

const Product = () => {
  const benefits = [
    "Energía natural sostenida todo el día",
    "Claridad mental y enfoque mejorado",
    "Sensación de saciedad duradera",
    "Vitaminas B12, D, hierro y magnesio",
    "Sin aditivos artificiales ni conservantes",
    "Listo en menos de 30 segundos"
  ];

  const ingredients = [
    { name: "Cacao Premium", benefit: "Antioxidantes y energía natural" },
    { name: "Maca Andina", benefit: "Energía y resistencia" },
    { name: "Avena Integral", benefit: "Fibra y saciedad" },
    { name: "Plátano Deshidratado", benefit: "Potasio y dulzor natural" }
  ];

  return (
    <section id="producto" className="py-20 bg-gradient-to-b from-accent/20 to-background">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20" variant="outline">
            Nuestro Producto Estrella
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Superfood Nutritional Shake
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            La mezcla perfecta de superalimentos que tu cuerpo necesita para conquistar cada día con energía natural
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          
          {/* Product Image */}
          <div className="animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/10 rounded-3xl transform rotate-3 scale-105"></div>
              <img 
                src="/public/productonuevo.png"
                alt="Nutriblitz Superfood Shake"
                className="relative z-10 w-full h-auto rounded-2xl shadow-strong"
              />
              <div className="absolute -top-4 -right-4 bg-secondary text-secondary-foreground px-4 py-2 rounded-full font-bold text-lg shadow-medium">
                S/ 25
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="animate-slide-up">
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400 mr-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" />
                ))}
              </div>
              <span className="text-muted-foreground">(4.9/5 - 127 reseñas)</span>
            </div>

            <h3 className="text-3xl font-bold text-foreground mb-6">
              Shake Nutricional Premium
            </h3>

            <p className="text-muted-foreground mb-8 leading-relaxed">
              Nuestro shake combina los mejores superalimentos andinos en una mezcla perfectamente balanceada. 
              Con <strong>cacao, maca, avena y plátano deshidratado</strong>, cada porción te proporciona 
              vitaminas B12, D y minerales esenciales como hierro y magnesio.
            </p>

            {/* Benefits List */}
            <div className="mb-8">
              <h4 className="font-bold text-foreground mb-4">Beneficios Principales:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="text-primary mr-2 flex-shrink-0" size={16} />
                    <span className="text-muted-foreground text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="cta" size="xl" className="flex-1">
                <ShoppingCart className="mr-2" size={20} />
                Comprar Ahora - S/ 25
              </Button>
              <Button variant="outline-primary" size="xl">
                <Zap className="mr-2" size={20} />
                Más Información
              </Button>
            </div>

            <p className="text-sm text-muted-foreground mt-4">
              ✅ Envío gratis en Lima | ✅ Garantía de satisfacción | ✅ Pago seguro
            </p>
          </div>
        </div>

        {/* Ingredients Section */}
        <div className="bg-primary/5 rounded-2xl p-8 lg:p-12">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">
            Ingredientes Premium
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ingredients.map((ingredient, index) => (
              <div 
                key={index}
                className="text-center p-6 bg-white rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="text-primary" size={24} />
                </div>
                <h4 className="font-bold text-foreground mb-2">
                  {ingredient.name}
                </h4>
                <p className="text-muted-foreground text-sm">
                  {ingredient.benefit}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">
              <strong>Modo de uso:</strong> Mezcla 1-2 cucharadas con agua, leche o tu alternativa favorita. 
              También puedes combinarlo con fruta congelada, yogurt o frutos secos para crear comidas cremosas y personalizables.
            </p>
            <Badge className="bg-primary text-primary-foreground">
              250g | Peso neto | 2.05 oz
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;