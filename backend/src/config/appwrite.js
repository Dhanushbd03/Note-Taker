import { Client, Account, ID, Databases, Query } from "appwrite";

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('676900cf001a38b3d7f4');
const account = new Account(client);
const databases = new Databases(client);

export { client, account, ID, databases, Query };
