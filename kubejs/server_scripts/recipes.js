//ServerEvents.recipes(e => {})
//ServerEvents.recipes(event => {})

ServerEvents.recipes(event => {
    event.shapeless('16x kubejs:inf_core_shard', [
        'kubejs:inf_core'
    ])
})

ServerEvents.recipes(event => {
    event.shapeless('16x kubejs:void_core_shard', [
        'kubejs:void_core'
    ])
})

ServerEvents.recipes(event => {
    event.shapeless('2x kubejs:void_core_shard', [
        'kubejs:void_core_shard',
        'minecraft:smooth_stone',
        'minecraft:smooth_stone',
        'minecraft:smooth_stone',
    ])
})

ServerEvents.recipes(event => {
    event.shapeless('minecraft:blaze_rod', [
        'minecraft:blaze_powder',
        'minecraft:blaze_powder',
        'minecraft:blaze_powder',
        'minecraft:blaze_powder',
    ])
})

ServerEvents.recipes(e => {
    e.recipes.create.splashing(['minecraft:clay', 
    Item.of('minecraft:raw_iron').withChance(0.20), 
    Item.of('minecraft:raw_copper').withChance(0.19),
    Item.of('minecraft:raw_gold').withChance(0.10),
    Item.of('minecraft:emerald').withChance(0.10),
    Item.of('minecraft:lapis_lazuli').withChance(0.10),
    Item.of('minecraft:quartz').withChance(0.15),
    Item.of('minecraft:bone_meal').withChance(0.04),
    Item.of('minecraft:redstone').withChance(0.25),
    Item.of('minecraft:coal').withChance(0.30),
    Item.of('create:raw_zinc').withChance(0.25),
    Item.of('minecraft:blaze_powder').withChance(0.10),
    Item.of('minecraft:glowstone_dust').withChance(0.10),
    Item.of('ae2:certus_quartz_crystal').withChance(0.10),
    Item.of('ae2:fluix_crystal').withChance(0.05),
    Item.of('ae2:sky_dust').withChance(0.10),
    ], 'kubejs:void_core_shard')
})

ServerEvents.recipes(event => {
    event.shaped('artifacts:crystal_heart', [
        'RRR', 
        'RVR', 
        'RRR'  
      ], {
        R: 'minecraft:redstone_block', 
        V: 'kubejs:void_core'   
      }
    )
})

ServerEvents.recipes(event => {
    event.shaped('artifacts:villager_hat', [
        'HHH', 
        'HVH', 
        'HHH'  
      ], {
        H: 'minecraft:hay_block', 
        V: 'kubejs:void_core'   
      }
    )
})

ServerEvents.recipes(e => {
    e.recipes.create.mechanical_crafting('kubejs:void_core', [
      ' III ',
      'IDNDI',
      'INSNI',
      'IDNDI',
      ' III '
    ], {
      D: 'minecraft:diamond',
      I: 'minecraft:iron_block',
      N: 'minecraft:netherite_ingot',
      S: 'minecraft:nether_star'
    })
})

ServerEvents.recipes(e => {
    e.recipes.create.mechanical_crafting('kubejs:inf_core', [
      ' III ',
      'IDNDI',
      'INSNI',
      'IDNDI',
      ' III '
    ], {
      D: 'minecraft:diamond_block',
      I: 'minecraft:iron_block',
      N: 'minecraft:netherite_block',
      S: 'ae2:cell_component_256k'
    })
})