export default function formatPrice(price: number | bigint): string {
  return new Intl.NumberFormat('pt', {
    style: 'currency',
    currency: 'BRL'
  }).format(price)
}
