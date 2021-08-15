import "./scss/styles.scss";

import { SupersActor } from "./module/actor/SupersActor";
import { SupersActorSheet } from "./module/actor/sheets/SupersActorSheet";

/* -------------------------------- */
/*	System initialization			*/
/* -------------------------------- */
Hooks.once("init", async () => {
  console.log(`Supers! | Initializing Supers! game system`);

  // Initialise config
  CONFIG.Actor.entityClass = SupersActor;

  // Preload all needed templates
  // await TemplatePreloader.preloadHandlebarsTemplates();
  await preloadHandlebarsTemplates();

  // Unregister Core sheets
  Actors.unregisterSheet("core", ActorSheet);
  Items.unregisterSheet("core", ItemSheet);

  // Register BrokenCompass actor sheets
  Actors.registerSheet("supers", SupersActorSheet, {
    types: ["character"],
    makeDefault: true,
  });
});

// Hooks.on("renderChatMessage", (app, html, data) => {});

async function preloadHandlebarsTemplates() {
  const templatesPath = [];
  return loadTemplates(templatesPath);
}
