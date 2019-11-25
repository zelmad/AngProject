export class AppareilService {
  appareils = [
    {
      id: 1,
      name: 'Machine à laver',
      status: 'éteint'
    },
    {
      id: 2,
      name: 'Frigo',
      status: 'allumé'
    },
    {
      id: 3,
      name: 'Ordinateur',
      status: 'allumé'
    },
    {
      id: 4,
      name: 'OrdinateurV',
      status: 'éteint'
    }
  ];
  switchOnAll(i: number) {
    this.appareils[i].status = 'allumé';
  }
  switchOffAll(i: number) {
    this.appareils[i].status = 'éteint';
  }
  getAppareilById(id: number) {
    const appareil = this.appareils.find(
      (s) => {
        return s.id === id;
      }
    );
    return appareil;
  }
}
