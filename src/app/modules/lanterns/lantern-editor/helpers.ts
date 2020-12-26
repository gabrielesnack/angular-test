import { FormControl, Validators } from "@angular/forms";
import { ILantern } from "~/app/services/lantern/types";

interface ILanternForm {
  id: FormControl,
  avatarId: FormControl,
  name: FormControl,
  description: FormControl,
  age: FormControl,
  bornIn: FormControl,
  isFavorite: FormControl,
}

export class lanternForm {
  form = {
    id: new FormControl(''),
    avatarId: new FormControl(''),
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
    isFavorite: new FormControl(''),
  }

  constructor(lantern?: ILantern) {
    if(lantern) {
      this.form.id.setValue(lantern.id)
      this.form.avatarId.setValue(lantern.avatarId)
      this.form.name.setValue(lantern.name)
      this.form.description.setValue(lantern.description)
      this.form.age.setValue(lantern.age)
      this.form.bornIn.setValue(lantern.bornIn)
      this.form.isFavorite.setValue(lantern.isFavorite)
    }
  }

  public build() {
    return this.form
  }

  public static unbuild(obj: ILanternForm) : ILantern {
    return {
      id: obj.id.value,
      avatarId: obj.avatarId.value || 1,
      name: obj.name.value,
      description: obj.description.value,
      age: obj.age.value,
      bornIn: obj.bornIn.value,
      isFavorite: obj.isFavorite.value,
    }
  }
}