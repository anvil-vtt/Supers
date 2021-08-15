export class SupersActorSheet extends ActorSheet {
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      classes: ["supers", "sheet"],
      template: "systems/supers/templates/actor/sheet.hbs",
    });
  }

  activateListeners(html) {
    super.activateListeners(html);
  }

  getData(options) {
    const data = super.getData(options);

    return data;
  }
}
