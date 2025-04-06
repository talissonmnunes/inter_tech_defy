const request = require('supertest')
import fixtures from '../../../fixtures/fixtures.js'
import GetRandomNumber from '../../../utils/utils.js'


describe('02 - List of cat facts tests schenario', () => {
    const endpoint = "/facts"
    const status_coode_success = 200
    const status_code_not_found = 404
    
    it('02.01 - Return a list of cat facts with success', async () => {       
        const response = await request(fixtures.base_url)
            .get(endpoint)

        expect(response.status).toEqual(status_coode_success)
        expect(response.body.data[0]).toHaveProperty("fact")
        expect(response.body.data[0]).toHaveProperty("length")
    })

    it('02.02 - Return a list of cat facts under the list limit', async () => {
        const limit = GetRandomNumber.GetRandomNumber()

        const response = await request(fixtures.base_url)
            .get(`${endpoint}?limit=${limit}`)

            expect(response.status).toEqual(status_coode_success)
            expect(response.body.data.length).toBeLessThanOrEqual(limit)
    })

    it('02.03 - Return a list of cat facts under the max length limit', async () => {
        const max_length = GetRandomNumber.GetRandomNumber()

        const response = await request(fixtures.base_url)
            .get(`${endpoint}?max_length=${max_length}`)

            expect(response.status).toEqual(status_coode_success)
            expect(response.body.data[0].length).toBeLessThanOrEqual(max_length)
    })

    it('02.04 - Return a list of cat facts under the list limit and under the max length limit', async () => {
        const max_length = GetRandomNumber.GetRandomNumber()
        const limit = GetRandomNumber.GetRandomNumber()

        const response = await request(fixtures.base_url)
            .get(`${endpoint}?max_length=${max_length}?limit=${limit}`)

            expect(response.status).toEqual(status_coode_success)
            expect(response.body.data.length).toBeLessThanOrEqual(limit)
            expect(response.body.data[0].length).toBeLessThanOrEqual(max_length)
    })

    it('02.05 - Return fail when max length limit has negative value', async () => {
        const max_length = -100

        const response = await request(fixtures.base_url)
            .get(`${endpoint}?max_length=${max_length}`)

            expect(response.status).toEqual(status_code_not_found)
    })

    it('02.06 - Return fail when list limit has negative value', async () => {
        const limit = -100

        const response = await request(fixtures.base_url)
            .get(`${endpoint}?limit=${limit}`)

            expect(response.status).toEqual(status_code_not_found)

    })

    it('02.07 - Return fail when max length limit has text value', async () => {
        const max_length = "test"

        const response = await request(fixtures.base_url)
            .get(`${endpoint}?max_length=${max_length}`)

            expect(response.status).toEqual(status_code_not_found)
    })

    it('02.08 - Return fail when list limit has text value', async () => {
        const limit = "test"

        const response = await request(fixtures.base_url)
            .get(`${endpoint}?limit=${limit}`)

            expect(response.status).toEqual(status_code_not_found)
    })

    it('02.09 - Return fail when max length limit has zero value', async () => {
        const max_length = 0

        const response = await request(fixtures.base_url)
            .get(`${endpoint}?max_length=${max_length}`)

            expect(response.status).toEqual(status_code_not_found)
    })

    it('02.10 - Return fail when max length limit has zero value', async () => {
        const limit = 0

        const response = await request(fixtures.base_url)
            .get(`${endpoint}?limit=${limit}`)

            expect(response.status).toEqual(status_code_not_found)
    })
})