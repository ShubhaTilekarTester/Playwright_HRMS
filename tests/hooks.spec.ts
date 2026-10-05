import {test} from '@playwright/test'

// test.beforeAll(async() => {
//     console.log("Application opened")
// }) 
test.beforeEach(async() => {
    console.log("Application opened")
})

// test.afterAll(async() => {
//     console.log("Application closed")
// })

test.afterEach(async() => {
    console.log("Application closed")
})

test('Login test', async() =>
{
      console.log("Login completed")
})

test('Logout completed', async() => {
    console.log("Logout completed")
})
