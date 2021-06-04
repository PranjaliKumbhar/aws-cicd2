const uuidv1 = require('uuid/v1');
const moment = require('moment');
let response;

exports.lambdaHandler = async (event, context) => {
    const dateNow = moment().format("MMM Do YY");
    try {
        const uuid = uuidv1();
        response = {
            'statusCode': 200,
            'body': JSON.stringify({
                unique_id: uuid,message: dateNow
            
            })
        }
    } catch (err) {
        console.log(err);
        return err;
    }

    return response
};
