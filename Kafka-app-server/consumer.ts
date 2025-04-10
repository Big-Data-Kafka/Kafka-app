import {Kafka} from 'kafkajs';
import { PrismaClient } from './prisma/generated/prisma';

const kafka= new Kafka({
    clientId: 'my-app',
    brokers: ['localhost:9092']
});

const consumer= kafka.consumer({groupId: "test-group"});
const prisma= new PrismaClient();

const run= async ()=>{
    await consumer.connect();
    await consumer.subscribe({topic: "test", fromBeginning: true});
    await consumer.run({
        eachMessage: async({topic, partition, message})=>{
            console.log(message);
            if(message.value){
                const {name, password}= JSON.parse(message.value.toString())
            const createNull = await prisma.user.create({
                data: {
                  username: name,
                  password
                },
              })
              console.log(createNull);
            }   
        }
    })
}

run().catch(console.error);