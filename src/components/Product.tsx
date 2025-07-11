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
    { name: "Cacao", benefit: "Antioxidantes and Natural Energy" },
    { name: "Maca", benefit: "Energy and Stamina" },
    { name: "Oats", benefit: "Fiber and Satiely" },
    { name: "Banana", benefit: "Potassium and Natural Sweetness" }
  ];

  return (
    <section id="producto" className="py-20 bg-gradient-to-b from-accent/20 to-background">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20" variant="outline">
          Our Star Product
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Superfood Nutritional Shake
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          The perfect blend of superfoods your body needs to conquer every day with natural energy
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
              <span className="text-muted-foreground">(4.9/5 - 127 reviews)</span>
            </div>

            <h3 className="text-3xl font-bold text-foreground mb-6">
            Shake Nutricional Premium x 250gr
            </h3>

            <p className="text-muted-foreground mb-8 leading-relaxed">
            Referential Price: USD 13.00 /Unit(s)
Minimum Quantity: 4,220 Unit(s)
Port: MARITIMO / PE - CALLAO
Terms of Payment: Bank transfer
            </p>

            {/* Benefits List */}
           {/* 
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
            */}
  <p className="text-muted-foreground mb-8 leading-relaxed">
  It is a blend of cocoa, oats, banana and maca powder with vitamin B1, B2, B6 and B12, minerals such as iron and magnesium, it is an ideal combination for your daily well-being. Free of preservatives and artificial colors.
            </p>
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="outline-primary" size="xl">
                <Zap className="mr-2" size={20} />
                Contact
              </Button>
            </div>
          </div>
        </div>

        {/* Ingredients Section */}
        <div className="bg-primary/5 rounded-2xl p-8 lg:p-12">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">
          Premium ingredients
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
              <strong>Directions:</strong> Mix 1-2 scoops with water, milk or your favorite alternative. You can also combine it with frozen fruit, yogurt, or nuts to create creamy, customizable meals.
            </p>
            <Badge className="bg-primary text-primary-foreground">
              250g | Net weight | 2.05 oz
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;