import { CardType } from './components/Card/Card';

export function SortArray(x: CardType, y: CardType, filter: string) {
  (filter === 'city') ?
      x.address?.city.localeCompare(y.address!.city, 'fr', {ignorePunctuation: true})
    : x.company?.name.localeCompare(y.company!.name, 'fr', {ignorePunctuation: true})
}
