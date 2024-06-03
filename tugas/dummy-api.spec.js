import axios from "axios";
import expect from "../expect.js";
import {dummyGetSchema, dummyPostSchema, dummyPutSchema,dummyDeleteSchema} from "../schema.js"

describe('DUMMY API TESTING', function(){
    it('API DUMMY GET ', async function(){
        const res = await axios.get('https://dummyjson.com/product/1')

        expect(res.data).to.be.jsonSchema(dummyGetSchema)


    })
    it('API DUMMY POST ', async function(){
        const newTitle ={
            id: "211",
            title: "BMW Pencil",
            id: "213",
            title: "notebook barbie"
        }
        const res = await axios.post('https://dummyjson.com/products/add', newTitle)

        expect(res.data).to.be.jsonSchema(dummyPostSchema)

    })
    it('API DUMMY PUT', async function(){
        const updateBarang ={
            id: "1",
            title: "BMW PEN",
            id: "2",
            title: "notebook Spiderman"
        }
        const res = await axios.put('https://dummyjson.com/products/1', updateBarang)

        expect(res.data).to.be.jsonSchema(dummyPutSchema)

    })

    it('API DUMMY DELETE ', async function(){
        const res = await axios.delete('https://dummyjson.com/products/1')

        expect(res.data).to.be.jsonSchema(dummyDeleteSchema)


    })



})