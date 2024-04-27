import { Controller, Get, Query } from "@nestjs/common";
import { MediaService } from "./media.service";

@Controller('media')
export class MediaController {
    constructor(private readonly mediaService: MediaService) {}
    @Get()
    getByTerm(@Query('term') term: string) {
        return this.mediaService.getByTerm(term);
    }
}