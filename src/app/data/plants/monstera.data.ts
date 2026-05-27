import { PlantGuide } from '../../models/plant-guide';

export const MONSTERA_DELICIOSA_GUIDE: PlantGuide = {
  slug: 'monstera-deliciosa',

  title: 'Monstera Deliciosa',

  popularName: 'Costela-de-adão',

  introduction:
    'A Monstera deliciosa é uma planta tropical originária das florestas da América Central, muito conhecida pelas folhas grandes e recortadas que trazem aspecto exuberante ao ambiente. Pertence à família Araceae, assim como diversas espécies raras e exóticas, como Philodendron billietiae e Philodendron verrucosum. Possui crescimento vigoroso quando cultivada em condições adequadas, podendo desenvolver folhas enormes e altamente ornamentais.',

  sections: [
    {
      title: 'Ambiente Ideal',
      content:
        'Prefere ambientes internos bem iluminados, com bastante luz indireta. Pode receber sol suave da manhã, mas o sol forte da tarde pode causar queimaduras nas folhas. Em locais adequados, apresenta crescimento rápido e visual tropical elegante.',
    },

    {
      title: 'Rega e Umidade',
      content:
        'O substrato deve permanecer levemente úmido, mas nunca encharcado. Regue novamente apenas quando a camada superficial estiver seca. Em períodos mais quentes, as regas tendem a ser mais frequentes. A planta aprecia umidade no ar, sendo interessante borrifar água nas folhas em dias muito secos. Pontas secas e queimadas podem indicar baixa umidade ambiental.',
    },

    {
      title: 'Substrato e Nutrição',
      content:
        'Prefere substrato rico em matéria orgânica, leve e bem drenado. Misturas com fibra de coco, casca de pinus, perlita e carvão vegetal ajudam no desenvolvimento saudável das raízes. A adubação pode ser realizada mensalmente com fertilizantes equilibrados.',
    },

    {
      title: 'Particularidades da Espécie',
      content:
        'As famosas fendas e perfurações nas folhas surgem conforme a planta amadurece e recebe boa iluminação. Quanto maior a luminosidade indireta, mais recortes e furos as folhas tendem a desenvolver. Pode ser cultivada com tutor para estimular crescimento vertical e folhas maiores.',
    },
  ],

  highlights: [
    'Folhas grandes e recortadas',
    'Visual tropical exuberante',
    'Crescimento vigoroso',
    'Ideal para ambientes internos iluminados',
    'Pode crescer com suporte vertical',
  ],

  problems: [
    {
      problem: 'Folhas amareladas',
      solution: 'Excesso de água ou drenagem inadequada.',
    },

    {
      problem: 'Pontas secas',
      solution: 'Baixa umidade do ar ou falta de água.',
    },

    {
      problem: 'Folhas sem recortes e furos',
      solution: 'Pouca luminosidade ou planta jovem.',
    },

    {
      problem: 'Crescimento lento',
      solution: 'Falta de nutrientes ou vaso pequeno.',
    },

    {
      problem: 'Manchas queimadas',
      solution: 'Excesso de sol direto.',
    },
  ],
};