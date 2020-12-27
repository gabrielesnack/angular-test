import { FormControl, Validators } from "@angular/forms";
import { ILantern } from "~/app/services/lantern/types";

interface ILanternForm {
  id: FormControl,
  avatarId: FormControl,
  name: FormControl,
  description: FormControl,
  age: FormControl,
  bornIn: FormControl,
  zones: FormControl,
  isFavorite: FormControl,
}

export class LanternForm {
  form = {
    id: new FormControl(''),
    avatarId: new FormControl(1),
    name: new FormControl('', [
      Validators.required,
      Validators.maxLength(50)
    ]),
    description: new FormControl('', [
      Validators.required,
      Validators.maxLength(150)
    ]),
    age: new FormControl('', [
      Validators.required
    ]),
    bornIn: new FormControl('', [
      Validators.required
    ]),
    zones: new FormControl([]),
    isFavorite: new FormControl(''),
  }

  constructor(lantern?: ILantern) {
    lantern && this.setForm(lantern)
  }

  setForm(lantern: ILantern) {
    this.form.id.setValue(lantern.id)
    this.form.avatarId.setValue(lantern.avatarId)
    this.form.name.setValue(lantern.name)
    this.form.description.setValue(lantern.description)
    this.form.age.setValue(lantern.age)
    this.form.bornIn.setValue(lantern.bornIn)
    this.form.zones.setValue(lantern.zones)
    this.form.isFavorite.setValue(lantern.isFavorite)
  }

  public build(lantern?: ILantern) {
    lantern && this.setForm(lantern)
    return this.form
  }

  public unbuild(obj: ILanternForm) : ILantern {
    return {
      id: obj.id.value,
      avatarId: obj.avatarId.value || 1,
      name: obj.name.value,
      description: obj.description.value,
      age: obj.age.value,
      bornIn: obj.bornIn.value,
      zones: obj.zones.value,
      isFavorite: obj.isFavorite.value,
    }
  }
}