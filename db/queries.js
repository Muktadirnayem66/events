
import { eventsModel } from "@/models/event-models"
import { userModel } from "@/models/user-model"
import { replaceMongoIdInArray, replaceMongoInObject } from "@/utils/data-util"
import mongoose from "mongoose"


async function getAllEvents(query){
    let allEvents = []
    if(query){
        const regex = new RegExp(query, "i")
        allEvents = await eventsModel.find({name: {$regex : regex}}).lean()
    }else{

         allEvents = await eventsModel.find().lean()
    }
    return replaceMongoIdInArray(allEvents)
}

async function getEventById(id){
    const event = await eventsModel.findById(id).lean()
    return  replaceMongoInObject(event)
}

async function createUser(user){
    return await userModel.create(user)
}

async function findUserByCredentials(credentials){
    const user = await userModel.findOne(credentials).lean()
    if(user){
        return replaceMongoInObject(user)
    }
    return null
}

async function updateInterestIds(eventId, authId){
    const event = await eventsModel.findById(eventId)
    

    if(event){
        const foundUser = event.interested_ids.find((id)=>id.toString() === authId)
        if(foundUser){
            event.interested_ids.pull(new mongoose.Types.ObjectId(authId))
        }else{
            event.interested_ids.push(new mongoose.Types.ObjectId(authId))
        }
        event.save()

    }
}

async function updateGoing(eventId, authId){
    const event = await eventsModel.findById(eventId)
    event.going_ids.push(new mongoose.Types.ObjectId(authId))
    event.save()
}

export {

    getAllEvents,
     getEventById,
      createUser, 
      findUserByCredentials,
      updateInterestIds,
      updateGoing
    }