

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6 w-full">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">À propos de nous</h1>
        <p className="text-gray-600 mb-4">
          Bienvenue sur notre site ! Nous sommes une équipe passionnée dédiée à offrir les meilleures expériences à nos utilisateurs.
          Notre mission est de créer des produits et services qui améliorent la vie de chacun de manière innovante et accessible.
        </p>
        <p className="text-gray-600 mb-4">
          Depuis notre création, nous nous engageons à maintenir des standards élevés de qualité et d'intégrité dans tout ce que nous faisons.
          Nous croyons en l'importance de la collaboration, de l'innovation et du respect de nos utilisateurs et partenaires.
        </p>
        <p className="text-gray-600">
          Merci de faire partie de notre aventure. Nous espérons continuer à vous servir avec excellence et passion.
        </p>
        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Notre Équipe</h2>
          <ul className="text-gray-600 list-disc list-inside">
            <li>Jean Dupont - CEO</li>
            <li>Marie Curie - CTO</li>
            <li>Paul Durand - Responsable Marketing</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
