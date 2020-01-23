const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.get('/', (req, res) => res.send('Hello World!'))
app.get('/invoices/2020', (req, res) => {
    let invoices = [
        {
            amount: 130000,
            companySlug: 'spacex',
            invoiceDate: '2020-01-03',
            invoiceNumber: '202001-001',
        },
        {
            amount: 70000,
            companySlug: 'google',
            invoiceDate: '2020-01-04',
            invoiceNumber: '202001-002',
        },
        {
            amount: 80000,
            companySlug: 'spacex',
            invoiceDate: '2020-01-07',
            invoiceNumber: '202001-003',
        },
        {
            amount: 100000,
            companySlug: 'spacex',
            invoiceDate: '2020-01-07',
            invoiceNumber: '202001-004',
        },
        {
            amount: 150000,
            companySlug: 'spacex',
            invoiceDate: '2020-01-07',
            invoiceNumber: '202001-005',
        },
        {
            amount: 300000,
            companySlug: 'facebook',
            invoiceDate: '2020-01-04',
            invoiceNumber: '202001-006',
        },
        {
            amount: 450000,
            companySlug: 'facebook',
            invoiceDate: '2020-01-04',
            invoiceNumber: '202001-007',
        },
    ]
    res.json(invoices)
})

module.exports = app