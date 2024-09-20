ServerEvents.recipes(event => {
    event.remove({id: 'minecraft:netherite_scrap_from_blasting'})
    event.remove({id: 'minecraft:netherite_scrap'})
    event.remove({id: 'minecraft:netherite_ingot'})
    event.remove({id: 'mekanism:processing/netherite/ancient_debris_to_scrap'})
    event.remove({id: 'mekanism:processing/netherite/ancient_debris_to_dirty_scrap'})
    event.remove({id: 'mekanism:processing/netherite/dirty_scrap_to_scrap'})
    event.remove({id: 'cyclic:crusher/debris'})
})