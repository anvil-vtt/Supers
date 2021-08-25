Hooks.once('ready', async function () {
  logger.error("Es lebt!!!!!!!!!")
  await Dialog.confirm({
    title: "Please confirm this useless dialog!",
    content: "Some more otem ipsum dolor sit amet."
  })
})
