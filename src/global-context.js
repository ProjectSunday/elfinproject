import React from 'react'
import { v4 as uuidv4 } from 'uuid';

import { debounce } from './utils';

const GlobalContext = React.createContext()

const defaultSettings = {
    fields: [
        { id: '0', name: 'Work Order/Case #', match: '%wo_case_number%', value: '', perpetual: true },
        { id: '1', name: 'Customer Name', match: '%customer_name%', value: '' },
    ],
    subject: 'Follow-up on HP Service Event %wo_case_number%',
    body: `Dear %customer_name%,\n\nI am the on-site service technician that had the pleasure of performing the repair on your HP Product. At HP Inc., our goal is to provide you with Best-In Class service and therefore I am following up with you to ensure that the service delivered by HP was completed to your satisfaction. If you have any concerns please contact myself or my District Manager, [DISTRICT MANAGER], at [DISTRICT MANAGER EMAIL]. Based on your experience received by HP, I sincerely hope you can recommend HP to a friend, family member or colleague.  If this is not something you feel you could do please feel free to contact me or my manager with your concerns.\n\nYou may receive an email asking you to participate in a brief web-based Customer Satisfaction Survey from HPSupport@hp-feedback.com. Your responses are extremely important to me and will also enable HP to provide you the best Service and Support.  If there is any reason throughout the entire support experience, where you feel we wouldn't deserve a 9 or 10 on the survey, please let me or my manager know.\n\nThank you for your continued business with HP Inc.  You are very much appreciated!\n`
}

let settings = localStorage.getItem('ELFIN-SETTINGS')
if (settings) {
    settings = JSON.parse(settings)
} else {
    settings = defaultSettings
}

const saveSettings = debounce((newSettings) => {
    localStorage.setItem('ELFIN-SETTINGS', JSON.stringify({ ...settings, ...newSettings }))
}, 1000)


export function GlobalContextProvider({ children }) {
    const [view, setView] = React.useState('main')
    const [toEmail, setToEmail] = React.useState('')
    const [fields, setFields] = React.useState(settings.fields)
    const [subject, setSubject] = React.useState(settings.subject)
    const [body, setBody] = React.useState(settings.body)

    const addField = () => {
        const newFields = [
            ...fields,
            {
                id: uuidv4(),
                name: 'New Field',
                match: '%new_match%',
                value: ''
            }
        ]
        saveSettings({ fields: newFields })
        setFields(newFields)
    }

    const deleteField = (id) => {
        const newFields = fields.filter(f => f.id !== id)

        saveSettings({ fields: newFields })
        setFields(newFields)
    }

    const updateField = (field) => {
        const newFields = fields.map(f => f.id === field.id ? { ...f, ...field } : f)
        saveSettings({ fields: newFields })
        setFields(newFields)
    }

    const value = {
        fields, addField, deleteField, updateField,
        toEmail, setToEmail,
        subject,
        setSubject: s => {
            saveSettings({ subject: s })
            setSubject(s)
        },
        body,
        setBody: b => {
            saveSettings({ body: b })
            setBody(b)
        },
        view, setView
    }

    return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
}

export default GlobalContext