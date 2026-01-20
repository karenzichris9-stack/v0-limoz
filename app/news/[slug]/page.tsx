"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Calendar, User, ArrowLeft, Share2 } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"
import { useLanguage } from "@/lib/language-context"
import { use } from "react"

const newsArticles = [
  {
    id: 1,
    slug: "limoz-rwanda-expands-fleet-2024",
    title: "Limoz Rwanda Expands Fleet with New Luxury Vehicles",
    titleFr: "Limoz Rwanda élargit sa flotte avec de nouveaux véhicules de luxe",
    excerpt:
      "We're excited to announce the addition of five new Mercedes-Benz E-Class vehicles to our premium fleet, offering enhanced comfort and style for our valued clients.",
    excerptFr:
      "Nous sommes ravis d'annoncer l'ajout de cinq nouveaux véhicules Mercedes-Benz Classe E à notre flotte premium, offrant un confort et un style améliorés à nos précieux clients.",
    date: "March 15, 2024",
    dateFr: "15 mars 2024",
    author: "Limoz Rwanda Team",
    authorFr: "Équipe Limoz Rwanda",
    image: "https://limozrwanda.com/wp-content/uploads/2016/06/Eclass.png",
    category: "Fleet Update",
    categoryFr: "Mise à jour de la flotte",
    content: `
      <p>Limoz Rwanda is thrilled to announce a significant expansion of our luxury vehicle fleet with the addition of five brand-new Mercedes-Benz E-Class sedans. This strategic investment reinforces our commitment to providing the highest quality transportation services to our valued clients across Rwanda.</p>
      
      <h2>Unmatched Luxury and Comfort</h2>
      <p>The Mercedes-Benz E-Class represents the pinnacle of executive sedan design, combining elegant styling with cutting-edge technology. Each vehicle features premium leather interiors, advanced climate control systems, and state-of-the-art entertainment systems to ensure every journey is comfortable and enjoyable.</p>
      
      <h2>Advanced Safety Features</h2>
      <p>Safety is our top priority. These new vehicles come equipped with the latest Mercedes-Benz safety technologies, including adaptive cruise control, blind-spot monitoring, lane-keeping assist, and advanced collision prevention systems. Our clients can travel with complete peace of mind.</p>
      
      <h2>Perfect for Business and Leisure</h2>
      <p>Whether you're traveling for business meetings, airport transfers, or special occasions, our new E-Class fleet provides the perfect blend of sophistication and reliability. The spacious interiors and smooth ride quality make them ideal for both short city trips and longer journeys across Rwanda.</p>
      
      <h2>Book Your Experience Today</h2>
      <p>These premium vehicles are now available for booking through our website or by contacting our 24/7 customer service team. Experience the difference that true luxury transportation can make on your next journey with Limoz Rwanda.</p>
    `,
    contentFr: `
      <p>Limoz Rwanda est ravi d'annoncer une expansion significative de notre flotte de véhicules de luxe avec l'ajout de cinq berlines Mercedes-Benz Classe E flambant neuves. Cet investissement stratégique renforce notre engagement à fournir des services de transport de la plus haute qualité à nos précieux clients à travers le Rwanda.</p>
      
      <h2>Luxe et confort inégalés</h2>
      <p>La Mercedes-Benz Classe E représente le summum du design de berline exécutive, combinant un style élégant avec une technologie de pointe. Chaque véhicule dispose d'intérieurs en cuir premium, de systèmes de climatisation avancés et de systèmes de divertissement à la pointe de la technologie pour garantir que chaque voyage soit confortable et agréable.</p>
      
      <h2>Caractéristiques de sécurité avancées</h2>
      <p>La sécurité est notre priorité absolue. Ces nouveaux véhicules sont équipés des dernières technologies de sécurité Mercedes-Benz, notamment le régulateur de vitesse adaptatif, la surveillance des angles morts, l'assistance au maintien de voie et les systèmes avancés de prévention des collisions. Nos clients peuvent voyager en toute tranquillité d'esprit.</p>
      
      <h2>Parfait pour les affaires et les loisirs</h2>
      <p>Que vous voyagiez pour des réunions d'affaires, des transferts aéroport ou des occasions spéciales, notre nouvelle flotte Classe E offre le mélange parfait de sophistication et de fiabilité. Les intérieurs spacieux et la qualité de conduite douce les rendent idéaux pour les courts trajets en ville comme pour les longs voyages à travers le Rwanda.</p>
      
      <h2>Réservez votre expérience aujourd'hui</h2>
      <p>Ces véhicules premium sont maintenant disponibles à la réservation via notre site web ou en contactant notre équipe de service client disponible 24h/24 et 7j/7. Découvrez la différence qu'un vrai transport de luxe peut faire lors de votre prochain voyage avec Limoz Rwanda.</p>
    `,
  },
  {
    id: 2,
    slug: "supporting-rwanda-tourism-growth",
    title: "Supporting Rwanda's Tourism Growth",
    titleFr: "Soutenir la croissance du tourisme au Rwanda",
    excerpt:
      "Limoz Rwanda proudly served over 500 safari tours this year, contributing to Rwanda's thriving tourism industry and showcasing the beauty of our national parks.",
    excerptFr:
      "Limoz Rwanda a fièrement servi plus de 500 circuits safari cette année, contribuant à l'industrie touristique florissante du Rwanda et mettant en valeur la beauté de nos parcs nationaux.",
    date: "March 10, 2024",
    dateFr: "10 mars 2024",
    author: "Limoz Rwanda Team",
    authorFr: "Équipe Limoz Rwanda",
    image: "/safari-land-cruiser-with-pop-up-roof.jpg",
    category: "Company News",
    categoryFr: "Actualités de l'entreprise",
    content: `
      <p>This year marks a significant milestone for Limoz Rwanda as we proudly celebrate serving over 500 safari tours, playing a vital role in Rwanda's flourishing tourism sector. Our commitment to excellence has helped countless visitors discover the breathtaking beauty of Rwanda's national parks and wildlife reserves.</p>
      
      <h2>Showcasing Rwanda's Natural Beauty</h2>
      <p>From the misty mountains of Volcanoes National Park to the diverse ecosystems of Akagera National Park, our safari tours have introduced travelers from around the world to Rwanda's incredible biodiversity. Our experienced guides and premium safari vehicles ensure every expedition is safe, comfortable, and unforgettable.</p>
      
      <h2>Contributing to Local Communities</h2>
      <p>Tourism is a cornerstone of Rwanda's economy, and we're proud to contribute to sustainable development in local communities. Through our operations, we support local employment, promote conservation efforts, and help preserve Rwanda's natural heritage for future generations.</p>
      
      <h2>Award-Winning Service</h2>
      <p>Our dedication to providing exceptional safari experiences has earned us recognition from both international travelers and local tourism authorities. We maintain the highest standards in vehicle maintenance, guide training, and customer service to ensure every safari exceeds expectations.</p>
      
      <h2>Looking Ahead</h2>
      <p>As Rwanda continues to grow as a premier safari destination, Limoz Rwanda remains committed to expanding our services and enhancing the visitor experience. We're investing in new vehicles, training programs, and partnerships to make Rwanda's wildlife accessible to even more travelers in the years to come.</p>
    `,
    contentFr: `
      <p>Cette année marque une étape importante pour Limoz Rwanda alors que nous célébrons fièrement avoir servi plus de 500 circuits safari, jouant un rôle vital dans le secteur touristique florissant du Rwanda. Notre engagement envers l'excellence a aidé d'innombrables visiteurs à découvrir la beauté époustouflante des parcs nationaux et des réserves fauniques du Rwanda.</p>
      
      <h2>Mettre en valeur la beauté naturelle du Rwanda</h2>
      <p>Des montagnes brumeuses du Parc National des Volcans aux écosystèmes diversifiés du Parc National de l'Akagera, nos circuits safari ont fait découvrir aux voyageurs du monde entier l'incroyable biodiversité du Rwanda. Nos guides expérimentés et nos véhicules de safari premium garantissent que chaque expédition soit sûre, confortable et inoubliable.</p>
      
      <h2>Contribuer aux communautés locales</h2>
      <p>Le tourisme est une pierre angulaire de l'économie rwandaise, et nous sommes fiers de contribuer au développement durable des communautés locales. À travers nos opérations, nous soutenons l'emploi local, promouvons les efforts de conservation et aidons à préserver le patrimoine naturel du Rwanda pour les générations futures.</p>
      
      <h2>Service primé</h2>
      <p>Notre dévouement à fournir des expériences de safari exceptionnelles nous a valu la reconnaissance des voyageurs internationaux et des autorités touristiques locales. Nous maintenons les normes les plus élevées en matière d'entretien des véhicules, de formation des guides et de service client pour garantir que chaque safari dépasse les attentes.</p>
      
      <h2>Perspectives d'avenir</h2>
      <p>Alors que le Rwanda continue de croître en tant que destination safari de premier plan, Limoz Rwanda reste engagé à étendre nos services et à améliorer l'expérience des visiteurs. Nous investissons dans de nouveaux véhicules, des programmes de formation et des partenariats pour rendre la faune du Rwanda accessible à encore plus de voyageurs dans les années à venir.</p>
    `,
  },
  {
    id: 3,
    slug: "corporate-partnership-leading-hotels",
    title: "Corporate Partnership with Leading Hotels",
    titleFr: "Partenariat d'entreprise avec les hôtels de premier plan",
    excerpt:
      "We've established exclusive partnerships with Kigali's top hotels to provide seamless airport transfers and executive transportation services for international guests.",
    excerptFr:
      "Nous avons établi des partenariats exclusifs avec les meilleurs hôtels de Kigali pour fournir des transferts aéroport fluides et des services de transport exécutif pour les clients internationaux.",
    date: "February 28, 2024",
    dateFr: "28 février 2024",
    author: "Limoz Rwanda Team",
    authorFr: "Équipe Limoz Rwanda",
    image: "https://limozrwanda.com/wp-content/uploads/2016/06/landcruiser.png",
    category: "Partnership",
    categoryFr: "Partenariat",
    content: `
      <p>Limoz Rwanda is delighted to announce strategic partnerships with several of Kigali's most prestigious hotels, including the Kigali Marriott Hotel, Radisson Blu Hotel & Convention Centre, and The Retreat. These collaborations will provide seamless, luxury transportation services for international guests and business travelers.</p>
      
      <h2>Elevating the Guest Experience</h2>
      <p>Our partnership program is designed to enhance the overall guest experience from the moment travelers arrive at Kigali International Airport. With dedicated meet-and-greet services, priority booking, and premium vehicles, hotel guests can enjoy stress-free transfers and executive transportation throughout their stay.</p>
      
      <h2>Exclusive Benefits for Hotel Guests</h2>
      <p>Guests staying at our partner hotels will enjoy exclusive benefits including priority booking, special rates, and access to our premium VVIP fleet. Our 24/7 concierge service ensures that transportation is always available, whether for business meetings, tourist excursions, or airport transfers.</p>
      
      <h2>Supporting Business Tourism</h2>
      <p>Rwanda has become an increasingly popular destination for international conferences, business meetings, and corporate events. Our partnership with leading hotels positions us to better serve the growing business tourism sector with reliable, professional transportation services that meet international standards.</p>
      
      <h2>Commitment to Excellence</h2>
      <p>These partnerships reflect our ongoing commitment to providing world-class transportation services. We've invested in staff training, vehicle upgrades, and technology systems to ensure we meet the high standards expected by international travelers and our hotel partners.</p>
    `,
    contentFr: `
      <p>Limoz Rwanda est ravi d'annoncer des partenariats stratégiques avec plusieurs des hôtels les plus prestigieux de Kigali, notamment le Kigali Marriott Hotel, le Radisson Blu Hotel & Convention Centre et The Retreat. Ces collaborations fourniront des services de transport de luxe fluides aux clients internationaux et aux voyageurs d'affaires.</p>
      
      <h2>Améliorer l'expérience client</h2>
      <p>Notre programme de partenariat est conçu pour améliorer l'expérience globale des clients dès leur arrivée à l'aéroport international de Kigali. Avec des services d'accueil dédiés, des réservations prioritaires et des véhicules premium, les clients de l'hôtel peuvent profiter de transferts sans stress et d'un transport exécutif tout au long de leur séjour.</p>
      
      <h2>Avantages exclusifs pour les clients de l'hôtel</h2>
      <p>Les clients séjournant dans nos hôtels partenaires bénéficieront d'avantages exclusifs, notamment des réservations prioritaires, des tarifs spéciaux et l'accès à notre flotte VVIP premium. Notre service de conciergerie 24h/24 et 7j/7 garantit que le transport est toujours disponible, que ce soit pour des réunions d'affaires, des excursions touristiques ou des transferts aéroport.</p>
      
      <h2>Soutenir le tourisme d'affaires</h2>
      <p>Le Rwanda est devenu une destination de plus en plus populaire pour les conférences internationales, les réunions d'affaires et les événements d'entreprise. Notre partenariat avec les hôtels de premier plan nous positionne pour mieux servir le secteur croissant du tourisme d'affaires avec des services de transport fiables et professionnels qui répondent aux normes internationales.</p>
      
      <h2>Engagement envers l'excellence</h2>
      <p>Ces partenariats reflètent notre engagement continu à fournir des services de transport de classe mondiale. Nous avons investi dans la formation du personnel, la mise à niveau des véhicules et les systèmes technologiques pour garantir que nous répondons aux normes élevées attendues par les voyageurs internationaux et nos partenaires hôteliers.</p>
    `,
  },
  {
    id: 4,
    slug: "24-7-service-excellence-award",
    title: "24/7 Service Excellence Award",
    titleFr: "Prix d'excellence du service 24h/24 et 7j/7",
    excerpt:
      "Limoz Rwanda has been recognized for outstanding customer service, maintaining a 98% satisfaction rate and providing reliable transportation around the clock.",
    excerptFr:
      "Limoz Rwanda a été reconnu pour son service client exceptionnel, maintenant un taux de satisfaction de 98% et fournissant un transport fiable 24 heures sur 24.",
    date: "February 20, 2024",
    dateFr: "20 février 2024",
    author: "Limoz Rwanda Team",
    authorFr: "Équipe Limoz Rwanda",
    image: "https://limozrwanda.com/wp-content/uploads/2016/06/prado.png",
    category: "Awards",
    categoryFr: "Récompenses",
    content: `
      <p>We are honored to announce that Limoz Rwanda has received the prestigious Service Excellence Award from the Rwanda Tourism Board, recognizing our commitment to providing exceptional 24/7 transportation services. This award celebrates our achievement of maintaining a 98% customer satisfaction rate throughout the year.</p>
      
      <h2>Around-the-Clock Reliability</h2>
      <p>Our 24/7 service model ensures that quality transportation is always available, regardless of the time or day. Whether it's an early morning airport transfer, a late-night business meeting, or an emergency trip, our team is ready to serve with the same level of professionalism and care.</p>
      
      <h2>Customer-Centric Approach</h2>
      <p>The 98% satisfaction rate reflects our unwavering focus on customer needs. We continuously gather feedback, implement improvements, and train our staff to exceed expectations. Every interaction is an opportunity to demonstrate our commitment to excellence.</p>
      
      <h2>Professional Team</h2>
      <p>This recognition is a testament to our dedicated team of drivers, customer service representatives, and support staff who work tirelessly to ensure every journey is smooth and pleasant. Their professionalism, local knowledge, and commitment to safety are the foundation of our success.</p>
      
      <h2>Continuous Improvement</h2>
      <p>While we're proud of this achievement, we view it as motivation to continue improving. We're investing in advanced booking systems, expanding our fleet, and enhancing our training programs to maintain and exceed these high standards in the years ahead.</p>
    `,
    contentFr: `
      <p>Nous sommes honorés d'annoncer que Limoz Rwanda a reçu le prestigieux Prix d'Excellence du Service de la part du Rwanda Tourism Board, reconnaissant notre engagement à fournir des services de transport exceptionnels 24h/24 et 7j/7. Ce prix célèbre notre réussite à maintenir un taux de satisfaction client de 98% tout au long de l'année.</p>
      
      <h2>Fiabilité 24 heures sur 24</h2>
      <p>Notre modèle de service 24h/24 et 7j/7 garantit qu'un transport de qualité est toujours disponible, quelle que soit l'heure ou le jour. Qu'il s'agisse d'un transfert aéroport tôt le matin, d'une réunion d'affaires tard le soir ou d'un voyage d'urgence, notre équipe est prête à servir avec le même niveau de professionnalisme et d'attention.</p>
      
      <h2>Approche centrée sur le client</h2>
      <p>Le taux de satisfaction de 98% reflète notre concentration inébranlable sur les besoins des clients. Nous recueillons continuellement des commentaires, mettons en œuvre des améliorations et formons notre personnel pour dépasser les attentes. Chaque interaction est une opportunité de démontrer notre engagement envers l'excellence.</p>
      
      <h2>Équipe professionnelle</h2>
      <p>Cette reconnaissance témoigne de notre équipe dévouée de chauffeurs, de représentants du service client et de personnel de soutien qui travaillent sans relâche pour garantir que chaque voyage soit fluide et agréable. Leur professionnalisme, leur connaissance locale et leur engagement envers la sécurité sont le fondement de notre succès.</p>
      
      <h2>Amélioration continue</h2>
      <p>Bien que nous soyons fiers de cette réussite, nous la considérons comme une motivation pour continuer à nous améliorer. Nous investissons dans des systèmes de réservation avancés, élargissons notre flotte et améliorons nos programmes de formation pour maintenir et dépasser ces normes élevées dans les années à venir.</p>
    `,
  },
  {
    id: 5,
    slug: "new-safari-experience-packages",
    title: "New Safari Experience Packages",
    titleFr: "Nouveaux forfaits d'expérience safari",
    excerpt:
      "Discover Rwanda's wildlife with our new all-inclusive safari packages, featuring expert guides, premium vehicles, and unforgettable experiences in Akagera National Park.",
    excerptFr:
      "Découvrez la faune du Rwanda avec nos nouveaux forfaits safari tout compris, comprenant des guides experts, des véhicules premium et des expériences inoubliables dans le Parc National de l'Akagera.",
    date: "February 15, 2024",
    dateFr: "15 février 2024",
    author: "Limoz Rwanda Team",
    authorFr: "Équipe Limoz Rwanda",
    image: "/safari-4x4-vehicle-with-open-roof.jpg",
    category: "Services",
    categoryFr: "Services",
    content: `
      <p>Limoz Rwanda is excited to launch our new all-inclusive safari experience packages, designed to showcase the incredible wildlife and natural beauty of Rwanda's premier national parks. These comprehensive packages combine luxury transportation, expert guides, and carefully curated experiences for an unforgettable adventure.</p>
      
      <h2>Akagera National Park Adventures</h2>
      <p>Our flagship package focuses on Akagera National Park, home to the Big Five and one of Africa's most successful conservation stories. Guests will enjoy game drives in our specially equipped safari vehicles with pop-up roofs for optimal wildlife viewing and photography opportunities.</p>
      
      <h2>Expert Local Guides</h2>
      <p>Each safari is led by experienced local guides who possess intimate knowledge of Rwanda's ecosystems, animal behavior, and conservation efforts. Their expertise ensures guests don't just see wildlife—they understand and appreciate the complex relationships that make these ecosystems thrive.</p>
      
      <h2>Flexible Package Options</h2>
      <p>We offer packages ranging from half-day excursions to multi-day adventures, including options for sunrise game drives, boat safaris on Lake Ihema, and bird-watching expeditions. Each package can be customized to match your interests, schedule, and budget.</p>
      
      <h2>Luxury and Comfort</h2>
      <p>Our safari vehicles are equipped with comfortable seating, charging ports, coolers with refreshments, and first-aid kits. We partner with premium lodges and camps to provide accommodation options that complement the safari experience with comfort and authentic African hospitality.</p>
      
      <h2>Book Your Adventure</h2>
      <p>These new packages are available for booking now. Contact our safari specialists to design your perfect Rwanda wildlife adventure and create memories that will last a lifetime.</p>
    `,
    contentFr: `
      <p>Limoz Rwanda est ravi de lancer nos nouveaux forfaits d'expérience safari tout compris, conçus pour mettre en valeur l'incroyable faune et la beauté naturelle des parcs nationaux de premier plan du Rwanda. Ces forfaits complets combinent un transport de luxe, des guides experts et des expériences soigneusement sélectionnées pour une aventure inoubliable.</p>
      
      <h2>Aventures au Parc National de l'Akagera</h2>
      <p>Notre forfait phare se concentre sur le Parc National de l'Akagera, qui abrite les Big Five et l'une des histoires de conservation les plus réussies d'Afrique. Les clients profiteront de safaris en voiture dans nos véhicules de safari spécialement équipés avec des toits escamotables pour une observation optimale de la faune et des opportunités photographiques.</p>
      
      <h2>Guides locaux experts</h2>
      <p>Chaque safari est dirigé par des guides locaux expérimentés qui possèdent une connaissance approfondie des écosystèmes du Rwanda, du comportement animal et des efforts de conservation. Leur expertise garantit que les clients ne se contentent pas de voir la faune—ils comprennent et apprécient les relations complexes qui font prospérer ces écosystèmes.</p>
      
      <h2>Options de forfaits flexibles</h2>
      <p>Nous offrons des forfaits allant des excursions d'une demi-journée aux aventures de plusieurs jours, y compris des options pour des safaris au lever du soleil, des safaris en bateau sur le lac Ihema et des expéditions d'observation des oiseaux. Chaque forfait peut être personnalisé pour correspondre à vos intérêts, votre emploi du temps et votre budget.</p>
      
      <h2>Luxe et confort</h2>
      <p>Nos véhicules de safari sont équipés de sièges confortables, de ports de charge, de glacières avec rafraîchissements et de trousses de premiers soins. Nous nous associons à des lodges et camps premium pour offrir des options d'hébergement qui complètent l'expérience safari avec confort et hospitalité africaine authentique.</p>
      
      <h2>Réservez votre aventure</h2>
      <p>Ces nouveaux forfaits sont maintenant disponibles à la réservation. Contactez nos spécialistes safari pour concevoir votre aventure parfaite de la faune rwandaise et créer des souvenirs qui dureront toute une vie.</p>
    `,
  },
  {
    id: 6,
    slug: "community-engagement-initiative",
    title: "Community Engagement Initiative",
    titleFr: "Initiative d'engagement communautaire",
    excerpt:
      "Limoz Rwanda participated in local community development projects, providing transportation support for educational programs and healthcare services in rural areas.",
    excerptFr:
      "Limoz Rwanda a participé à des projets de développement communautaire local, fournissant un soutien au transport pour les programmes éducatifs et les services de santé dans les zones rurales.",
    date: "January 30, 2024",
    dateFr: "30 janvier 2024",
    author: "Limoz Rwanda Team",
    authorFr: "Équipe Limoz Rwanda",
    image: "https://limozrwanda.com/wp-content/uploads/2016/06/coaster.png",
    category: "Community",
    categoryFr: "Communauté",
    content: `
      <p>At Limoz Rwanda, we believe in giving back to the communities that have supported our growth. This month, we're proud to highlight our community engagement initiatives, which provide essential transportation support for educational programs and healthcare services in rural areas across Rwanda.</p>
      
      <h2>Supporting Education</h2>
      <p>We've partnered with local schools to provide transportation for students in remote areas, ensuring they have reliable access to education. Our vehicles also support educational field trips, allowing students to visit museums, cultural sites, and other learning opportunities that would otherwise be inaccessible.</p>
      
      <h2>Healthcare Access</h2>
      <p>In collaboration with healthcare organizations, we provide transportation for mobile medical clinics serving rural communities. This support helps ensure that essential healthcare services reach those who need them most, regardless of their location or economic circumstances.</p>
      
      <h2>Environmental Responsibility</h2>
      <p>Our community engagement extends to environmental conservation. We participate in tree-planting initiatives, support wildlife conservation programs, and educate our staff and clients about sustainable tourism practices that protect Rwanda's natural heritage.</p>
      
      <h2>Local Employment</h2>
      <p>We're committed to creating employment opportunities within local communities. Our hiring practices prioritize local talent, and we invest in comprehensive training programs that develop professional skills and create career advancement opportunities.</p>
      
      <h2>Long-Term Commitment</h2>
      <p>These initiatives represent our long-term commitment to Rwanda's development. As we grow, we'll continue expanding our community engagement programs, working alongside local organizations to create positive, lasting impact in the communities we serve.</p>
    `,
    contentFr: `
      <p>Chez Limoz Rwanda, nous croyons qu'il faut redonner aux communautés qui ont soutenu notre croissance. Ce mois-ci, nous sommes fiers de mettre en lumière nos initiatives d'engagement communautaire, qui fournissent un soutien essentiel au transport pour les programmes éducatifs et les services de santé dans les zones rurales à travers le Rwanda.</p>
      
      <h2>Soutenir l'éducation</h2>
      <p>Nous nous sommes associés à des écoles locales pour fournir le transport aux étudiants des zones reculées, garantissant qu'ils aient un accès fiable à l'éducation. Nos véhicules soutiennent également les sorties éducatives, permettant aux étudiants de visiter des musées, des sites culturels et d'autres opportunités d'apprentissage qui seraient autrement inaccessibles.</p>
      
      <h2>Accès aux soins de santé</h2>
      <p>En collaboration avec des organisations de santé, nous fournissons le transport pour les cliniques médicales mobiles desservant les communautés rurales. Ce soutien aide à garantir que les services de santé essentiels atteignent ceux qui en ont le plus besoin, quelle que soit leur situation géographique ou économique.</p>
      
      <h2>Responsabilité environnementale</h2>
      <p>Notre engagement communautaire s'étend à la conservation de l'environnement. Nous participons à des initiatives de plantation d'arbres, soutenons des programmes de conservation de la faune et éduquons notre personnel et nos clients sur les pratiques de tourisme durable qui protègent le patrimoine naturel du Rwanda.</p>
      
      <h2>Emploi local</h2>
      <p>Nous nous engageons à créer des opportunités d'emploi au sein des communautés locales. Nos pratiques d'embauche privilégient les talents locaux, et nous investissons dans des programmes de formation complets qui développent des compétences professionnelles et créent des opportunités d'avancement de carrière.</p>
      
      <h2>Engagement à long terme</h2>
      <p>Ces initiatives représentent notre engagement à long terme envers le développement du Rwanda. Au fur et à mesure que nous grandissons, nous continuerons à étendre nos programmes d'engagement communautaire, travaillant aux côtés d'organisations locales pour créer un impact positif et durable dans les communautés que nous servons.</p>
    `,
  },
]

