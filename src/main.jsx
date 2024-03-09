import React from 'react'
import ReactDOM from 'react-dom/client'
import { QBOStateProvider } from './context'
import './index.css'
import Field from './components/Field'
import BusinessCard from './components/BusinessCard'
import { AccordionParent, AccordionChild } from './components/Accordion'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <QBOStateProvider>
    <AccordionParent>
      <AccordionChild title="Business checking and account and debit card">
        <p>Spend, stash and grow your cash</p>
        <BusinessCard/>
        <Field
            label="Your name or business name"
            value=""
            placeholder="Enter a name..."
            helperText="26 characters max. we'll send your card to your personal address."
            onChange={()=>{}}
        />
      </AccordionChild>
      <AccordionChild>
        <p>Hi</p>
        <p>Hi</p>
        <p>Hi</p>
      </AccordionChild>
      <AccordionChild>
        <p>Hello</p>
      </AccordionChild>
    </AccordionParent>
  </QBOStateProvider>
)