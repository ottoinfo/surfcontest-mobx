import { observable, computed, action } from "mobx"
import API from "../services/API"
import MovieModel from "../models/SurferModel"
import surferJSON from "../../public/athleterankings.json"

class SurferStore {
  @observable isLoaded = false
  @observable items = []
  @observable errors = {}
  @observable pendingRequest = 0

  constructor() {
    this.api = new API("/athleterankings.json")
  }

  setup(args) {
    Object.assign(this, args)
  }

  @computed get isLoading() {
    return this.pendingRequest > 0
  }

  @computed get getItems() {
    return this.items.toJS()
  }

  createModel = (data={}) => {
    return new MovieModel(data, this)
  }

  @action
  fetch() {
    // this.pendingRequest++
    // this.API().fetch().end((err,resp)=>{
    //   if (err) {
    //     console.log("fetch-callback", err)
    //     throw new Error("API Callback Error")
    //   }
    //   this.pendingRequest--
    //   this.items = res.body.athletes.map(this.createModel)
    // }))

    // OR
    console.log(surferJSON.athletes)
    this.items = Object.keys(surferJSON.athletes).map((key)=> this.createModel(surferJSON.athletes[key]) )
  }
}

const singleton = new SurferStore()
export default singleton