export default function NewsArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const article = newsArticles.find((a) => a.slug === slug)
  const { t, language } = useLanguage()

  if (!article) {
    notFound()
  }

  const title = language === "fr" ? article.titleFr : article.title
  const category = language === "fr" ? article.categoryFr : article.category
  const date = language === "fr" ? article.dateFr : article.date
  const author = language === "fr" ? article.authorFr : article.author
  const content = language === "fr" ? article.contentFr : article.content

  return (
    <div className="min-h-screen bg-white pt-24">
      <Header />
      <article className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Back Button */}
        <Link
          href="/news"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-[#f39c12] transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          {t("news.backToNews")}
        </Link>

        {/* Article Header */}
        <div className="mb-8">
          <span className="inline-block bg-[#f39c12]/10 text-[#f39c12] px-4 py-2 rounded-full text-sm font-semibold mb-4">
            {category}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">{title}</h1>
          <div className="flex items-center gap-6 text-gray-600">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>{date}</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-5 h-5" />
              <span>{author}</span>
            </div>
            <button className="ml-auto flex items-center gap-2 hover:text-[#f39c12] transition-colors">
              <Share2 className="w-5 h-5" />
              <span>{t("news.share")}</span>
            </button>
          </div>
        </div>

        {/* Featured Image */}
        <div className="aspect-video bg-gray-100 rounded-2xl overflow-hidden mb-12">
          <img src={article.image || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" />
        </div>

        {/* Article Content */}
        <div
          className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6"
          dangerouslySetInnerHTML={{ __html: content }}
        />

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-[#f39c12] to-[#e08e0b] rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">{t("news.readyToExperience")}</h3>
          <p className="text-lg mb-6">{t("news.bookYourLuxury")}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/booking"
              className="bg-white text-[#f39c12] px-8 py-3 rounded-lg hover:bg-gray-100 transition-all font-semibold"
            >
              {t("fleet.bookNow")}
            </Link>
            <Link
              href="/fleet"
              className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-900 transition-all font-semibold"
            >
              {t("news.viewFleet")}
            </Link>
          </div>
        </div>
      </article>
      <Footer />
    </div>
  )
}
