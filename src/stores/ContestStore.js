import BaseStore from "./BaseStore"
import { observable, computed, action } from "mobx"
import API from "../services/API"
import ContestModel from "../models/ContestModel"

class ContestStore extends BaseStore {
  @observable SurferStore = [] 

  @computed get updateContest() {
    console.log("SurferStore", this.SurferStore)
  }

  createModel = (data={}) => {
    return new ContestModel(data, this)
  }
}

const singleton = new ContestStore()
export default singleton