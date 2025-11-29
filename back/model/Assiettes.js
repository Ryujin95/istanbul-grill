
const assiettes = [
    {
      "nom": "Kebab",
      "prix": "13€50",
      "image": "assiettes/kebab.png",
      "categorie": "viande_rouge"
    },
    {
      "nom": "Kefta",
      "prix": "13€50",
      "image": "assiettes/kefta.png",
      "categorie": "viande_rouge"
    },
    {
      "nom": "Adana",
      "prix": "15€50",
      "image": "assiettes/adana.png",
      "categorie": "viande_rouge"
    },
    {
      "nom": "Merguez",
      "prix": "12€50",
      "image": "assiettes/merguez.png",
      "categorie": "viande_rouge"
    },
    {
      "nom": "Brochette d'Agneau",
      "prix": "16€50",
      "image": "assiettes/agneau.png",
      "categorie": "viande_rouge"
    },
    {
      "nom": "Brochette de Poulet",
      "prix": "14€00",
      "image": "assiettes/poulet.avif",
      "categorie": "viande_blanche"
    },
    {
      "nom": "Poulet Curry",
      "prix": "13€00",
      "image": "assiettes/pouletcurry.png",
      "categorie": "viande_blanche"
    },
    {
      "nom": "Poulet Paprika",
      "prix": "13€00",
      "image": "assiettes/pouletpaprika.jpg",
      "categorie": "viande_blanche"
    },
    {
      "nom": "Falafel",
      "prix": "12€50",
      "image": "assiettes/falafel.png",
      "categorie": "mixte"
    },
    {
      "nom": "Côtelettes d'Agneau",
      "prix": "17€00",
      "image": "assiettes/coteletteagneau.webp",
      "categorie": "viande_rouge"
    },
    {
      "nom": "Le Chef",
      "prix": "16€00",
      "image": "assiettes/chef.png",
      "categorie": "mixte"
    },
    {
      "nom": "Grillades Mixte",
      "prix": "18€00",
      "image": "assiettes/mixte.png",
      "categorie": "mixte"
    },
    {
      "nom": "Poitrine d'Agneau Grillée",
      "prix": "16€00",
      "image": "assiettes/poitrineagneau.png",
      "categorie": "viande_rouge"
    },
    {
      "nom": "Entrecôte Grillée",
      "prix": "20€50",
      "image": "assiettes/entrecote.png",
      "categorie": "viande_rouge"
    },
    {
      "nom": "Côte de Bœuf Grillée",
      "prix": "24€00",
      "image": "assiettes/coteboeuf.png",
      "categorie": "viande_rouge"
    },
    {
      "nom": "Faux Filet Grillé",
      "prix": "17€00",
      "image": "assiettes/fauxfilet.png",
      "categorie": "viande_rouge"
    },
    {
      "nom": "Spéciale Istanbul",
      "prix": "22€00",
      "image": "assiettes/istanbul.png",
      "categorie": "mixte"
    },
    {
      "nom": "Suprême",
      "prix": "14€50",
      "image": "assiettes/supreme.png",
      "categorie": "mixte"
    },
    {
      "nom": "Silver",
      "prix": "14€50",
      "image": "assiettes/silver.png",
      "categorie": "mixte"
    },
    {
      "nom": "Iskender",
      "prix": "16€50",
      "image": "assiettes/iskender.jpg",
      "categorie": "viande_rouge"
    },
    {
      "nom": "Filet de Sole",
      "prix": "13€00",
      "image": "assiettes/filetsole.png",
      "categorie": "poisson"
    },
    {
      "nom": "Pavé de Saumon",
      "prix": "14€00",
      "image": "assiettes/pavesaumon.png",
      "categorie": "poisson"
    },
    {
      "nom": "Gratin de Poisson",
      "prix": "15€50",
      "image": "assiettes/gratinpoisson.jpg",
      "categorie": "poisson"
    },
    {
      "nom": "Dorade Grillée",
      "prix": "18€00",
      "image": "assiettes/dorade.png",
      "categorie": "poisson"
    },
    {
      "nom": "Kefta au Four + Yaourt",
      "prix": "16€00",
      "image": "assiettes/keftayaourt.png",
      "categorie": "viande_rouge"
    },
    {
      "nom": "Ali Nazik",
      "prix": "19€50",
      "image": "assiettes/alinazik.jpg",
      "categorie": "mixte"
    },
    {
      "nom": "Nuggets (6 pcs)",
      "prix": "4€50",
      "image": "assiettes/nuggets.avif",
      "categorie": "viande_blanche"
    },
    {
      "nom": "Nuggets + Frites (6 pcs)",
      "prix": "5€00",
      "image": "assiettes/nuggetsfrites.jpg",
      "categorie": "viande_blanche"
    },
    {
      "nom": "Beyti Kebab",
      "prix": "17€00",
      "image": "assiettes/beytikebab.webp",
      "categorie": "viande_rouge"
    },
  ];
  
  const getAssiettes = (req, res) => {
    res.json(assiettes);
  };
  
  module.exports = { getAssiettes };