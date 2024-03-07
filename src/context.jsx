import React from "react"

let initialQBOState = {
  searchValue:"",
  limiter: 10,
  listLength:0,
  loading: false,
  selectedCompany:null,
  loadingCompanies: false
}

const QBOContext = React.createContext()

function qboReducer(state, action) {
  switch (action.type) {

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