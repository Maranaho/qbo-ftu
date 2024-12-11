import React from "react"

let initialQBOState = {
  searchValue:"",
  limiter: 10,
  listLength:0,
  loading: false,
  selectedCompany:null,
  fetchingDetails: false,
  loadingCompanies: false,
  access: "tickettailor",
  opens:[],
  routeArray: [
    "/reasons",
    "/track-money",
    "/ownership",
    "/source-of-income",
    "/find-your-company",
    "/review-company-details",
    "/approved",
    "/bring-your-money",
  ],
  routeProgress:null,
}

const QBOContext = React.createContext()

function qboReducer(state, action) {
  switch (action.type) {

    case 'UPDATE_PROGRESS': {
      let UPDATE_PROGRESS = {...state}
      UPDATE_PROGRESS.routeProgress = action.payload
      return UPDATE_PROGRESS
    }

    case 'OPENS': {
      let OPENS = {...state}
      OPENS.opens = action.payload
      return OPENS
    }

    case 'LOAD_COMPANIES': {
      let LOAD_COMPANIES = {...state}
      LOAD_COMPANIES.loadingCompanies = action.payload
      return LOAD_COMPANIES
    }

    case 'SELECTED_COMPANY': {
      let SELECTED_COMPANY = {...state}
      SELECTED_COMPANY.selectedCompany = action.payload
      return SELECTED_COMPANY
    }

    case 'FETCHING_DETAILS': {
      let FETCHING_DETAILS = {...state}
      FETCHING_DETAILS.fetchingDetails = action.payload
      return FETCHING_DETAILS
    }

    case 'LOADING': {
      let LOADING = {...state}
      LOADING.loading = action.payload
      return LOADING
    }

    case 'LIST_LENGTH': {
      let LIST_LENGTH = {...state}
      LIST_LENGTH.listLength = action.payload
      return LIST_LENGTH
    }

    case 'SEARCH_VALUE': {
      let SEARCH_VALUE = {...state}
      SEARCH_VALUE.searchValue = action.payload
      SEARCH_VALUE.loadingCompanies = true
      return SEARCH_VALUE
    }

    default: throw new Error("Unexpected action")
  }
}

const QBOStateProvider = ({ children })=> {
  const [state, dispatch] = React.useReducer(
    qboReducer,
    initialQBOState
  )
  const value = { state, dispatch }
  return (
    <QBOContext.Provider value={value}>{children}</QBOContext.Provider>
  )
}

const useQBOState = ()=> {
  const context = React.useContext(QBOContext)
  if (context === undefined) {
    throw new Error(
      "useQBOState must be used within a QBOStateProvider"
    )
  }
  return context
}

export { QBOStateProvider, useQBOState }