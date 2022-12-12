// import * as mysql from 'mysql';
import { Connection, ConnectionConfig, createConnection } from "mysql";
import { VersionData } from "../api/version/defintitions/VersionData";


export class DBClient {
    private readonly config: ConnectionConfig = {
        host: 'localhost',
        user: 'bmbl',
        password: 'root',
        database: 'bmbldev',
        dateStrings: true
    };

    // private readonly connection: Connection = createConnection(this.config);
    
    //Return data from version table in DB
    async getVersion(): Promise<VersionData[]> {
        const connection: Connection = createConnection(this.config);

        return new Promise((resolve, reject) => {
            connection.connect();
            
            let sql = 'SELECT * FROM `version` WHERE `id` = 1';
            connection.query(sql, (err, data) => {
                if(err) {
                    connection.end();
                    reject(err);
                } else {
                    connection.end();
                    resolve(data);
                }
            });
        });
    }

    async setVersion(data: VersionData) {
        const connection: Connection = createConnection(this.config);

        connection.connect();
        let sql = 'UPDATE `version` ' +
                  `SET manifestId = "${data.manifestId}" ` +
                  'WHERE `id` = 1';
        connection.query(sql, (err, data) => {
            
        });

        connection.end();
    }

};