
ServerEvents.recipes(event => {
    event.recipes.create.mixing(
        [
            'kubejs:st1_n', 
            'kubejs:polluted_clay_catalist'
        ], 
        [
            'minecraft:ancient_debris', 
            'kubejs:clay_catalist', 
            Fluid.lava(500), 
        ]
    ).superheated()
    event.recipes.create.mixing(
        [
            'kubejs:st2_n', 
            'minecraft:bucket', 
            Item.of('kubejs:rare_earth').withChance(0.2)
        ], 
        [
            'kubejs:st1_n', 
            'minecraft:terracotta', 
            Fluid.water(500), 
            'mekanism:sulfuric_acid_bucket'
        ]
    ).superheated()
    event.recipes.create.mixing(
        [
            'kubejs:st3_n', 
            'kubejs:polluted_ceramic_catalist', 
            'minecraft:bucket', 
            Item.of('kubejs:rare_earth').withChance(0.4)
        ], 
        [
            'kubejs:st2_n', 
            'kubejs:ceramic_catalist', 
            Fluid.water(500), 
            'mekanism:hydrogen_chloride_bucket'
        ]
    ).superheated()
    event.recipes.create.mixing(
        [
            'kubejs:st4_n', 
            'kubejs:polluted_platinum_catalist', 
            'minecraft:bucket',
            Item.of('kubejs:especially_rare_shard').withChance(0.2)
        ], 
        [
            'kubejs:st3_n', 
            'kubejs:platinum_catalist', 
            Fluid.water(500), 
            'mekanism:hydrofluoric_acid_bucket'
        ]
    ).superheated()
    event.recipes.create.mixing(
        [
            'kubejs:st5_n', 
            'kubejs:polluted_rare_earth_catalist',
            Item.of('kubejs:especially_rare_shard').withChance(0.4),
            Item.of('kubejs:azurit_shard').withChance(0.5)
        ], 
        [
            'kubejs:st4_n', 
            'kubejs:rare_earth_catalist', 
            Fluid.water(500), 
            'kubejs:azurit_asid'
        ]
    ).superheated()
    event.recipes.create.mixing(
        [
            'kubejs:st6_n', 
            'kubejs:fulled_particle_trap', 
            'minecraft:bucket',
            Item.of('kubejs:tus_arkanium_cristall').withChance(0.2),
            Item.of('kubejs:tus_hexium_cristall').withChance(0.2),
            Item.of('kubejs:tus_karazium_cristall').withChance(0.2),
            Item.of('kubejs:tus_lukium_cristall').withChance(0.2),
            Item.of('kubejs:tus_zalium_cristall').withChance(0.2),
            'kubejs:azurit_shard'
        ], 
        [
            'kubejs:st5_n', 
            'kubejs:particle_trap', 
            Fluid.water(500), 
            'mekanismgenerators:fusion_fuel_bucket'
        ]
    )
    event.recipes.create.mixing(
        [
            'kubejs:st7_n', 
            'kubejs:fulled_processing_core',
            'kubejs:tus_karazium_cristall',
            Item.of('kubejs:tus_hexium_cristall').withChance(0.4),
            Item.of('kubejs:stable_void_dust').withChance(0.2),
        ], 
        [
            'kubejs:st6_n', 
            'kubejs:processing_core', 
            Fluid.water(500), 
            'kubejs:karasium_asid'
        ]
    ).superheated()
    event.recipes.create.mixing(
        [
            'kubejs:st8_n', 
            'kubejs:fulled_void_processing_core',
            Item.of('kubejs:phase_matter').withChance(0.6)
        ], 
        [
            'kubejs:st7_n', 
            'kubejs:void_processing_core', 
            Fluid.water(500)
        ]
    ).superheated()
    event.recipes.create.mixing(
        [
            'kubejs:st9_n', 
            'kubejs:polluted_phase_filter',
            Item.of('kubejs:infinity_shard').withChance(0.4)
        ], 
        [
            'kubejs:st8_n', 
            'kubejs:phase_filter', 
            Fluid.water(500)
        ]
    ).superheated()
    event.recipes.create.crushing(
        [
            '12x minecraft:netherite_scrap',

            'kubejs:matter_fiber'
        ],
         'kubejs:st9_n'
        )
})

