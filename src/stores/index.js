import React from "react"

// Stores
import SurferStore from "./SurferStore"
import ContestStore from "./ContestStore"
import UIStore from "./UIStore"

// Setup Params on Stores
SurferStore.setup({ UIStore })
ContestStore.setup({ UIStore, SurferStore })

const getStoreTypes = {
  SurferStore: React.PropTypes.object,
  ContestStore: React.PropTypes.object,
  UIStore: React.PropTypes.object,
}

const getStores = {
  SurferStore,
  ContestStore,
  UIStore,
}

export { getStoreTypes, getStores }