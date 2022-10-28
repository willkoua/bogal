export const Const = {
  app: {
    lang: {
      localstorage_title: 'cjLang',
      defaultLanguage: 'fr',
      fr: 'fr',
      en: 'en'
    }
  },
  collections: {
    users: 'users',
    articles: 'articles'
  },
  user: {
    localstorage: 'cjgm_userLogged'
  },
  sites: {
    cjgm: {
      url: 'https://cjgm.ca',
      subTitle: 'Grand Montréal',
      title: 'Clinique juridique du Grand Montréal',
      sigle: 'CJGM'
    },
    cjmn: {
      title: 'Clinique juridique de Montréal-Nord',
      subTitle: 'Montréal-Nord',
      sigle: 'CJMN',
      url: 'https://www.montrealnord.cjgm.ca',
      address: '5181 rue D’Amiens Montréal-Nord (QC) H1G 6N9',
      tel: '+1 514 789-2823',
      email: 'direction@cjgm.ca',
      data: {
        help: 75,
        student: 63,
        lawer: 29,
        projects: 3,
      }
    },
    cjcdn: {
      title: 'Clinique juridique de Côte-des-Neiges',
      subTitle: 'Côte-des-Neiges',
      sigle: 'CJCDN',
      url: 'https://www.cotedesneiges.cjgm.ca',
      address: '5347 Ch. de la Côte-des-Neiges, Montréal, QC H3T 1Y4',
      tel: '+1 514 789-2823',
      email: 'info@cjgm.ca',
      data: {
        help: 'À confirmer',
        student: 'À confirmer',
        lawer: 'À confirmer',
        projects: 'À confirmer',
      }
    }
  },
  clinics: ['CJGM', 'CJCDN', 'BCBC']
};
