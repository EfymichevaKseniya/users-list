import { CardType } from './components/Card/Card';

let sortType = {
  filter: 'city' || 'company',
}

export function SortArray(x: CardType, y: CardType, filter: string) {
  filter === sortType.filter ?
      x.address?.city.localeCompare(y.address!.city, 'us', {ignorePunctuation: true})
    : x.company?.name.localeCompare(y.company!.name, 'us', {ignorePunctuation: true})
}
