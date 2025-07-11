import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Clock, Users, ChefHat } from 'lucide-react';

const Recipes = () => {
  const recipes = [
    {
      id: 1,
      title: "Smoothie Bowl Energético",
      image: "/public/principal.png",
      time: "3 min",
      servings: "1 persona",
      difficulty: "Fácil",
      description: "Bowl cremoso con frambuesas, plátano y semillas de chía para un desayuno perfecto",
      ingredients: [
        "2 cucharadas de Nutriblitz",
        "1/2 taza de leche de almendra",
        "1/2 plátano congelado",
        "Frambuesas frescas",
        "Semillas de chía"
      ],
      instructions: [
        "Mezcla Nutriblitz con leche de almendra",
        "Agrega el plátano congelado y licúa",
        "Sirve en un bowl y decora con frambuesas",
        "Espolvorea semillas de chía por encima"
      ]
    },
    {
      id: 2,
      title: "Shake Tropical Proteico",
      image: "/public/receta1.png",
      time: "2 min",
      servings: "1 persona",
      difficulty: "Muy Fácil",
      description: "Refrescante shake con piña y semillas de chía, perfecto post-entrenamiento",
      ingredients: [
        "2 cucharadas de Nutriblitz",
        "1 taza de agua de coco",
        "1/2 taza de piña fresca",
        "1 cucharada de semillas de chía",
        "Hielo al gusto"
      ],
      instructions: [
        "Combina todos los ingredientes en la licuadora",
        "Licúa por 30 segundos hasta obtener consistencia cremosa",
        "Sirve inmediatamente en vaso alto",
        "Decora con una rodaja de piña"
      ]
    },
    {
      id: 3,
      title: "Bowl de Chocolate y Fresas",
      image: "/public/receta2.png",
      time: "5 min",
      servings: "1 persona",
      difficulty: "Fácil",
      description: "Indulgente pero saludable, con fresas frescas y un toque de miel natural",
      ingredients: [
        "2 cucharadas de Nutriblitz",
        "3/4 taza de leche de coco",
        "Fresas frescas cortadas",
        "1 cucharada de miel",
        "Chocolate negro rallado"
      ],
      instructions: [
        "Mezcla Nutriblitz con leche de coco hasta obtener consistencia cremosa",
        "Vierte en un bowl amplio",
        "Decora con fresas frescas en círculo",
        "Añade gotas de miel y chocolate rallado"
      ]
    }
  ];

  return (
    <section id="recetas" className="py-20 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <Badge className="mb-4 bg-secondary/10 text-secondary border-secondary/20" variant="outline">
            <ChefHat className="mr-2" size={16} />
            Recetas Deliciosas
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
          Transform from your Superfood Nutritional Shaker
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Discover creative and delicious ways to enjoy your nutritional shake. From energetic and tropical smoothies
          </p>
        </div>

        {/* Recipes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipes.map((recipe, index) => (
            <Card 
              key={recipe.id}
              className="overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 transform hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Recipe Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-64 object-cover transform hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-white/90 text-foreground">
                    {recipe.difficulty}
                  </Badge>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground mb-2">
                  {recipe.title}
                </CardTitle>
                
                {/* Recipe Meta */}
                <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                  <div className="flex items-center">
                    <Clock size={16} className="mr-1" />
                    {recipe.time}
                  </div>
                  <div className="flex items-center">
                    <Users size={16} className="mr-1" />
                    {recipe.servings}
                  </div>
                </div>
                
                <p className="text-muted-foreground text-sm">
                  {recipe.description}
                </p>
              </CardHeader>

              <CardContent>
                {/* Ingredients */}
                <div className="mb-4">
                  <h4 className="font-semibold text-foreground mb-2">Ingredientes:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {recipe.ingredients.map((ingredient, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        {ingredient}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Instructions Preview */}
                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-2">Preparación:</h4>
                  <ol className="text-sm text-muted-foreground space-y-1">
                    {recipe.instructions.slice(0, 2).map((step, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-primary mr-2 font-medium">{idx + 1}.</span>
                        {step}
                      </li>
                    ))}
                    {recipe.instructions.length > 2 && (
                      <li className="text-primary text-xs">+ {recipe.instructions.length - 2} pasos más...</li>
                    )}
                  </ol>
                </div>

                <Button variant="outline-primary" className="w-full">
                  Ver Receta Completa
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-primary/5 rounded-2xl p-8 lg:p-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              ¿Tienes tu propia receta?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Comparte tus creaciones con la comunidad Nutriblitz y ayuda a otros a descubrir 
              nuevas formas deliciosas de disfrutar nuestro superfood shake.
            </p>
            <Button variant="hero" size="lg">
              Compartir Mi Receta
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recipes;