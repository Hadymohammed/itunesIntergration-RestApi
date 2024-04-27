import { Controller, Get, Query } from "@nestjs/common";
import { MediaService } from "./media.service";

@Controller('api/media')
export class MediaController {
    constructor(private readonly mediaService: MediaService) {}
    @Get()
    getByTerm(@Query('term') term: string) {
        if(!term){
            return this.mediaService.getRandomMedia();
        }
        console.log('term', term);
        return this.mediaService.getByTerm(term);
    }
}