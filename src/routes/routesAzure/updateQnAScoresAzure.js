const azure = require('azure-storage');

module.exports = async function (context, req) {
    console.log(`Consumo de API updateQnAScores de tipo POST`);
    // Consumo de API updateQnAScores de tipo POST
    const { QnAMaxScore, QnAMinScore, StorageTableEndpoint } = req.body;

    try {
        const tableService = azure.createTableService(StorageTableEndpoint);
        let entGen = azure.TableUtilities.entityGenerator;
        let entity = {
            PartitionKey: '0.u8uks1',
            RowKey: '0.w6tc2m',
            QnaMaxScore: entGen.String( QnAMaxScore ),
            QnaMinScore: entGen.String( QnAMinScore )
        };
        // Use { echoContent: true } if you want to return the created item including the Timestamp & etag
        try{
            tableService.insertOrReplaceEntity('ConfigTable', entity, function (error, result, response) {
                // replacing entity
                if( error ){
                    // Error writing message to Azure table
                    /*let webServiceResponse = {
                        "response": {
                            "code": 01,
                            "message": "Error al actualizar el valor de los puntajes en el azure table storage"
                        }
                    }
                    res.send(webServiceResponse);*/
                } else{
                    // Success writting on Azure Table
                    /*let webServiceResponse = {
                        "response": {
                            "code": 00,
                            "message": "Éxito al actualizar el valor de los puntajes en el azure table storage"
                        }
                    }
                    res.send(webServiceResponse);*/
                }
            });
            
            // await sleep(3500);
            context.res = {
                body: {
                    response: {
                        "code": 00,
                        "message": "Éxito al actualizar el valor de los puntajes en el azure table storage"
                    }
                }
            }
        } catch( error ){
            context.res = {
                body: {
                    response: {
                        "code": 01,
                        "message": "Error al actualizar el valor de los puntajes en el azure table storage"
                    }
                }
            }
        }

    } catch( error ){
        console.log("error:", error);
        /*let webServiceResponse = {
            "response": {
                "code": 02,
                "message": "Error al conectarse a la tabla de azure storage"
            }
        }
        res.send(webServiceResponse);*/
        
        context.res = {
            body: {
                response: {
                    "code": 02,
                    "message": "Error al conectarse a la tabla de azure storage"
                }
            }
        }
        
    }

}