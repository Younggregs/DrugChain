let nextDrugId = 0

export const addDrug = text => ({
  type: 'ADD_Drug',
  id: nextDrugId++,
  text
})