ServerEvents.recipes(event => {
    event.recipes.create.mixing(
        [
            'kubejs:st1_u', 
            'kubejs:polluted_clay_catalist'
        ], 
        [
            'mekanism:raw_uranium',
            'kubejs:clay_catalist', 
            Fluid.lava(500), 
        ]
    ).superheated()
    event.recipes.create.mixing(
        [
            'kubejs:st2_u', 
            'minecraft:bucket', 
            Item.of('kubejs:dangerous_dust').withChance(0.2)
        ], 
        [
            'kubejs:st1_u', 
            'minecraft:terracotta', 
            Fluid.water(500), 
            'mekanism:sulfuric_acid_bucket'
        ]
    ).superheated()
    event.recipes.create.mixing(
        [
            'kubejs:st3_u', 
            'kubejs:polluted_ceramic_catalist', 
            'minecraft:bucket', 
            Item.of('kubejs:dangerous_dust').withChance(0.4)
        ], 
        [
            'kubejs:st2_u', 
            'kubejs:ceramic_catalist', 
            Fluid.water(500), 
            'mekanism:hydrogen_chloride_bucket'
        ]
    ).superheated()
    event.recipes.create.mixing(
        [
            'kubejs:st4_u', 
            'kubejs:polluted_platinum_catalist', 
            'minecraft:bucket',
            Item.of('kubejs:dangerous_shard').withChance(0.2)
        ], 
        [
            'kubejs:st3_u', 
            'kubejs:platinum_catalist', 
            Fluid.water(500), 
            'mekanism:hydrofluoric_acid_bucket'
        ]
    ).superheated()
    event.recipes.create.mixing(
        [
            'kubejs:st5_u', 
            'kubejs:polluted_rare_earth_catalist',
            Item.of('kubejs:dangerous_shard').withChance(0.4),
            Item.of('kubejs:azurit_shard').withChance(0.5)
        ], 
        [
            'kubejs:st4_u', 
            'kubejs:rare_earth_catalist', 
            Fluid.water(500), 
            'kubejs:azurit_asid'
        ]
    ).superheated()
    event.recipes.create.mixing(
        [
            'kubejs:st6_u', 
            'kubejs:fulled_particle_trap', 
            'minecraft:bucket',
            Item.of('kubejs:tus_arkanium_cristall').withChance(0.2),
            Item.of('kubejs:tus_hexium_cristall').withChance(0.2),
            Item.of('kubejs:tus_karazium_cristall').withChance(0.2),
            Item.of('kubejs:tus_lukium_cristall').withChance(0.2),
            Item.of('kubejs:tus_zalium_cristall').withChance(0.2),
            'kubejs:azurit_shard'
        ], 
        [
            'kubejs:st5_u', 
            'kubejs:particle_trap', 
            Fluid.water(500), 
            'mekanismgenerators:fusion_fuel_bucket'
        ]
    )
    event.recipes.create.mixing(
        [
            'kubejs:st7_u', 
            'kubejs:fulled_processing_core',
            'kubejs:tus_karazium_cristall',
            Item.of('kubejs:tus_hexium_cristall').withChance(0.4),
            Item.of('kubejs:stable_void_dust').withChance(0.2),
        ], 
        [
            'kubejs:st6_u', 
            'kubejs:processing_core', 
            Fluid.water(500), 
            'kubejs:karasium_asid'
        ]
    ).superheated()
    event.recipes.create.mixing(
        [
            'kubejs:st8_u', 
            'kubejs:fulled_void_processing_core',
            Item.of('kubejs:phase_matter').withChance(0.6)
        ], 
        [
            'kubejs:st7_u', 
            'kubejs:void_processing_core', 
            Fluid.water(500)
        ]
    ).superheated()
    event.recipes.create.mixing(
        [
            'kubejs:st9_u', 
            'kubejs:polluted_phase_filter',
            Item.of('kubejs:infinity_shard').withChance(0.4)
        ], 
        [
            'kubejs:st8_u', 
            'kubejs:phase_filter', 
            Fluid.water(500)
        ]
    ).superheated()
    event.recipes.create.crushing(
        [
            '12x mekanism:ingot_uranium',

            'kubejs:matter_fiber'
        ],
         'kubejs:st9_u'
        )
})

