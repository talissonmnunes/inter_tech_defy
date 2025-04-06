const request = require('supertest')
import fixtures from '../../../fixtures/fixtures.js'
import GetRandomNumber from '../../../utils/utils.js'


describe('Random cat fact tests schenario', () => {
    const endpoint = "/fact"
    const status_coode_success = 200
    
    it('Return a random cat fact with success', async () => {       
        const response = await request(fixtures.base_url)
            .get(endpoint)

        expect(response.status).toEqual(status_coode_success)
        expect(response.body).toHaveProperty("fact")
        expect(response.body).toHaveProperty("length")
    })

    it('Return a random cat fact under the max length limit', async () => {
        const max_length = GetRandomNumber.GetRandomNumber()

        const response = await request(fixtures.base_url)
            .get(`${endpoint}?max_length=${max_length}`)

            expect(response.status).toEqual(status_coode_success)
            expect(response.body).toHaveProperty("fact")
            expect(response.body).toHaveProperty("length")
            expect(response.body.length).toBeLessThanOrEqual(max_length)
    })

    it('Return fail when max length limit has negative value', async () => {
        const max_length = -100
        const status_code_not_found = 404

        const response = await request(fixtures.base_url)
            .get(`${endpoint}?max_length=${max_length}`)

            expect(response.status).toEqual(status_code_not_found)
            expect(response.body).not.toHaveProperty("fact")
            expect(response.body).not.toHaveProperty("length")
    })

    it('Return fail when max length limit has text value', async () => {
        const max_length = "test"
        const status_code_not_found = 404

        const response = await request(fixtures.base_url)
            .get(`${endpoint}?max_length=${max_length}`)

            expect(response.status).toEqual(status_code_not_found)
            expect(response.body).not.toHaveProperty("fact")
            expect(response.body).not.toHaveProperty("length")
    })

    it('Return fail when max length limit has zero value', async () => {
        const max_length = 0
        const status_code_not_found = 404

        const response = await request(fixtures.base_url)
            .get(`${endpoint}?max_length=${max_length}`)

            expect(response.status).toEqual(status_code_not_found)
            expect(response.body).not.toHaveProperty("fact")
            expect(response.body).not.toHaveProperty("length")
    })
})