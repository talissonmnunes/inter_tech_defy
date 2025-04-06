const request = require('supertest')
import fixtures from '../../../fixtures/fixtures.js'
import GetRandomNumber from '../../../utils/utils.js'


describe('03 - List of cat breeds tests schenario', () => {
    const endpoint = "/breeds"
    const status_coode_success = 200
    const status_code_not_found = 404
    
    it('03.01 - Return a random cat fact with success', async () => {       
        const response = await request(fixtures.base_url)
            .get(endpoint)

        expect(response.status).toEqual(status_coode_success)
        expect(response.body.data[0]).toHaveProperty("breed")
        expect(response.body.data[0]).toHaveProperty("country")
        expect(response.body.data[0]).toHaveProperty("origin")
        expect(response.body.data[0]).toHaveProperty("coat")
        expect(response.body.data[0]).toHaveProperty("pattern")
    })

    it('03.02 - Return a random cat fact under the list limit', async () => {
        const limit = GetRandomNumber.GetRandomNumber()

        const response = await request(fixtures.base_url)
            .get(`${endpoint}?limit=${limit}`)

            expect(response.status).toEqual(status_coode_success)
            expect(response.body.data[0]).toHaveProperty("breed")
            expect(response.body.data[0]).toHaveProperty("country")
            expect(response.body.data[0]).toHaveProperty("origin")
            expect(response.body.data[0]).toHaveProperty("coat")
            expect(response.body.data[0]).toHaveProperty("pattern")
            expect(response.body.data.length).toBeLessThanOrEqual(limit)
    })

    it('03.03 - Return fail when list limit has negative value', async () => {
        const limit = -100
        const error_message = "Not Found"
        const error_code = 404

        const response = await request(fixtures.base_url)
            .get(`${endpoint}?limit=${limit}`)

            expect(response.status).toEqual(status_code_not_found)
            expect(response.body.message).toEqual(error_message)
            expect(response.body.code).toEqual(error_code)
    })

    it('03.04 - Return fail when list limit has text value', async () => {
        const limit = "test"

        const response = await request(fixtures.base_url)
            .get(`${endpoint}?limit=${limit}`)

            expect(response.status).toEqual(status_code_not_found)
    })

    it('03.05 - Return fail when list limit has zero value', async () => {
        const limit = 0

        const response = await request(fixtures.base_url)
            .get(`${endpoint}?limit=${limit}`)

            expect(response.status).toEqual(status_code_not_found)
    })
})