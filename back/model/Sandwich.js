
const models = [
  {
    nom: "Kebab",
    prix_seul: "7€50",
    prix_frites: "8€00",
    image: "sandwich/kebab.jpg",
    categorie: "rouge"
  },
  {
    nom: "2 Viandes au choix",
    prix_seul: "9€00",
    prix_frites: "9€50",
    image: "sandwich/2viandes.webp",
    categorie: "mixte"
  },
  {
    nom: "Poulet Curry",
    prix_seul: "8€00",
    prix_frites: "8€50",
    image: "sandwich/pouletcurry.jpg",
    categorie: "viande_blanche"
  },
  {
    nom: "Poulet Paprika",
    prix_seul: "8€00",
    prix_frites: "8€50",
    image: "sandwich/pouletpaprika.webp",
    categorie: "viande_blanche"
  },
  {
    nom: "Silver",
    ingredients: "Kefta, bacon, œuf, fromage",
    prix_seul: "9€50",
    prix_frites: "10€00",
    image: "sandwich/silver.png",
    categorie: "mixte"
  },
  {
    nom: "Cordon Bleu",
    prix_seul: "7€50",
    prix_frites: "8€00",
    image: "sandwich/cordonbleu.jpeg",
    categorie: "viande_blanche"
  },
  {
    nom: "Escalope",
    prix_seul: "7€50",
    prix_frites: "8€00",
    image: "sandwich/escalope.jpeg",
    categorie: "viande_blanche"
  },
  {
    nom: "MG Royal",
    ingredients: "Kebab, œuf, fromage",
    prix_seul: "9€00",
    prix_frites: "9€50",
    image: "sandwich/mgroyal.jpeg",
    categorie: "mixte"
  },
  {
    nom: "Chef",
    ingredients: "Escalope, crème fraîche",
    prix_seul: "9€00",
    prix_frites: "9€50",
    image: "sandwich/chef.jpeg",
    categorie: "viande_blanche"
  },
  {
    nom: "Phénomène",
    ingredients: "Cordon bleu, merguez, œuf, fromage",
    prix_seul: "9€50",
    prix_frites: "10€00",
    image: "sandwich/phenomene.jpg",
    categorie: "mixte"
  },
  {
    nom: "Steak",
    prix_seul: "7€00",
    prix_frites: "7€50",
    image: "sandwich/steak.jpg",
    categorie: "rouge"
  },
  {
    nom: "Agneau",
    ingredients: "Brochette d'agneau",
    prix_seul: "9€00",
    prix_frites: "9€50",
    image: "sandwich/agneau.webp",
    categorie: "rouge"
  },
  {
    nom: "Délice",
    ingredients: "Escalope, œuf, fromage",
    prix_seul: "9€00",
    prix_frites: "9€50",
    image: "sandwich/delice.webp",
    categorie: "viande_blanche"
  },
  {
    nom: "Le Boursin",
    ingredients: "Escalope, sauce boursin",
    prix_seul: "9€00",
    prix_frites: "9€50",
    image: "sandwich/boursin.png",
    categorie: "viande_blanche"
  },
  {
    nom: "Matic",
    ingredients: "Steak, galette pdt, œuf, chèvre",
    prix_seul: "9€50",
    prix_frites: "10€00",
    image: "sandwich/matic.png",
    categorie: "rouge"
  },
  {
    nom: "Kefta",
    ingredients: "Boulettes de viande hachée",
    prix_seul: "8€00",
    prix_frites: "8€50",
    image: "sandwich/kefta.png",
    categorie: "rouge"
  },
  {
    nom: "Merguez",
    prix_seul: "7€50",
    prix_frites: "8€00",
    image: "sandwich/merguez.png",
    categorie: "rouge"
  },
  {
    nom: "Magistral",
    ingredients: "Steak, bacon, œuf, fromage",
    prix_seul: "9€00",
    prix_frites: "9€50",
    image: "sandwich/magistral.png",
    categorie: "rouge"
  },
  {
    nom: "Buffalo",
    ingredients: "2 steaks, fromage",
    prix_seul: "9€00",
    prix_frites: "9€50",
    image: "sandwich/buffalo.png",
    categorie: "rouge"
  },
  {
    nom: "Blindé",
    ingredients: "Kebab, steak, œuf, fromage",
    prix_seul: "9€30",
    prix_frites: "9€80",
    image: "sandwich/blinde.png",
    categorie: "mixte"
  },
  {
    nom: "Poulet",
    ingredients: "Brochette de poulet",
    prix_seul: "8€00",
    prix_frites: "8€50",
    image: "sandwich/poulet.webp",
    categorie: "viande_blanche"
  },
  {
    nom: "Falafel",
    prix_seul: "7€00",
    prix_frites: "7€50",
    image: "sandwich/falafel.webp",
    categorie: "mixte"
  },
  {
    nom: "Coyote",
    ingredients: "3 steaks, galette pdt, bacon de dinde, chèvre",
    prix_seul: "9€30",
    prix_frites: "9€80",
    image: "sandwich/coyote.png",
    categorie: "rouge"
  },
  {
    nom: "Extra",
    ingredients: "Kebab, chicken, fromage chèvre",
    prix_seul: "9€30",
    prix_frites: "9€80",
    image: "sandwich/extra.webp",
    categorie: "mixte"
  },
  {
    nom: "Suprême",
    ingredients: "Escalope, steak, bacon, boursin, fromage",
    prix_seul: "9€50",
    prix_frites: "10€00",
    image: "sandwich/supreme.png",
    categorie: "mixte"
  }
];

const getmodel = (request, response) => {
  response.json(models);
};

module.exports = { getmodel };