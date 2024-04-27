import { Injectable } from "@nestjs/common";
import { ItunesResponse } from "./Itunes.response";

@Injectable()
export class ItunesService {
    private readonly itunesUrl = 'https://itunes.apple.com/search?';

    constructor() {}
    
    async searchByTerm(term: string): Promise<ItunesResponse | null> {
        try{
            const response = await fetch(`${this.itunesUrl}term=${term}`)
            const json = await response.json();
            const parsedResponse = json as ItunesResponse;

            return parsedResponse;
        }
        catch(error){
            console.error(error);
            return null;
        }
    }
}