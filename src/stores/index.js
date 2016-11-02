import React from "react"

// Stores
import SurferStore from "./SurferStore"
import UIStore from "./UIStore"

// Setup Params on Stores
SurferStore.setup({ UIStore })

const getStoreTypes = {
  SurferStore: React.PropTypes.object,
  UIStore: React.PropTypes.object,
}

const getStores = {
  SurferStore,
  UIStore,
}

export { getStoreTypes, getStores }