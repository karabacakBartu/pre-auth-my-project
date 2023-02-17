
const connectToDatabase =require("./connection");


exports.handler =
    async(event,context,callback) => {

        const {database, client}= await connectToDatabase.getConnection()

        const codeCollection = database.collection("codes")

        const result=await codeCollection.findOne();
        const awsCode=event.request.validationData.code;
        console.log("awsCodeeeeeee", awsCode)

        if(result ){
            const dbCode=result.code;
            console.log("dbCodee", dbCode)
            const awsCode=event.request.validationData.code;
            console.log("awsCodee", awsCode)
            if(dbCode!==awsCode){
                await client.close()
                throw new Error("INVALID_CODE")
            }
            await client.close()
            return event;
        }
        await  client.close()
        throw new Error("INVALID_CODE")

    };
// this.handler()