
const assiettes = [
    {
      "nom": "Kebab",
      "prix": "12€50",
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
      "prix": "13€50",
      "image": "assiettes/adana.png",
      "categorie": "viande_rouge"
    },
    {
      "nom": "Merguez",
      "prix": "12€00",
      "image": "assiettes/merguez.png",
      "categorie": "viande_rouge"
    },
    {
      "nom": "Brochette d'Agneau",
      "prix": "15€50",
      "image": "assiettes/agneau.png",
      "categorie": "viande_rouge"
    },
    {
      "nom": "Brochette de Poulet",
      "prix": "13€50",
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
      "prix": "11€50",
      "image": "assiettes/falafel.png",
      "categorie": "mixte"
    },
    {
      "nom": "Côtelettes d'Agneau",
      "prix": "15€50",
      "image": "assiettes/coteletteagneau.png",
      "categorie": "viande_rouge"
    },
    {
      "nom": "Le Chef",
      "prix": "14€50",
      "image": "assiettes/chef.png",
      "categorie": "viande_blanche"
    },
    {
      "nom": "Grillades Mixte",
      "prix": "16€00",
      "image": "assiettes/mixte.png",
      "categorie": "mixte"
    },
    {
      "nom": "Poitrine d'Agneau Grillée",
      "prix": "15€00",
      "image": "assiettes/poitrineagneau.png",
      "categorie": "viande_rouge"
    },
    {
      "nom": "Entrecôte Grillée",
      "prix": "15€50",
      "image": "assiettes/entrecote.png",
      "categorie": "viande_rouge"
    },
    {
      "nom": "Côte de Bœuf Grillée",
      "prix": "22€50",
      "image": "assiettes/coteboeuf.png",
      "categorie": "viande_rouge"
    },
    {
      "nom": "Faux Filet Grillé",
      "prix": "16€00",
      "image": "assiettes/fauxfilet.png",
      "categorie": "viande_rouge"
    },
    {
      "nom": "Spéciale Istanbul",
      "prix": "20€00",
      "image": "assiettes/istanbul.png",
      "categorie": "mixte"
    },
    {
      "nom": "Suprême",
      "prix": "13€00",
      "image": "assiettes/supreme.png",
      "categorie": "viande_blanche"
    },
    {
      "nom": "Silver",
      "prix": "13€00",
      "image": "assiettes/silver.png",
      "categorie": "mixte"
    },
    {
      "nom": "Iskender",
      "prix": "14€00",
      "image": "assiettes/iskender.png",
      "categorie": "viande_rouge"
    },
    {
      "nom": "Filet de Sole",
      "prix": "12€00",
      "image": "assiettes/filetsole.png",
      "categorie": "poisson"
    },
    {
      "nom": "Pavé de Saumon",
      "prix": "13€50",
      "image": "assiettes/pavesaumon.png",
      "categorie": "poisson"
    },
    {
      "nom": "Gratin de Poisson",
      "prix": "14€00",
      "image": "assiettes/gratinpoisson.png",
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
      "prix": "14€00",
      "image": "assiettes/keftayaourt.png",
      "categorie": "viande_rouge"
    },
    {
      "nom": "Ali Nazik",
      "prix": "17€00",
      "image": "assiettes/alinazik.png",
      "categorie": "mixte"
    },
    {
      "nom": "Nuggets (6 pcs)",
      "prix": "4€50",
      "image": "assiettes/nuggets.png",
      "categorie": "viande_blanche"
    },
    {
      "nom": "Nuggets + Frites (6 pcs)",
      "prix": "5€00",
      "image": "assiettes/nuggetsfrites.png",
      "categorie": "viande_blanche"
    }
  ];
  
  const getAssiettes = (req, res) => {
    res.json(assiettes);
  };
  
  module.exports = { getAssiettes };