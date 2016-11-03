import BaseStore from "./BaseStore"
import { observable, computed, action } from "mobx"
import API from "../services/API"
import SurferModel from "../models/SurferModel"
import surferJSON from "../../public/athleterankings.json"

class SurferStore extends BaseStore {
  @observable isLoaded = false
  @observable items = []
  @observable errors = {}
  @observable pendingRequest = 0

  constructor() {
    super()
    this.api = new API("/athleterankings.json")
  }

  createModel = (data={}) => {
    return new SurferModel(data, this)
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
    this.items = Object.keys(surferJSON.athletes).map((key)=> this.createModel(surferJSON.athletes[key]) )
  }
}

const singleton = new SurferStore()
export default singleton