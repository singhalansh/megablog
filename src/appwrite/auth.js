import {Client,Account ,ID} from 'appwrite'
import conf from '../conf/conf'

export class AuthService {
    client = new Client();
    account;
    constructor(){
        console.log(conf.appwriteUrl);
         
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId)
        this.account = new Account(this.client)
    }

    async createAccount({email,password,name}){
        try {
            const userAccount = await this.account.create(ID.unique(),email,password,name);
            if(userAccount){
                return this.login({email,password})
            }else{
                return userAccount
            }
        } catch (error) {
            throw error;
        }
    }

    async login({email,password}){
        try{
            return await this.account.createEmailPasswordSession(email,password);

        }
        catch(error){
            throw error;
        }
    }

    async getCurrentUser(){
        try{
           return await this.account.get() ;
        }
        catch(e){
            console.log(e);
        }
        return null;
    }

    async logout(){
        try {
            return await this.account.deleteSessions();
            
        } catch (error) {
            throw error;
        }
    }
}

const authservice = new AuthService();
export default authservice;