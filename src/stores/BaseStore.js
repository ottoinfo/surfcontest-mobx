import { observable, computed, action } from "mobx"
import Model from "../models/BaseModel"

export default class BaseStore {
  
  @observable isLoaded = false
  @observable items = []
  @observable errors = {}
  @observable pendingRequest = 0

  constructor() {
    this.api = {}
  }

  setup(args) {
    Object.assign(this, args)
  }

  @computed get isLoading() {
    return this.pendingRequest > 0
  }

  createModel = (data={}) => {
    return new Model(data, this)
  }

  @computed get getItems() {
    return this.items.toJS()
  }

  addItem(item) {
    this.items.push(this.createModel(item))
  }

  updateItem(json, attr) {
    const item = this.findItem(json.id, attr)
    if (!item) {
      this.addItem(json)
    }
    else {
      item.update(json)
    }
  }

  removeItem(item) {
    this.items.splice(this.items.findIndex((obj)=> obj.uuid == item.uuid), 1)
  }

  findItem(val, attr="id") {
    return this.items.find((item)=> item[attr] == val)
  }

  handleErrors = (resp)=> {
    const data = {}
    resp.errors.map((item)=>
      data[item.field] = item.message
    )
    this.errors = data
  }
}