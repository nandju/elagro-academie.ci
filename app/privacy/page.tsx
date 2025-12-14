export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl font-bold text-[#001A3B] mb-8">Politique de confidentialité</h1>
        
        <div className="prose max-w-none">
          <p className="text-gray-600 mb-6">
            Dernière mise à jour : 14 décembre 2024
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#001A3B] mb-4">1. Introduction</h2>
            <p className="text-gray-700 mb-4">
              Chez Elagro Academy, nous prenons la protection de vos données personnelles très au sérieux. Cette politique explique comment nous collectons, utilisons et protégeons vos informations.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#001A3B] mb-4">2. Données que nous collectons</h2>
            <p className="text-gray-700 mb-2">Nous pouvons collecter :</p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>Informations d'identification (nom, email, téléphone)</li>
              <li>Informations de paiement (traitement sécurisé par nos partenaires de paiement)</li>
              <li>Données d'utilisation (pages visitées, temps passé, etc.)</li>
              <li>Données techniques (adresse IP, type de navigateur, appareil)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#001A3B] mb-4">3. Comment nous utilisons vos données</h2>
            <p className="text-gray-700 mb-2">Vos données nous permettent de :</p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>Fournir et améliorer nos services</li>
              <li>Personnaliser votre expérience</li>
              <li>Traiter les paiements</li>
              <li>Vous envoyer des mises à jour importantes</li>
              <li>Répondre à vos demandes</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#001A3B] mb-4">4. Partage de vos données</h2>
            <p className="text-gray-700 mb-4">
              Nous ne vendons pas vos données personnelles. Nous pouvons les partager avec :
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>Prestataires de services (hébergement, paiement, etc.)</li>
              <li>Autorités légales si requis par la loi</li>
              <li>En cas de fusion ou acquisition</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#001A3B] mb-4">5. Sécurité des données</h2>
            <p className="text-gray-700 mb-4">
              Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles pour protéger vos données contre tout accès non autorisé ou toute utilisation abusive.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#001A3B] mb-4">6. Vos droits</h2>
            <p className="text-gray-700 mb-2">Vous avez le droit de :</p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>Accéder à vos données</li>
              <li>Les corriger ou les mettre à jour</li>
              <li>Les supprimer</li>
              <li>Vous opposer à leur traitement</li>
              <li>Demander la portabilité de vos données</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#001A3B] mb-4">7. Nous contacter</h2>
            <p className="text-gray-700">
              Pour toute question concernant cette politique ou l'exercice de vos droits, veuillez nous contacter à l'adresse :
            </p>
            <p className="text-gray-700 mt-2">
              Email : dpo@elagro-academy.ci<br />
              Adresse : Rue des Entrepreneurs, Abidjan, Côte d'Ivoire
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
