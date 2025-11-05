import { computed, ref } from 'vue'
import { properties, type Property, type PropertyType } from '~/data/properties'

export function useProperties() {
  const city = ref('')
  const type = ref<'All' | PropertyType>('All')
  const minPrice = ref<number | null>(null)
  const maxPrice = ref<number | null>(null)

  const filteredProperties = computed(() =>
    properties.filter((property) => {
      const matchCity = city.value
        ? property.city.toLowerCase().includes(city.value.toLowerCase())
        : true
      const matchType = type.value === 'All' ? true : property.type === type.value
      const matchMin = minPrice.value !== null ? property.price >= minPrice.value : true
      const matchMax = maxPrice.value !== null ? property.price <= maxPrice.value : true

      return matchCity && matchType && matchMin && matchMax
    })
  )

  const featuredProperties = computed(() => properties.filter((property) => property.featured))
  const allTypes = computed(() => ['All', ...new Set(properties.map((property) => property.type))])

  const getPropertyBySlug = (slug: string): Property | undefined =>
    properties.find((property) => property.slug === slug)

  return {
    city,
    type,
    minPrice,
    maxPrice,
    allTypes,
    filteredProperties,
    featuredProperties,
    getPropertyBySlug,
    properties
  }
}
