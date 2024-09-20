StartupEvents.registry('item', event => {
    event.create('inf_core').displayName('§cInfinity Core')
})

StartupEvents.registry('item', event => {
    event.create('inf_core_shard').displayName('Infinity Shard')
})

StartupEvents.registry('item', event => {
    event.create('void_core').displayName('§0Void Core')
})

StartupEvents.registry('item', event => {
    event.create('void_core_shard').displayName('Void Shard')
})

StartupEvents.registry('item', event => {
	event.create('blue_melon').displayName('Синий арбуз').food(food => {
		food
    		.hunger(10)
    		.saturation(10)
      		.effect('regeneration', 600, 1, 1)
      		.removeEffect('poison')
      		.alwaysEdible()
      		.fastToEat()
	})
})