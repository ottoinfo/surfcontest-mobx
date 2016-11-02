import BaseModel from "./BaseModel"
import { observable, computed } from "mobx"

export default class Surfer extends BaseModel {
  // Model Attributes
  @observable show = true

  @computed get urlPath() {
    return "/"
  }

  @computed get fullName() {
    return `${this.firstName} ${this.lastName}`
  }

  @computed get image() {
    return this.headshotImageUrl
  }

  @computed get origin() {
    return this.nationAbbr
  }

  @computed get division() {
    return this.gender === "F" ? "Womens" : "Mens"
  }

  @computed get asJSON() {
    return {
      id: this.athleteId,
      firstName: this.firstName,
      lastName: this.lastName,
      gender: this.gender,
      origin: this.nationAbbr,
      stance: this.stance,
      image: this.headshotImageUrl,
    }
  }
}

// DEFAULT DATA
// {
//   athleteId: "4",
//   firstName: "Patrick",
//   lastName: "Gudauskas",
//   gender: "M",
//   nationAbbr: "USA",
//   stance: "Regular",
//   headshotImageUrl: "http://dqndusk8a84ol.cloudfront.net/image/c0f65e3a63d747bab8feaf090f5f6eb6.png?&x=100&y=100&icq=50&sig=9d1b0a42029e9fb32daddb3202de72ef",
//   heroImageUrl: "http://dqndusk8a84ol.cloudfront.net/image/357b6f0aa96ad48bbeb80ae09957cb23.jpg?&x=1500&y=620&cx=0&cy=436&cw=4711&ch=1950&icq=50&sig=017df2f837c3b7c1ac14c60b1f08c6b7",
//   tourYearRegionStats: {
//    3: {
//     2016: {
//       7: {
//         rank: 2,
//         rankChange: 0,
//         points: 1840,
//         prizeMoney: 0,
//         numHeatWins: 0,
//         avgHeatScore: 0
//       }
//     }
//   }
// }