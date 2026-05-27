import { PlantGuide } from '../../models/plant-guide';

export const PLATYCERIUM_SUPERBUM_GUIDE: PlantGuide = {
  slug: 'platycerium-superbum',

  title: 'Platycerium Superbum',

  popularName: 'Chifre-de-veado',

  introduction:
    'O Platycerium superbum é uma samambaia epífita originária da Austrália, muito valorizada pelo formato exótico de suas folhas, que lembram chifres de cervo. Pertence à família Polypodiaceae e possui crescimento ornamental elegante e escultural. É uma planta exigente em umidade ambiental e necessita de bastante matéria orgânica na base ou fertilização adequada para samambaias, especialmente fertilizantes foliares com maior concentração de nitrogênio.',

  sections: [
    {
      title: 'Ambiente Ideal',
      content:
        'Prefere ambientes iluminados com luz indireta intensa e boa ventilação. Deve ser cultivada protegida do sol forte direto, especialmente nas horas mais quentes do dia. Adapta-se muito bem a varandas cobertas, jardins verticais e áreas internas bem iluminadas.',
    },

    {
      title: 'Rega e Umidade',
      content:
        'Gosta de umidade moderada e regas equilibradas. O ideal é molhar o substrato ou suporte apenas quando estiver parcialmente seco. Evite excesso constante de água, pois isso pode favorecer o apodrecimento das folhas basais. Em climas secos, aprecia borrifações leves no ambiente, preferencialmente com borrifadores do tipo névoa.',
    },

    {
      title: 'Substrato e Fixação',
      content:
        'Por ser uma planta epífita, pode ser cultivada em placas de madeira, fibra de coco ou vasos bem drenados. Suas raízes necessitam de bastante circulação de ar. Substratos leves e aerados favorecem um desenvolvimento saudável.',
    },

    {
      title: 'Particularidades da Espécie',
      content:
        'Possui dois tipos de folhas: as basais, arredondadas e responsáveis pela proteção das raízes, e as férteis, longas e ornamentais. Não é recomendado remover folhas secas basais, pois fazem parte do ciclo natural da planta e auxiliam na retenção de nutrientes.',
    },
  ],

  highlights: [
    'Samambaia epífita ornamental',
    'Folhas semelhantes a chifres de cervo',
    'Ideal para jardins verticais',
    'Necessita alta umidade ambiental',
    'Prefere luz indireta intensa',
  ],

  problems: [
    {
      problem: 'Folhas escurecendo',
      solution: 'Excesso de água ou pouca ventilação.',
    },

    {
      problem: 'Folhas ressecadas',
      solution: 'Baixa umidade ou falta de rega.',
    },

    {
      problem: 'Crescimento fraco',
      solution: 'Iluminação insuficiente.',
    },

    {
      problem: 'Manchas queimadas',
      solution: 'Exposição ao sol forte direto.',
    },

    {
      problem: 'Odor forte no substrato',
      solution:
        'Excesso de umidade acumulada e raízes apodrecendo.',
    },
  ],
};