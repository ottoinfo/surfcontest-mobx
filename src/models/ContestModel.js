import BaseModel from "./BaseModel"
import { observable, computed } from "mobx"

export default class ContestModel extends BaseModel {
  // Model Attributes
  @observable surfer = {} // Surfer Model
  @observable waves = [] // Waves Score [1,2,3]

  @computed get topScore() {
    const top_scores = this.waves.sort((a,b)=> a - b).reverse().slice(0,2)
    return (top_scores[0] || 0) + (top_scores[1] || 0)
  }

}